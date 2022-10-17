import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type FollowersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InfluencerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LikesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FollowingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Followers {
  readonly id: string;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Followers, FollowersMetaData>);
  static copyOf(source: Followers, mutator: (draft: MutableModel<Followers, FollowersMetaData>) => MutableModel<Followers, FollowersMetaData> | void): Followers;
}

export declare class User {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly created_at?: number | null;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Followings?: Followings | null;
  readonly followersID: string;
  readonly likepostID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userFollowingsId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly title?: string | null;
  readonly textcontent?: string | null;
  readonly link?: string | null;
  readonly Influencer?: Influencer | null;
  readonly commentID: string;
  readonly userID: string;
  readonly Likes?: Likes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postInfluencerId?: string | null;
  readonly postLikesId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Influencer {
  readonly id: string;
  readonly name?: string | null;
  readonly insta?: string | null;
  readonly User?: User | null;
  readonly followingsID: string;
  readonly Followers?: Followers | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly influencerUserId?: string | null;
  readonly influencerFollowersId?: string | null;
  constructor(init: ModelInit<Influencer, InfluencerMetaData>);
  static copyOf(source: Influencer, mutator: (draft: MutableModel<Influencer, InfluencerMetaData>) => MutableModel<Influencer, InfluencerMetaData> | void): Influencer;
}

export declare class Likes {
  readonly id: string;
  readonly Users?: (User | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Likes, LikesMetaData>);
  static copyOf(source: Likes, mutator: (draft: MutableModel<Likes, LikesMetaData>) => MutableModel<Likes, LikesMetaData> | void): Likes;
}

export declare class Comment {
  readonly id: string;
  readonly comment?: string | null;
  readonly Post?: (Post | null)[] | null;
  readonly userID: string;
  readonly Likes?: Likes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly commentLikesId?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Followings {
  readonly id: string;
  readonly Influencer?: (Influencer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Followings, FollowingsMetaData>);
  static copyOf(source: Followings, mutator: (draft: MutableModel<Followings, FollowingsMetaData>) => MutableModel<Followings, FollowingsMetaData> | void): Followings;
}

export declare class Image {
  readonly id: string;
  readonly uri?: string | null;
  readonly Post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly imagePostId?: string | null;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image, ImageMetaData>) => MutableModel<Image, ImageMetaData> | void): Image;
}