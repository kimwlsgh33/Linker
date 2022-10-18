import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type FollowersMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type UserMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type PostMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type InfluencerMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type LikesMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type CommentMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type FollowingsMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

type ImageMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

// export declare class Followers {
//   readonly id: string;
//   readonly Users?: (User | null)[] | null;
//   readonly createdAt?: string | null;
//   readonly updatedAt?: string | null;
//   constructor(init: ModelInit<Followers, FollowersMetaData>);
//   static copyOf(source: Followers, mutator: (draft: MutableModel<Followers, FollowersMetaData>) => MutableModel<Followers, FollowersMetaData> | void): Followers;
// }

export declare class User {
  // 가입시
  readonly id: string;
  readonly username: string | null;
  readonly email: string | null;
  readonly password: string | null;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  // 가입후
  readonly Posts?: (Post | null)[] | null;
  readonly Followings?: Followings | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(
    source: User,
    mutator: (
      draft: MutableModel<User, UserMetaData>
    ) => MutableModel<User, UserMetaData> | void
  ): User;
}

export declare class Post {
  // 필수
  readonly id: string;
  readonly title: string;
  readonly textcontent: string;
  readonly link: string;
  readonly userID: string;
  readonly Influencer: Influencer;
  // 선택
  readonly Comments?: (Comment | null)[] | null;
  readonly Likes?: User[] | null;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postInfluencerId?: string | null;
  readonly postLikesId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(
    source: Post,
    mutator: (
      draft: MutableModel<Post, PostMetaData>
    ) => MutableModel<Post, PostMetaData> | void
  ): Post;
}

export declare class Influencer {
  // 필수
  readonly id: string;
  readonly name?: string | null;
  readonly insta?: string | null;
  // 선택
  readonly User?: User | null;
  readonly Followers?: Followers | null;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Influencer, InfluencerMetaData>);
  static copyOf(
    source: Influencer,
    mutator: (
      draft: MutableModel<Influencer, InfluencerMetaData>
    ) => MutableModel<Influencer, InfluencerMetaData> | void
  ): Influencer;
}

export declare class Comment {
  // 필수
  readonly id: string;
  readonly comment: string;
  readonly Post: Post | null;
  readonly userID: string;
  // 선택
  readonly Likes?: User[] | null;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(
    source: Comment,
    mutator: (
      draft: MutableModel<Comment, CommentMetaData>
    ) => MutableModel<Comment, CommentMetaData> | void
  ): Comment;
}

export declare class Followings {
  // 필수
  readonly id: string;
  readonly Influencer?: (Influencer | null)[] | null;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Followings, FollowingsMetaData>);
  static copyOf(
    source: Followings,
    mutator: (
      draft: MutableModel<Followings, FollowingsMetaData>
    ) => MutableModel<Followings, FollowingsMetaData> | void
  ): Followings;
}

export declare class Image {
  // 필수
  readonly id: string;
  readonly uri: string;
  readonly Post: Post;
  // 자동
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(
    source: Image,
    mutator: (
      draft: MutableModel<Image, ImageMetaData>
    ) => MutableModel<Image, ImageMetaData> | void
  ): Image;
}
