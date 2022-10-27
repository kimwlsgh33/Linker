import { FunctionComponent } from "react";
import { State } from "react-native-gesture-handler";
import create from "zustand";
import Modal from "../components/Modal";
import { Comment } from "../models";

import { User, Post } from "../models";
import { postsSlice } from "./slices";

type ModalStoreType = {
  modal: boolean;
  shareModal: boolean;
  linkModal: boolean;
  bookMark: boolean;
  qrModal: boolean;
  favorite: boolean;
  isFavorite: boolean;
  follow: boolean;
  isFollowed: boolean;

  setModal: (modal: boolean) => void;
  setShareModal: (shareModal: boolean) => void;
  setLinkModal: (linkModal: boolean) => void;
  setBookMark: (bookMark: boolean) => void;
  setQrModal: (qrModal: boolean) => void;
  setFavorite: (favorite: boolean) => void;
  setIsFavorite: (isFavorite: boolean) => void;
  setFollow: (follow: boolean) => void;
  setIsFollowed: (isFollowed: boolean) => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  modal: false,
  shareModal: false,
  linkModal: false,
  bookMark: false,
  qrModal: false,
  favorite: false,
  isFavorite: false,
  follow: false,
  isFollowed: false,

  setModal: (modal) => set(() => ({ modal: !modal })),
  setShareModal: (shareModal) => set(() => ({ shareModal: !shareModal })),
  setLinkModal: (linkModal) => set(() => ({ linkModal: !linkModal })),
  setBookMark: (bookMark) => set(() => ({ bookMark: !bookMark })),
  setQrModal: (qrModal) => set(() => ({ qrModal: !qrModal })),
  setFavorite: (favorite) => set(() => ({ favorite: !favorite })),
  setIsFavorite: (isFavorite) => set(() => ({ isFavorite: !isFavorite })),
  setFollow: (follow) => set(() => ({ follow: !follow })),
  setIsFollowed: (isFollowed) => set(() => ({ isFollowed: !isFollowed })),
}));

type MeStoreType = {
  me: User;
  setMe: (me: User) => void;
  addBookMark: (post_id: string) => any;
  // likePost: (post: Post) => any;
  following: (id: string) => any;
  favorite: (id: string) => any;
};

type PostStoreType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addComment: ({
    comment,
    postId,
  }: {
    comment: Comment;
    postId: string;
  }) => void;
  addLikeUser: ({
    user_id,
    post_id,
  }: {
    user_id: string;
    post_id: string;
  }) => void;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: null,
  setMe: (me) => set(() => ({ me })),
  addBookMark: (post_id) => {
    set((state) => ({
      me: {
        ...state.me,
        bookMark: [...state.me.bookMark, post_id],
      },
    }));
  },
  // likePost: (post: Post) => {
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       likePosts: [...state.me.likePosts, post],
  //     },
  //   }));
  // },

  // 내가 팔로우 하는 사람의 아이디를 인자로 받기
  following: (id) => {
    set((state) => ({
      me: {
        ...state.me,
        following: [...state.me.following, id],
      },
    }));
  },

  // 나를 팔로우 하는 사람의 아이디를 인자로 받기
  follower: (id) =>
    set((state) => ({
      me: {
        ...state.me,
        followers: [...state.me.followers, id],
      },
    })),

  // 즐겨찾기 한 사람의 아이디를 인자로 받기
  favorite: (id) =>
    set((state) => ({
      me: {
        ...state.me,
        favorite: [...state.me.favorite, id],
      },
    })),
}));

export const usePostStore = create<PostStoreType>((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts })),
  addComment: ({ comment, postId }) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            Comments: [...post.Comments, comment],
          };
        }
        return post;
      }),
    })),
  addLikeUser: ({ user_id, post_id }) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            likes: [...post.likes, user_id],
          };
        }
        return post;
      }),
    })),
}));
