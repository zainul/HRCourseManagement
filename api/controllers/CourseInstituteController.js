/**
 * CourseInstituteController
 *
 * @description :: Server-side logic for managing courseinstitutes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_course_institute_kendo_format:function(req,res){
    CourseInstitute.query("SELECT ci.* FROM courseinstitutes ci", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_dropdown_kendo_format:function(req,res){
    CourseInstitute.query("SELECT id as 'value', name as 'text' FROM courseinstitutes ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

