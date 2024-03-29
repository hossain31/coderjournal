﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.Web;

using ManagedFusion.Serialization;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	public abstract class SerializedResult : ActionResult
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="ServiceResult"/> class.
		/// </summary>
		public SerializedResult()
		{
			ContentEncoding = Encoding.UTF8;
			ContentType = "text/xml";
		}

		/// <summary>
		/// Gets or sets the data.
		/// </summary>
		/// <value>The data.</value>
		public object Data
		{
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the content encoding.
		/// </summary>
		/// <value>The content encoding.</value>
		public Encoding ContentEncoding
		{
			get;
			set;
		}

		/// <summary>
		/// Gets or sets the type of the content.
		/// </summary>
		/// <value>The type of the content.</value>
		public string ContentType
		{
			get;
			set;
		}

		/// <summary>
		/// Builds the response.
		/// </summary>
		/// <param name="content">The content.</param>
		/// <returns></returns>
		protected internal static Dictionary<string, object> BuildResponse(object serializableObject, Dictionary<string, object> serializedContent)
		{
			// create body of the response
			Dictionary<string, object> response = new Dictionary<string, object>();
			response.Add("timestamp", DateTime.UtcNow);

			// check for regular collection
			if (serializableObject is ICollection)
			{
				response.Add("count", ((ICollection)serializableObject).Count);

				if (serializedContent.Count > 1)
					response.Add("collection", serializedContent);
				else
					foreach (var value in serializedContent)
						response.Add(value.Key, value.Value);
			}
			else if (serializedContent.Count > 1)
				response.Add("object", serializedContent);
			else
				foreach (var value in serializedContent)
					response.Add(value.Key, value.Value);

			return response;
		}

		/// <summary>
		/// Gets the content.
		/// </summary>
		/// <returns></returns>
		protected internal abstract string GetContent();

		/// <summary>
		/// Executes the result.
		/// </summary>
		/// <param name="context">The context.</param>
		public override void ExecuteResult(ControllerContext context)
		{
			if (context == null)
			{
				throw new ArgumentNullException("context");
			}

			HttpResponseBase response = context.HttpContext.Response;

			if (!String.IsNullOrEmpty(ContentType))
			{
				response.ContentType = ContentType;
			}

			if (ContentEncoding != null)
			{
				response.ContentEncoding = ContentEncoding;
			}

			response.Cache.SetCacheability(HttpCacheability.NoCache);
			response.Cache.AppendCacheExtension("no-cache=\"Set-Cookie\", proxy-revalidate");
			response.AppendHeader("X-Robots-Tag", "noindex, follow, noarchive, nosnippet");
			response.ClearContent();

			if (Data != null)
			{
				string content = GetContent();

				if (content != null)
					response.Write(content);
			}
		}
	}
}