import create from "zustand";
import { User } from "../models";

type MeStoreType = {
  me: User;
  setMe: (me: User) => void;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: {
    id: "5468456",
    email: "abkorc33@gmail.com",
    mobile: "010-2222-2222",
    name: "user",
    nickname: "user",
    username: "user1234",
    password: "123456789a!",
    birthday: null,
    profpic: null,
    following: [],
    followers: [],
    Posts: [],
    favorite: null,
    BookMark: [],
    Stories: [],
    likePosts: [],
    likeStories: [],
    Comments: [],
  },
  setMe: (me) =>
    set({
      me: me,
    }),
}));
