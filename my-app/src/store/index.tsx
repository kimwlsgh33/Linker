
import React from "react";
import create from "zustand";
import { Post, User } from "../models";

type MeStoreType = {
  me?: User;
  setMe: (me: User) => void;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: null,
  setMe: (me) => set(() => ({ me })),
  addBookMark: (post: Post) =>
    set((state) => ({
      me: {
        ...state.me,
        BookMark: [...state.me.bookMark, post],
      },
    })),
}));

type PostStoreType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
};

export const usePostStore = create<PostStoreType>((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts: posts })),
  addPost: (post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
}));
