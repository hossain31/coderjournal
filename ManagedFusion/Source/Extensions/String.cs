using System;
using System.Text;
using System.Text.RegularExpressions;
using System.Security.Cryptography;

namespace System
{
	/// <summary>
	/// 
	/// </summary>
	public static class TextExtensions
	{
		private static readonly Regex UrlReplacementExpression = new Regex(@"[^0-9a-z \-]*", RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Singleline | RegexOptions.CultureInvariant);

		/// <summary>
		/// Tries the trim.
		/// </summary>
		/// <param name="s">The s.</param>
		/// <returns></returns>
		public static string TryTrim(this string s)
		{
			if (s == null)
				return s;

			return s.Trim();
		}

		/// <summary>
		/// Toes the hash.
		/// </summary>
		/// <param name="content">The content.</param>
		/// <returns></returns>
		public static string ToHashString(this string content)
		{
			return ToHashString(content, "MD5");
		}

		/// <summary>
		/// Toes the hash string.
		/// </summary>
		/// <param name="content">The content.</param>
		/// <param name="hashName">Name of the hash.</param>
		/// <returns></returns>
		public static string ToHashString(this string content, string hashName)
		{
			if (content == null)
				throw new ArgumentNullException("content");

			HashAlgorithm algorithm = HashAlgorithm.Create(hashName);
			byte[] buffer = algorithm.ComputeHash(Encoding.Default.GetBytes(content));
			StringBuilder builder = new StringBuilder(buffer.Length * 2);

			foreach (byte b in buffer)
				builder.Append(b.ToString("x2"));

			return builder.ToString();
		}

		/// <summary>
		/// Toes the URL part.
		/// </summary>
		/// <param name="content">The content.</param>
		/// <returns></returns>
		public static string ToUrlFormat(this string content)
		{
			return UrlReplacementExpression.Replace(content.Trim(), String.Empty).Replace(' ', '-').ToLowerInvariant();
		}
	}
}
