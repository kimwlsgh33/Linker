import { ModelInit, MutableModel } from "@aws-amplify/datastore";

<<<<<<< HEAD
=======
type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

>>>>>>> 60c4501136423448532c4e663e703067213ebacd
type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

<<<<<<< HEAD
type TermsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

=======
>>>>>>> 60c4501136423448532c4e663e703067213ebacd
type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

<<<<<<< HEAD
type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Comment {
  readonly id: string;
  readonly text: string;
  readonly recomment?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Tag {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Terms {
  readonly id: string;
  readonly Required: boolean;
  readonly Event?: boolean | null;
  readonly Night?: boolean | null;
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
  readonly password: string;
  readonly birthday?: string | null;
  readonly profpic?: string | null;
  readonly following?: (string | null)[] | null;
  readonly followers?: (string | null)[] | null;
  readonly favorite?: (string | null)[] | null;
  readonly Posts?: (Post | null)[] | null;
  readonly BookMark?: (Post | null)[] | null;
  readonly Stories?: (Story | null)[] | null;
  readonly likePosts?: (Post | null)[] | null;
  readonly likeStories?: (Story | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
=======
type TermsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
>>>>>>> 60c4501136423448532c4e663e703067213ebacd
}

export declare class Story {
  readonly id: string;
<<<<<<< HEAD
  readonly userID: string;
  readonly imageUri: string;
  readonly link: string;
  readonly text: string;
  readonly Tag?: Tag | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postTagId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Story {
  readonly id: string;
  readonly userID: string;
  readonly imageUri?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
=======
  readonly show?: string[] | null;
  readonly imageUrl: string[];
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

export declare class Comment {
  readonly id: string;
  readonly text: string;
  readonly userID: string;
  readonly postID: string;
  readonly recomment?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
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
  readonly link: string;
  readonly text: string;
  readonly userID: string;
  readonly tagID: string;
  readonly Comments?: (Comment | null)[] | null;
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
  readonly favoriteMenu?: (string | null)[] | null;
  readonly likeposts?: (Post | null)[] | null;
  readonly likePosts?: (Post | null)[] | null;
  readonly likeStories?: (Story | null)[] | null;
  readonly Stories?: (Story | null)[] | null;
  readonly showStories?: (Story | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
>>>>>>> 60c4501136423448532c4e663e703067213ebacd
}