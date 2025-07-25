import React from 'react';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Fotos from '../pages/Fotos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
import { toast } from 'react-toastify';

export default function Routes() {
    toast.success('Oie');

    return (
        <Switch>
            <MyRoute
                exact
                path="/"
                component={Alunos}
                isClosed={false}
            />
            <MyRoute
                exact
                path="/aluno/:id/edit"
                component={Aluno}
                isClosed
            />
            <MyRoute
                exact
                path="/aluno/"
                component={Aluno}
                isClosed
            />
            <MyRoute
                exact
                path="/fotos/:id/"
                component={Fotos}
                isClosed
            />
            <MyRoute
                exact
                path="/login/"
                component={Login}
                isClosed={false}
            />
            <MyRoute
                exact
                path="/register/"
                component={Register}
                isClosed={false}
            />
            <MyRoute path="*" component={Page404} />
        </Switch>
    );
}
