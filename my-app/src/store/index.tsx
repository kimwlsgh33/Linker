import create from "zustand";
import { User } from "../models";

type MeStoreType = {
  me: User;
  setMe: (me: User) => void;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: {
    id: "",
    email: "",
    mobile: "",
    name: "",
    nickname: "",
    username: "",
    password: "",
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
