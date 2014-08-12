/**
 * GradeController
 *
 * @description :: Server-side logic for managing grades
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_dropdown_kendo_format:function(req,res){
    Grade.query("SELECT id as 'value', name as 'text' FROM grades ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

