import {app} from './app.js'
import {sequelize} from './database/database.js';

import './models/Player.js';
import './models/Result.js';

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(3001);
        console.log('Listen on port', 3001);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

main();
