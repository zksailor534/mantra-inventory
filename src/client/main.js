import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Modules
import coreModule from './modules/core';
import inventoryModule from './modules/inventory';

// Initialize context
const context = initContext();

// Create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(inventoryModule);
app.init();
