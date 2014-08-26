/**
* UserLevel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName :'userlevels',
  migrate   :'alter',
  attributes: {
    name:{
      type:'string',
      unique:true
    },
    trainings:{
      collection: 'user_level_training',
      via: 'user_level'
    }
  }
};

