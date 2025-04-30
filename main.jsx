import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';


import Sto from './30aplstore.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
    <Provider store={Sto}>
    <App />
    </Provider>

)
