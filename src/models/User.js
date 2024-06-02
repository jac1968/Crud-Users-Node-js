const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

   // Uppercase & Singular // Lowercase & Singular
const User = sequelize.define('user', {
    
    // We define the columns (fields) here
    // allowNull: false (Required Value) by default is True
    // unique: true (Unique Value) by default is false
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
    },
}, {
    // Do not add the columns (fields) createdAt and updatedAt
    // by default is true
    timestamps: false
});

module.exports = User;