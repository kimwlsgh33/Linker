/**
 * 기존의 네비게이션 스크린의 타입을 지우고,
 * 스크린 내부에서 사용할 데이터의 타입을 지정하는 파일로 변경
 * 여러 스크린에서, 동일한 타입의 데이터를 사용하는 경우가 많기 때문에, (ex 유저정보)
 * 스크린 외부에서, 하나의 파일로 관리한다.
 */

export type TImage = {
  id: string;
  uri: string;
};

export type TPost = {
  id: string;
  user_id: string;
  images: TImage[];
  createdAt: string;
};

export type TStory = {
  name: data.name;
  image: data.image;
  userName: data.userName;
};

export type TRecomment = {
  id: number;
  recomment: string;
  recommentLike: boolean;
  recommentLikeCount: number;
};

export type TFollowList = {
  userId: string;
  follow: boolean;
};

export type TPost1 = {
  id: number;
  userId: string;
  postPersonImage: ImageSourcePropType;
  postImage: ImageSourcePropType;
  likes: number;
  isLiked: boolean;
  bookMark: boolean;
  comment: string;
  recommentCount: number;
  recomment: TRecomment[];
  favorite: boolean;
  followList: TFollowList[];
};

export type TComment = {
  comment: string;
  userId: string;
  postPersonImage: TImage;
  myId: string;
  mypostPersonImage: TImage;
  id: number;
  recomment: data.recomment;
};

export type TReel = {
  id: string;
  type: string;
  uri: string;
  createdAt: string;
};

export type TPostAndReels = {
  id: string;
  posts: TPost[];
  reels: TReel[];
};
