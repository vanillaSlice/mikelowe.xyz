import { createElement } from 'react';
import { render } from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const AppElement = createElement(App);
const rootElement = document.getElementById('root');

render(AppElement, rootElement);
registerServiceWorker();
