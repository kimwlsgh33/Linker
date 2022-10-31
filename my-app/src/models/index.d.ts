import { ModelInit, MutableModel } from "@aws-amplify/datastore";
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
  AsyncItem,
} from "@aws-amplify/datastore";
type StoryMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type CommentMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type TermMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type PostMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type UserMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type EagerStory = {
  readonly id: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyStory = {
  readonly id: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: string | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Story = LazyLoading extends LazyLoadingDisabled
  ? EagerStory
  : LazyStory;

export declare const Story: (new (
  init: ModelInit<Story, StoryMetaData>
) => Story) & {
  copyOf(
    source: Story,
    mutator: (
      draft: MutableModel<Story, StoryMetaData>
    ) => MutableModel<Story, StoryMetaData> | void
  ): Story;
};

type EagerComment = {
  readonly id: string;
  readonly text: string;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyComment = {
  readonly id: string;
  readonly text: string;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Comment = LazyLoading extends LazyLoadingDisabled
  ? EagerComment
  : LazyComment;

export declare const Comment: (new (
  init: ModelInit<Comment, CommentMetaData>
) => Comment) & {
  copyOf(
    source: Comment,
    mutator: (
      draft: MutableModel<Comment, CommentMetaData>
    ) => MutableModel<Comment, CommentMetaData> | void
  ): Comment;
};

type EagerTerm = {
  readonly id: string;
  readonly required: boolean;
  readonly event: boolean;
  readonly night: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyTerm = {
  readonly id: string;
  readonly required: boolean;
  readonly event: boolean;
  readonly night: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Term = LazyLoading extends LazyLoadingDisabled
  ? EagerTerm
  : LazyTerm;

export declare const Term: (new (
  init: ModelInit<Term, TermMetaData>
) => Term) & {
  copyOf(
    source: Term,
    mutator: (
      draft: MutableModel<Term, TermMetaData>
    ) => MutableModel<Term, TermMetaData> | void
  ): Term;
};

type EagerPost = {
  readonly id: string;
  readonly text: string;
  readonly link: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyPost = {
  readonly id: string;
  readonly text: string;
  readonly link: string;
  readonly imageUrls?: (string | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly userID: string;
  readonly Comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Post = LazyLoading extends LazyLoadingDisabled
  ? EagerPost
  : LazyPost;

export declare const Post: (new (
  init: ModelInit<Post, PostMetaData>
) => Post) & {
  copyOf(
    source: Post,
    mutator: (
      draft: MutableModel<Post, PostMetaData>
    ) => MutableModel<Post, PostMetaData> | void
  ): Post;
};

type EagerUser = {
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
};

type LazyUser = {
  readonly id: string;
  readonly username: string;
  readonly name: string;
  readonly nickname: string;
  readonly password: string;
  readonly birthday?: string | null;
  readonly Term: AsyncItem<Term>;
  readonly Posts: AsyncCollection<Post>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Stories: AsyncCollection<Story>;
  readonly profpic?: string | null;
  readonly bookMark?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTermId: string;
};

export declare type User = LazyLoading extends LazyLoadingDisabled
  ? EagerUser
  : LazyUser;

export declare const User: (new (
  init: ModelInit<User, UserMetaData>
) => User) & {
  copyOf(
    source: User,
    mutator: (
      draft: MutableModel<User, UserMetaData>
    ) => MutableModel<User, UserMetaData> | void
  ): User;
};