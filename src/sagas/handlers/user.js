import { call, put } from "redux-saga/effects";
import { setUser } from "../../redux/ducks/userSlice";
//import { setUser } from "../../redux/ducks/users";
import { requestGetUser } from "../requests/user";

export function* handleGetUser(action) {
  try {
    const { payload } = action;
    const { id } = payload;
    const response = yield call(requestGetUser, id);
    const { data } = response;
    yield put(setUser({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
