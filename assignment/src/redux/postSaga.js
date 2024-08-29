import { takeEvery, put, call } from "redux-saga/effects";
import { ADD_POST_DATA, GET_POST_DATA } from "./constant";
import axios from "axios";

function* getPosts() {
  let data = yield call(
    axios.get,
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("getPostData is", data);
  yield put({ type: ADD_POST_DATA, data });
}

function* postSaga() {
  yield takeEvery(GET_POST_DATA, getPosts);
}

export default postSaga;
