import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// npm i prop-types
export default function MyRoute({
    component: Component,
    isClosed,
    ...rest
}) {
    const isLoggedId = useSelector(
        (state) => state.auth.isLoggedIn,
    );

    if (isClosed && !isLoggedId) {
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: {
                        prevPath: rest.location.pathname,
                    },
                }}
            />
        );
    }

    return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.func,
    ]).isRequired,
    isClosed: PropTypes.bool,
};
