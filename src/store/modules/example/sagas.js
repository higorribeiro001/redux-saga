// npm i redux-saga
import * as actions from './actions';
import {
    call,
    put,
    all,
    takeLatest,
} from 'redux-saga/effects';
import * as types from '../types';

const requisicao = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 600);
    });

// funcao geradora
function* exampleRequest() {
    try {
        yield call(requisicao); // corresponde ao async e await
        yield put(actions.clicaBotaoSuccess);
    } catch {
        yield put(actions.clicaBotaoFailure);
    }
}

export default all([
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest),
]); // vai escutar o botão de request, pode colocar mais de um por ser um array
