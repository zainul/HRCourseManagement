/**
 * Training_directoryController
 *
 * @description :: Server-side logic for managing training_directories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	get_kendo_format:function(req,res){
    Training_directory.query("SELECT id as 'value', name as 'text' FROM training_directories ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

