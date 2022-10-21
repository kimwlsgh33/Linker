/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTerms = /* GraphQL */ `
  mutation CreateTerms(
    $input: CreateTermsInput!
    $condition: ModelTermsConditionInput
  ) {
    createTerms(input: $input, condition: $condition) {
      id
      Required
      Event
      Night
      User {
        id
        email
        mobile
        username
        name
        nickname
        password
        followings
        followers
        birthday
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      termsUserId
    }
  }
`;
export const updateTerms = /* GraphQL */ `
  mutation UpdateTerms(
    $input: UpdateTermsInput!
    $condition: ModelTermsConditionInput
  ) {
    updateTerms(input: $input, condition: $condition) {
      id
      Required
      Event
      Night
      User {
        id
        email
        mobile
        username
        name
        nickname
        password
        followings
        followers
        birthday
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      termsUserId
    }
  }
`;
export const deleteTerms = /* GraphQL */ `
  mutation DeleteTerms(
    $input: DeleteTermsInput!
    $condition: ModelTermsConditionInput
  ) {
    deleteTerms(input: $input, condition: $condition) {
      id
      Required
      Event
      Night
      User {
        id
        email
        mobile
        username
        name
        nickname
        password
        followings
        followers
        birthday
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      termsUserId
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      text
      link
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      title
      text
      link
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      title
      text
      link
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      mobile
      username
      name
      nickname
      password
      Posts {
        nextToken
        startedAt
      }
      followings
      followers
      birthday
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      mobile
      username
      name
      nickname
      password
      Posts {
        nextToken
        startedAt
      }
      followings
      followers
      birthday
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      mobile
      username
      name
      nickname
      password
      Posts {
        nextToken
        startedAt
      }
      followings
      followers
      birthday
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
