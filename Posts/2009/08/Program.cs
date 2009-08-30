using System;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;

namespace ConsoleApplication1
{
	class Program
	{
		static void Main(string[] args)
		{
			TimeSpan s1, s2, s3, s4, s5, s6, s7, s8;
			s1 = s2 = s3 = s4 = s5 = s6 = s7 = s8 = new TimeSpan(0L);

			Stopwatch sw = new Stopwatch();

			for (int x = 0; x < 5; x++)
			{
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static1.Name;
				}
				sw.Stop();
				s1 += sw.Elapsed;
				Console.WriteLine("Static1: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static2.Name;
				}
				sw.Stop();
				s2 += sw.Elapsed;
				Console.WriteLine("Static2: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static3.Name;
				}
				sw.Stop();
				s3 += sw.Elapsed;
				Console.WriteLine("Static3: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static4.Name;
				}
				sw.Stop();
				s4 += sw.Elapsed;
				Console.WriteLine("Static4: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static5.Name;
				}
				sw.Stop();
				s5 += sw.Elapsed;
				Console.WriteLine("Static5: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static5.Name;
				}
				sw.Stop();
				s6 += sw.Elapsed;
				Console.WriteLine("Static6: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static7.Name;
				}
				sw.Stop();
				s7 += sw.Elapsed;
				Console.WriteLine("Static7: " + sw.Elapsed);

				sw.Reset();
				sw.Start();
				for (int i = 0; i < Int32.MaxValue - 1; i++)
				{
					string s = Static8.Name;
				}
				sw.Stop();
				s8 += sw.Elapsed;
				Console.WriteLine("Static8: " + sw.Elapsed);

				sw.Reset();
			}

			Console.WriteLine("--------------------------------------------------");
			Console.WriteLine("Static1: " + new TimeSpan(s1.Ticks / 5L));
			Console.WriteLine("Static2: " + new TimeSpan(s2.Ticks / 5L));
			Console.WriteLine("Static3: " + new TimeSpan(s3.Ticks / 5L));
			Console.WriteLine("Static4: " + new TimeSpan(s4.Ticks / 5L));
			Console.WriteLine("Static5: " + new TimeSpan(s5.Ticks / 5L));
			Console.WriteLine("Static6: " + new TimeSpan(s6.Ticks / 5L));
			Console.WriteLine("Static7: " + new TimeSpan(s7.Ticks / 5L));
			Console.WriteLine("Static8: " + new TimeSpan(s8.Ticks / 5L));

			Console.Read();
		}

		public static class Static1
		{
			public static string Name = "Nick Berardi";
			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public static class Static2
		{
			public static string Name;

			static Static2()
			{
				Name = "Nick Berardi";
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public static class Static3
		{
			public static string _Name;

			public static string Name
			{
				get
				{
					if (_Name == null)
						_Name = "Nick Berardi";
					return _Name;
				}
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public static class Static4
		{
			public static string Name = "Nick";

			static Static4()
			{
				Name += " Berardi";
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public class Static5
		{
			public static string Name = "Nick Berardi";
			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public class Static6
		{
			public static string Name;

			static Static6()
			{
				Name = "Nick Berardi";
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public class Static7
		{
			public static string _Name;

			public static string Name
			{
				get
				{
					if (_Name == null)
						_Name = "Nick Berardi";
					return _Name;
				}
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}

		public class Static8
		{
			public static string Name = "Nick";

			static Static8()
			{
				Name += " Berardi";
			}

			public static string GetName()
			{
				if (!String.IsNullOrEmpty(Name))
					return Name;
				else
					return "None Set";
			}
		}
	}
}
