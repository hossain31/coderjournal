using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false)]
	public class DefaultAttribute : Attribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="DefaultAttribute"/> class.
		/// </summary>
		/// <param name="default">The @default.</param>
		public DefaultAttribute(object @default)
		{
			if (@default == null)
				throw new ArgumentNullException("default");

			Default = @default;
		}

		/// <summary>
		/// Gets or sets the default.
		/// </summary>
		/// <value>The default.</value>
		public object Default
		{
			get;
			private set;
		}
	}
}
