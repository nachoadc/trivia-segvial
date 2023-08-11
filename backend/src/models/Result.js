import {DataTypes} from "sequelize";
import {sequelize} from "../database/database.js";
import {Player} from "./Player.js";

export const Result = sequelize.define('Result', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    resultado: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    }
}, {
    timestamps: false
});

Result.hasOne(Player, {
    foreignKey: "resultId",
    sourceKey: "id"
});

Player.belongsTo(Result, {
    foreignKey: "resultId",
    sourceKey: "id"
})