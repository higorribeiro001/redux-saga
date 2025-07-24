import { createStore } from 'redux';

const initialState = {
    botaoClicado: false,
};

// const reducer = (state, action) => {
//     // reducer escuta a ação disparada e retorna novo estado
//     console.log(action);
//     return state;
// };

const reducer = (state = initialState, action) => {
    // reducer escuta a ação disparada e retorna novo estado
    switch (action.type) {
        case 'BOTAO_CLICADO': {
            const newState = { ...state };
            newState.botaoClicado = !newState.botaoClicado;
            return newState;
        }

        default: {
            return state;
        }
    }
};

const store = createStore(reducer);

export default store;
