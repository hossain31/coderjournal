using System;
using System.Collections.Generic;
using System.Data;
using System.Web;

using ManagedFusion.Rewriter;
using MySql.Data.MySqlClient;
using System.Diagnostics;

namespace CoderJournal.Rewriter.Rules
{
	/// <summary>
	/// 
	/// </summary>
	public class PostQueryStringRuleAction : IRuleAction
	{
		#region IRuleAction Members

		/// <summary>
		/// Gets the text.
		/// </summary>
		/// <value>The text.</value>
		public string Text
		{
			get;
			private set;
		}

		/// <summary>
		/// Processes the specified log level.
		/// </summary>
		/// <param name="logLevel">The log level.</param>
		/// <param name="logCategory">The log category.</param>
		/// <param name="context">The context.</param>
		/// <param name="pattern">The pattern.</param>
		/// <param name="url">The URL.</param>
		/// <param name="conditionValues">The condition values.</param>
		/// <param name="flags">The flags.</param>
		/// <returns></returns>
		public Uri Execute(int logLevel, string logCategory, HttpContext context, Pattern pattern, Uri url, string[] conditionValues, IDictionary<string, string> flags)
		{
			string inputUrl = url.GetComponents(UriComponents.PathAndQuery, UriFormat.UriEscaped);
			string sqlCommand = pattern.Replace(inputUrl, Text, conditionValues);
			string substituedUrl = String.Empty;

			using (MySqlConnection connection = new MySqlConnection(Properties.Settings.Default.DatabaseConnection))
			{
				using (MySqlCommand command = connection.CreateCommand())
				{
					command.CommandText = sqlCommand;
					command.CommandType = CommandType.Text;

					try
					{
						connection.Open();
						substituedUrl = command.ExecuteScalar() as string;
					}
					finally
					{
						connection.Close();
					}
				}
			}

			Trace.WriteLineIf(logLevel >= 2, "Output: " + substituedUrl, logCategory);
			return new Uri(url, substituedUrl);
		}

		/// <summary>
		/// Inits the specified text.
		/// </summary>
		/// <param name="text">The text.</param>
		public void Init(string text)
		{
			Text = text;
		}

		#endregion
	}
}
