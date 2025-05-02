import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


import Stodo from './1mayStod.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={Stodo}>
    <App />
    </Provider>

)
