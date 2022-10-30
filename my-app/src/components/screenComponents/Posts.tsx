import React, { useState, useCallback, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Modal from "../Modal";
import ModalScreen from "../modal/ModalScreen";
import ShareModal from "../modal/ShareModal";
import LinkModal from "../modal/LinkModal";
import QrModal from "../modal/QrModal";
import FavoirteModal from "../modal/FavoriteModal";
import FollowModal from "../modal/FollowModal";

import Post from "./Post";
import { usePostStore, useMeStore, useModalStore } from "../../store";
import { DataStore } from "aws-amplify";
import { Post as TPost, User } from "../../models";

const Posts = () => {
  // const [datas, setData] = useState(postInfo); // useState를 이용해 data라는 state를 만들어줌. postInfo를 넣어줌.
  //=======================================================
  //=======================================================
  //=======================================================
  const { posts, setPosts } = usePostStore();
  const { addBookMark, following } = useMeStore();

  const getPost = async () => {
    const newPost = await DataStore.query(TPost);
    return newPost;
  };

  useEffect(() => {
    getPost().then((TPost) => setPosts(TPost));
  }, []);

  //=======================================================
  //=======================================================
  //=======================================================
  const {
    setModal,
    setShareModal,
    setLinkModal,
    setBookMark,
    setQrModal,
    setFavorite,
    setIsFavorite,
    setFollow,
    setIsFollowed,
    modal,
    shareModal,
    linkModal,
    bookMark,
    qrModal,
    favorite,
    isFavorite,
    follow,
    isFollowed,
  } = useModalStore();

  const bookMarkPressed = useCallback(
    // 위와 같은 방식으로 북마크를 눌렀을 때의 함수를 만들어줌^^
    (id) => {
      addBookMark(id);
    },
    []
  );

  // const favoriteItem = (id) => {
  //   dispatch(favoritePost(id));
  //   setFavorite((prev) => !prev);
  // };

  // const addcomment = ({ text, id }: { text: string; id: any }) => {
  //   dispatch(addComment({ postId: id, comment: text }));
  // };

  // const likePressed = useCallback(
  //   // likePressed라는 함수를 usecallback을 이용해 만들어줌.
  //   ({ id, userId }) => {
  //     dispatch(PostLike({ postId: id, userId: userId }));
  //   },
  //   [] // data와 setData를 의존성 배열에 넣어줌.
  // );

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

  const followState = (userId) => {
    following(userId);
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

  // const addRecommentLike = ({
  //   id,
  //   comment_id,
  // }: {
  //   id: any;
  //   comment_id: any;
  // }) => {
  //   dispatch(commentLike({ postId: id, commentId: comment_id }));
  // };

  return (
    <View style={{ paddingBottom: 40 }}>
      {/* {posts.map((data) => {
        // data라는 state를 map을 이용해 돌려줌.
        return <Post key={data.id} />;
      })} */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Post post={item} />}
        ListEmptyComponent={() => (
          <View>
            <Text>try follow N get information you want!</Text>
          </View>
        )}
      />
      <Modal Visible={modal} setVisible={setModal}>
        <ModalScreen />
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
        <FollowModal data={posts} />
      </Modal>
    </View>
  );
};

export default Posts;
