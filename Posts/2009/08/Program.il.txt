.class private auto ansi beforefieldinit Program
    extends [mscorlib]System.Object
{
    .method public hidebysig specialname rtspecialname instance void .ctor() cil managed
    {
        .maxstack 8
        L_0000: ldarg.0 
        L_0001: call instance void [mscorlib]System.Object::.ctor()
        L_0006: ret 
    }

    .method private hidebysig static void Main(string[] args) cil managed
    {
        .entrypoint
        .maxstack 3
        .locals init (
            [0] valuetype [mscorlib]System.TimeSpan s1,
            [1] valuetype [mscorlib]System.TimeSpan s2,
            [2] valuetype [mscorlib]System.TimeSpan s3,
            [3] valuetype [mscorlib]System.TimeSpan s4,
            [4] valuetype [mscorlib]System.TimeSpan s5,
            [5] valuetype [mscorlib]System.TimeSpan s6,
            [6] valuetype [mscorlib]System.TimeSpan s7,
            [7] valuetype [mscorlib]System.TimeSpan s8,
            [8] class [System]System.Diagnostics.Stopwatch sw,
            [9] int32 x,
            [10] int32 i,
            [11] int32 V_11,
            [12] int32 V_12,
            [13] int32 V_13,
            [14] int32 V_14,
            [15] int32 V_15,
            [16] int32 V_16,
            [17] int32 V_17)
        L_0000: ldloca.s s8
        L_0002: ldc.i4.0 
        L_0003: conv.i8 
        L_0004: call instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_0009: ldloca.s s8
        L_000b: ldobj [mscorlib]System.TimeSpan
        L_0010: dup 
        L_0011: stloc.s s7
        L_0013: dup 
        L_0014: stloc.s s6
        L_0016: dup 
        L_0017: stloc.s s5
        L_0019: dup 
        L_001a: stloc.3 
        L_001b: dup 
        L_001c: stloc.2 
        L_001d: dup 
        L_001e: stloc.1 
        L_001f: stloc.0 
        L_0020: newobj instance void [System]System.Diagnostics.Stopwatch::.ctor()
        L_0025: stloc.s sw
        L_0027: ldc.i4.0 
        L_0028: stloc.s x
        L_002a: br L_02fd
        L_002f: ldloc.s sw
        L_0031: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_0036: ldc.i4.0 
        L_0037: stloc.s i
        L_0039: br.s L_0047
        L_003b: ldsfld string ConsoleApplication1.Program/Static1::Name
        L_0040: pop 
        L_0041: ldloc.s i
        L_0043: ldc.i4.1 
        L_0044: add 
        L_0045: stloc.s i
        L_0047: ldloc.s i
        L_0049: ldc.i4 0x7ffffffe
        L_004e: blt.s L_003b
        L_0050: ldloc.s sw
        L_0052: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_0057: ldloc.0 
        L_0058: ldloc.s sw
        L_005a: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_005f: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_0064: stloc.0 
        L_0065: ldstr "Static1: "
        L_006a: ldloc.s sw
        L_006c: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0071: box [mscorlib]System.TimeSpan
        L_0076: call string [mscorlib]System.String::Concat(object, object)
        L_007b: call void [mscorlib]System.Console::WriteLine(string)
        L_0080: ldloc.s sw
        L_0082: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_0087: ldloc.s sw
        L_0089: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_008e: ldc.i4.0 
        L_008f: stloc.s V_11
        L_0091: br.s L_009f
        L_0093: ldsfld string ConsoleApplication1.Program/Static2::Name
        L_0098: pop 
        L_0099: ldloc.s V_11
        L_009b: ldc.i4.1 
        L_009c: add 
        L_009d: stloc.s V_11
        L_009f: ldloc.s V_11
        L_00a1: ldc.i4 0x7ffffffe
        L_00a6: blt.s L_0093
        L_00a8: ldloc.s sw
        L_00aa: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_00af: ldloc.1 
        L_00b0: ldloc.s sw
        L_00b2: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_00b7: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_00bc: stloc.1 
        L_00bd: ldstr "Static2: "
        L_00c2: ldloc.s sw
        L_00c4: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_00c9: box [mscorlib]System.TimeSpan
        L_00ce: call string [mscorlib]System.String::Concat(object, object)
        L_00d3: call void [mscorlib]System.Console::WriteLine(string)
        L_00d8: ldloc.s sw
        L_00da: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_00df: ldloc.s sw
        L_00e1: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_00e6: ldc.i4.0 
        L_00e7: stloc.s V_12
        L_00e9: br.s L_00f7
        L_00eb: call string ConsoleApplication1.Program/Static3::get_Name()
        L_00f0: pop 
        L_00f1: ldloc.s V_12
        L_00f3: ldc.i4.1 
        L_00f4: add 
        L_00f5: stloc.s V_12
        L_00f7: ldloc.s V_12
        L_00f9: ldc.i4 0x7ffffffe
        L_00fe: blt.s L_00eb
        L_0100: ldloc.s sw
        L_0102: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_0107: ldloc.2 
        L_0108: ldloc.s sw
        L_010a: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_010f: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_0114: stloc.2 
        L_0115: ldstr "Static3: "
        L_011a: ldloc.s sw
        L_011c: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0121: box [mscorlib]System.TimeSpan
        L_0126: call string [mscorlib]System.String::Concat(object, object)
        L_012b: call void [mscorlib]System.Console::WriteLine(string)
        L_0130: ldloc.s sw
        L_0132: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_0137: ldloc.s sw
        L_0139: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_013e: ldc.i4.0 
        L_013f: stloc.s V_13
        L_0141: br.s L_014f
        L_0143: ldsfld string ConsoleApplication1.Program/Static4::Name
        L_0148: pop 
        L_0149: ldloc.s V_13
        L_014b: ldc.i4.1 
        L_014c: add 
        L_014d: stloc.s V_13
        L_014f: ldloc.s V_13
        L_0151: ldc.i4 0x7ffffffe
        L_0156: blt.s L_0143
        L_0158: ldloc.s sw
        L_015a: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_015f: ldloc.3 
        L_0160: ldloc.s sw
        L_0162: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0167: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_016c: stloc.3 
        L_016d: ldstr "Static4: "
        L_0172: ldloc.s sw
        L_0174: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0179: box [mscorlib]System.TimeSpan
        L_017e: call string [mscorlib]System.String::Concat(object, object)
        L_0183: call void [mscorlib]System.Console::WriteLine(string)
        L_0188: ldloc.s sw
        L_018a: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_018f: ldloc.s sw
        L_0191: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_0196: ldc.i4.0 
        L_0197: stloc.s V_14
        L_0199: br.s L_01a7
        L_019b: ldsfld string ConsoleApplication1.Program/Static5::Name
        L_01a0: pop 
        L_01a1: ldloc.s V_14
        L_01a3: ldc.i4.1 
        L_01a4: add 
        L_01a5: stloc.s V_14
        L_01a7: ldloc.s V_14
        L_01a9: ldc.i4 0x7ffffffe
        L_01ae: blt.s L_019b
        L_01b0: ldloc.s sw
        L_01b2: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_01b7: ldloc.s s5
        L_01b9: ldloc.s sw
        L_01bb: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_01c0: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_01c5: stloc.s s5
        L_01c7: ldstr "Static5: "
        L_01cc: ldloc.s sw
        L_01ce: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_01d3: box [mscorlib]System.TimeSpan
        L_01d8: call string [mscorlib]System.String::Concat(object, object)
        L_01dd: call void [mscorlib]System.Console::WriteLine(string)
        L_01e2: ldloc.s sw
        L_01e4: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_01e9: ldloc.s sw
        L_01eb: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_01f0: ldc.i4.0 
        L_01f1: stloc.s V_15
        L_01f3: br.s L_0201
        L_01f5: ldsfld string ConsoleApplication1.Program/Static5::Name
        L_01fa: pop 
        L_01fb: ldloc.s V_15
        L_01fd: ldc.i4.1 
        L_01fe: add 
        L_01ff: stloc.s V_15
        L_0201: ldloc.s V_15
        L_0203: ldc.i4 0x7ffffffe
        L_0208: blt.s L_01f5
        L_020a: ldloc.s sw
        L_020c: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_0211: ldloc.s s6
        L_0213: ldloc.s sw
        L_0215: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_021a: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_021f: stloc.s s6
        L_0221: ldstr "Static6: "
        L_0226: ldloc.s sw
        L_0228: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_022d: box [mscorlib]System.TimeSpan
        L_0232: call string [mscorlib]System.String::Concat(object, object)
        L_0237: call void [mscorlib]System.Console::WriteLine(string)
        L_023c: ldloc.s sw
        L_023e: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_0243: ldloc.s sw
        L_0245: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_024a: ldc.i4.0 
        L_024b: stloc.s V_16
        L_024d: br.s L_025b
        L_024f: call string ConsoleApplication1.Program/Static7::get_Name()
        L_0254: pop 
        L_0255: ldloc.s V_16
        L_0257: ldc.i4.1 
        L_0258: add 
        L_0259: stloc.s V_16
        L_025b: ldloc.s V_16
        L_025d: ldc.i4 0x7ffffffe
        L_0262: blt.s L_024f
        L_0264: ldloc.s sw
        L_0266: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_026b: ldloc.s s7
        L_026d: ldloc.s sw
        L_026f: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0274: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_0279: stloc.s s7
        L_027b: ldstr "Static7: "
        L_0280: ldloc.s sw
        L_0282: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_0287: box [mscorlib]System.TimeSpan
        L_028c: call string [mscorlib]System.String::Concat(object, object)
        L_0291: call void [mscorlib]System.Console::WriteLine(string)
        L_0296: ldloc.s sw
        L_0298: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_029d: ldloc.s sw
        L_029f: callvirt instance void [System]System.Diagnostics.Stopwatch::Start()
        L_02a4: ldc.i4.0 
        L_02a5: stloc.s V_17
        L_02a7: br.s L_02b5
        L_02a9: ldsfld string ConsoleApplication1.Program/Static8::Name
        L_02ae: pop 
        L_02af: ldloc.s V_17
        L_02b1: ldc.i4.1 
        L_02b2: add 
        L_02b3: stloc.s V_17
        L_02b5: ldloc.s V_17
        L_02b7: ldc.i4 0x7ffffffe
        L_02bc: blt.s L_02a9
        L_02be: ldloc.s sw
        L_02c0: callvirt instance void [System]System.Diagnostics.Stopwatch::Stop()
        L_02c5: ldloc.s s8
        L_02c7: ldloc.s sw
        L_02c9: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_02ce: call valuetype [mscorlib]System.TimeSpan [mscorlib]System.TimeSpan::op_Addition(valuetype [mscorlib]System.TimeSpan, valuetype [mscorlib]System.TimeSpan)
        L_02d3: stloc.s s8
        L_02d5: ldstr "Static8: "
        L_02da: ldloc.s sw
        L_02dc: callvirt instance valuetype [mscorlib]System.TimeSpan [System]System.Diagnostics.Stopwatch::get_Elapsed()
        L_02e1: box [mscorlib]System.TimeSpan
        L_02e6: call string [mscorlib]System.String::Concat(object, object)
        L_02eb: call void [mscorlib]System.Console::WriteLine(string)
        L_02f0: ldloc.s sw
        L_02f2: callvirt instance void [System]System.Diagnostics.Stopwatch::Reset()
        L_02f7: ldloc.s x
        L_02f9: ldc.i4.1 
        L_02fa: add 
        L_02fb: stloc.s x
        L_02fd: ldloc.s x
        L_02ff: ldc.i4.5 
        L_0300: blt L_002f
        L_0305: ldstr "--------------------------------------------------"
        L_030a: call void [mscorlib]System.Console::WriteLine(string)
        L_030f: ldstr "Static1: "
        L_0314: ldloca.s s1
        L_0316: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_031b: ldc.i4.5 
        L_031c: conv.i8 
        L_031d: div 
        L_031e: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_0323: box [mscorlib]System.TimeSpan
        L_0328: call string [mscorlib]System.String::Concat(object, object)
        L_032d: call void [mscorlib]System.Console::WriteLine(string)
        L_0332: ldstr "Static2: "
        L_0337: ldloca.s s2
        L_0339: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_033e: ldc.i4.5 
        L_033f: conv.i8 
        L_0340: div 
        L_0341: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_0346: box [mscorlib]System.TimeSpan
        L_034b: call string [mscorlib]System.String::Concat(object, object)
        L_0350: call void [mscorlib]System.Console::WriteLine(string)
        L_0355: ldstr "Static3: "
        L_035a: ldloca.s s3
        L_035c: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_0361: ldc.i4.5 
        L_0362: conv.i8 
        L_0363: div 
        L_0364: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_0369: box [mscorlib]System.TimeSpan
        L_036e: call string [mscorlib]System.String::Concat(object, object)
        L_0373: call void [mscorlib]System.Console::WriteLine(string)
        L_0378: ldstr "Static4: "
        L_037d: ldloca.s s4
        L_037f: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_0384: ldc.i4.5 
        L_0385: conv.i8 
        L_0386: div 
        L_0387: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_038c: box [mscorlib]System.TimeSpan
        L_0391: call string [mscorlib]System.String::Concat(object, object)
        L_0396: call void [mscorlib]System.Console::WriteLine(string)
        L_039b: ldstr "Static5: "
        L_03a0: ldloca.s s5
        L_03a2: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_03a7: ldc.i4.5 
        L_03a8: conv.i8 
        L_03a9: div 
        L_03aa: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_03af: box [mscorlib]System.TimeSpan
        L_03b4: call string [mscorlib]System.String::Concat(object, object)
        L_03b9: call void [mscorlib]System.Console::WriteLine(string)
        L_03be: ldstr "Static6: "
        L_03c3: ldloca.s s6
        L_03c5: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_03ca: ldc.i4.5 
        L_03cb: conv.i8 
        L_03cc: div 
        L_03cd: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_03d2: box [mscorlib]System.TimeSpan
        L_03d7: call string [mscorlib]System.String::Concat(object, object)
        L_03dc: call void [mscorlib]System.Console::WriteLine(string)
        L_03e1: ldstr "Static7: "
        L_03e6: ldloca.s s7
        L_03e8: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_03ed: ldc.i4.5 
        L_03ee: conv.i8 
        L_03ef: div 
        L_03f0: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_03f5: box [mscorlib]System.TimeSpan
        L_03fa: call string [mscorlib]System.String::Concat(object, object)
        L_03ff: call void [mscorlib]System.Console::WriteLine(string)
        L_0404: ldstr "Static8: "
        L_0409: ldloca.s s8
        L_040b: call instance int64 [mscorlib]System.TimeSpan::get_Ticks()
        L_0410: ldc.i4.5 
        L_0411: conv.i8 
        L_0412: div 
        L_0413: newobj instance void [mscorlib]System.TimeSpan::.ctor(int64)
        L_0418: box [mscorlib]System.TimeSpan
        L_041d: call string [mscorlib]System.String::Concat(object, object)
        L_0422: call void [mscorlib]System.Console::WriteLine(string)
        L_0427: call int32 [mscorlib]System.Console::Read()
        L_042c: pop 
        L_042d: ret 
    }



    .class abstract auto ansi sealed nested public beforefieldinit Static1
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick Berardi"
            L_0005: stsfld string ConsoleApplication1.Program/Static1::Name
            L_000a: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static1::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static1::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }

    .class abstract auto ansi sealed nested public Static2
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick Berardi"
            L_0005: stsfld string ConsoleApplication1.Program/Static2::Name
            L_000a: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static2::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static2::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }

    .class abstract auto ansi sealed nested public beforefieldinit Static3
        extends [mscorlib]System.Object
    {
        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: call string ConsoleApplication1.Program/Static3::get_Name()
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: call string ConsoleApplication1.Program/Static3::get_Name()
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .property class string Name
        {
            .get string ConsoleApplication1.Program/Static3::get_Name()
        }


        .field public static string _Name

    }

    .class abstract auto ansi sealed nested public Static4
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick"
            L_0005: stsfld string ConsoleApplication1.Program/Static4::Name
            L_000a: ldsfld string ConsoleApplication1.Program/Static4::Name
            L_000f: ldstr " Berardi"
            L_0014: call string [mscorlib]System.String::Concat(string, string)
            L_0019: stsfld string ConsoleApplication1.Program/Static4::Name
            L_001e: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static4::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static4::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }

    .class auto ansi nested public beforefieldinit Static5
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick Berardi"
            L_0005: stsfld string ConsoleApplication1.Program/Static5::Name
            L_000a: ret 
        }

        .method public hidebysig specialname rtspecialname instance void .ctor() cil managed
        {
            .maxstack 8
            L_0000: ldarg.0 
            L_0001: call instance void [mscorlib]System.Object::.ctor()
            L_0006: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static5::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static5::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }

    .class auto ansi nested public Static6
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick Berardi"
            L_0005: stsfld string ConsoleApplication1.Program/Static6::Name
            L_000a: ret 
        }

        .method public hidebysig specialname rtspecialname instance void .ctor() cil managed
        {
            .maxstack 8
            L_0000: ldarg.0 
            L_0001: call instance void [mscorlib]System.Object::.ctor()
            L_0006: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static6::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static6::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }

    .class auto ansi nested public beforefieldinit Static7
        extends [mscorlib]System.Object
    {
        .method public hidebysig specialname rtspecialname instance void .ctor() cil managed
        {
            .maxstack 8
            L_0000: ldarg.0 
            L_0001: call instance void [mscorlib]System.Object::.ctor()
            L_0006: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: call string ConsoleApplication1.Program/Static7::get_Name()
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: call string ConsoleApplication1.Program/Static7::get_Name()
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .property class string Name
        {
            .get string ConsoleApplication1.Program/Static7::get_Name()
        }


        .field public static string _Name

    }

    .class auto ansi nested public Static8
        extends [mscorlib]System.Object
    {
        .method private hidebysig specialname rtspecialname static void .cctor() cil managed
        {
            .maxstack 8
            L_0000: ldstr "Nick"
            L_0005: stsfld string ConsoleApplication1.Program/Static8::Name
            L_000a: ldsfld string ConsoleApplication1.Program/Static8::Name
            L_000f: ldstr " Berardi"
            L_0014: call string [mscorlib]System.String::Concat(string, string)
            L_0019: stsfld string ConsoleApplication1.Program/Static8::Name
            L_001e: ret 
        }

        .method public hidebysig specialname rtspecialname instance void .ctor() cil managed
        {
            .maxstack 8
            L_0000: ldarg.0 
            L_0001: call instance void [mscorlib]System.Object::.ctor()
            L_0006: ret 
        }

        .method public hidebysig static string GetName() cil managed
        {
            .maxstack 8
            L_0000: ldsfld string ConsoleApplication1.Program/Static8::Name
            L_0005: call bool [mscorlib]System.String::IsNullOrEmpty(string)
            L_000a: brtrue.s L_0012
            L_000c: ldsfld string ConsoleApplication1.Program/Static8::Name
            L_0011: ret 
            L_0012: ldstr "None Set"
            L_0017: ret 
        }


        .field public static string Name

    }
}