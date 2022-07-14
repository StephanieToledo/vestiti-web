import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import './styles/global.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
