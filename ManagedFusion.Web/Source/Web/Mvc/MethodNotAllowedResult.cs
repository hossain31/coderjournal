using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Net;
using System.Collections.ObjectModel;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	public class MethodNotAllowedResult : ActionResult
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="MethodNotAllowedResult"/> class.
		/// </summary>
		/// <param name="httpMethods">The HTTP methods.</param>
		public MethodNotAllowedResult(IList<string> httpMethods)
		{
			for (int i = 0; i < httpMethods.Count; i++)
				httpMethods[i] = httpMethods[i].ToUpper();

			SupportedHttpMethods = new ReadOnlyCollection<string>(httpMethods);
		}

		/// <summary>
		/// Gets or sets the supported HTTP methods.
		/// </summary>
		/// <value>The supported HTTP methods.</value>
		public IList<string> SupportedHttpMethods { get; private set; }

		/// <summary>
		/// Executes the result.
		/// </summary>
		/// <param name="context">The context.</param>
		public override void ExecuteResult(ControllerContext context)
		{
			context.HttpContext.Response.Clear();
			context.HttpContext.Response.StatusCode = (int)HttpStatusCode.MethodNotAllowed;
			context.HttpContext.Response.StatusDescription = "Method Not Allowed";
			context.HttpContext.Response.AppendHeader("Allow", String.Join(", ", this.SupportedHttpMethods.ToArray()));
			context.HttpContext.Response.ContentType = "text/html";
			context.HttpContext.Response.Write("<html><head><title>Method Not Allowed</title></head><h1>Method Not Allowed</h1><p>Only " + String.Join(", ", this.SupportedHttpMethods.ToArray()) + " is allowed.</p></html>");
			context.HttpContext.Response.Flush();
			context.HttpContext.Response.End();
		}
	}
}
