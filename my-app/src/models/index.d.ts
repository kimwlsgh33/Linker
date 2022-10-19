import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TermsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Terms {
  readonly id: string;
  readonly Required?: boolean | null;
  readonly Event?: boolean | null;
  readonly Night?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Terms, TermsMetaData>);
  static copyOf(source: Terms, mutator: (draft: MutableModel<Terms, TermsMetaData>) => MutableModel<Terms, TermsMetaData> | void): Terms;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly link: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly email?: string | null;
  readonly mobile?: string | null;
  readonly username: string;
  readonly name: string;
  readonly nickname: string;
  readonly password: string;
  readonly Posts?: (Post | null)[] | null;
  readonly followings?: (string | null)[] | null;
  readonly followers?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}