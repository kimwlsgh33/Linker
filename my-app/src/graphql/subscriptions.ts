/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTerms = /* GraphQL */ `
  subscription OnCreateTerms {
    onCreateTerms {
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
export const onUpdateTerms = /* GraphQL */ `
  subscription OnUpdateTerms {
    onUpdateTerms {
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
export const onDeleteTerms = /* GraphQL */ `
  subscription OnDeleteTerms {
    onDeleteTerms {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
