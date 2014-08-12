/**
 * CityController
 *
 * @description :: Server-side logic for managing cities
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_city_kendo_format:function(req,res){
    City.query("SELECT id as 'value', name as 'text' FROM cities ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

