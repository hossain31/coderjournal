using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Web;

namespace ManagedFusion.Serialization
{
	public class Serializer
	{
		/// <summary>
		/// 
		/// </summary>
		public const char AttributeMarker = '*';

		/// <summary>
		/// 
		/// </summary>
		public const char CollectionItemMarker = '+';

		/// <summary>
		/// Serializes the specified obj.
		/// </summary>
		/// <param name="obj">The obj.</param>
		/// <param name="serializer">The serializer.</param>
		/// <returns></returns>
		public string Serialize(object obj, ISerializer serializer)
		{
			return serializer.Serialize(Serialize(obj, serializer.CheckForObjectName));
		}

		/// <summary>
		/// Serializes the specified obj.
		/// </summary>
		/// <param name="obj">The obj.</param>
		/// <param name="checkForObjectName">if set to <see langword="true"/> [check for object name].</param>
		/// <returns></returns>
		private Dictionary<string, object> Serialize(object obj, bool checkForObjectName)
		{
			object value = SerializeValue(obj);

			if (checkForObjectName || !(value is Dictionary<string, object>))
			{
				string name = obj is ICollection ? "collection" : "object";

				// get what the object likes to be called
				if (obj.GetType().IsDefined(typeof(SerializableObjectAttribute), true))
				{
					object[] attrs = obj.GetType().GetCustomAttributes(typeof(SerializableObjectAttribute), true);

					if (attrs.Length > 0)
					{
						SerializableObjectAttribute attr = attrs[0] as SerializableObjectAttribute;

						name = attr.Name;
					}
				}

				Dictionary<string, object> response = new Dictionary<string, object>(1);
				response.Add(name, value);

				value = response;
			}

			return value as Dictionary<string, object>;
		}

		/// <summary>
		/// Serializes the object.
		/// </summary>
		/// <param name="obj">The obj.</param>
		/// <returns></returns>
		private IDictionary<string, object> SerializeObject(object obj)
		{
			IDictionary<string, object> values = new Dictionary<string, object>();
			Type type = obj.GetType();
			bool anonymousType = type.Name.IndexOf("__AnonymousType") >= 0;

			foreach (FieldInfo info in type.GetFields(BindingFlags.GetField | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance))
				if (anonymousType || info.IsDefined(typeof(SerializablePropertyAttribute), true))
					values.Add(SerializeName(info), SerializeValue(info.GetValue(obj)));

			foreach (PropertyInfo info2 in type.GetProperties(BindingFlags.GetProperty | BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance))
			{
				if (anonymousType || info2.IsDefined(typeof(SerializablePropertyAttribute), true))
				{
					MethodInfo getMethod = info2.GetGetMethod(true);
					if ((getMethod != null) && (getMethod.GetParameters().Length <= 0))
						values.Add(SerializeName(info2), SerializeValue(getMethod.Invoke(obj, null)));
				}
			}

			return values;
		}

		/// <summary>
		/// Serializes the name.
		/// </summary>
		/// <param name="member">The member.</param>
		/// <returns></returns>
		private string SerializeName(MemberInfo member)
		{
			string name = null;

			if (member.IsDefined(typeof(SerializablePropertyAttribute), true))
			{
				object[] attrs = member.GetCustomAttributes(typeof(SerializablePropertyAttribute), true);

				if (attrs.Length > 0)
				{
					SerializablePropertyAttribute attr = attrs[0] as SerializablePropertyAttribute;

					name = (attr.IsAttribute ? AttributeMarker.ToString() : String.Empty) + attr.Name;
				}
			}

			if (String.IsNullOrEmpty(name))
				name = null;

			return name ?? member.Name;
		}

		/// <summary>
		/// Serializes the value.
		/// </summary>
		/// <param name="obj">The obj.</param>
		/// 
		/// <returns></returns>
		private object SerializeValue(object obj)
		{
			if (obj == null)
				return obj;

			Type objectType = obj.GetType();

			// make sure the object isn'term an easily handled primity type
			if (Type.GetTypeCode(objectType) != TypeCode.Object)
				return obj;

			if (obj is IDictionary)
				return obj;

			if (obj is IEnumerable)
			{
				object[] attrs = objectType.GetCustomAttributes(typeof(SerializableCollectionObjectAttribute), true);
				string collectionItemName = null;

				if (attrs.Length > 0)
				{
					SerializableCollectionObjectAttribute attr = attrs[0] as SerializableCollectionObjectAttribute;
					collectionItemName = CollectionItemMarker + attr.Name;
				}

				IList<object> list = new List<object>();
				IEnumerable collection = (IEnumerable)obj;

				if (attrs.Length == 0)
				{
					foreach (object o in collection)
					{
						if (Type.GetTypeCode(o.GetType()) != TypeCode.Object)
							list.Add(o);
						else
							list.Add(SerializeValue(o));
					}
				}
				else
				{
					foreach (object o in collection)
					{
						IDictionary<string, object> list2 = new Dictionary<string, object>();

						if (Type.GetTypeCode(o.GetType()) != TypeCode.Object)
							list2.Add(collectionItemName, o);
						else
							list2.Add(collectionItemName, SerializeValue(o));

						list.Add(list2);
					}
				}

				return list;
			}

			IDictionary<string, object> serializedObject = SerializeObject(obj);
			return serializedObject.Count == 0 ? obj : serializedObject;
		}
	}
}
