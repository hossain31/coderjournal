using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ManagedFusion.Validation
{
	[AttributeUsage(AttributeTargets.Parameter, AllowMultiple = true, Inherited = false)]
	public abstract class ValitationAttribute : Attribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="ValitationAttribute"/> class.
		/// </summary>
		public ValitationAttribute()
		{
			FriendlyName = null;
			Message = "{0} is not valid.";
		}

		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		/// <value>The name.</value>
		public virtual string Name { get; set; }

		/// <summary>
		/// Gets or sets the name of the friendly.
		/// </summary>
		/// <value>The name of the friendly.</value>
		public virtual string FriendlyName { get; set; }

		/// <summary>
		/// Gets or sets the message.
		/// </summary>
		/// <value>The message.</value>
		public virtual string Message { get; set; }

		/// <summary>
		/// Gets the validation message.
		/// </summary>
		/// <value>The validation message.</value>
		public virtual string ValidationMessage
		{
			get { return FormatMessage(); }
		}

		/// <summary>
		/// Validates this instance.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="otherParameters">The other parameters.</param>
		/// <returns></returns>
		public abstract bool Validate(object value, IDictionary<string, object> otherParameters);

		/// <summary>
		/// Formats the message.
		/// </summary>
		/// <returns></returns>
		protected virtual string FormatMessage()
		{
			return String.Format(Message, FriendlyName ?? Name);
		}
	}
}
