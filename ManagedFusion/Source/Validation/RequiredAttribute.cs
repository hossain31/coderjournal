using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ManagedFusion.Validation
{
	/// <summary>
	/// 
	/// </summary>
	public class RequiredAttribute : ValitationAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="RequiredAttribute"/> class.
		/// </summary>
		public RequiredAttribute()
			: this(String.Empty) { }

		/// <summary>
		/// Initializes a new instance of the <see cref="RequiredAttribute"/> class.
		/// </summary>
		/// <param name="defaultValue">The default value.</param>
		public RequiredAttribute(object defaultValue)
		{
			DefaultValue = defaultValue;
			Message = "{0} is required";
		}

		/// <summary>
		/// Gets or sets the default value.
		/// </summary>
		/// <value>The default value.</value>
		public object DefaultValue { get; set; }

		/// <summary>
		/// Validates this instance.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="otherParameters">The other parameters.</param>
		/// <returns></returns>
		public override bool Validate(object value, IDictionary<string, object> otherParameters)
		{
			return !Object.Equals(DefaultValue, value);
		}
	}
}
