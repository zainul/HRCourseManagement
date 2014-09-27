/**
 * User_training_nonregController
 *
 * @description :: Server-side logic for managing user_training_nonregs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	get_user_training_kendo_format:function(req,res){
    User_training.query("SELECT " +
      "user_training_nonregs.training," +
      "user_training_nonregs.organizer," +
      "user_training_nonregs.city," +
      "user_training_nonregs.start_date," +
      "user_training_nonregs.end_date," +
      "user_training_nonregs.`user`," +
      "user_training_nonregs.point," +
      "user_training_nonregs.certificate_number," +
      "user_training_nonregs.certificate_date," +
      "user_training_nonregs.rank," +
      "CASE user_training_nonregs.isRegular " +
      "WHEN user_training_nonregs.isRegular=0 THEN 'true' " +
      "ELSE 'false' " +
      "END  as 'isRegular', " +
      "user_training_nonregs.id " +
      "FROM user_training_nonregs  JOIN users ON user_training_nonregs.`user`=users.id", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
};

