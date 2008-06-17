using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ManagedFusion.Validation
{
	/// <summary>
	/// 
	/// </summary>
	public class CompareAttribute : ValitationAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="CompareAttribute"/> class.
		/// </summary>
		/// <param name="compareTo">The compare to.</param>
		public CompareAttribute(string compareTo)
		{
			CompareToName = compareTo;
			CompareToFriendlyName = null;
			Message = "{0} does not match {1}";
		}

		/// <summary>
		/// Gets or sets the name of the compare to.
		/// </summary>
		/// <value>The name of the compare to.</value>
		public string CompareToName { get; private set; }

		/// <summary>
		/// Gets or sets the name of the compare to friendly.
		/// </summary>
		/// <value>The name of the compare to friendly.</value>
		public string CompareToFriendlyName { get; private set; }

		/// <summary>
		/// Validates this instance.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="otherParameters">The other parameters.</param>
		/// <returns></returns>
		public override bool Validate(object value, IDictionary<string, object> otherParameters)
		{
			if (!otherParameters.ContainsKey(CompareToName))
				throw new ArgumentException("Could not find " + CompareToName, CompareToName);

			object compareToValue = otherParameters[CompareToName];

			return Object.Equals(value, compareToValue);
		}

		/// <summary>
		/// Formats the message.
		/// </summary>
		/// <returns></returns>
		protected override string FormatMessage()
		{
			return String.Format(Message, FriendlyName ?? Name, CompareToFriendlyName ?? CompareToName);
		}
	}
}
