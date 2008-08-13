using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using System.ComponentModel;
using System.Globalization;

namespace ManagedFusion.Web.Mvc
{
	public class UseActionParameterDefaultAttribute : ActionFilterAttribute
	{
		/// <summary>
		/// Called when [action executing].
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			var defaults = GetDefaults(filterContext);
			var actionParameters = filterContext.ActionParameters;
			foreach (var value in defaults)
				if (actionParameters[value.Key] == null)
					actionParameters[value.Key] = value.Value;
		}

		/// <summary>
		/// Gets the defaults.
		/// </summary>
		/// <param name="filterContext">The filter context.</param>
		/// <returns></returns>
		internal static IDictionary<string, object> GetDefaults(ActionExecutingContext filterContext)
		{
			string key = filterContext.ActionMethod.ToString() + "_ParameterDefaults";

			// get from application storage
			IDictionary<string, object> defaults = filterContext.HttpContext.Application[key] as IDictionary<string, object>;

			if (defaults == null)
			{
				defaults = new Dictionary<string, object>(filterContext.ActionParameters.Count);
				foreach (var parameter in filterContext.ActionMethod.GetParameters())
				{
					if (parameter.IsDefined(typeof(DefaultAttribute), false))
					{
						DefaultAttribute attr = parameter.GetCustomAttributes(typeof(DefaultAttribute), false)[0] as DefaultAttribute;
						string parameterName = parameter.Name;
						string actionName = filterContext.ActionMethod.Name;

						try
						{
							defaults.Add(parameterName, ConvertParameterType(attr.Default, parameter.ParameterType, parameterName, actionName));
						}
						catch (Exception exc)
						{
							throw new InvalidOperationException(String.Format(
								CultureInfo.CurrentUICulture,
								"The value of the DefaultAttribute could not be converted to the parameter '{0}' in action '{1}'.",
								parameterName, actionName), exc);
						}
					}
				}

				// add to application storage
				filterContext.HttpContext.Application[key] = defaults;
			}

			return defaults;
		}

		/// <summary>
		/// Converts the type of the parameter.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="destinationType">Type of the destination.</param>
		/// <param name="parameterName">Name of the parameter.</param>
		/// <param name="actionName">Name of the action.</param>
		/// <returns></returns>
		internal static object ConvertParameterType(object value, Type destinationType, string parameterName, string actionName)
		{
			if (value == null || destinationType.IsInstanceOfType(value))
			{
				return value;
			}

			TypeConverter converter = TypeDescriptor.GetConverter(destinationType);
			bool canConvertFrom = converter.CanConvertFrom(value.GetType());
			if (!canConvertFrom)
			{
				converter = TypeDescriptor.GetConverter(value.GetType());
			}
			if (!(canConvertFrom || converter.CanConvertTo(destinationType)))
			{
				throw new InvalidOperationException(String.Format(
					CultureInfo.CurrentUICulture,
					"Cannot convert parameter '{0}' in action '{1}' with value '{2}' to type '{3}'.",
					parameterName, actionName, value, destinationType));
			}
			try
			{
				return canConvertFrom ?
					converter.ConvertFrom(null /* context */, CultureInfo.InvariantCulture, value) :
					converter.ConvertTo(null /* context */, CultureInfo.InvariantCulture, value, destinationType);
			}
			catch (Exception ex)
			{
				throw new InvalidOperationException(String.Format(
					CultureInfo.CurrentUICulture,
					"Cannot convert parameter '{0}' in action '{1}' with value '{2}' to type '{3}'.",
					parameterName, actionName, value, destinationType),
					ex);
			}
		}

	}
}
