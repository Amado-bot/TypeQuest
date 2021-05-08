 const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../config/connection');

 class Score extends Model{}

 Score.init(
     {
         id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             primaryKey: true,
             autoIncrement: true
         },
         wpm_text: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         accuracy_text: {
            type: DataTypes.STRING,
            allowNull: false
         },
         player_id: {
             type: DataTypes.INTEGER,
             allowNull: false,
             references: {
                 model: 'player',
                 key: 'id'
             }
         }
     },
     {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'score'
     }
 );

 module.exports = Score;