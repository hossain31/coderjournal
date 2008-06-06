using System;
using System.Diagnostics;
using System.Web;

using Facebook.Service.Core;

namespace ManagedFusion.Web.Mvc
{
	public class FacebookWebSession : FacebookSession
	{
		internal const string FacebookLoginUrl = "http://www.facebook.com/login.php?api_key={0}&v=1.0";
		internal const string FacebookAddAppUrl = "http://www.facebook.com/add.php?api_key={0}&v=1.0";

		/// <summary>
		/// Creates an instance of a FacebookWebSession with the
		/// specified application information.
		/// </summary>
		/// <param name="appKey">The application key used as an API key.</param>
		/// <param name="secret">The application secret used to sign requests.</param>
		public FacebookWebSession(string appKey, string secret)
			: base(appKey, secret) { }

		/// <summary>
		/// Gets or sets a value indicating whether [in canvas page].
		/// </summary>
		/// <value><c>true</c> if [in canvas page]; otherwise, <c>false</c>.</value>
		public bool InCanvasPage { get; private set; }

		/// <summary>
		/// Gets or sets a value indicating whether [in I frame page].
		/// </summary>
		/// <value><c>true</c> if [in I frame page]; otherwise, <c>false</c>.</value>
		public bool InIFramePage { get; private set; }

		/// <summary>
		/// Gets or sets a value indicating whether this instance is application added.
		/// </summary>
		/// <value>
		/// 	<c>true</c> if this instance is application added; otherwise, <c>false</c>.
		/// </value>
		public bool IsApplicationAdded { get; private set; }

		/// <summary>
		/// Initializes the FacebookServiceSession instance based on the
		/// current request to the server.
		/// </summary>
		/// <param name="context">Represents the current request being processed.</param>
		/// <returns>A URL to redirect to if a redirect needs to be performed; null otherwise.</returns>
		protected internal virtual void Initialize(HttpContext context)
		{
			string redirectUrl = null;
			HttpRequest request = context.Request;

			string[] friendIDs = null;

			string friendIDList = request["fb_sig_friends"];
			if (friendIDList != null)
			{
				if (friendIDList.Length == 0)
				{
					friendIDs = new string[0];
				}
				else
				{
					friendIDs = friendIDList.Split(',');
				}
			}
			InitializeFriends(friendIDs);

			FacebookSessionType sessionType = FacebookSessionType.User;

			string sessionKey = request["fb_sig_session_key"];
			bool sessionExpires = (String.CompareOrdinal(request["fb_sig_expires"], "0") != 0);
			string userID = request["fb_sig_user"];
			IsApplicationAdded = (String.CompareOrdinal(request["fb_sig_added"], "1") == 0) || (String.IsNullOrEmpty(request["fb_page_id"]) == false);
			InCanvasPage = (String.CompareOrdinal(request["fb_sig_in_canvas"], "1") == 0);
			InIFramePage = (String.CompareOrdinal(request["fb_sig_in_iframe"], "1") == 0);
			string pageUserID = null;

			if (String.IsNullOrEmpty(request["fb_page_id"]) == false)
			{
				pageUserID = userID;
				userID = request["fb_page_id"];
			}

			if (String.IsNullOrEmpty(sessionKey) || String.IsNullOrEmpty(userID))
			{
				string authToken = request["auth_token"];

				if (String.IsNullOrEmpty(authToken) == false)
				{
					FacebookRequest sessionRequest = new FacebookRequest(this);
					string dummy;

					sessionKey = sessionRequest.CreateSession(authToken, out userID, out sessionExpires, out dummy);
					Debug.Assert(String.IsNullOrEmpty(dummy));
				}
			}

			if (!String.IsNullOrEmpty(sessionKey) && !String.IsNullOrEmpty(userID))
			{
				if (String.IsNullOrEmpty(pageUserID) == false)
				{
					sessionType = FacebookSessionType.PresencePage;
				}

				InitializeSessionKey(sessionKey, sessionExpires, sessionType);
				InitializeUserID(userID, pageUserID);
			}
			else
			{
				redirectUrl = String.Format(FacebookLoginUrl, ApplicationKey);
			}

			if ((redirectUrl == null) && (IsApplicationAdded == false))
			{
				redirectUrl = String.Format(FacebookAddAppUrl, ApplicationKey);
			}

			if (redirectUrl != null)
				Redirect(redirectUrl);
		}

		/// <summary>
		/// Redirects the specified URL.
		/// </summary>
		/// <param name="url">The URL.</param>
		private void Redirect(string url)
		{
			Debug.Assert(String.IsNullOrEmpty(url) == false);

			if (SessionType == FacebookSessionType.PresencePage)
			{
				int queryIndex = url.IndexOf('?');
				url += (queryIndex >= 0) ? "&" : "?";
				url += "fb_page_id=" + UserID;
			}

			HttpResponse response = HttpContext.Current.Response;
			if (InCanvasPage)
			{
				response.Write("<fb:redirect url=\"" + url + "\" />");
			}
			else if (InIFramePage)
			{
				response.Write(String.Format(@"<script type=""text/javascript"">window.top.location.href='{0}';</script>", url));
			}
			else
			{
				// A regular HTTP redirect. This really only makes sense if the
				// application is an IFrame application, and its being browsed
				// externally.
				response.Redirect(url);
			}
			response.End();
		}
	}
}