using System;
using Microsoft.Build.Framework;
using Microsoft.Build.Utilities;

namespace ManagedFusion.Build
{
	/// <summary>
	/// 
	/// </summary>
	public class BuildNumberGenerator : Task
	{
		/// <summary>
		/// Gets or sets the build number.
		/// </summary>
		/// <value>The build number.</value>
		[Output]
		public string BuildNumber
		{
			get;
			private set;
		}

		/// <summary>
		/// Executes this instance.
		/// </summary>
		/// <returns></returns>
		public override bool Execute()
		{
			BuildNumber = DateTime.UtcNow.Ticks.ToString();
			return true;
		}
	}
}
