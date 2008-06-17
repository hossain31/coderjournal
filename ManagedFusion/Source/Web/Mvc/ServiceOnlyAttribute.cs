using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Net;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	public class ServiceOnlyAttribute : ActionFilterAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="ServiceOnlyAttribute"/> class.
		/// </summary>
		public ServiceOnlyAttribute()
		{
			Order = 1;
		}

		/// <summary>
		/// Called when [action executing].
		/// </summary>
		/// <param name="filterContext">The filter filterContext.</param>
		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			if (!filterContext.RouteData.Values.ContainsKey("responseType")
				|| (ResponseType)filterContext.RouteData.Values["responseType"] == ResponseType.Html)
			{
				filterContext.HttpContext.Response.Clear();
				filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.UnsupportedMediaType;
				filterContext.HttpContext.Response.StatusDescription = "Unsupported Media Type";
				filterContext.HttpContext.Response.ContentType = "text/html";
				filterContext.HttpContext.Response.Write("<html><head><title>Unsupported Media Type</title></head><h1>Unsupported Media Type</h1><p>HTML is not allowed to be redered by this request.</p></html>");
				filterContext.HttpContext.Response.Flush();
				filterContext.HttpContext.Response.End();
				filterContext.Cancel = true;
			}

			base.OnActionExecuting(filterContext);
		}
	}
}
