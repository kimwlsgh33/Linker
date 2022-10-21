/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTerms = /* GraphQL */ `
  query GetTerms($id: ID!) {
    getTerms(id: $id) {
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
export const listTerms = /* GraphQL */ `
  query ListTerms(
    $filter: ModelTermsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTerms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Required
        Event
        Night
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        termsUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTerms = /* GraphQL */ `
  query SyncTerms(
    $filter: ModelTermsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTerms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Required
        Event
        Night
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        termsUserId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
