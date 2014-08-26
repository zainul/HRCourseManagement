/**
 * User_level_trainingController
 *
 * @description :: Server-side logic for managing user_level_trainings
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_subgrid_kendo_format:function(req,res){
    User.query("SELECT * FROM user_level_trainings WHERE `training`='"+req.param('training_id')+"' ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },	
};

