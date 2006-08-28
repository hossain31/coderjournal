/*
 * 	Template:		This code was generated by the Coder Journal [http://www.coderjournal.com] Data Layer Template.
 * 	Created On :	8/27/2006
 * 	Remarks:		Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Security.Permissions;
using System.Xml;
using System.Xml.Serialization;

namespace CoderJournal.Modules.Journal.Data
{
	[DataObject(true)]
	public partial class Link : ITable<int>
	{
		#region Static Methods
		
		#region Common Methods

		protected static LinkCollection FillCollection (SqlCommand command)
		{
			LinkCollection list = new LinkCollection();
			
			try
			{
				command.Connection.Open();
				using(SqlDataReader reader = command.ExecuteReader())
				{
					if (reader.HasRows)
					{
						int[] order = new int[6];
						order[0] = reader.GetOrdinal("LinkID");
						order[1] = reader.GetOrdinal("JournalID");
						order[2] = reader.GetOrdinal("Href");
						order[3] = reader.GetOrdinal("Title");
						order[4] = reader.GetOrdinal("Relationship");
						order[5] = reader.GetOrdinal("Type");

						while (reader.Read()) 
						{
							Link entity = new Link();
							entity._linkID = reader.IsDBNull(0) ? 0 :  reader.GetInt32(order[0]); // LinkID
							entity._journalID = reader.IsDBNull(1) ? Guid.Empty :  reader.GetGuid(order[1]); // JournalID
							entity._href = reader.IsDBNull(2) ? String.Empty :  reader.GetString(order[2]); // Href
							entity._title = reader.IsDBNull(3) ? (string)null :  reader.GetString(order[3]); // Title
							entity._relationship = reader.IsDBNull(4) ? (string)null :  reader.GetString(order[4]); // Relationship
							entity._type = reader.IsDBNull(5) ? (string)null :  reader.GetString(order[5]); // Type

							// add to list
							list.Add(entity);
						}
					}
				}
			} catch (Exception exc) {
				Debug.WriteLine(exc);
			} finally {
				command.Connection.Close();
			}
					
			return list;
		}
	
		protected static Link FillEntity (SqlCommand command)
		{
			Link entity = null;
			
			try
			{
				command.Connection.Open();
				using(SqlDataReader reader = command.ExecuteReader())
				{
					if (reader.HasRows)
					{
						reader.Read();
						entity = new Link();
						entity._linkID = reader.IsDBNull(0) ? 0 :  reader.GetInt32(reader.GetOrdinal("LinkID"));
						entity._journalID = reader.IsDBNull(1) ? Guid.Empty :  reader.GetGuid(reader.GetOrdinal("JournalID"));
						entity._href = reader.IsDBNull(2) ? String.Empty :  reader.GetString(reader.GetOrdinal("Href"));
						entity._title = reader.IsDBNull(3) ? (string)null :  reader.GetString(reader.GetOrdinal("Title"));
						entity._relationship = reader.IsDBNull(4) ? (string)null :  reader.GetString(reader.GetOrdinal("Relationship"));
						entity._type = reader.IsDBNull(5) ? (string)null :  reader.GetString(reader.GetOrdinal("Type"));
					}
				}
			} catch (Exception exc) {
				Debug.WriteLine(exc);
			} finally {
				if (entity == null) 
					entity = new Link();
					
				command.Connection.Close();
			}
					
			return entity;
		}
		
		#endregion
		
		#region Get List
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static LinkCollection GetList (string where, string orderBy)
		{
			StringBuilder sb = new StringBuilder(10);
			
			sb.Append(@"select * from [Link] ");
			
			if (String.IsNullOrEmpty(where) == false)
			{
				sb.Append(" where ");
				sb.Append("(");
				sb.Append(where);
				sb.Append(")");
			}
			
			if (String.IsNullOrEmpty(orderBy) == false)
			{
				sb.Append(" order by ");
				sb.Append(orderBy);
			}
			
			using(SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["ManagedFusion"].ConnectionString))
			{
				using (SqlCommand command = connection.CreateCommand())
				{
					command.CommandText = sb.ToString();
					command.CommandType = CommandType.Text;
					
					return FillCollection(command);
				}
			}
		}
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static LinkCollection GetList (string where)
		{
			return GetList(where, String.Empty);
		}
		
		[DataObjectMethod(DataObjectMethodType.Select, true)]
		public static LinkCollection GetList ()
		{
			return GetList(String.Empty, String.Empty);
		}
		
		#endregion
		
		#region Get First
	
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetFirst (string where, string orderBy)
		{
			StringBuilder sb = new StringBuilder(10);
			
			sb.Append(@"select top 1 * from [Link] ");
			
			if (String.IsNullOrEmpty(where) == false)
			{
				sb.Append(" where ");
				sb.Append("(");
				sb.Append(where);
				sb.Append(")");
			}
			
			if (String.IsNullOrEmpty(orderBy) == false)
			{
				sb.Append(" order by ");
				sb.Append(orderBy);
			}
			
			using(SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["ManagedFusion"].ConnectionString))
			{
				using (SqlCommand command = connection.CreateCommand())
				{
					command.CommandText = sb.ToString();
					command.CommandType = CommandType.Text;
					
					return FillEntity(command);
				}
			}
		}
	
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetFirst (string where)
		{
			return GetFirst(where, String.Empty);
		}
	
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetFirst ()
		{
			return GetFirst(String.Empty, String.Empty);
		}
		
		#endregion
		
		#region Get Latest
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetLatest (string where)
		{
			return GetFirst(where, "ModifiedDT desc");
		}
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetLatest ()
		{
			return GetLatest(String.Empty);
		}
		
		#endregion
		
		#region Get By Foreign Key
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static LinkCollection GetByJournalID(Guid journalID, string orderBy)
		{
			return GetList("JournalID = '" + journalID + "'", orderBy);
		}
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static LinkCollection GetByJournalID(Guid journalID)
		{
			return GetByJournalID(journalID, String.Empty);
		}
		
		#endregion
		
		#region Get By Index
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetByLinkID(int linkID, string orderBy)
		{
			return GetFirst("LinkID = " + linkID + "", orderBy);
		}
		
		[DataObjectMethod(DataObjectMethodType.Select, false)]
		public static Link GetByLinkID(int linkID)
		{
			return GetByLinkID(linkID, String.Empty);
		}
		
		#endregion

		#region Insert
		
		protected static bool InsertOrUpdate (int linkID, Guid journalID, string href, string title, string relationship, string type)		
		{
			using(SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["ManagedFusion"].ConnectionString))
			{
				using (SqlCommand command = connection.CreateCommand())
				{
					command.CommandText = "Journal_Link";
					command.CommandType = CommandType.StoredProcedure;
					
					command.Parameters.AddWithValue("@LinkID", linkID);
					command.Parameters.AddWithValue("@JournalID", journalID);
					command.Parameters.AddWithValue("@Href", href);
					command.Parameters.AddWithValue("@Title", title);
					command.Parameters.AddWithValue("@Relationship", relationship);
					command.Parameters.AddWithValue("@Type", type);
					
					bool success = false;
					
					try
					{
						connection.Open();
						command.ExecuteNonQuery();
					
						success = true;
					} catch (Exception exc) {
						Debug.WriteLine(exc);
						
						success = false;
					} finally {
						connection.Close();
					}
					
					return success;
				}
			}
		}
		
		[DataObjectMethod(DataObjectMethodType.Insert, false)]
		public static bool Insert (int linkID, Guid journalID, string href, string title, string relationship, string type)
		{
			return InsertOrUpdate(
				linkID,
				journalID,
				href,
				title,
				relationship,
				type
			);
		}
		
		[DataObjectMethod(DataObjectMethodType.Insert, true)]
		public static bool Insert (Link entity)
		{
			entity.AcceptChanges();
			return InsertOrUpdate(
				entity.LinkID, 
				entity.JournalID, 
				entity.Href, 
				entity.Title, 
				entity.Relationship, 
				entity.Type
			);
		}
		
		#endregion
		
		#region Update
		
		[DataObjectMethod(DataObjectMethodType.Update, false)]
		public static bool Update (int linkID, Guid journalID, string href, string title, string relationship, string type)
		{
			return InsertOrUpdate(
				linkID,
				journalID,
				href,
				title,
				relationship,
				type
			);
		}
		
		[DataObjectMethod(DataObjectMethodType.Update, true)]
		public static bool Update (Link entity)
		{
			entity.AcceptChanges();
			return InsertOrUpdate(
				entity.LinkID, 
				entity.JournalID, 
				entity.Href, 
				entity.Title, 
				entity.Relationship, 
				entity.Type
				);
		}
		
		#endregion
		
		#region Delete
		
		[DataObjectMethod(DataObjectMethodType.Delete, true)]
		public static bool Delete (Link entity)
		{
			entity.AcceptChanges();
			return Delete(
				entity.LinkID
			);
		}

		[DataObjectMethod(DataObjectMethodType.Delete, true)]
		public static bool Delete (int linkID)
		{
			using(SqlConnection connection = new SqlConnection(ConfigurationManager.ConnectionStrings["ManagedFusion"].ConnectionString))
			{
				using (SqlCommand command = connection.CreateCommand())
				{
					command.CommandText = "Journal_Link_Delete";
					command.CommandType = CommandType.StoredProcedure;
					
					command.Parameters.AddWithValue("@LinkID", linkID);
					
					bool success = false;
					
					try
					{
						connection.Open();
						command.ExecuteNonQuery();
					
						success = true;
					} catch (Exception exc) {
						Debug.WriteLine(exc);
						
						success = false;
					} finally {
						connection.Close();
					}
					
					return success;
				}
			}
		}
		
		#endregion

		#endregion
		
		#region Column Variables
		
		#region Primary key(s)
		
		/// <summary>			
		/// Column LinkID : 
		/// </summary>
		/// <remarks>Member of the primary key of the underlying table "Link"</remarks>
		private int _linkID = 0;

		#endregion
		
		#region Non Primary key(s)
		
		/// <summary>
		/// Column JournalID : 
		/// </summary>
		private Guid _journalID = Guid.Empty;

		/// <summary>
		/// Column Href : 
		/// </summary>
		private string _href = String.Empty;

		/// <summary>
		/// Column Title : 
		/// </summary>
		private string _title = (string)null;

		/// <summary>
		/// Column Relationship : 
		/// </summary>
		private string _relationship = (string)null;

		/// <summary>
		/// Column Type : 
		/// </summary>
		private string _type = (string)null;

		#endregion
		
		#endregion
		
		#region Constructor
		
		///<summary>
		/// Creates a new <see cref="Link"/> instance.
		///</summary>
		///<param name="LinkID"></param>
		///<param name="JournalID"></param>
		///<param name="Href"></param>
		///<param name="Title"></param>
		///<param name="Relationship"></param>
		///<param name="Type"></param>
		public Link (int linkID, Guid journalID, string href, string title, string relationship, string type)
		{
			this._isMarkedForDeletion = false;
			this._isDirty = true;
			this._isNew = true;
			this._autoUpdate = true;
				
			this._linkID = linkID;
			this._journalID = journalID;
			this._href = href;
			this._title = title;
			this._relationship = relationship;
			this._type = type;
		}
		
		public Link ()
		{
			this._isMarkedForDeletion = false;
			this._isDirty = false;
			this._isNew = true;
			this._autoUpdate = true;
		}
		
		#endregion
		
		#region Properties
		
		#region Foreign Keys
		
		[Browsable(false)]
		public Journal PrimaryJournal
		{
			get 
			{
				return Journal.GetFirst("JournalID = '" + _journalID + "'");
			}
		}
		
		#endregion
		
		/// <summary>Gets the LinkID value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is int</value>
		[ReadOnly(true)]
		[Description("")]
		[DataObjectField(true, true, false, 4)]
		public int LinkID
		{
			get { return this._linkID; }
		}
		
		/// <summary>Gets or sets the JournalID value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is uniqueidentifier</value>
		[Description("")]
		[DataObjectField(false, false, false, 16)]
		public Guid JournalID
		{
			get { return this._journalID; }
			set
			{
				if (_journalID == value)
					return;
					
				_journalID = value;
				this._isDirty = true;
				
				// if auto update is turned on update this
				if (AllowAutoUpdate) Update(this);
			}
		}
		
		/// <summary>Gets or sets the Href value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is varchar</value>
		[Description("")]
		[DataObjectField(false, false, false, 255)]
		public string Href
		{
			get { return this._href; }
			set
			{
				if (_href == value)
					return;
					
				_href = value;
				this._isDirty = true;
				
				// if auto update is turned on update this
				if (AllowAutoUpdate) Update(this);
			}
		}
		
		/// <summary>Gets or sets the Title value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is varchar</value>
		[Description("")]
		[DataObjectField(false, false, true, 75)]
		public string Title
		{
			get { return this._title; }
			set
			{
				if (_title == value)
					return;
					
				_title = value;
				this._isDirty = true;
				
				// if auto update is turned on update this
				if (AllowAutoUpdate) Update(this);
			}
		}
		
		/// <summary>Gets or sets the Relationship value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is varchar</value>
		[Description("")]
		[DataObjectField(false, false, true, 50)]
		public string Relationship
		{
			get { return this._relationship; }
			set
			{
				if (_relationship == value)
					return;
					
				_relationship = value;
				this._isDirty = true;
				
				// if auto update is turned on update this
				if (AllowAutoUpdate) Update(this);
			}
		}
		
		/// <summary>Gets or sets the Type value for the column.</summary>
		/// <remarks></remarks>
		/// <value>This type is varchar</value>
		[Description("")]
		[DataObjectField(false, false, true, 50)]
		public string Type
		{
			get { return this._type; }
			set
			{
				if (_type == value)
					return;
					
				_type = value;
				this._isDirty = true;
				
				// if auto update is turned on update this
				if (AllowAutoUpdate) Update(this);
			}
		}
		

		private bool _autoUpdate = true;
		/// <summary>True if the entity should commit changes as soon as they are made.</summary>
		[Browsable(false)]
		public bool AutoUpdate
		{
			get { return this._autoUpdate; }
			set { _autoUpdate = value; }
		}

		private bool _isMarkedForDeletion = false;
		/// <summary>Gets if the object has been <see cref="MarkToDelete"/>.</summary>
		[Browsable(false)]
		public bool IsMarkedForDeletion
		{
			get { return this._isMarkedForDeletion; }
		}

		private bool _isDirty = false;
		/// <summary>Indicates if the object has been modified from its original state.</summary>
		///<value>True if object has been modified from its original state; otherwise False;</value>
		[Browsable(false)]
		public bool IsDirty
		{
			get { return this._isDirty; }
		}

		private bool _isNew = false;
		/// <summary>Indicates if the object is new.</summary>
		///<value>True if objectis new; otherwise False;</value>
		[Browsable(false)]
		public bool IsNew
		{
			get { return this._isNew; }
		}

		/// <summary>Gets a value indicating if AutoUpdate is allowed on this entity.</summary>
		private bool AllowAutoUpdate 
		{
			get { return (!IsNew && !IsMarkedForDeletion) && AutoUpdate; }
		}

		#endregion
		
		#region Methods
		
		internal void Merge (Link entity)
		{
			this._linkID = entity._linkID;
			this._journalID = entity._journalID;
			this._href = entity._href;
			this._title = entity._title;
			this._relationship = entity._relationship;
			this._type = entity._type;
		}

		/// <summary>Begin the update process.</summary>
		public void BeginUpdate()
		{
			this.AutoUpdate = false;
		}
		
		/// <summary>End the update process and commit changes.</summary>
		public void EndUpdate()
		{
			this.EndUpdate(true);
		}
		
		/// <summary>End the update process</summary>
		public void EndUpdate(bool commit)
		{
			this.AutoUpdate = true;
			
			if (commit)
				this.CommitChanges();
		}
		
		/// <summary>Accepts the changes made to this object by setting each flags to false.</summary>
		internal void AcceptChanges()
		{
			this._isMarkedForDeletion = false;
			this._isDirty = false;
			this._isNew = false;
		}
		
		///<summary>Currently not supported.</summary>
		public void CancelChanges()
		{
			throw new NotSupportedException("Cancel changes is not currently supported.");
		}
		
		///<summary>Delete this entity.</summary>
		public void Delete()
		{
			this._isMarkedForDeletion = true;
			
			if (!IsNew && AutoUpdate) Delete(this);
		}
		
		#endregion
		
		#region ITable<int> Members

		[DataObjectField(true, true, false)]
		int ITable<int>.PrimaryKey
		{
			get { return _linkID; }
		}

		/// <summary>Commit the changes to the database.</summary>
		public void CommitChanges()
		{
			if (this.IsNew)
				Insert(this);
			
			else if (this.IsMarkedForDeletion)
				Delete(this);
				
			else if (this.IsDirty)
				Update(this);
		}

		#endregion
	}
	
	#region Link Columns
	
	public enum LinkColumn
	{
		/// <summary></summary>
		LinkID,
 
		/// <summary></summary>
		JournalID,
 
		/// <summary></summary>
		Href,
 
		/// <summary></summary>
		Title,
 
		/// <summary></summary>
		Relationship,
 
		/// <summary></summary>
		Type 
	}
	
	#endregion
	
	#region Link Collection
	
	public class LinkCollection : TableCollection<int, Link>
	{
	}
	
	#endregion
}