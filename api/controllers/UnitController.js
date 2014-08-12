/**
 * UnitController
 *
 * @description :: Server-side logic for managing units
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_dropdown_kendo_format:function(req,res){
    Unit.query("SELECT id as 'value', name as 'text' FROM units ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

