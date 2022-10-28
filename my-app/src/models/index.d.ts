import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TermsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerComment = {
  readonly id: string;
  readonly text: string;
  readonly recomment?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly id: string;
  readonly text: string;
  readonly recomment?: (string | null)[] | null;
  readonly userID: string;
  readonly postID: string;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment, CommentMetaData>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

type EagerTag = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTag = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Tag = LazyLoading extends LazyLoadingDisabled ? EagerTag : LazyTag

export declare const Tag: (new (init: ModelInit<Tag, TagMetaData>) => Tag) & {
  copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

type EagerTerms = {
  readonly id: string;
  readonly Required: boolean;
  readonly Event?: boolean | null;
  readonly Night?: boolean | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly termsUserId?: string | null;
}

type LazyTerms = {
  readonly id: string;
  readonly Required: boolean;
  readonly Event?: boolean | null;
  readonly Night?: boolean | null;
  readonly User: AsyncItem<User | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly termsUserId?: string | null;
}

export declare type Terms = LazyLoading extends LazyLoadingDisabled ? EagerTerms : LazyTerms

export declare const Terms: (new (init: ModelInit<Terms, TermsMetaData>) => Terms) & {
  copyOf(source: Terms, mutator: (draft: MutableModel<Terms, TermsMetaData>) => MutableModel<Terms, TermsMetaData> | void): Terms;
}

type EagerUser = {
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
  readonly Stories?: (Story | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly bookMark?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
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
  readonly Posts: AsyncCollection<Post>;
  readonly Stories: AsyncCollection<Story>;
  readonly Comments: AsyncCollection<Comment>;
  readonly bookMark?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerPost = {
  readonly id: string;
  readonly userID: string;
  readonly imageUri: string;
  readonly link: string;
  readonly text: string;
  readonly Tag?: Tag | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postTagId?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly userID: string;
  readonly imageUri: string;
  readonly link: string;
  readonly text: string;
  readonly Tag: AsyncItem<Tag | undefined>;
  readonly Comments: AsyncCollection<Comment>;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postTagId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post, PostMetaData>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

type EagerStory = {
  readonly id: string;
  readonly userID: string;
  readonly imageUri?: string | null;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Story, StoryMetaData>);
  static copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}

type LazyStory = {
  readonly id: string;
  readonly userID: string;
  readonly imageUri?: string | null;
  readonly likes?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Story = LazyLoading extends LazyLoadingDisabled ? EagerStory : LazyStory

export declare const Story: (new (init: ModelInit<Story, StoryMetaData>) => Story) & {
  copyOf(source: Story, mutator: (draft: MutableModel<Story, StoryMetaData>) => MutableModel<Story, StoryMetaData> | void): Story;
}