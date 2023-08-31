import app from './app.js'
import {sequelize} from './database/database.js';

const PORT = process.env.PORT || 3001;

import './models/Question.js';

async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(PORT, () => {
            console.log(`Server listening on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

main();
