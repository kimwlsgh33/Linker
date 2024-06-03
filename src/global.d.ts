// 모듈 선언, @env 모듈속에, SALT 상수가 내보내지고 이는 문자열이다.
declare module "@env" {
  export const SALT: string;
}
