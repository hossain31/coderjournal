using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace ManagedFusion.Validation
{
	/// <summary>
	/// 
	/// </summary>
	public class RegexAttribute : ValitationAttribute
	{
		/// <summary>
		/// Initializes a new instance of the <see cref="RegexAttribute"/> class.
		/// </summary>
		/// <param name="pattern">The pattern.</param>
		public RegexAttribute(string pattern)
			: this(pattern, RegexOptions.Singleline | RegexOptions.IgnoreCase) { }

		/// <summary>
		/// Initializes a new instance of the <see cref="RegexAttribute"/> class.
		/// </summary>
		/// <param name="pattern">The pattern.</param>
		/// <param name="options">The options.</param>
		public RegexAttribute(string pattern, RegexOptions options)
		{
			Pattern = pattern;
			Options = options;
		}

		/// <summary>
		/// Gets or sets the pattern.
		/// </summary>
		/// <value>The pattern.</value>
		public string Pattern { get; private set; }

		/// <summary>
		/// Gets or sets the options.
		/// </summary>
		/// <value>The options.</value>
		public RegexOptions Options { get; private set; }

		/// <summary>
		/// Validates this instance.
		/// </summary>
		/// <param name="value">The value.</param>
		/// <param name="otherParameters">The other parameters.</param>
		/// <returns></returns>
		public override bool Validate(object value, IDictionary<string, object> otherParameters)
		{
			if (value == null)
				return false;

			return !Regex.IsMatch(value.ToString(), Pattern, Options);
		}
	}
}
