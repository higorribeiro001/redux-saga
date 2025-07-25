import * as types from '../types';

const initialState = {
    botaoClicado: false,
};

export default function (state = initialState, action) {
    // reducer escuta a ação disparada e retorna novo estado
    switch (action.type) {
        case types.BOTAO_CLICADO_SUCCESS: {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            console.log('Sucesso');
            return newState;
        }

        case types.BOTAO_CLICADO_FAILURE: {
            console.log('Deu erro =(');
            return state;
        }

        case types.BOTAO_CLICADO_REQUEST: {
            console.log('Estou fazendo a requisição');
            return state;
        }

        default: {
            return state;
        }
    }
}
