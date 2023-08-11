import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js';

export const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sexo: {
        type: DataTypes.ENUM('masculino', 'femenino'),
        allowNull: false
    },
    ciudad: {
        type: DataTypes.ENUM('capital', 'interior'),
        allowNull: false
    },
    barrio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    vehiculo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    licencia: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    timestamps: false
});