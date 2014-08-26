/**
* User_level_training.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName:'user_level_trainings',
  migrate:'alter',
  attributes: {
  	user_level:{
      model:'userLevel'
    },
    training:{
    	model:'training'
    }
  }
};

