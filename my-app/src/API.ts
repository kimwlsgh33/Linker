/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTermsInput = {
  id?: string | null,
  Required?: boolean | null,
  Event?: boolean | null,
  Night?: boolean | null,
  _version?: number | null,
  termsUserId: string,
};

export type ModelTermsConditionInput = {
  Required?: ModelBooleanInput | null,
  Event?: ModelBooleanInput | null,
  Night?: ModelBooleanInput | null,
  and?: Array< ModelTermsConditionInput | null > | null,
  or?: Array< ModelTermsConditionInput | null > | null,
  not?: ModelTermsConditionInput | null,
  termsUserId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Terms = {
  __typename: "Terms",
  id: string,
  Required?: boolean | null,
  Event?: boolean | null,
  Night?: boolean | null,
  User: User,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  termsUserId: string,
};

export type User = {
  __typename: "User",
  id: string,
  email?: string | null,
  mobile?: string | null,
  username: string,
  name: string,
  nickname: string,
  password: string,
  Posts?: ModelPostConnection | null,
  followings?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  birthday?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  text: string,
  link: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTermsInput = {
  id: string,
  Required?: boolean | null,
  Event?: boolean | null,
  Night?: boolean | null,
  _version?: number | null,
  termsUserId: string,
};

export type DeleteTermsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  text: string,
  link: string,
  userID: string,
  _version?: number | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  link?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  text?: string | null,
  link?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePostInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  email?: string | null,
  mobile?: string | null,
  username: string,
  name: string,
  nickname: string,
  password: string,
  followings?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  birthday?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  password?: ModelStringInput | null,
  followings?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  mobile?: string | null,
  username?: string | null,
  name?: string | null,
  nickname?: string | null,
  password?: string | null,
  followings?: Array< string | null > | null,
  followers?: Array< string | null > | null,
  birthday?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type ModelTermsFilterInput = {
  id?: ModelIDInput | null,
  Required?: ModelBooleanInput | null,
  Event?: ModelBooleanInput | null,
  Night?: ModelBooleanInput | null,
  and?: Array< ModelTermsFilterInput | null > | null,
  or?: Array< ModelTermsFilterInput | null > | null,
  not?: ModelTermsFilterInput | null,
  termsUserId?: ModelIDInput | null,
};

export type ModelTermsConnection = {
  __typename: "ModelTermsConnection",
  items:  Array<Terms | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  text?: ModelStringInput | null,
  link?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  mobile?: ModelStringInput | null,
  username?: ModelStringInput | null,
  name?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  password?: ModelStringInput | null,
  followings?: ModelStringInput | null,
  followers?: ModelStringInput | null,
  birthday?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateTermsMutationVariables = {
  input: CreateTermsInput,
  condition?: ModelTermsConditionInput | null,
};

export type CreateTermsMutation = {
  createTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type UpdateTermsMutationVariables = {
  input: UpdateTermsInput,
  condition?: ModelTermsConditionInput | null,
};

export type UpdateTermsMutation = {
  updateTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type DeleteTermsMutationVariables = {
  input: DeleteTermsInput,
  condition?: ModelTermsConditionInput | null,
};

export type DeleteTermsMutation = {
  deleteTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTermsQueryVariables = {
  id: string,
};

export type GetTermsQuery = {
  getTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type ListTermsQueryVariables = {
  filter?: ModelTermsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTermsQuery = {
  listTerms?:  {
    __typename: "ModelTermsConnection",
    items:  Array< {
      __typename: "Terms",
      id: string,
      Required?: boolean | null,
      Event?: boolean | null,
      Night?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      termsUserId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTermsQueryVariables = {
  filter?: ModelTermsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTermsQuery = {
  syncTerms?:  {
    __typename: "ModelTermsConnection",
    items:  Array< {
      __typename: "Terms",
      id: string,
      Required?: boolean | null,
      Event?: boolean | null,
      Night?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      termsUserId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      text: string,
      link: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPostsQuery = {
  syncPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      text: string,
      link: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTermsSubscription = {
  onCreateTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type OnUpdateTermsSubscription = {
  onUpdateTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type OnDeleteTermsSubscription = {
  onDeleteTerms?:  {
    __typename: "Terms",
    id: string,
    Required?: boolean | null,
    Event?: boolean | null,
    Night?: boolean | null,
    User:  {
      __typename: "User",
      id: string,
      email?: string | null,
      mobile?: string | null,
      username: string,
      name: string,
      nickname: string,
      password: string,
      followings?: Array< string | null > | null,
      followers?: Array< string | null > | null,
      birthday?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    termsUserId: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    text: string,
    link: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    mobile?: string | null,
    username: string,
    name: string,
    nickname: string,
    password: string,
    Posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    followings?: Array< string | null > | null,
    followers?: Array< string | null > | null,
    birthday?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
