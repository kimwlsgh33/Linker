import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "..";
import { TPost } from "../../global";

import { v4 } from "uuid";

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
      username: "nieoodie",
      profpic: require("../../../assets/images/jinho.jpeg"),
    },
    postImage: require("../../../assets/images/pizza.jpeg"),
    likes: 0,
    isLiked: false,
    bookMark: false,
    text: "핡",
    commentCount: 0, //  이 친구는 comment배열의 길이로 바꾸는게 깔끔할듯.
    comments: [],
    favorite: false,
    followList: [],
  },
  {
    id: 2_192312937123871,
    user: {
      id: 3743939_92575767,
      username: "kwonwoo",
      profpic: require("../../../assets/images/woo.jpeg"),
    },
    postImage: require("../../../assets/images/kitty.jpeg"),
    likes: 0,
    isLiked: false,
    bookMark: false,
    text: "웅앵",
    commentCount: 0,
    comments: [],
    favorite: false,
    followList: [],
  },
  {
    id: 3_19248589574839,
    user: {
      id: 1257_19231739841794,
      username: "hyunsu",
      profpic: require("../../../assets/images/hyunsu.jpeg"),
    },
    postImage: require("../../../assets/images/woo.jpeg"),
    likes: 0,
    isLiked: false,
    bookMark: false,
    text: "흐규",
    commentCount: 0,
    comments: [],
    favorite: false,
    followList: [],
  },
  {
    id: 4_38574857389,
    user: {
      id: 857194874_23958759,
      username: "jongin",
      profpic: require("../../../assets/images/jongin.jpeg"),
    },
    postImage: require("../../../assets/images/kitty.jpeg"),
    likes: 0,
    isLiked: false,
    bookMark: false,
    text: "헐랭",
    commentCount: 0,
    comments: [],
    favorite: false,
    followList: [],
  },
];

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
    followPost: (state, action: PayloadAction<number>) => {
      state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            followList: post.followList.includes(action.payload)
              ? post.followList.filter((id) => id !== action.payload)
              : [...post.followList, action.payload],
          };
        }
      });
    },
    bookMarkPost: (state, action: PayloadAction<number>) => {
      state.map((post) => {
        if (post.id === action.payload) {
          return {
            ...post,
            bookMark: !post.bookMark,
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
            commentCount: post.commentCount + 1,
            comments: [
              ...post.comments,
              {
                id: v4(),
                text: action.payload.comment,
                commentLike: false,
                commentLikeCount: 0,
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
                  commentLike: !comment.commentLike,
                  commentLikeCount: comment.commentLike
                    ? Number(comment.commentLikeCount) - 1
                    : Number(comment.commentLikeCount) + 1,
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
} = postsSlice.actions;

// counter value값 가져오는 함수
export const selectPosts = (state: RootState) => state.posts;
