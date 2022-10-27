import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { TPost } from "../../global";

import { v4 } from "uuid";
import { ICON_SIZE } from "react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputIcon";
import { User } from "../../models";
import { DataStore } from "aws-amplify";
import { Post } from "../../models";

// counter를 관리할 state 타입 지정
type PostsState = TPost[];

// 기본 state 설정
const initialState: PostsState = [
  // postInfo라는 배열에 객체(데이터)를 넣어줌.
  {
    // postInfo[0]
    id: 1_8371923719238173,
    user: {
      id: 12_4273498278349832441848,
      name: "김진호",
      username: "nieoodie",
      profpic: require("../../../assets/images/jinho.jpeg"),
      nickname: "nieoodie",
      password: "12345",
      followers: [],
      following: [],
      BookMark: [],
    },
    imageUri: require("../../../assets/images/pizza.jpeg"),
    likes: [],
    text: "핡",
    comments: [],
    favorite: false,
    title: "Fhk",
    link: "www.naver.com",
  },
  {
    id: 2_192312937123871,
    user: {
      id: 3743939_92575767,
      name: "정권우",
      username: "kwonwoo",
      profpic: require("../../../assets/images/woo.jpeg"),
      nickname: "kwonwoo",
      password: "12345",
      followers: [],
      following: [],
      BookMark: [],
    },
    imageUri: require("../../../assets/images/kitty.jpeg"),
    likes: [],
    text: "웅앵",
    comments: [],
    favorite: false,
    title: "Fhk",
    link: "www.naver.com",
  },
];

const getPost = async () => {
  DataStore.query(Post, (post) => post);
};

// 슬라이스 객체 생성
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // state에 적용할 함수 모음
    addPost: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.filter((post) => post.id != action.payload);
    },
    deleteAllPosts: () => [],
    followPost: (state, action: PayloadAction<any>) => {
      state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            user: {
              ...post.user,
              following: post.user.following.includes(action.payload)
                ? post.user.following.filter((id) => id !== action.payload)
                : [...post.user.following, action.payload],
            },
          };
        }
        return post;
      });
    },
    PostLike: (state, action: PayloadAction<any>) => {
      state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            likes: post.likes.includes(action.payload.userId)
              ? post.likes.filter((id) => id !== action.payload)
              : [...post.likes, action.payload],
          };
        }
        return post;
      });
    },
    bookMarkPost: (state, action: PayloadAction<number>) => {
      state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            user: {
              ...post.user,
              BookMark: {
                ...post.user.BookMark,
                id: post.id,
              },
            },
          };
        }
        return post;
      });
    },
    favoritePost: (state, action: PayloadAction<number>) => {
      state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            favorite: !post.favorite,
          };
        }
        return post;
      });
    },
    addComment: (state, action: PayloadAction<any>) => {
      state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            commentCount: post.comments.length,

            comments: [
              ...post.comments,
              {
                id: v4(),
                text: action.payload.comment,
              },
            ],
          };
        }
        return post;
      });
    },
    commentLike: (state, action: PayloadAction<any>) => {
      state.map((post) => {
        if (post.id === action.payload.postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment.id === action.payload.commentId) {
                return {
                  ...comment,
                  commentLike: !comment.likes,
                  commentLikeCount: comment.likes.length,
                };
              }
              return comment;
            }),
          };
        }
        return post;
      });
    },
  },
});

// 슬라이스에서 액션 가져오기
export const {
  addPost,
  deletePost,
  deleteAllPosts,
  followPost,
  bookMarkPost,
  favoritePost,
  addComment,
  commentLike,
  PostLike,
} = postsSlice.actions;

// counter value값 가져오는 함수
export const selectPosts = (state: RootState) => state.posts;
