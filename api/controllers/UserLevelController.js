/**
 * UserLevelController
 *
 * @description :: Server-side logic for managing userlevels
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_kendo_format:function(req,res){
    UserLevel.query("SELECT id as 'value', name as 'text' FROM userLevels ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

