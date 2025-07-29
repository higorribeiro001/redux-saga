// npm i redux-persist
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export default (reducers) => {
    const persistedReducers = persistReducer(
        {
            key: 'CONSUMO-API',
            storage,
            whitelist: ['auth'],
        },
        reducers,
    );

    return persistedReducers;
};
