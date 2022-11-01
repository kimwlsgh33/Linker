import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TermMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tag {
  readonly id: string;
  readonly text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Story {
  readonly id: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

export declare class Comment {
  readonly id: string;
  readonly text: string;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Term {
  readonly id: string;
  readonly required: boolean;
  readonly event: boolean;
  readonly night: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Term, TermMetaData>);
  static copyOf(source: Term, mutator: (draft: MutableModel<Term, TermMetaData>) => MutableModel<Term, TermMetaData> | void): Term;
}

export declare class Post {
  readonly id: string;
  readonly text: string;
  readonly link: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly Tag: Tag;
  readonly clicked?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postTagId: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly nickname: string;
  readonly password: string;
  readonly birthday?: string | null;
  readonly Term: Term;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Stories?: (Story | null)[] | null;
  readonly profpic?: string | null;
  readonly bookMark?: (string | null)[] | null;
  readonly favorite?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTermId: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}