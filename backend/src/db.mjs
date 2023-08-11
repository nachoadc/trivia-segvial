import Sequelize from 'sequelize';
import 'dotenv/config';

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`);
