import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js';

export const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false
    },
    options: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    }
}, {
    timestamps: false
});
