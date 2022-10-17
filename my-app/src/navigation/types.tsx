import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TComment, TPost } from "../global";

// 스택 네비게이터에 있는 스크린들의 타입을 정의 - TODO: 화면 추가시, 작성
// key: 스크린 이름
// value: 스크린에 전달할 파라미터들의 타입
export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<BottomTabParamList>;
  Welcome: undefined;
  Details: undefined;
  Post: undefined;
  Story: undefined;
  SignUp: undefined;
  Discover: { post: TPost };
  NotFound: undefined;
  Comment: TComment;
};

// 스택 네비게이터 > 스크린 > props의 타입 - 건드리지 말것
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

// 탭 네비게이터에 있는 스크린들의 타입을 정의 - TODO: 화면 추가시, 작성
// key: 스크린 이름
// value: 스크린에 전달할 파라미터들의 타입
export type BottomTabParamList = {
  Instagram: undefined;
  Search: undefined;
  Reels: undefined;
  Detail: undefined;
  Profile: undefined;
};

// 탭 네비게이터 > 스크린 > props의 타입 - 건드리지 말것
export type HomeTabScreenProps<T extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

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
