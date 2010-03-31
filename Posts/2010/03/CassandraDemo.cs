namespace CassandraDemo 
{ 
    using System; 
    using System.Collections.Generic; 
    using System.Diagnostics; 

    using Apache.Cassandra; 
    using Thrift.Protocol; 
    using Thrift.Transport; 

    class Program 
    { 
        static void Main(string[] args) 
        { 
            TTransport transport = new TSocket("localhost", 9160); 
            TProtocol protocol = new TBinaryProtocol(transport); 
            Cassandra.Client client = new Cassandra.Client(protocol); 
             
            Console.WriteLine("Opening connection"); 
            transport.Open(); 

            System.Text.Encoding utf8Encoding = System.Text.Encoding.UTF8; 

            long timeStamp = DateTime.Now.Millisecond; 
            ColumnPath nameColumnPath = new ColumnPath()  
                                        {  
                                            Column_family = "Standard1",  
                                            Column = utf8Encoding.GetBytes("name") 
                                        }; 

            Console.WriteLine("Inserting name columns"); 

            //Insert the data into the column 'name' 
            client.insert("Keyspace1", 
                          "1", 
                          nameColumnPath, 
                          utf8Encoding.GetBytes("Joe Bloggs"), 
                          timeStamp, 
                          ConsistencyLevel.ONE); 

            client.insert("Keyspace1", 
                          "2", 
                          nameColumnPath, 
                          utf8Encoding.GetBytes("Joe Soap"), 
                          timeStamp, 
                          ConsistencyLevel.ONE); 

            //Simple single value get using the key to get column 'name' 
            ColumnOrSuperColumn returnedColumn = client.get("Keyspace1", "1", nameColumnPath, ConsistencyLevel.ONE); 
            Console.WriteLine("Column Data in Keyspace1/Standard1: name: {0}, value: {1}", 
                              utf8Encoding.GetString(returnedColumn.Column.Name), 
                              utf8Encoding.GetString(returnedColumn.Column.Value)); 

            Console.WriteLine("Getting splice range"); 

            //Read an entire row 
            SlicePredicate predicate = new SlicePredicate() 
                                       { 
                                          Slice_range = new SliceRange() 
                                                        { 
                                                            //Start and Finish cannot be null 
                                                            Start = new byte[0],  
                                                            Finish = new byte[0], 
                                                            Count  = 10, 
                                                            Reversed = false 
                                                        } 
                                       }; 

            ColumnParent parent = new ColumnParent() { Column_family = "Standard1" }; 
            Dictionary<string , List<ColumnOrSuperColumn>> results = client.multiget_slice("Keyspace1",  
                                                                      new List<string>() { "1", "2"},  
                                                                      parent,  
                                                                      predicate,  
                                                                      ConsistencyLevel.ONE); 

            foreach (KeyValuePair<string, List<ColumnOrSuperColumn>> resultPair in results) 
            { 
                Console.WriteLine("Key: {0}", resultPair.Key); 

                foreach (ColumnOrSuperColumn resultColumn in resultPair.Value) 
                { 
                    Column column = resultColumn.Column; 
                    Console.WriteLine("name: {0}, value: {1}", utf8Encoding.GetString(column.Name), utf8Encoding.GetString(column.Value)); 
                } 
            } 

            Console.WriteLine("Closing connection"); 
            transport.Close(); 
        } 
    } 
}