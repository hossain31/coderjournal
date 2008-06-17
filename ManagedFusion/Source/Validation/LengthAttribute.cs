using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;

namespace ManagedFusion.Validation
{
	/// <summary>
	/// 
	/// </summary>
	public class LengthAttribute : ValitationAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="Length"/> class.
		/// </summary>
		/// <param name="rangeStart">The range start.</param>
		/// <param name="rangeEnd">The range end.</param>
		public LengthAttribute(int rangeStart, int rangeEnd)
		{
			RangeStart = rangeStart;
			RangeEnd = rangeEnd;
			Message = "{0} must be between {1} and {2} characters long.";
		}

		/// <summary>
		/// Gets or sets the length.
		/// </summary>
		/// <value>The length.</value>
		public int RangeStart { get; private set; }

		/// <summary>
		/// Gets or sets the range end.
		/// </summary>
		/// <value>The range end.</value>
		public int RangeEnd { get; private set; }

		/// <summary>
		/// Validates this instance.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="otherParameters">The other parameters.</param>
		/// <returns></returns>
		public override bool Validate(object value, IDictionary<string, object> otherParameters)
		{
			if (!(value is string))
				throw new ArgumentException("value must be a string.", "value");

			return (value as string).Length >= RangeStart && (value as string).Length <= RangeEnd;
		}

		/// <summary>
		/// Formats the message.
		/// </summary>
		/// <returns></returns>
		protected override string FormatMessage()
		{
			return String.Format(Message, FriendlyName ?? Name, RangeStart, RangeEnd);
		}
	}
}
