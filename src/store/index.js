import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import { persistStore } from 'redux-persist';
import persistedReducers from './modules/reduxPersist';
// const reducer = (state, action) => {
//     // reducer escuta a ação disparada e retorna novo estado
//     console.log(action);
//     return state;
// };

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    persistedReducers(rootReducer),
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
