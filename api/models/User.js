/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName :'users',
  migrate   :'alter',
  attributes: {
    name:'string',
    password:'string',
    nip:{
      type:'string',
      unique:true
    },
    user_level:{
      model:'userLevel'
    },
    unit:{
      model:'unit'
    },
    area:{
      model:'area'
    },
    grade:{
      model:'grade'
    }
  }
};

