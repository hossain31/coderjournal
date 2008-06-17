using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Security.Principal;
using System.Net;

namespace ManagedFusion.Web.Mvc
{
	public class AuthorizeAttribute : ActionFilterAttribute
	{
		private bool? _authenticated;

		/// <summary>
		/// Initializes a new instance of the <see cref="AuthorizeAttribute"/> class.
		/// </summary>
		public AuthorizeAttribute()
		{
			_authenticated = null;
			Name = null;
			Role = null;
		}

		/// <summary>
		/// Gets or sets the authenticated.
		/// </summary>
		/// <value>The authenticated.</value>
		public bool Authenticated
		{
			get
			{
				if (!_authenticated.HasValue)
					throw new NullReferenceException("Authenticated has not been set yet.");

				return _authenticated.Value;
			}
			set { _authenticated = value; }
		}

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		/// <value>The name.</value>
		public string Name
		{
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the role.
		/// </summary>
		/// <value>The role.</value>
		public string Role
		{
			get;
			set;
		}

		/// <summary>
		/// Requirementses the met to proceed.
		/// </summary>
		/// <returns></returns>
		public virtual bool RequirementsMetToProceed(ActionExecutingContext filterContext)
		{
			bool requirementsMetToProceed = true;
			IPrincipal principal = filterContext.HttpContext.User;

			if (principal != null)
			{
				if (!String.IsNullOrEmpty(Role))
					requirementsMetToProceed = requirementsMetToProceed && principal.IsInRole(Role);

				IIdentity identity = principal.Identity;

				if (identity != null)
				{
					if (!String.IsNullOrEmpty(Name))
						requirementsMetToProceed = requirementsMetToProceed && String.Equals(Name, identity.Name, StringComparison.OrdinalIgnoreCase);

					if (_authenticated.HasValue)
						requirementsMetToProceed = requirementsMetToProceed && (_authenticated.Value == identity.IsAuthenticated);
				}
			}

			return requirementsMetToProceed;
		}

		/// <summary>
		/// Called when [action executing].
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			if (!RequirementsMetToProceed(filterContext))
				SendUnauthorizedResponse(filterContext);
		}

		/// <summary>
		/// Sends the unauthorized response.
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		protected void SendUnauthorizedResponse(ActionExecutingContext filterContext)
		{
			filterContext.HttpContext.Response.Clear();

			filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
			filterContext.HttpContext.Response.StatusDescription = "Unauthorized";

			filterContext.HttpContext.Response.ContentType = "text/html";
			filterContext.HttpContext.Response.Write("<html><head><title>Unauthorized to call this action</title></head><body>");
			filterContext.HttpContext.Response.Write("<h2>>Unauthorized to call this action</h2>");
			filterContext.HttpContext.Response.Write("<p>You do not have the appropriate permission to call this action.</p>");
			filterContext.HttpContext.Response.Write("</body></html>");

			filterContext.HttpContext.Response.End();
		}
	}
}
