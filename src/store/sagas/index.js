import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  const files = require.context('.', false, /\.js$/)
  const modules = []
  files.keys().forEach((key) => {
    if (key === './index.js') return
    modules.push(...files(key).default)
  })

  yield all(modules)
}