// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample1: user is signed in! user name is", userName);
    return true;
  } else {
    console.log("Function parameters sample1: user is not signed in.");
    return false;
  }
};

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, userName: string = "NO NAME"): boolean => {
  if (userId === "ABC") {
    console.log("Function parameters sample3: user is signed in! user name is", userName);
    return true;
  } else {
    console.log("Function parameters sample4: user is not signed in.");
    return false;
  }
};
