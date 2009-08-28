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
			/// Binds the model.
			/// </summary>
			/// <param name="controllerContext">The controller context.</param>
			/// <param name="bindingContext">The binding context.</param>
			/// <returns></returns>
			public override object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
			{
				ValueProviderResult result;
				bindingContext.ValueProvider.TryGetValue(bindingContext.ModelName, out result);

				if (result != null)
				{
					var culture = result.Culture;
					var value = result.RawValue;
					var destinationType = bindingContext.ModelType;

					if (value != null)
						return result.ConvertTo(destinationType, culture);
				}

				// try to convert the default to the type of the output
				return Default;
			}
		}
	}
}
