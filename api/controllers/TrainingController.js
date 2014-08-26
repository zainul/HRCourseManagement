/**
 * TrainingController
 *
 * @description :: Server-side logic for managing trainings
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
  get_kendo_format:function(req,res){
    Training.query("SELECT * FROM trainings", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_kendo_as_subgrid_format:function(req,res){
    Training.query("SELECT t.name,t.code,td.name as 'directory' FROM trainings t JOIN training_directories td ON t.directory=td.id JOIN user_level_trainings ult ON ult.training = t.id WHERE ult.user_level='"+req.param('userlevel')+"' ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_dropdown_kendo_format:function(req,res){
    Training.query("SELECT id as 'value', name as 'text' FROM trainings ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

