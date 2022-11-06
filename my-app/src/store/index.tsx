import { FunctionComponent } from "react";
import { Linking } from "react-native";
import { State } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import create from "zustand";
import Modal from "../components/Modal";
import { User, Post, Comment } from "../models";
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

type CommentStoreType = {
  comments: Comment[];
  setComments: (comments: Comment[]) => void;
};

export const useCommentStore = create<CommentStoreType>((set) => ({
  comments: [],
  setComments: (comments: Comment[]) => set(() => ({ comments: comments })),
}));

type MeStoreType = {
  me: User;
  setMe: (me: User) => void;
  addBookMark: (post_id: string) => any;
  // likePost: (post: Post) => any;
  // following: (id: string) => any;
  favorite: (id: string) => any;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: null,
  setMe: (me) => set(() => ({ me })),
  addBookMark: (post_id) => {
    set((state) => ({
      me: {
        ...state.me,
        bookMark: state.me.bookMark.includes(post_id)
          ? state.me.bookMark.filter((id) => {
              id != post_id;
            })
          : [...state.me.bookMark, post_id],
      },
    }));
  },
  // 내가 팔로우 하는 사람의 아이디를 인자로 받기
  // following: (id) => {
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       following: state.me.
  //     },
  //   }));
  // },

  // 나를 팔로우 하는 사람의 아이디를 인자로 받기
  // follower: (id) =>
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       followers: [...state.me.followers, id],
  //     },
  //   })),

  // 즐겨찾기 한 사람의 아이디를 인자로 받기
  favorite: (id) =>
    set((state) => ({
      me: {
        ...state.me,
        favorite: state.me.favorite.includes(id)
          ? state.me.favorite.filter((id) => id != id)
          : [...state.me.favorite, id],
      },
    })),
}));

type PostStoreType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
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

  addClick: ({ post_id, user_id }: { post_id: any; user_id: any }) => void;

  addCommentLikeUser: ({
    user_id,
    post_id,
    comment_id,
  }: {
    user_id: string;
    post_id: string;
    comment_id: string;
  }) => void;
};

export const usePostStore = create<PostStoreType>((set) => ({
  posts: new Array(10).fill(0).map((_, idx) => {
    return {
      id: idx.toString(),
      text: "test" + idx,
      link: "https://www.google.com",
      imageUrls: [
        "https://picsum.photos/seed/500/500",
        "https://picsum.photos/500/500",
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userID: "user_id_test",
      Comments: [
        {
          id: "1",
          text: "test1",
          userID: "user_id_test",
          postID: idx.toString(),
          likes: [],
        },
        {
          id: "2",
          text: "test2",
          userID: "user_id_test",
          postID: idx.toString(),
          likes: [],
        },
      ],
      likes: [],
      bookMark: [],
      postTagId: "1",
      Tag: {
        id: "1",
        text: "IU",
      },
    };
  }),
  setPosts: (posts) => set(() => ({ posts })),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
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
            likes: post.likes.includes(user_id)
              ? post.likes.filter((id) => id !== id)
              : [...post.likes, user_id],
          };
        }
        return post;
      }),
    })),

  // 댓글 좋아요
  addCommentLikeUser: ({ user_id, post_id, comment_id }) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            Comments: post.Comments.map((comment) => {
              if (comment.id === comment_id) {
                return {
                  ...comment,
                  likes: comment.likes.includes(user_id)
                    ? comment.likes.filter((id) => id !== id)
                    : [...comment.likes, user_id],
                };
              }
              return comment;
            }),
          };
        }
        return post;
      }),
    })),

  // 클릭 수 상태 관리 스토어
  addClick: ({ post_id, user_id }) => {
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            clicked: post.clicked?.includes(user_id)
              ? post.clicked
              : [...post.clicked, user_id],
          };
        }
        return post;
      }),
    }));
  },
}));
