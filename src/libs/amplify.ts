import { Auth, DataStore, Storage } from "aws-amplify";
import { Post, Tag } from "../models";

// Sign Up
async function signUp(username: string, password: string) {
  try {
    const { user } = await Auth.signUp({ username, password });
    console.log(user);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

// Sign In
async function signIn(username: string, password: string) {
  try {
    const user = await Auth.signIn(username, password);
  } catch (error) {
    console.log("error signing in", error);
  }
}

// Sign Out
async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log("error signing out: ", error);
  }
}

<<<<<<< HEAD
// Confirm Sign Up
try {
  await Auth.confirmSignUp(username, code);
}

// Resend Sign Up Code
try {
  await Auth.resendSignUp(username);
}

// Forgot Password
try {
  await Auth.forgotPassword(username);
}

// Confirm Forgot Password
try {
  await Auth.forgotPasswordSubmit(username, code, password);
}

// Change Password
try {
  await Auth.changePassword(user, oldPassword, newPassword);
}

// Get User
try {
  const user = await Auth.currentAuthenticatedUser();
} catch (error) {
  console.log(error);
}
=======
async function uploadImage(filePath) {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob;
    await Storage.put("testKey", blob, {
      contentType: "image.jpeg",
    });
  } catch (err) {
    alert("업로드 실패 : " + err);
  }
}

// Create
type CreatePostProps = {
  userID: string;
  title: string;
  tagName: string;
  text: string;
  link: string;
};
async function createPost({
  userID,
  title,
  tagName,
  text,
  link,
}: CreatePostProps) {
  const tag = await DataStore.save(
    new Tag({
      tagname: tagName,
    })
  );
  await DataStore.save(
    new Post({
      title,
      tagID: tag.id,
      text,
      link,
      userID,
    })
  );
}

// Update
/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */

// Delete
// const modelToDelete = await DataStore.query(Post, 123456789);
// DataStore.delete(modelToDelete);

// Query
// const posts = await DataStore.query(Post);
// console.log(posts);
>>>>>>> 60c4501136423448532c4e663e703067213ebacd
