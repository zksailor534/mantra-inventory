import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import inventoryModule from './modules/inventory';

// init context
const context = initContext();

// import styles
import 'bootstrap/dist/css/bootstrap.min.css';

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(inventoryModule);
app.init();
