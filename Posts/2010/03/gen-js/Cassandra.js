//HELPER FUNCTIONS AND STRUCTURES

Cassandra_get_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_args.prototype = {}
Cassandra_get_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_result = function(args){
this.success = new ColumnOrSuperColumn()
this.ire = new InvalidRequestException()
this.nfe = new NotFoundException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.nfe)
this.nfe = args.nfe
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_result.prototype = {}
Cassandra_get_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRUCT) {
this.success = new ColumnOrSuperColumn()
this.success.read(input)
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRUCT, 0)
this.success.write(output)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 2)
this.nfe.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 3)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 4)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_args = function(args){
this.keyspace = ''
this.key = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_slice_args.prototype = {}
Cassandra_get_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 3)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 4)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 5)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_slice_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_slice_result.prototype = {}
Cassandra_get_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size21 = 0
var rtmp3
this.success = []
var _etype24 = 0
rtmp3 = input.readListBegin()
_etype24 = rtmp3.etype
_size21 = rtmp3.size
for (var _i25 = 0; _i25 < _size21; ++_i25)
{
var elem26 = null
elem26 = new ColumnOrSuperColumn()
elem26.read(input)
this.success.push(elem26)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter27 in this.success)
{
iter27=this.success[iter27]
iter27.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_args = function(args){
this.keyspace = ''
this.keys = []
this.column_path = new ColumnPath()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.keys)
this.keys = args.keys
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_args.prototype = {}
Cassandra_multiget_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size28 = 0
var rtmp3
this.keys = []
var _etype31 = 0
rtmp3 = input.readListBegin()
_etype31 = rtmp3.etype
_size28 = rtmp3.size
for (var _i32 = 0; _i32 < _size28; ++_i32)
{
var elem33 = null
var rtmp = input.readString()
elem33 = rtmp.value
this.keys.push(elem33)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter34 in this.keys)
{
iter34=this.keys[iter34]
output.writeString(iter34)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_result.prototype = {}
Cassandra_multiget_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size35 = 0
var rtmp3
this.success = {}
var _ktype36 = 0
var _vtype37 = 0
rtmp3 = input.readMapBegin()
_ktype36= rtmp3.ktype
_vtype37= rtmp3.vtype
_size35= rtmp3.size
for (var _i39 = 0; _i39 < _size35; ++_i39)
{
key40 = ''
val41 = null
var rtmp = input.readString()
key40 = rtmp.value
val41 = new ColumnOrSuperColumn()
val41.read(input)
this.success[key40] = val41
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, this.success.length)
{
for(var kiter42 in this.success){
var viter43 = this.success[kiter42]
output.writeString(kiter42)
viter43.write(output)
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_slice_args = function(args){
this.keyspace = ''
this.keys = []
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.keys)
this.keys = args.keys
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_multiget_slice_args.prototype = {}
Cassandra_multiget_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.LIST) {
{
var _size44 = 0
var rtmp3
this.keys = []
var _etype47 = 0
rtmp3 = input.readListBegin()
_etype47 = rtmp3.etype
_size44 = rtmp3.size
for (var _i48 = 0; _i48 < _size44; ++_i48)
{
var elem49 = null
var rtmp = input.readString()
elem49 = rtmp.value
this.keys.push(elem49)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.keys) {
output.writeFieldBegin('keys', Thrift.Type.LIST, 2)
{
output.writeListBegin(Thrift.Type.STRING, this.keys.length)
{
for(var iter50 in this.keys)
{
iter50=this.keys[iter50]
output.writeString(iter50)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 3)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 4)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 5)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_multiget_slice_result = function(args){
this.success = {}
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_multiget_slice_result.prototype = {}
Cassandra_multiget_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size51 = 0
var rtmp3
this.success = {}
var _ktype52 = 0
var _vtype53 = 0
rtmp3 = input.readMapBegin()
_ktype52= rtmp3.ktype
_vtype53= rtmp3.vtype
_size51= rtmp3.size
for (var _i55 = 0; _i55 < _size51; ++_i55)
{
key56 = ''
val57 = []
var rtmp = input.readString()
key56 = rtmp.value
{
var _size58 = 0
var rtmp3
val57 = []
var _etype61 = 0
rtmp3 = input.readListBegin()
_etype61 = rtmp3.etype
_size58 = rtmp3.size
for (var _i62 = 0; _i62 < _size58; ++_i62)
{
var elem63 = null
elem63 = new ColumnOrSuperColumn()
elem63.read(input)
val57.push(elem63)
}
input.readListEnd()
}
this.success[key56] = val57
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_multiget_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_multiget_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.success.length)
{
for(var kiter64 in this.success){
var viter65 = this.success[kiter64]
output.writeString(kiter64)
{
output.writeListBegin(Thrift.Type.STRUCT, viter65.length)
{
for(var iter66 in viter65)
{
iter66=viter65[iter66]
iter66.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_count_args = function(args){
this.keyspace = ''
this.key = ''
this.column_parent = new ColumnParent()
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_count_args.prototype = {}
Cassandra_get_count_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_count_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 3)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_count_result = function(args){
this.success = 0
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_count_result.prototype = {}
Cassandra_get_count_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_count_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_count_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.I32, 0)
output.writeI32(this.success)
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_key_range_args = function(args){
this.keyspace = ''
this.column_family = ''
this.start = ''
this.finish = ''
this.count = 100
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_family)
this.column_family = args.column_family
if (null != args.start)
this.start = args.start
if (null != args.finish)
this.finish = args.finish
if (null != args.count)
this.count = args.count
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_key_range_args.prototype = {}
Cassandra_get_key_range_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.column_family = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start = rtmp.value
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.finish = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.count = rtmp.value
} else {
  input.skip(ftype)
}
break
case 6:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_key_range_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_key_range_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_family) {
output.writeFieldBegin('column_family', Thrift.Type.STRING, 2)
output.writeString(this.column_family)
output.writeFieldEnd()
}
if (null != this.start) {
output.writeFieldBegin('start', Thrift.Type.STRING, 3)
output.writeString(this.start)
output.writeFieldEnd()
}
if (null != this.finish) {
output.writeFieldBegin('finish', Thrift.Type.STRING, 4)
output.writeString(this.finish)
output.writeFieldEnd()
}
if (null != this.count) {
output.writeFieldBegin('count', Thrift.Type.I32, 5)
output.writeI32(this.count)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 6)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_key_range_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_key_range_result.prototype = {}
Cassandra_get_key_range_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size67 = 0
var rtmp3
this.success = []
var _etype70 = 0
rtmp3 = input.readListBegin()
_etype70 = rtmp3.etype
_size67 = rtmp3.size
for (var _i71 = 0; _i71 < _size67; ++_i71)
{
var elem72 = null
var rtmp = input.readString()
elem72 = rtmp.value
this.success.push(elem72)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_key_range_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_key_range_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter73 in this.success)
{
iter73=this.success[iter73]
output.writeString(iter73)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_range_slice_args = function(args){
this.keyspace = ''
this.column_parent = new ColumnParent()
this.predicate = new SlicePredicate()
this.start_key = ''
this.finish_key = ''
this.row_count = 100
this.consistency_level = 1
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.column_parent)
this.column_parent = args.column_parent
if (null != args.predicate)
this.predicate = args.predicate
if (null != args.start_key)
this.start_key = args.start_key
if (null != args.finish_key)
this.finish_key = args.finish_key
if (null != args.row_count)
this.row_count = args.row_count
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_get_range_slice_args.prototype = {}
Cassandra_get_range_slice_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.column_parent = new ColumnParent()
this.column_parent.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.predicate = new SlicePredicate()
this.predicate.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.start_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.finish_key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 6:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.row_count = rtmp.value
} else {
  input.skip(ftype)
}
break
case 7:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_range_slice_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slice_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.column_parent) {
output.writeFieldBegin('column_parent', Thrift.Type.STRUCT, 2)
this.column_parent.write(output)
output.writeFieldEnd()
}
if (null != this.predicate) {
output.writeFieldBegin('predicate', Thrift.Type.STRUCT, 3)
this.predicate.write(output)
output.writeFieldEnd()
}
if (null != this.start_key) {
output.writeFieldBegin('start_key', Thrift.Type.STRING, 4)
output.writeString(this.start_key)
output.writeFieldEnd()
}
if (null != this.finish_key) {
output.writeFieldBegin('finish_key', Thrift.Type.STRING, 5)
output.writeString(this.finish_key)
output.writeFieldEnd()
}
if (null != this.row_count) {
output.writeFieldBegin('row_count', Thrift.Type.I32, 6)
output.writeI32(this.row_count)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 7)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_range_slice_result = function(args){
this.success = []
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_get_range_slice_result.prototype = {}
Cassandra_get_range_slice_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size74 = 0
var rtmp3
this.success = []
var _etype77 = 0
rtmp3 = input.readListBegin()
_etype77 = rtmp3.etype
_size74 = rtmp3.size
for (var _i78 = 0; _i78 < _size74; ++_i78)
{
var elem79 = null
elem79 = new KeySlice()
elem79.read(input)
this.success.push(elem79)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_range_slice_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_range_slice_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRUCT, this.success.length)
{
for(var iter80 in this.success)
{
iter80=this.success[iter80]
iter80.write(output)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_insert_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.value = ''
this.timestamp = 0
this.consistency_level = 0
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.value)
this.value = args.value
if (null != args.timestamp)
this.timestamp = args.timestamp
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_insert_args.prototype = {}
Cassandra_insert_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.value = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I64) {
var rtmp = input.readI64()
this.timestamp = rtmp.value
} else {
  input.skip(ftype)
}
break
case 6:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_insert_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.value) {
output.writeFieldBegin('value', Thrift.Type.STRING, 4)
output.writeString(this.value)
output.writeFieldEnd()
}
if (null != this.timestamp) {
output.writeFieldBegin('timestamp', Thrift.Type.I64, 5)
output.writeI64(this.timestamp)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 6)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_insert_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_insert_result.prototype = {}
Cassandra_insert_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_insert_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_insert_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_insert_args = function(args){
this.keyspace = ''
this.key = ''
this.cfmap = {}
this.consistency_level = 0
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.cfmap)
this.cfmap = args.cfmap
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_batch_insert_args.prototype = {}
Cassandra_batch_insert_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.MAP) {
{
var _size81 = 0
var rtmp3
this.cfmap = {}
var _ktype82 = 0
var _vtype83 = 0
rtmp3 = input.readMapBegin()
_ktype82= rtmp3.ktype
_vtype83= rtmp3.vtype
_size81= rtmp3.size
for (var _i85 = 0; _i85 < _size81; ++_i85)
{
key86 = ''
val87 = []
var rtmp = input.readString()
key86 = rtmp.value
{
var _size88 = 0
var rtmp3
val87 = []
var _etype91 = 0
rtmp3 = input.readListBegin()
_etype91 = rtmp3.etype
_size88 = rtmp3.size
for (var _i92 = 0; _i92 < _size88; ++_i92)
{
var elem93 = null
elem93 = new ColumnOrSuperColumn()
elem93.read(input)
val87.push(elem93)
}
input.readListEnd()
}
this.cfmap[key86] = val87
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_batch_insert_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_insert_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.cfmap) {
output.writeFieldBegin('cfmap', Thrift.Type.MAP, 3)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, this.cfmap.length)
{
for(var kiter94 in this.cfmap){
var viter95 = this.cfmap[kiter94]
output.writeString(kiter94)
{
output.writeListBegin(Thrift.Type.STRUCT, viter95.length)
{
for(var iter96 in viter95)
{
iter96=viter95[iter96]
iter96.write(output)
}
}
output.writeListEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 4)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_batch_insert_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_batch_insert_result.prototype = {}
Cassandra_batch_insert_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_batch_insert_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_batch_insert_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_remove_args = function(args){
this.keyspace = ''
this.key = ''
this.column_path = new ColumnPath()
this.timestamp = 0
this.consistency_level = 0
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
if (null != args.key)
this.key = args.key
if (null != args.column_path)
this.column_path = args.column_path
if (null != args.timestamp)
this.timestamp = args.timestamp
if (null != args.consistency_level)
this.consistency_level = args.consistency_level
}}
Cassandra_remove_args.prototype = {}
Cassandra_remove_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.key = rtmp.value
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.column_path = new ColumnPath()
this.column_path.read(input)
} else {
  input.skip(ftype)
}
break
case 4:if (ftype == Thrift.Type.I64) {
var rtmp = input.readI64()
this.timestamp = rtmp.value
} else {
  input.skip(ftype)
}
break
case 5:if (ftype == Thrift.Type.I32) {
var rtmp = input.readI32()
this.consistency_level = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_remove_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
if (null != this.key) {
output.writeFieldBegin('key', Thrift.Type.STRING, 2)
output.writeString(this.key)
output.writeFieldEnd()
}
if (null != this.column_path) {
output.writeFieldBegin('column_path', Thrift.Type.STRUCT, 3)
this.column_path.write(output)
output.writeFieldEnd()
}
if (null != this.timestamp) {
output.writeFieldBegin('timestamp', Thrift.Type.I64, 4)
output.writeI64(this.timestamp)
output.writeFieldEnd()
}
if (null != this.consistency_level) {
output.writeFieldBegin('consistency_level', Thrift.Type.I32, 5)
output.writeI32(this.consistency_level)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_remove_result = function(args){
this.ire = new InvalidRequestException()
this.ue = new UnavailableException()
this.te = new TimedOutException()
if( args != null ){if (null != args.ire)
this.ire = args.ire
if (null != args.ue)
this.ue = args.ue
if (null != args.te)
this.te = args.te
}}
Cassandra_remove_result.prototype = {}
Cassandra_remove_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRUCT) {
this.ire = new InvalidRequestException()
this.ire.read(input)
} else {
  input.skip(ftype)
}
break
case 2:if (ftype == Thrift.Type.STRUCT) {
this.ue = new UnavailableException()
this.ue.read(input)
} else {
  input.skip(ftype)
}
break
case 3:if (ftype == Thrift.Type.STRUCT) {
this.te = new TimedOutException()
this.te.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_remove_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_remove_result')
if (null != this.ire) {
output.writeFieldBegin('ire', Thrift.Type.STRUCT, 1)
this.ire.write(output)
output.writeFieldEnd()
}
if (null != this.ue) {
output.writeFieldBegin('ue', Thrift.Type.STRUCT, 2)
this.ue.write(output)
output.writeFieldEnd()
}
if (null != this.te) {
output.writeFieldBegin('te', Thrift.Type.STRUCT, 3)
this.te.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_property_args = function(args){
this.property = ''
if( args != null ){if (null != args.property)
this.property = args.property
}}
Cassandra_get_string_property_args.prototype = {}
Cassandra_get_string_property_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.property = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_string_property_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_property_args')
if (null != this.property) {
output.writeFieldBegin('property', Thrift.Type.STRING, 1)
output.writeString(this.property)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_property_result = function(args){
this.success = ''
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_get_string_property_result.prototype = {}
Cassandra_get_string_property_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.success = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_string_property_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_property_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.STRING, 0)
output.writeString(this.success)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_list_property_args = function(args){
this.property = ''
if( args != null ){if (null != args.property)
this.property = args.property
}}
Cassandra_get_string_list_property_args.prototype = {}
Cassandra_get_string_list_property_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.property = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_string_list_property_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_list_property_args')
if (null != this.property) {
output.writeFieldBegin('property', Thrift.Type.STRING, 1)
output.writeString(this.property)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_get_string_list_property_result = function(args){
this.success = []
if( args != null ){if (null != args.success)
this.success = args.success
}}
Cassandra_get_string_list_property_result.prototype = {}
Cassandra_get_string_list_property_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.LIST) {
{
var _size97 = 0
var rtmp3
this.success = []
var _etype100 = 0
rtmp3 = input.readListBegin()
_etype100 = rtmp3.etype
_size97 = rtmp3.size
for (var _i101 = 0; _i101 < _size97; ++_i101)
{
var elem102 = null
var rtmp = input.readString()
elem102 = rtmp.value
this.success.push(elem102)
}
input.readListEnd()
}
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_get_string_list_property_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_get_string_list_property_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.LIST, 0)
{
output.writeListBegin(Thrift.Type.STRING, this.success.length)
{
for(var iter103 in this.success)
{
iter103=this.success[iter103]
output.writeString(iter103)
}
}
output.writeListEnd()
}
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_args = function(args){
this.keyspace = ''
if( args != null ){if (null != args.keyspace)
this.keyspace = args.keyspace
}}
Cassandra_describe_keyspace_args.prototype = {}
Cassandra_describe_keyspace_args.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 1:if (ftype == Thrift.Type.STRING) {
var rtmp = input.readString()
this.keyspace = rtmp.value
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspace_args.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_args')
if (null != this.keyspace) {
output.writeFieldBegin('keyspace', Thrift.Type.STRING, 1)
output.writeString(this.keyspace)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

Cassandra_describe_keyspace_result = function(args){
this.success = {}
this.nfe = new NotFoundException()
if( args != null ){if (null != args.success)
this.success = args.success
if (null != args.nfe)
this.nfe = args.nfe
}}
Cassandra_describe_keyspace_result.prototype = {}
Cassandra_describe_keyspace_result.prototype.read = function(input){ 
var ret = input.readStructBegin()
while (1) 
{
var ret = input.readFieldBegin()
var fname = ret.fname
var ftype = ret.ftype
var fid   = ret.fid
if (ftype == Thrift.Type.STOP) 
break
switch(fid)
{
case 0:if (ftype == Thrift.Type.MAP) {
{
var _size104 = 0
var rtmp3
this.success = {}
var _ktype105 = 0
var _vtype106 = 0
rtmp3 = input.readMapBegin()
_ktype105= rtmp3.ktype
_vtype106= rtmp3.vtype
_size104= rtmp3.size
for (var _i108 = 0; _i108 < _size104; ++_i108)
{
key109 = ''
val110 = {}
var rtmp = input.readString()
key109 = rtmp.value
{
var _size111 = 0
var rtmp3
val110 = {}
var _ktype112 = 0
var _vtype113 = 0
rtmp3 = input.readMapBegin()
_ktype112= rtmp3.ktype
_vtype113= rtmp3.vtype
_size111= rtmp3.size
for (var _i115 = 0; _i115 < _size111; ++_i115)
{
key116 = ''
val117 = ''
var rtmp = input.readString()
key116 = rtmp.value
var rtmp = input.readString()
val117 = rtmp.value
val110[key116] = val117
}
input.readMapEnd()
}
this.success[key109] = val110
}
input.readMapEnd()
}
} else {
  input.skip(ftype)
}
break
case 1:if (ftype == Thrift.Type.STRUCT) {
this.nfe = new NotFoundException()
this.nfe.read(input)
} else {
  input.skip(ftype)
}
break
default:
  input.skip(ftype)
}
input.readFieldEnd()
}
input.readStructEnd()
return
}

Cassandra_describe_keyspace_result.prototype.write = function(output){ 
output.writeStructBegin('Cassandra_describe_keyspace_result')
if (null != this.success) {
output.writeFieldBegin('success', Thrift.Type.MAP, 0)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.MAP, this.success.length)
{
for(var kiter118 in this.success){
var viter119 = this.success[kiter118]
output.writeString(kiter118)
{
output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, viter119.length)
{
for(var kiter120 in viter119){
var viter121 = viter119[kiter120]
output.writeString(kiter120)
output.writeString(viter121)
}
}
output.writeMapEnd()
}
}
}
output.writeMapEnd()
}
output.writeFieldEnd()
}
if (null != this.nfe) {
output.writeFieldBegin('nfe', Thrift.Type.STRUCT, 1)
this.nfe.write(output)
output.writeFieldEnd()
}
output.writeFieldStop()
output.writeStructEnd()
return
}

CassandraClient = function(input, output) {
  this.input  = input
  this.output = null == output ? input : output
  this.seqid  = 0
}
CassandraClient.prototype = {}
CassandraClient.prototype.get = function(keyspace,key,column_path,consistency_level){
this.send_get(keyspace, key, column_path, consistency_level)
return this.recv_get()
}

CassandraClient.prototype.send_get = function(keyspace,key,column_path,consistency_level){
this.output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.nfe) {
  throw result.nfe
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get failed: unknown result"
}
CassandraClient.prototype.get_slice = function(keyspace,key,column_parent,predicate,consistency_level){
this.send_get_slice(keyspace, key, column_parent, predicate, consistency_level)
return this.recv_get_slice()
}

CassandraClient.prototype.send_get_slice = function(keyspace,key,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('get_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_slice_args()
args.keyspace = keyspace
args.key = key
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_slice failed: unknown result"
}
CassandraClient.prototype.multiget = function(keyspace,keys,column_path,consistency_level){
this.send_multiget(keyspace, keys, column_path, consistency_level)
return this.recv_multiget()
}

CassandraClient.prototype.send_multiget = function(keyspace,keys,column_path,consistency_level){
this.output.writeMessageBegin('multiget', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_args()
args.keyspace = keyspace
args.keys = keys
args.column_path = column_path
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget failed: unknown result"
}
CassandraClient.prototype.multiget_slice = function(keyspace,keys,column_parent,predicate,consistency_level){
this.send_multiget_slice(keyspace, keys, column_parent, predicate, consistency_level)
return this.recv_multiget_slice()
}

CassandraClient.prototype.send_multiget_slice = function(keyspace,keys,column_parent,predicate,consistency_level){
this.output.writeMessageBegin('multiget_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_multiget_slice_args()
args.keyspace = keyspace
args.keys = keys
args.column_parent = column_parent
args.predicate = predicate
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_multiget_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_multiget_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "multiget_slice failed: unknown result"
}
CassandraClient.prototype.get_count = function(keyspace,key,column_parent,consistency_level){
this.send_get_count(keyspace, key, column_parent, consistency_level)
return this.recv_get_count()
}

CassandraClient.prototype.send_get_count = function(keyspace,key,column_parent,consistency_level){
this.output.writeMessageBegin('get_count', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_count_args()
args.keyspace = keyspace
args.key = key
args.column_parent = column_parent
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_count = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_count_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_count failed: unknown result"
}
CassandraClient.prototype.get_key_range = function(keyspace,column_family,start,finish,count,consistency_level){
this.send_get_key_range(keyspace, column_family, start, finish, count, consistency_level)
return this.recv_get_key_range()
}

CassandraClient.prototype.send_get_key_range = function(keyspace,column_family,start,finish,count,consistency_level){
this.output.writeMessageBegin('get_key_range', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_key_range_args()
args.keyspace = keyspace
args.column_family = column_family
args.start = start
args.finish = finish
args.count = count
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_key_range = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_key_range_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_key_range failed: unknown result"
}
CassandraClient.prototype.get_range_slice = function(keyspace,column_parent,predicate,start_key,finish_key,row_count,consistency_level){
this.send_get_range_slice(keyspace, column_parent, predicate, start_key, finish_key, row_count, consistency_level)
return this.recv_get_range_slice()
}

CassandraClient.prototype.send_get_range_slice = function(keyspace,column_parent,predicate,start_key,finish_key,row_count,consistency_level){
this.output.writeMessageBegin('get_range_slice', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_range_slice_args()
args.keyspace = keyspace
args.column_parent = column_parent
args.predicate = predicate
args.start_key = start_key
args.finish_key = finish_key
args.row_count = row_count
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_range_slice = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_range_slice_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
throw "get_range_slice failed: unknown result"
}
CassandraClient.prototype.insert = function(keyspace,key,column_path,value,timestamp,consistency_level){
this.send_insert(keyspace, key, column_path, value, timestamp, consistency_level)
this.recv_insert()
}

CassandraClient.prototype.send_insert = function(keyspace,key,column_path,value,timestamp,consistency_level){
this.output.writeMessageBegin('insert', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_insert_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.value = value
args.timestamp = timestamp
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_insert = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_insert_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.batch_insert = function(keyspace,key,cfmap,consistency_level){
this.send_batch_insert(keyspace, key, cfmap, consistency_level)
this.recv_batch_insert()
}

CassandraClient.prototype.send_batch_insert = function(keyspace,key,cfmap,consistency_level){
this.output.writeMessageBegin('batch_insert', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_batch_insert_args()
args.keyspace = keyspace
args.key = key
args.cfmap = cfmap
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_batch_insert = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_batch_insert_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.remove = function(keyspace,key,column_path,timestamp,consistency_level){
this.send_remove(keyspace, key, column_path, timestamp, consistency_level)
this.recv_remove()
}

CassandraClient.prototype.send_remove = function(keyspace,key,column_path,timestamp,consistency_level){
this.output.writeMessageBegin('remove', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_remove_args()
args.keyspace = keyspace
args.key = key
args.column_path = column_path
args.timestamp = timestamp
args.consistency_level = consistency_level
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_remove = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_remove_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.ire) {
  throw result.ire
}
if (null != result.ue) {
  throw result.ue
}
if (null != result.te) {
  throw result.te
}
return
}
CassandraClient.prototype.get_string_property = function(property){
this.send_get_string_property(property)
return this.recv_get_string_property()
}

CassandraClient.prototype.send_get_string_property = function(property){
this.output.writeMessageBegin('get_string_property', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_string_property_args()
args.property = property
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_string_property = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_string_property_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "get_string_property failed: unknown result"
}
CassandraClient.prototype.get_string_list_property = function(property){
this.send_get_string_list_property(property)
return this.recv_get_string_list_property()
}

CassandraClient.prototype.send_get_string_list_property = function(property){
this.output.writeMessageBegin('get_string_list_property', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_get_string_list_property_args()
args.property = property
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_get_string_list_property = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_get_string_list_property_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
throw "get_string_list_property failed: unknown result"
}
CassandraClient.prototype.describe_keyspace = function(keyspace){
this.send_describe_keyspace(keyspace)
return this.recv_describe_keyspace()
}

CassandraClient.prototype.send_describe_keyspace = function(keyspace){
this.output.writeMessageBegin('describe_keyspace', Thrift.MessageType.CALL, this.seqid)
var args = new Cassandra_describe_keyspace_args()
args.keyspace = keyspace
args.write(this.output)
this.output.writeMessageEnd()
return this.output.getTransport().flush()
}

CassandraClient.prototype.recv_describe_keyspace = function(){
var ret = this.input.readMessageBegin()
var fname = ret.fname
var mtype = ret.mtype
var rseqid= ret.rseqid
if (mtype == Thrift.MessageType.EXCEPTION) {
  var x = new Thrift.ApplicationException()
  x.read(this.input)
  this.input.readMessageEnd()
  throw x
}
var result = new Cassandra_describe_keyspace_result()
result.read(this.input)
this.input.readMessageEnd()

if (null != result.success ) {
  return result.success
}
if (null != result.nfe) {
  throw result.nfe
}
throw "describe_keyspace failed: unknown result"
}
