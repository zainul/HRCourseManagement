/**
* Training.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName:'trainings',
  migrate:'alter',
  attributes: {
    name:{
      type:'string'
    },
    code:{
      type:'string',
      unique:true
    },
    directory:{
      model:'training_directory'
    },
    user_level:{
      model:'userLevel'
    }
  }
};

