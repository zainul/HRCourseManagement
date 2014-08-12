/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_dropdown_kendo_format:function(req,res){
    Area.query("SELECT id as 'value', name as 'text' FROM areas ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

