import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TermsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tag {
  readonly id: string;
  readonly tagname: string;
  readonly Posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Post {
  readonly id: string;
  readonly imageUri?: string | null;
  readonly title: string;
  readonly link: string;
  readonly text: string;
  readonly userID: string;
  readonly tagID: string;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Terms {
  readonly id: string;
  readonly Required: boolean;
  readonly Event: boolean;
  readonly Night: boolean;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly termsUserId?: string | null;
  constructor(init: ModelInit<Terms, TermsMetaData>);
  static copyOf(source: Terms, mutator: (draft: MutableModel<Terms, TermsMetaData>) => MutableModel<Terms, TermsMetaData> | void): Terms;
}

export declare class User {
  readonly id: string;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly name: string;
  readonly nickname: string;
  readonly username: string;
  readonly Posts?: (Post | null)[] | null;
  readonly password: string;
  readonly birthday?: string | null;
  readonly BookMark?: (Post | null)[] | null;
  readonly following?: (string | null)[] | null;
  readonly followers?: (string | null)[] | null;
  readonly profpic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}