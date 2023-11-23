import PocketBase from "pocketbase";
const apiURL =
  process.env.REACT_APP_POCKET_BASE || "https://surgeryx.up.railway.app";
const pb = new PocketBase(apiURL);

export { pb };
