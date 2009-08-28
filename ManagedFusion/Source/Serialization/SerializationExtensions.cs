using System;
using System.IO;
using System.Text;
using System.Web;

namespace ManagedFusion.Serialization
{
	/// <summary>
	/// 
	/// </summary>
	public static class SerializationExtensions
	{
		/// <summary>
		/// Serializes the specified obj.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <param name="serializer">The serializer.</param>
		/// <returns></returns>
		public static string Serialize<T>(this T obj, ISerializer serializer)
		{
			Serializer ser = new Serializer();
			return ser.Serialize(obj, serializer);
		}

		/// <summary>
		/// Serializes the specified obj.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <param name="serializer">The serializer.</param>
		/// <param name="serializePublic">if set to <see langword="true"/> [serialize public].</param>
		/// <returns></returns>
		public static string Serialize<T>(this T obj, ISerializer serializer, bool serializePublic)
		{
			Serializer ser = new Serializer();
			return ser.Serialize(obj, serializer, serializePublic);
		}

		/// <summary>
		/// Toes the json.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <returns></returns>
		public static string ToJson<T>(this T obj)
		{
			return Serialize<T>(obj, new JsonSerializer());
		}

		/// <summary>
		/// Toes the json.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <param name="serializePublic">if set to <see langword="true"/> [serialize public].</param>
		/// <returns></returns>
		public static string ToJson<T>(this T obj, bool serializePublic)
		{
			return Serialize<T>(obj, new JsonSerializer(), serializePublic);
		}

		/// <summary>
		/// Toes the XML.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <returns></returns>
		public static string ToXml<T>(this T obj)
		{
			return Serialize<T>(obj, new XmlSerializer());
		}

		/// <summary>
		/// Toes the XML.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="obj">The obj.</param>
		/// <param name="serializePublic">if set to <see langword="true"/> [serialize public].</param>
		/// <returns></returns>
		public static string ToXml<T>(this T obj, bool serializePublic)
		{
			return Serialize<T>(obj, new XmlSerializer(), serializePublic);
		}
	}
}
