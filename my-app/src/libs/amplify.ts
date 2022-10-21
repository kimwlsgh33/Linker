// Sign Up
try {
  const { user } = await Auth.signUp({ username, password });
  console.log(user);
} catch (error) {
  console.log("error signing up:", error);
}

// Sign In
try {
  const user = await Auth.signIn(username, password);
} catch (error) {
  console.log("error signing in", error);
}

// Sign Out
try {
  await Auth.signOut();
} catch (error) {
  console.log("error signing out: ", error);
}

// Create
await DataStore.save(
  new Post({
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet",
    link: "Lorem ipsum dolor sit amet",
    userID: "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
  })
);

// Update
/* Models in DataStore are immutable. To update a record you must use the copyOf function
 to apply updates to the item’s fields rather than mutating the instance directly */
await DataStore.save(
  Post.copyOf(CURRENT_ITEM, (item) => {
    // Update the values on {item} variable to update DataStore entry
  })
);

// Delete
const modelToDelete = await DataStore.query(Post, 123456789);
DataStore.delete(modelToDelete);

// Query
const posts = await DataStore.query(Post);
console.log(posts);
