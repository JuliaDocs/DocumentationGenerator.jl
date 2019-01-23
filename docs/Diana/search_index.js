var documenterSearchIndex = {"docs": [

{
    "location": "#Diana.Parse-Tuple{Any}",
    "page": "Home",
    "title": "Diana.Parse",
    "category": "method",
    "text": "Given a GraphQL source, parses it into a Document. Throws GraphQLError if a syntax error is encountered.\n\n\n\n\n\n"
},

{
    "location": "#Diana.an_y-Tuple{Diana.Lexer,Any,Function,Any}",
    "page": "Home",
    "title": "Diana.an_y",
    "category": "method",
    "text": "Returns a possibly empty list of parse nodes, determined by   the parseFn. This list begins with a lex token of openKind   and ends with a lex token of closeKind. Advances the parser   to the next lex token after the closing token.\n\n\n\n\n\n"
},

{
    "location": "#Diana.expect-Tuple{Any,Any}",
    "page": "Home",
    "title": "Diana.expect",
    "category": "method",
    "text": "If the next token is of the given kind, return that token after advancing   the lexer. Otherwise, do not change the parser state and throw an error.\n\n\n\n\n\n"
},

{
    "location": "#Diana.expectKeyword-Tuple{Any,String}",
    "page": "Home",
    "title": "Diana.expectKeyword",
    "category": "method",
    "text": "If the next token is a keyword with the given value, return that token after   advancing the lexer. Otherwise, do not change the parser state and return   false.\n\n\n\n\n\n"
},

{
    "location": "#Diana.many-Tuple{Diana.Lexer,Any,Function,Any}",
    "page": "Home",
    "title": "Diana.many",
    "category": "method",
    "text": "Returns a non-empty list of parse nodes, determined by   the parseFn. This list begins with a lex token of openKind   and ends with a lex token of closeKind. Advances the parser   to the next lex token after the closing token.\n\n\n\n\n\n"
},

{
    "location": "#Diana.next_token-Tuple{Diana.Lexer,Any}",
    "page": "Home",
    "title": "Diana.next_token",
    "category": "method",
    "text": "If the next token is of the given kind, return true after advancing   the lexer. Otherwise, do not change the parser state and return false.\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseArgument-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseArgument",
    "category": "method",
    "text": "Argument : Name : Value\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseArgumentDefs-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseArgumentDefs",
    "category": "method",
    "text": "ArgumentsDefinition : ( InputValueDefinition+ )\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseArguments-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseArguments",
    "category": "method",
    "text": "Arguments : ( Argument+ )\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDefinition",
    "category": "method",
    "text": "Definition :     - OperationDefinition     - FragmentDefinition     - TypeSystemDefinition\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDirective-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDirective",
    "category": "method",
    "text": "Directive : @ Name Arguments?\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDirectiveDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDirectiveDefinition",
    "category": "method",
    "text": "DirectiveDefinition :     - directive @ Name ArgumentsDefinition? on DirectiveLocations\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDirectiveLocations-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDirectiveLocations",
    "category": "method",
    "text": "DirectiveLocations :     - |? Name     - DirectiveLocations | Name\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDirectives-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDirectives",
    "category": "method",
    "text": "Implements the parsing rules in the Directives section.\n\nDirectives : Directive+\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseDocument-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseDocument",
    "category": "method",
    "text": "#if length(errors)>0\n#	println(\"Syntax Error GraphQL request (x:x) Unexpected character\")\n#	errors\n	# {\"errors\":[{\"locations\":[{\"column\":5,\"line\":3}],\"message\":\"Syntax Error GraphQL request (3:5) Unexpected character \"\".\n\n2:   neomatrix{\n\n	3:     nombre\n   ^\n\n4:     linkedin \"}]}   Document : Definition+\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseEnumTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseEnumTypeDefinition",
    "category": "method",
    "text": "EnumTypeDefinition : enum Name Directives? { EnumValueDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseEnumValueDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseEnumValueDefinition",
    "category": "method",
    "text": "EnumValueDefinition : EnumValue Directives?\n\nEnumValue : Name\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseField-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseField",
    "category": "method",
    "text": "Field : Alias? Name Arguments? Directives? SelectionSet?\n\nAlias : Name : NAME\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseFieldDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseFieldDefinition",
    "category": "method",
    "text": "FieldDefinition : Name ArgumentsDefinition? : Type Directives?\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseFragment-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseFragment",
    "category": "method",
    "text": "Implements the parsing rules in the Fragments section.\n\nCorresponds to both FragmentSpread and InlineFragment in the spec.\n\nFragmentSpread : ... FragmentName Directives?\n\nInlineFragment : ... TypeCondition? Directives? SelectionSet\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseFragmentDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseFragmentDefinition",
    "category": "method",
    "text": "FragmentDefinition :     - fragment FragmentName on TypeCondition Directives? SelectionSet\n\nTypeCondition : NamedType\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseFragmentName-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseFragmentName",
    "category": "method",
    "text": "FragmentName : Name but not on\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseImplementsInterfaces-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseImplementsInterfaces",
    "category": "method",
    "text": "ImplementsInterfaces : implements NamedType+\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseInputObjectTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseInputObjectTypeDefinition",
    "category": "method",
    "text": "InputObjectTypeDefinition : input Name Directives? { InputValueDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseInputValueDef-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseInputValueDef",
    "category": "method",
    "text": "InputValueDefinition : Name : Type DefaultValue? Directives?\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseInterfaceTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseInterfaceTypeDefinition",
    "category": "method",
    "text": "InterfaceTypeDefinition : interface Name Directives? { FieldDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseList-Tuple{Diana.Lexer,Bool}",
    "page": "Home",
    "title": "Diana.parseList",
    "category": "method",
    "text": "ListValue[Const] :     - [ ]     - [ Value[?Const]+ ]\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseName-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseName",
    "category": "method",
    "text": "Converts a name lex token into a name parse node.\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseNamedType-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseNamedType",
    "category": "method",
    "text": "NamedType : Name\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseObject-Tuple{Diana.Lexer,Bool}",
    "page": "Home",
    "title": "Diana.parseObject",
    "category": "method",
    "text": "ObjectValue[Const] :     - { }     - { ObjectField[?Const]+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseObjectField-Tuple{Diana.Lexer,Bool}",
    "page": "Home",
    "title": "Diana.parseObjectField",
    "category": "method",
    "text": "ObjectField[Const] : Name : Value[?Const]\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseObjectTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseObjectTypeDefinition",
    "category": "method",
    "text": "ObjectTypeDefinition :     - type Name ImplementsInterfaces? Directives? { FieldDefinition+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseOperationDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseOperationDefinition",
    "category": "method",
    "text": "Implements the parsing rules in the Operations section.\n\nOperationDefinition :\n\nSelectionSet\nOperationType Name? VariableDefinitions? Directives? SelectionSet\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseOperationType-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseOperationType",
    "category": "method",
    "text": "Implements the parsing rules in the Document section.\n\nOperationType : one of query mutation subscription\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseScalarTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseScalarTypeDefinition",
    "category": "method",
    "text": "ScalarTypeDefinition : scalar Name Directives?\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseSchemaDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseSchemaDefinition",
    "category": "method",
    "text": "SchemaDefinition : schema Directives? { OperationTypeDefinition+ }\n\nOperationTypeDefinition : OperationType : NamedType\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseSelection-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseSelection",
    "category": "method",
    "text": "Selection :     - Field     - FragmentSpread     - InlineFragment\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseSelectionSet-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseSelectionSet",
    "category": "method",
    "text": "SelectionSet : { Selection+ }\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseType-Tuple{String}",
    "page": "Home",
    "title": "Diana.parseType",
    "category": "method",
    "text": "Given a string containing a GraphQL Type (ex. [Int!]), parse the AST for   that type.   Throws GraphQLError if a syntax error is encountered.\n\nThis is useful within tools that operate upon GraphQL Types directly and   in isolation of complete GraphQL documents.\n\nConsider providing the results to the utility function: typeFromAST().\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseTypeExtensionDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseTypeExtensionDefinition",
    "category": "method",
    "text": "TypeExtensionDefinition : extend ObjectTypeDefinition\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseTypeReference-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseTypeReference",
    "category": "method",
    "text": "Implements the parsing rules in the Types section.\n\nType :     - NamedType     - ListType     - NonNullType\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseTypeSystemDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseTypeSystemDefinition",
    "category": "method",
    "text": "Implements the parsing rules in the Type Definition section.\n\nTypeSystemDefinition :     - SchemaDefinition     - TypeDefinition     - TypeExtensionDefinition     - DirectiveDefinition\n\nTypeDefinition :     - ScalarTypeDefinition     - ObjectTypeDefinition     - InterfaceTypeDefinition     - UnionTypeDefinition     - EnumTypeDefinition     - InputObjectTypeDefinition\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseUnionMembers-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseUnionMembers",
    "category": "method",
    "text": "UnionMembers :\n- `|`? NamedType\n- UnionMembers | NamedType\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseUnionTypeDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseUnionTypeDefinition",
    "category": "method",
    "text": "UnionTypeDefinition : union Name Directives? = UnionMembers\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseValue-Tuple{String}",
    "page": "Home",
    "title": "Diana.parseValue",
    "category": "method",
    "text": "Given a string containing a GraphQL value (ex. [42]), parse the AST for   that value.   Throws GraphQLError if a syntax error is encountered.\n\nThis is useful within tools that operate upon GraphQL Values directly and   in isolation of complete GraphQL documents.\n\nConsider providing the results to the utility function: valueFromAST().\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseValueLiteral-Tuple{Diana.Lexer,Bool}",
    "page": "Home",
    "title": "Diana.parseValueLiteral",
    "category": "method",
    "text": "Implements the parsing rules in the Values section.\n\nValue[Const] :     - [~Const] Variable     - IntValue     - FloatValue     - StringValue     - BooleanValue     - NullValue     - EnumValue     - ListValue[?Const]     - ObjectValue[?Const]\n\nBooleanValue : one of true false\n\nNullValue : null\n\nEnumValue : Name but not true, false or null\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseVariable-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseVariable",
    "category": "method",
    "text": "Variable : $ Name\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseVariableDefinition-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseVariableDefinition",
    "category": "method",
    "text": "VariableDefinition : Variable : Type DefaultValue?\n\n\n\n\n\n"
},

{
    "location": "#Diana.parseVariableDefinitions-Tuple{Diana.Lexer}",
    "page": "Home",
    "title": "Diana.parseVariableDefinitions",
    "category": "method",
    "text": "VariableDefinitions : ( VariableDefinition+ )\n\n\n\n\n\n"
},

{
    "location": "#Diana.peek-Tuple{Diana.Lexer,Any}",
    "page": "Home",
    "title": "Diana.peek",
    "category": "method",
    "text": "Determines if the next token is of a given kind\n\n\n\n\n\n"
},

{
    "location": "#Diana.unexpected-Tuple{Any}",
    "page": "Home",
    "title": "Diana.unexpected",
    "category": "method",
    "text": "Helper function for creating an error when an unexpected lexed token   is encountered.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Diana]\nOrder = [:type, :function]"
},

]}
