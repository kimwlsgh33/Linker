import { useMemo } from "react";

type Style = {
  [key: string]: any;
};

/**
 *
 * @param style style을 받아서 useMemo를 사용하여 style을 저장
 * @param deps
 * @returns
 */
export const useStyle = (style: Style, deps: any[] = []) => {
  return useMemo(() => style, deps);
};
