var f90_The_NetCDF_Fortran_90_Interface_Guide =
[
    [ "1 Use of the NetCDF Library", "f90-use-of-the-netcdf-library.html", [
      [ "1.1 Creating a NetCDF Dataset ", "f90-use-of-the-netcdf-library.html#f90-creating-a-netcdf-dataset", null ],
      [ "1.2 Reading a NetCDF Dataset with Known Names ", "f90-use-of-the-netcdf-library.html#f90-reading-a-netcdf-dataset-with-known-names", null ],
      [ "1.3 Reading a netCDF Dataset with Unknown Names ", "f90-use-of-the-netcdf-library.html#f90-reading-a-netcdf-dataset-with-unknown-names", null ],
      [ "1.4 Writing Data in an Existing NetCDF Dataset ", "f90-use-of-the-netcdf-library.html#f90-writing-data-in-an-existing-netcdf-dataset", null ],
      [ "1.5 Adding New Dimensions, Variables, Attributes ", "f90-use-of-the-netcdf-library.html#f90-adding-new-dimensions-variables-attributes", null ],
      [ "1.6 Error Handling ", "f90-use-of-the-netcdf-library.html#f90-error-handling", null ],
      [ "1.7 Compiling and Linking with the NetCDF Library ", "f90-use-of-the-netcdf-library.html#f90-compiling-and-linking-with-the-netcdf-library", null ]
    ] ],
    [ "2 Datasets", "f90_datasets.html", [
      [ "2.1 Datasets Introduction ", "f90_datasets.html#f90-datasets-introduction", null ],
      [ "2.2 NetCDF Library Interface Descriptions ", "f90_datasets.html#f90-netcdf-library-interface-descriptions", null ],
      [ "2.3 NF90_STRERROR ", "f90_datasets.html#f90-nf90_strerror", null ],
      [ "2.4 Get netCDF library version: NF90_INQ_LIBVERS ", "f90_datasets.html#f90-get-netcdf-library-version-nf90_inq_libvers", null ],
      [ "2.5 NF90_CREATE ", "f90_datasets.html#f90-nf90_create", null ],
      [ "2.6 NF90_OPEN ", "f90_datasets.html#f90-nf90_open", null ],
      [ "2.7 NF90_REDEF ", "f90_datasets.html#f90-nf90_redef", null ],
      [ "2.8 NF90_ENDDEF ", "f90_datasets.html#f90-nf90_enddef", null ],
      [ "2.9 NF90_CLOSE ", "f90_datasets.html#f90-nf90_close", null ],
      [ "2.10 NF90_INQUIRE Family ", "f90_datasets.html#f90-nf90_inquire-family", null ],
      [ "2.11 NF90_SYNC ", "f90_datasets.html#f90-nf90_sync", null ],
      [ "2.12 NF90_ABORT ", "f90_datasets.html#f90-nf90_abort", null ],
      [ "2.13 NF90_SET_FILL ", "f90_datasets.html#f90-nf90_set_fill", null ]
    ] ],
    [ "3 Groups", "f90_groups.html", [
      [ "3.1 Find a Group ID: NF90_INQ_NCID ", "f90_groups.html#f90-find-a-group-id-nf90_inq_ncid", null ],
      [ "3.2 Get a List of Groups in a Group: NF90_INQ_GRPS ", "f90_groups.html#f90-get-a-list-of-groups-in-a-group-nf90_inq_grps", null ],
      [ "3.3 Find all the Variables in a Group: NF90_INQ_VARIDS ", "f90_groups.html#f90-find-all-the-variables-in-a-group-nf90_inq_varids", null ],
      [ "3.4 Find all Dimensions Visible in a Group: NF90_INQ_DIMIDS ", "f90_groups.html#f90-find-all-dimensions-visible-in-a-group-nf90_inq_dimids", null ],
      [ "3.5 Find the Length of a Group’s Full Name: NF90_INQ_GRPNAME_LEN ", "f90_groups.html#f90-find-the-length-of-a-groups-full-name-nf90_inq_grpname_len", null ],
      [ "3.6 Find a Group’s Name: NF90_INQ_GRPNAME ", "f90_groups.html#f90-find-a-groups-name-nf90_inq_grpname", null ],
      [ "3.7 Find a Group’s Full Name: NF90_INQ_GRPNAME_FULL ", "f90_groups.html#f90-find-a-groups-full-name-nf90_inq_grpname_full", null ],
      [ "3.8 Find a Group’s Parent: NF90_INQ_GRP_PARENT ", "f90_groups.html#f90-find-a-groups-parent-nf90_inq_grp_parent", null ],
      [ "3.9 Find a Group by Name: NF90_INQ_GRP_NCID ", "f90_groups.html#f90-find-a-group-by-name-nf90_inq_grp_ncid", null ],
      [ "3.10 Find a Group by its Fully-qualified Name: NF90_INQ_GRP_FULL_NCID ", "f90_groups.html#f90-find-a-group-by-its-fully-qualified-name-nf90_inq_grp_full_ncid", null ],
      [ "3.11 Create a New Group: NF90_DEF_GRP ", "f90_groups.html#f90-create-a-new-group-nf90_def_grp", null ]
    ] ],
    [ "4 Dimensions", "f90_dimensions.html", [
      [ "4.1 Dimensions Introduction ", "f90_dimensions.html#f90-dimensions-introduction", null ],
      [ "4.2 NF90_DEF_DIM ", "f90_dimensions.html#f90-nf90_def_dim", null ],
      [ "4.3 NF90_INQ_DIMID ", "f90_dimensions.html#f90-nf90_inq_dimid", null ],
      [ "4.4 NF90_INQUIRE_DIMENSION ", "f90_dimensions.html#f90-nf90_inquire_dimension", null ],
      [ "4.5 NF90_RENAME_DIM ", "f90_dimensions.html#f90-nf90_rename_dim", null ]
    ] ],
    [ "5 User Defined Data Types", "f90-user-defined-data-types.html", [
      [ "5.1 User Defined Types Introduction ", "f90-user-defined-data-types.html#f90-user-defined-types-introduction", null ],
      [ "5.2 Learn the IDs of All Types in Group: NF90_INQ_TYPEIDS ", "f90-user-defined-data-types.html#f90-learn-the-ids-of-all-types-in-group-nf90_inq_typeids", null ],
      [ "5.3 Find a Typeid from Group and Name: nf90_inq_typeid ", "f90-user-defined-data-types.html#f90-find-a-typeid-from-group-and-name-nf90_inq_typeid", null ],
      [ "5.4 Learn About a User Defined Type: NF90_INQ_TYPE ", "f90-user-defined-data-types.html#f90-learn-about-a-user-defined-type-nf90_inq_type", null ],
      [ "5.5 Learn About a User Defined Type: NF90_INQ_USER_TYPE ", "f90-user-defined-data-types.html#f90-learn-about-a-user-defined-type-nf90_inq_user_type", [
        [ "5.5.1 Set a Variable Length Array with NF90_PUT_VLEN_ELEMENT", "f90-user-defined-data-types.html#f90-set-a-variable-length-array-with-nf90_put_vlen_element", null ],
        [ "5.5.2 Set a Variable Length Array with NF90_GET_VLEN_ELEMENT", "f90-user-defined-data-types.html#f90-set-a-variable-length-array-with-nf90_get_vlen_element", null ]
      ] ],
      [ "5.6 Compound Types Introduction ", "f90-user-defined-data-types.html#f90-compound-types-introduction", [
        [ "5.6.1 Creating a Compound Type: NF90_DEF_COMPOUND", "f90-user-defined-data-types.html#f90-creating-a-compound-type-nf90_def_compound", null ],
        [ "5.6.2 Inserting a Field into a Compound Type: NF90_INSERT_COMPOUND", "f90-user-defined-data-types.html#f90-inserting-a-field-into-a-compound-type-nf90_insert_compound", null ],
        [ "5.6.3 Inserting an Array Field into a Compound Type: NF90_INSERT_ARRAY_COMPOUND", "f90-user-defined-data-types.html#f90-inserting-an-array-field-into-a-compound-type-nf90_insert_array_compound", null ],
        [ "5.6.4 Learn About a Compound Type: NF90_INQ_COMPOUND", "f90-user-defined-data-types.html#f90-learn-about-a-compound-type-nf90_inq_compound", null ],
        [ "5.6.5 Learn About a Field of a Compound Type: NF90_INQ_COMPOUND_FIELD", "f90-user-defined-data-types.html#f90-learn-about-a-field-of-a-compound-type-nf90_inq_compound_field", null ]
      ] ],
      [ "5.7 Variable Length Array Introduction ", "f90-user-defined-data-types.html#f90-variable-length-array-introduction", [
        [ "5.7.1 Define a Variable Length Array (VLEN): NF90_DEF_VLEN", "f90-user-defined-data-types.html#f90-define-a-variable-length-array-vlen-nf90_def_vlen", null ],
        [ "5.7.2 Learning about a Variable Length Array (VLEN) Type: NF90_INQ_VLEN", "f90-user-defined-data-types.html#f90-learning-about-a-variable-length-array-vlen-type-nf90_inq_vlen", null ],
        [ "5.7.3 Releasing Memory for a Variable Length Array (VLEN) Type: NF90_FREE_VLEN", "f90-user-defined-data-types.html#f90-releasing-memory-for-a-variable-length-array-vlen-type-nf90_free_vlen", null ]
      ] ],
      [ "5.8 Opaque Type Introduction ", "f90-user-defined-data-types.html#f90-opaque-type-introduction", [
        [ "5.8.1 Creating Opaque Types: NF90_DEF_OPAQUE", "f90-user-defined-data-types.html#f90-creating-opaque-types-nf90_def_opaque", null ],
        [ "5.8.2 Learn About an Opaque Type: NF90_INQ_OPAQUE", "f90-user-defined-data-types.html#f90-learn-about-an-opaque-type-nf90_inq_opaque", null ]
      ] ],
      [ "5.9 Enum Type Introduction ", "f90-user-defined-data-types.html#f90-enum-type-introduction", [
        [ "5.9.1 Creating a Enum Type: NF90_DEF_ENUM", "f90-user-defined-data-types.html#f90-creating-a-enum-type-nf90_def_enum", null ],
        [ "5.9.2 Inserting a Field into a Enum Type: NF90_INSERT_ENUM", "f90-user-defined-data-types.html#f90-inserting-a-field-into-a-enum-type-nf90_insert_enum", null ],
        [ "5.9.3 Learn About a Enum Type: NF90_INQ_ENUM", "f90-user-defined-data-types.html#f90-learn-about-a-enum-type-nf90_inq_enum", null ],
        [ "5.9.4 Learn the Name of a Enum Type: nf90_inq_enum_member", "f90-user-defined-data-types.html#f90-learn-the-name-of-a-enum-type-nf90_inq_enum_member", null ],
        [ "5.9.5 Learn the Name of a Enum Type: NF90_INQ_ENUM_IDENT", "f90-user-defined-data-types.html#f90-learn-the-name-of-a-enum-type-nf90_inq_enum_ident", null ]
      ] ]
    ] ],
    [ "6 Variables", "f90-variables.html", [
      [ "6.1 Variables Introduction ", "f90-variables.html#f90-variables-introduction", null ],
      [ "6.2 Language Types Corresponding to netCDF external data types ", "f90-variables.html#f90-language-types-corresponding-to-netcdf-external-data-types", null ],
      [ "6.3 Create a Variable: `NF90_DEF_VAR` ", "f90-variables.html#f90-create-a-variable-nf90_def_var", null ],
      [ "6.4 Define Fill Parameters for a Variable: `nf90_def_var_fill` ", "f90-variables.html#f90-define-fill-parameters-for-a-variable-nf90_def_var_fill", null ],
      [ "6.5 Learn About Fill Parameters for a Variable: `NF90_INQ_VAR_FILL` ", "f90-variables.html#f90-learn-about-fill-parameters-for-a-variable-nf90_inq_var_fill", null ],
      [ "6.6 Get Information about a Variable from Its ID: NF90_INQUIRE_VARIABLE ", "f90-variables.html#f90-get-information-about-a-variable-from-its-id-nf90_inquire_variable", null ],
      [ "6.7 Get the ID of a variable from the name: NF90_INQ_VARID ", "f90-variables.html#f90-get-the-id-of-a-variable-from-the-name-nf90_inq_varid", null ],
      [ "6.8 Writing Data Values: NF90_PUT_VAR ", "f90-variables.html#f90-writing-data-values-nf90_put_var", null ],
      [ "6.9 Reading Data Values: NF90_GET_VAR ", "f90-variables.html#f90-reading-data-values-nf90_get_var", null ],
      [ "6.10 Reading and Writing Character String Values ", "f90-variables.html#f90-reading-and-writing-character-string-values", null ],
      [ "6.11 Fill Values ", "f90-variables.html#f90-fill-values", null ],
      [ "6.12 NF90_RENAME_VAR ", "f90-variables.html#f90-nf90_rename_var", null ],
      [ "6.13 Change between Collective and Independent Parallel Access: NF90_VAR_PAR_ACCESS ", "f90-variables.html#f90-change-between-collective-and-independent-parallel-access-nf90_var_par_access", null ]
    ] ],
    [ "7 Attributes", "f90-attributes.html", [
      [ "7.1 Attributes Introduction ", "f90-attributes.html#f90-attributes-introduction", null ],
      [ "7.2 Create an Attribute: NF90_PUT_ATT ", "f90-attributes.html#f90-create-an-attribute-nf90_put_att", null ],
      [ "7.3 Get Information about an Attribute: NF90_INQUIRE_ATTRIBUTE and NF90_INQ_ATTNAME ", "f90-attributes.html#f90-get-information-about-an-attribute-nf90_inquire_attribute-and-nf90_inq_attname", null ],
      [ "7.4 Get Attribute’s Values: NF90_GET_ATT ", "f90-attributes.html#f90-get-attributes-values-nf90_get_att", null ],
      [ "7.5 Copy Attribute from One NetCDF to Another: NF90_COPY_ATT ", "f90-attributes.html#f90-copy-attribute-from-one-netcdf-to-another-nf90_copy_att", null ],
      [ "7.6 Rename an Attribute: NF90_RENAME_ATT ", "f90-attributes.html#f90-rename-an-attribute-nf90_rename_att", null ],
      [ "7.7 NF90_DEL_ATT ", "f90-attributes.html#f90-nf90_del_att", null ]
    ] ]
];