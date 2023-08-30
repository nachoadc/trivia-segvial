import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js';

export const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    question: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    correct_answer: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    },
    incorrect_answers: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    }
}, {
    timestamps: false
});
