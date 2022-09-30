/**
 * 네비게이션 스크린의 타입
 *
 * key: 네비게이션 스크린의 이름
 * params: 네비게이션 스크린에 전달할 파라미터
 */
declare namespace ReactNavigation {
  interface RootParamList {
    BottomTabScreen: any; //BottomTab->BottomTabScreen
    Welcome: any;
    Details: any;
    Post: any;
    Comment: any; // 9/30 추가
    Story: { name: string; image: any; userName: string }; // 9/30userName 추가
    Instagram: any;
    Search: any;
    Reels: any;
    Detail: any;
    Profile: any;
  }
}
