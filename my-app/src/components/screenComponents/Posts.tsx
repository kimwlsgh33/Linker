import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import Modal from "../Modal";
import ModalScreen from "../modal/ModalScreen";
import ShareModal from "../modal/ShareModal";
import LinkModal from "../modal/LinkModal";
import QrModal from "../modal/QrModal";
import FavoirteModal from "../modal/FavoriteModal";
import FollowModal from "../modal/FollowModal";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addPost,
  bookMarkPost,
  deleteAllPosts,
  deletePost,
  followPost,
  favoritePost,
  addComment,
  commentLike,
  PostLike,
} from "../../store/slices";
import { da } from "date-fns/locale";
import Post from "./Post";

const Posts = () => {
  const navigation = useNavigation(); // 네비게이션을 쓰기 위한 두가지 방법 중 하나 hook

  const [userId, setUserId] = useState("");
  const [id, setId] = useState(0);
  const [myId, setMyId] = useState("nieoodie"); // 내 아이디
  const [mypostPersonImage, setMypostPersonImage] = useState(
    require("../../../assets/images/jinho.jpeg")
  ); // 내 프로필 사진

  // const [datas, setData] = useState(postInfo); // useState를 이용해 data라는 state를 만들어줌. postInfo를 넣어줌.
  //=======================================================
  //=======================================================
  //=======================================================
  const datas = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const addPostFunc = () => {
    dispatch(addPost);
  };

  const deletePostFunc = () => {
    dispatch(deletePost);
  };

  const deleteAllPostsFunc = () => {
    dispatch(deleteAllPosts);
  };

  //=======================================================
  //=======================================================
  //=======================================================
  const [modal, setModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [linkModal, setLinkModal] = useState<boolean>(false);
  const [bookMark, setBookMark] = useState<boolean>(false);
  const [qrModal, setQrModal] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  const bookMarkPressed = useCallback(
    // 위와 같은 방식으로 북마크를 눌렀을 때의 함수를 만들어줌^^
    (id) => {
      dispatch(bookMarkPost(id));
      setBookMark((prev) => !prev);
    },
    []
  );

  const favoriteItem = (id) => {
    dispatch(favoritePost(id));
    setFavorite((prev) => !prev);
  };

  const addcomment = ({ text, id }: { text: string; id: any }) => {
    dispatch(addComment({ postId: id, comment: text }));
  };

  const likePressed = useCallback(
    // likePressed라는 함수를 usecallback을 이용해 만들어줌.
    ({ id, userId }) => {
      dispatch(PostLike({ postId: id, userId: userId }));
    },
    [] // data와 setData를 의존성 배열에 넣어줌.
  );

  const shareModalState = () => {
    setModal(false);
    setShareModal(true);
  };

  const linkModalState = () => {
    setModal(false);
    setLinkModal(true);
  };

  const save = (id) => {
    setModal(false);
    bookMarkPressed(id);
  };

  const qrModalState = () => {
    setModal(false);
    setQrModal(true);
  };

  const favoriteState = (id) => {
    setModal(false);
    favoriteItem(id);
  };

  const followState = (userId) => {
    dispatch(followPost(userId));
    setModal(false);
    setFollow(true);
  };

  // useEffect(() => {
  //   events.addListener("saveComment", dispatch(addComment({})));
  //   events.addListener("saveCommentLike", addRecommentLike);
  //   events.addListener("shareModal", shareModalState);
  //   events.addListener("linkModal", linkModalState);
  //   events.addListener("save", save);
  //   events.addListener("qrModal", qrModalState);
  //   events.addListener("favorite", favoriteState);
  //   events.addListener("follow", followState);

  //   return () => {
  //     events.removeListener("saveComment");
  //     events.removeListener("saveCommentLike");
  //     events.removeListener("shareModal");
  //     events.removeListener("linkModal");
  //     events.removeListener("save");
  //     events.removeListener("qrModal");
  //     events.removeListener("favorite");
  //     events.removeListener("follow");
  //   };
  // }, []);

  const addRecommentLike = ({
    id,
    comment_id,
  }: {
    id: any;
    comment_id: any;
  }) => {
    dispatch(commentLike({ postId: id, commentId: comment_id }));
  };

  return (
    <View style={{ paddingBottom: 40 }}>
      {datas.map((data) => {
        // data라는 state를 map을 이용해 돌려줌.
        <Post key={data.id} />;
      })}

      <Modal Visible={modal} setVisible={setModal}>
        <ModalScreen
          id={id}
          bookMark={bookMark}
          favorite={favorite}
          follow={isFollowed}
          userId={userId}
        />
      </Modal>
      <Modal Visible={shareModal} setVisible={setShareModal}>
        <ShareModal />
      </Modal>
      <Modal Visible={linkModal} setVisible={setLinkModal}>
        <LinkModal />
      </Modal>
      <Modal Visible={qrModal} setVisible={setQrModal}>
        <QrModal />
      </Modal>
      <Modal Visible={isFavorite} setVisible={setIsFavorite}>
        <FavoirteModal />
      </Modal>
      <Modal Visible={follow} setVisible={setFollow}>
        <FollowModal data={datas} />
      </Modal>
    </View>
  );
};

export default Posts;
