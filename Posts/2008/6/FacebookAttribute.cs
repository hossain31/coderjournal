using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Reflection;
using System.Web;
using System.Diagnostics;

using Facebook.Web;
using Facebook.Web.Configuration;
using Facebook.Service;
using Facebook.Service.Core;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	public class FacebookAttribute : ActionFilterAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="FacebookAttribute"/> class.
		/// </summary>
		public FacebookAttribute()
		{
			ActionParameterFacebookSession = "facebookSession";
			ActionParameterFacebookService = "facebookService";
		}

		/// <summary>
		/// The application key used to uniquely identify the application that is available
		/// at application registration time.
		/// This can only be set during initialization of the page.
		/// </summary>
		public string ApplicationKey
		{
			get;
			set;
		}

		/// <summary>
		/// The name of the application. This is used to create the application's canvas
		/// page URL, i.e. http://apps.facebook.com/[name]/.
		/// On the server, this is used to load settings from configuration. Specifically,
		/// the facebook section in configuration is looked up for an application object
		/// with the given name.
		/// </summary>
		public string ApplicationName
		{
			get;
			set;
		}

		/// <summary>
		/// The application secret used to authenticate API calls issued by the application that is
		/// available at application registration time.
		/// This can only be set during initialization of the page.
		/// </summary>
		public string Secret
		{
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the action parameter facebook session.
		/// </summary>
		/// <value>The action parameter facebook session.</value>
		public string ActionParameterFacebookSession
		{
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the action parameter facebook service.
		/// </summary>
		/// <value>The action parameter facebook service.</value>
		public string ActionParameterFacebookService
		{
			get;
			set;
		}

		/// <summary>
		/// Called when [action executing].
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			FacebookApplicationSettings settings = FacebookSection.GetApplication(ApplicationName);

			ApplicationKey = ApplicationKey ?? settings.ApiKey;
			Secret = Secret ?? settings.Secret;

			FacebookWebSession session = new FacebookWebSession(ApplicationKey, Secret);
			session.Initialize(HttpContext.Current);

			FacebookService service = new FacebookService(session);

			if (filterContext.ActionParameters.ContainsKey(ActionParameterFacebookSession))
				filterContext.ActionParameters[ActionParameterFacebookSession] = session;

			if (filterContext.ActionParameters.ContainsKey(ActionParameterFacebookService))
				filterContext.ActionParameters[ActionParameterFacebookService] = service;
		}
	}
}
