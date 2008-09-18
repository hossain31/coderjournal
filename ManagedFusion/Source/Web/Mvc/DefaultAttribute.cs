using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.ComponentModel;
using System.Globalization;

namespace ManagedFusion.Web.Mvc
{
	/// <summary>
	/// 
	/// </summary>
	[AttributeUsage(AttributeTargets.Parameter, AllowMultiple = false)]
	public class DefaultAttribute : CustomModelBinderAttribute
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

		/// <summary>
		/// Gets the binder.
		/// </summary>
		/// <returns></returns>
		public override IModelBinder GetBinder()
		{
			return new DefaultValueModelBinder(Default);
		}

		/// <summary>
		/// 
		/// </summary>
		private class DefaultValueModelBinder : DefaultModelBinder
		{
			/// <summary>
			/// Initializes a new instance of the <see cref="DefaultAttribute"/> class.
			/// </summary>
			/// <param name="default">The @default.</param>
			public DefaultValueModelBinder(object @default)
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

			/// <summary>
			/// Converts the type.
			/// </summary>
			/// <param name="culture">The culture.</param>
			/// <param name="value">The value.</param>
			/// <param name="destinationType">Type of the destination.</param>
			/// <returns></returns>
			protected override object ConvertType(System.Globalization.CultureInfo culture, object value, Type destinationType)
			{
				if (value != null)
					return base.ConvertType(culture, value, destinationType);

				// try to convert the default to the type of the output
				return base.ConvertType(culture, Default, destinationType);
			}
		}
	}
}
