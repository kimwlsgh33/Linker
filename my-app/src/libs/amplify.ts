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
