/* Core */
import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  type TypedUseSelectorHook,
} from "react-redux";

/* Instruments */
import { createLogger } from "redux-logger";
import { reducer } from "./rootReducer";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      createLogger({
        duration: true,
        timestamp: false,
        collapsed: true,
        colors: {
          title: () => "#139BFE",
          prevState: () => "#1C5FAF",
          action: () => "#149945",
          nextState: () => "#A47104",
          error: () => "#ff0005",
        },
        predicate: () => typeof window !== "undefined",
      }),
      sagaMiddleware
    );
  },
});

sagaMiddleware.run(rootSaga);

export const useDispatch = () => useReduxDispatch<ReduxDispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;

/* Types */
export type ReduxStore = typeof reduxStore;
export type ReduxState = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatch = typeof reduxStore.dispatch;
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;
