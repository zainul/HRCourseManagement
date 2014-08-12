/**
* User_training.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName:'user_trainings',
  migrate:'alter',
  attributes: {
    training:{
      model:'training'
    },
    organizer:{
      model:'courseInstitute'
    },
    city:{
      model:'city'
    },
    start_date:'date',
    end_date:'date',
    user:{
      model:'user'
    },
    point:'float',
    certificate_number:'string',
    certificate_date:'date',
    isRegular:'boolean'
  }
};

