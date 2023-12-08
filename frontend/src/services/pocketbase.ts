import PocketBase from "pocketbase";
import { TypedPocketBase } from "../pocketbase-types";
const apiURL =
  process.env.REACT_APP_POCKET_BASE || "http://127.0.0.1:8090";
const pb:TypedPocketBase = new PocketBase(apiURL);

export { pb };


