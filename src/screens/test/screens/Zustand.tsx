import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MyPressable from "../../../components/MyPressable";
import create from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueries,
} from "@tanstack/react-query";
import { DataStore } from "aws-amplify";
import { Post, User } from "../../../models";

export const usePostStore = create((set) => ({
  posts: [],
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  //
  requestAjax: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
  },
}));

type CountStoreType = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

export const useCountStore = create<CountStoreType>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

function Card() {
  const { count } = useCountStore();
  return (
    <View>
      <Text>카드 {count}</Text>
    </View>
  );
}

const queryClient = new QueryClient();

function Example() {
  const { data: users } = useQuery(["users"], () => DataStore.query(User));
  const { isLoading, error, data, status } = useQuery(
    ["posts"],
    () => DataStore.query(Post),
    {
      refetchOnWindowFocus: false, // 다른 화면 접속하고, 다시 돌아오면 새로고침
      retry: 1, // 실패하면 1번 더 시도
      refetchOnMount: false, // 처음에만 새로고침
      refetchOnReconnect: false, // 네트워크 재연결시 새로고침
      refetchInterval: false, // 5초마다 새로고침
      refetchIntervalInBackground: false, // 백그라운드에서 5초마다 새로고침
      onSuccess: (data) => {
        // 성공시
        console.log("onSuccess", data.length);
      },
      onError: (error) => {
        // api 호출 실패시 (401, 404 아님)
        console.log("onError", error);
      },
      onSettled: (data, error) => {
        // 성공, 실패 상관없이
        console.log("onSettled", data.length, error);
      },
      enabled: !!users && users.length > 0, // users가 있을 때만 실행
    }
  );
  const mutation = useMutation(
    () => {
      return null;
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["todos"]);
      },
    }
  );

  const result = useQueries({
    queries: [
      {
        queryKey: ["posts"],
        queryFn: () => DataStore.query(Post),
        staleTime: 1000,
      },
      {
        queryKey: ["users"],
        queryFn: () => DataStore.query(User),
        staleTime: 1000,
      },
    ],
  });

  // success, error, loading, idle
  // console.log("status", status);

  if (isLoading) return <Text>Loading...</Text>;

  // if (error) return <Text>An error has occurred : {error.message}</Text>;

  return (
    <View>
      {data.map((item) => (
        <View key={item.id}>
          <Image
            source={{ uri: item.imageUri }}
            style={{ width: 100, height: 100 }}
          />
          <Text>{item.link}</Text>
        </View>
      ))}
    </View>
  );
}

function Zustand() {
  const { count, increase } = useCountStore();
  useEffect(() => {
    increase();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Text>구독자 {count}</Text>
      <Card />
      <Example />
      <MyPressable onPress={increase}>
        <Text>구독하기</Text>
      </MyPressable>
    </QueryClientProvider>
  );
}

export default Zustand;
