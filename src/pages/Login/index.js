import React from 'react';
// import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
// import { useDispatch } from 'react-redux';
// import axios from '../../services/axios';
// import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
    // const dispatch = useDispatch(); // disparador
    // useEffect(() => {
    //     async function getData() {
    //         const response = await axios.get('/alunos');
    //         const { data } = response;
    //         console.log(data);
    //     }

    //     getData();
    // }, []);
    // function handleClick(e) {
    //     e.preventDefault();

    //     // dispatch({
    //     //     type: 'BOTAO_CLICADO',
    //     //     // payload: { email, senha },
    //     // });
    //     dispatch(exampleActions.clicaBotaoRequest());
    // }

    return (
        <Container>
            <h1>Login</h1>
            {/* <button type="button" onClick={handleClick}>
                Enviar
            </button> */}
        </Container>
    );
}
