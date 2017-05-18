import { take, call, put, select } from 'redux-saga/effects';

import request from 'utils/request';
// Individual exports for testing
export function* defaultSaga() {
  const requestURL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=Eminem&api_key=f90ffa331e3a3c46746aa5c2efeb5540&format=json`;

  try {
    // Call our request helper (see 'utils/request')
    const songs = yield call(request, requestURL);
    console.log(songs);
    // yield put(songsLoaded(repos, username));
  } catch (err) {
    yield put(songsLoadingError(err));
  }
}

// All sagas to be loaded
export default [
  defaultSaga,
];
