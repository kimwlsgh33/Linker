import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs";
import { TPost, TComment } from "../global";
import { Post, Story } from "../models";

//=======[ Stack Navigation ]===================================================
//================================================================================================
//================================================================================================
// 스택 네비게이터에 있는 스크린들의 타입을 정의
// key: 스크린 이름
// value: 스크린에 전달할 파라미터들의 타입
export type RootStackParamList = {
  OuterHomeTab: NavigatorScreenParams<OuterHomeTabParamList>;
  ProfileTopTab: NavigatorScreenParams<ProfileTopTabParamList>;
  FollowTab: NavigatorScreenParams<FollowTabParamList>;
  Post: undefined;
  Story: any;
  SignUp: undefined;
  Login: undefined;
  EditProfile: any;
  Posts: undefined;
  Video: undefined;
  Discover: { post: Post };
  NotFound: undefined;
  Setting: undefined;
  User2: undefined;
  Modal: any;
  Modal2: any;
  Modal3: undefined;
  Modal4: any;
  Comment: undefined;
  UploadImage: undefined;
  TestModal: undefined;
  SearchResult: undefined;
  ProfileUser: any;
};

// 스택 네비게이터 > 스크린 > props의 타입 - 건드리지 말것
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

//=======[ Outer Home Tab Navigation ]===================================================
//================================================================================================
//================================================================================================
export type OuterHomeTabParamList = {
  UploadTab: undefined;
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
  Test: undefined;
};

export type OuterHomeTabScreenProps<T extends keyof OuterHomeTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<OuterHomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

//=======[ Home Tab Navigation ]===================================================
//================================================================================================
//================================================================================================
export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Reels: undefined;
  Alert: undefined;
  Profile: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    OuterHomeTabScreenProps<keyof OuterHomeTabParamList>
  >;

//=======[ Profile Top Tab Navigation ]===================================================
//================================================================================================
//================================================================================================
export type ProfileTopTabParamList = {
  Posts: undefined;
  Video: undefined;
  Tags: undefined;
};

export type ProfileBottomTabScreenProps<
  T extends keyof ProfileTopTabParamList
> = CompositeScreenProps<
  MaterialTopTabScreenProps<ProfileTopTabParamList, T>,
  HomeTabScreenProps<keyof HomeTabParamList>
>;

//=======[ Follow Tab Navigation ]===================================================
//================================================================================================
//================================================================================================
export type FollowTabParamList = {
  followers: undefined;
  following: undefined;
};

export type FollowTabScreenProps<T extends keyof FollowTabParamList> =
  CompositeScreenProps<
    MaterialTopTabScreenProps<FollowTabParamList, T>,
    HomeTabScreenProps<keyof HomeTabParamList>
  >;

//=======[ Upload Tab Navigation ]===================================================
//================================================================================================
//================================================================================================
export type UploadTabParamList = {
  TakePicture: undefined;
  UploadImage: undefined;
};

export type UploadTabScreenProps<T extends keyof UploadTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<UploadTabParamList, T>,
    OuterHomeTabScreenProps<keyof OuterHomeTabParamList>
  >;

//================================================================================================
//================================================================================================

// 기본 네비게이션 타입 지정 - 건드리지 말것
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// import type { HomeTabScreenProps } from '../navigation/types';

// function PopularScreen({ navigation, route }: HomeTabScreenProps<'Popular'>) {
//   // ...
// }
