using System;
using System.Web;
using System.Web.Mvc;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	/// <seealso href="http://weblogs.asp.net/rashid/archive/2008/03/28/asp-net-mvc-action-filter-caching-and-compression.aspx">Original Source by Kazi Manzur Rashid</seealso>
	public class CacheAttribute : ActionFilterAttribute
	{
		/// <summary>
		/// Gets or sets the cache duration in seconds.
		/// </summary>
		/// <remarks>The default cache duration is 10 seconds.</remarks>
		/// <value>The cache duration in seconds.</value>
		public int Duration { get; set; }

		/// <summary>
		/// Initializes a new instance of the <see cref="CacheAttribute"/> class.
		/// </summary>
		public CacheAttribute()
		{
			Duration = 10;
		}

		/// <summary>
		/// Called when [action executed].
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		public override void OnActionExecuted(ActionExecutedContext filterContext)
		{
			if (Duration <= 0) 
				return;

			HttpCachePolicyBase cache = filterContext.HttpContext.Response.Cache;
			TimeSpan cacheDuration = TimeSpan.FromSeconds(Duration);

			cache.SetCacheability(HttpCacheability.Public);
			cache.SetExpires(DateTime.Now.Add(cacheDuration));
			cache.SetMaxAge(cacheDuration);
			cache.AppendCacheExtension("must-revalidate, proxy-revalidate");
		}
	}
}
