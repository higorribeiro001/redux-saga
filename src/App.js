import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import { Router } from 'react-router-dom/cjs/react-router-dom';
import history from './services/history';
// npm i react-toastify
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Routes />
                <GlobalStyle />
                <ToastContainer
                    autoClose={3000}
                    className="toast-container"
                />
            </Router>
        </Provider>
    );
}

export default App;
