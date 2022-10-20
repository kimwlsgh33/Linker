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
