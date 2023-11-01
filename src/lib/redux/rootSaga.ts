import { all, fork } from "redux-saga/effects";
import { provinceSagas } from "./sagas/provinceSagas";

export default function* rootSaga() {
  yield all([fork(provinceSagas)]);
}
