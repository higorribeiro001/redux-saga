import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header/styled';
import Routes from './routes';
import { Router } from 'react-router-dom/cjs/react-router-dom';
import history from './services/history';

function App() {
    return (
        <Router history={history}>
            <Header />
            <Routes />
            <GlobalStyle />
        </Router>
    );
}

export default App;
