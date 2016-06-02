import { createApp } from 'mantra-core';
import initContext from './configs/context';

// Modules
import coreModule from './modules/core';
import inventoryModule from './modules/inventory';
import accountsModule from './modules/accounts';

// Initialize context
const context = initContext();

// Create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(inventoryModule);
app.loadModule(accountsModule);
app.init();
