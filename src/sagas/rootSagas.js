import { takeLatest, takeEvery } from "redux-saga/effects";
import { handleGetUser } from "./handlers/user";
//import { GET_USER } from "../redux/ducks/users";
import { getUser } from "../redux/ducks/userSlice";

export function* watcherSaga() {
  yield takeLatest(getUser.type, handleGetUser);
  //yield takeEvery(GET_USER, handleGetUser);
}
