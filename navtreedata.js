var NAVTREE =
[
  [ "NetCDF-Fortran", "index.html", [
    [ "Unidata NetCDF Fortran Library", "index.html", null ],
    [ "Release Notes", "nf_release_notes.html", null ],
    [ "The NetCDF Fortran 77 Interface Guide", "nc_f77_interface_guide.html", [
      [ "1 Use of the NetCDF Library ", "nc_f77_interface_guide.html#f77_Use_of_the_NetCDF_Library", [
        [ "1.1 Creating a NetCDF Dataset ", "nc_f77_interface_guide.html#f77_Creating_a_NetCDF_Dataset", null ],
        [ "1.2 Reading a NetCDF Dataset with Known Names ", "nc_f77_interface_guide.html#f77_Reading_a_NetCDF_Dataset_with_Known_Names", null ],
        [ "1.3 Reading a netCDF Dataset with Unknown Names ", "nc_f77_interface_guide.html#f77_Reading_a_netCDF_Dataset_with_Unknown_Names", null ],
        [ "1.4 Adding New Dimensions, Variables, Attributes ", "nc_f77_interface_guide.html#f77_Adding_New_Dimensions__Variables__Attributes", null ],
        [ "1.5 Error Handling ", "nc_f77_interface_guide.html#f77_Error_Handling_1_5", null ],
        [ "1.6 Compiling and Linking with the NetCDF Library ", "nc_f77_interface_guide.html#f77_Compiling_and_Linking_with_the_NetCDF_Library", null ]
      ] ],
      [ "2. Datasets  ", "nc_f77_interface_guide.html#f77_Datasets", [
        [ "2.1 Datasets Introduction ", "nc_f77_interface_guide.html#f77_Datasets_Introduction", null ],
        [ "2.2 NetCDF Library Interface Descriptions ", "nc_f77_interface_guide.html#f77_NetCDF_Library_Interface_Descriptions", null ],
        [ "2.3 NF_STRERROR ", "nc_f77_interface_guide.html#f77_NF_STRERROR", null ],
        [ "2.4 Get netCDF library version: NF_INQ_LIBVERS ", "nc_f77_interface_guide.html#f77_Get_netCDF_library_version_NF_INQ_LIBVERS", null ],
        [ "2.5 NF_CREATE ", "nc_f77_interface_guide.html#f77_NF_CREATE", null ],
        [ "2.6 NF__CREATE ", "nc_f77_interface_guide.html#f77_F__CREATE", null ],
        [ "2.7 NF_CREATE_PAR ", "nc_f77_interface_guide.html#f77_NF_CREATE_PAR", null ],
        [ "2.8 NF_OPEN  ", "nc_f77_interface_guide.html#f77_NF_OPEN_", null ],
        [ "2.9 NF__OPEN  ", "nc_f77_interface_guide.html#NF__OPEN_", null ],
        [ "2.10 NF_OPEN_PAR  ", "nc_f77_interface_guide.html#f77_NF_OPEN_PAR", null ],
        [ "2.11 NF_REDEF ", "nc_f77_interface_guide.html#f77_NF-REDEF", null ],
        [ "2.12 NF_ENDDEF ", "nc_f77_interface_guide.html#f77_NF-ENDDEF", null ],
        [ "2.13 NF__ENDDEF ", "nc_f77_interface_guide.html#f77_NF__ENDDEF", null ],
        [ "2.14 NF_CLOSE ", "nc_f77_interface_guide.html#f77_NF-CLOSE", null ],
        [ "2.15 NF_INQ Family ", "nc_f77_interface_guide.html#f77_NF-INQ-Family", null ],
        [ "2.16 NF_SYNC ", "nc_f77_interface_guide.html#f77_NF-SYNC", null ],
        [ "2.17 NF_ABORT ", "nc_f77_interface_guide.html#f77_NF-ABORT", null ],
        [ "2.18 NF_SET_FILL ", "nc_f77_interface_guide.html#f77_NF-SET-FILL", null ],
        [ "2.19 NF_SET_DEFAULT_FORMAT ", "nc_f77_interface_guide.html#f77_NF-SET-DEFAULT-FORMAT", null ],
        [ "2.20 Set HDF5 Chunk Cache for Future File Opens/Creates: NF_SET_CHUNK_CACHE ", "nc_f77_interface_guide.html#f77_Set-HDF5-Chunk", null ],
        [ "2.21 Get the HDF5 Chunk Cache Settings for Future File Opens/Creates: NF_GET_CHUNK_CACHE ", "nc_f77_interface_guide.html#f77_NF-GET-CHUNK-CACHE", null ]
      ] ],
      [ "3. Groups ", "nc_f77_interface_guide.html#f77_Groups", [
        [ "3.1 Find a Group ID: NF_INQ_NCID ", "nc_f77_interface_guide.html#f77_NF-INQ-NCID", null ],
        [ "3.2 Get a List of Groups in a Group: NF_INQ_GRPS ", "nc_f77_interface_guide.html#f77_NF-INQ-GRPS", null ],
        [ "3.3 Find all the Variables in a Group: NF_INQ_VARIDS ", "nc_f77_interface_guide.html#f77_NF-INQ-VARIDS", null ],
        [ "3.4 Find all Dimensions Visible in a Group: NF_INQ_DIMIDS ", "nc_f77_interface_guide.html#f77_NF-INQ-DIMIDS", null ],
        [ "3.5 Find the Length of a Group’s Name: NF_INQ_GRPNAME_LE ", "nc_f77_interface_guide.html#f77_NF-INQ-GRPNAME-LE", null ],
        [ "3.6 Find a Group’s Name: NF_INQ_GRPNAME ", "nc_f77_interface_guide.html#f77_NF-INQ-GRPNAME", null ],
        [ "3.7 Find a Group’s Full Name: NF_INQ_GRPNAME_FULL ", "nc_f77_interface_guide.html#f77_NF-INQ-GRPNAME-FULL", null ],
        [ "3.8 Find a Group’s Parent: NF_INQ_GRP_PARENT ", "nc_f77_interface_guide.html#f77_NF-INQ-GRP-PARENT", null ],
        [ "3.9 Find a Group by Name: NF_INQ_GRP_NCID ", "nc_f77_interface_guide.html#f77_NF-INQ-GRP-NCID", null ],
        [ "3.10 Find a Group by its Fully-qualified Name: NF_INQ_GRP_FULL_NCID ", "nc_f77_interface_guide.html#f77_NF-INQ-GRP-FULL-NCID", null ],
        [ "3.11 Create a New Group: NF_DEF_GRP ", "nc_f77_interface_guide.html#f77_NF-DEF-GRP", null ]
      ] ],
      [ "4. Dimensions ", "nc_f77_interface_guide.html#f77_Dimensions", [
        [ "4.1 Dimensions Introduction ", "nc_f77_interface_guide.html#f77_Dimensions-Introduction", null ],
        [ "4.2 NF_DEF_DIM ", "nc_f77_interface_guide.html#f77_NF-DEF-DIM", null ],
        [ "4.3 NF_INQ_DIMID ", "nc_f77_interface_guide.html#f77_NF-INQ-DIMID", null ],
        [ "4.4 NF_INQ_DIM Family ", "nc_f77_interface_guide.html#f77_NF-INQ-DIM-Family", null ],
        [ "4.5 NF_RENAME_DIM ", "nc_f77_interface_guide.html#f77_NF-RENAME-DIM", null ]
      ] ],
      [ "5. User Defined Data Types ", "nc_f77_interface_guide.html#f77_User-Defined-Data-Types", [
        [ "5.1 User Defined Types Introduction ", "nc_f77_interface_guide.html#f77_User-Defined-Types-Introduction", null ],
        [ "5.2 Learn the IDs of All Types in Group: NF_INQ_TYPEIDS ", "nc_f77_interface_guide.html#f77_NF-INQ-TYPEIDS", null ],
        [ "5.3 Find a Typeid from Group and Name: NF_INQ_TYPEID ", "nc_f77_interface_guide.html#f77_NF-INQ-TYPEID", null ],
        [ "5.4 Learn About a User Defined Type: NF_INQ_TYPE ", "nc_f77_interface_guide.html#f77_NF-INQ-TYPE", null ],
        [ "5.5 Learn About a User Defined Type: NF_INQ_USER_TYPE ", "nc_f77_interface_guide.html#f77_NF-INQ-USER-TYPE", null ],
        [ "5.6 Compound Types Introduction ", "nc_f77_interface_guide.html#f77_Compound-Types-Introduction", [
          [ "5.6.1 Creating a Compound Type: NF_DEF_COMPOUND", "nc_f77_interface_guide.html#f77_NF-DEF-COMPOUND", null ],
          [ "5.6.2 Inserting a Field into a Compound Type: NF_INSERT_COMPOUND", "nc_f77_interface_guide.html#f77_NF-INSERT-COMPOUND", null ],
          [ "5.6.3 Inserting an Array Field into a Compound Type: NF_INSERT_ARRAY_COMPOUND", "nc_f77_interface_guide.html#f77_NF-INSERT-ARRAY-COMPOUND", null ],
          [ "5.6.4 Learn About a Compound Type: NF_INQ_COMPOUND", "nc_f77_interface_guide.html#f77_NF-INQ-COMPOUND", null ],
          [ "5.6.5 Learn About a Field of a Compound Type: NF_INQ_COMPOUND_FIELD", "nc_f77_interface_guide.html#f77_NF-INQ-COMPOUND-FIELD", null ]
        ] ]
      ] ],
      [ "A. NetCDF 2 to NetCDF 3 Fortran 77 Transition Guide ", "nc_f77_interface_guide.html#f77_nc2_to_nc3_transition_guide", [
        [ "A.1 Overview of FORTRAN interface changes ", "nc_f77_interface_guide.html#f77_overview_of_interface_changes", null ],
        [ "A.2 The New FORTRAN Interface ", "nc_f77_interface_guide.html#f77_new_fortran_interface", null ],
        [ "A.3 Function Naming Conventions ", "nc_f77_interface_guide.html#f77_function_naming_conventions", null ],
        [ "A.4 Type Conversion ", "nc_f77_interface_guide.html#f77_type_conversion", null ]
      ] ],
      [ "B. Summary of FORTRAN 77 Interface ", "nc_f77_interface_guide.html#f77_interface_summary", null ]
    ] ],
    [ "The NetCDF Fortran 90 Interface Guide", "f90_The-NetCDF-Fortran-90-Interface-Guide.html", "f90_The-NetCDF-Fortran-90-Interface-Guide" ]
  ] ]
];

var NAVTREEINDEX =
[
"f90-attributes.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';