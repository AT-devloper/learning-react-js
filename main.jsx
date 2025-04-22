import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Logincontext from './login/logincon.jsx';


createRoot(document.getElementById('root')).render(
<Logincontext>
<App />
</Logincontext>
)
