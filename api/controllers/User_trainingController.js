/**
 * User_trainingController
 *
 * @description :: Server-side logic for managing user_trainings
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  get_user_training_kendo_format:function(req,res){
    User_training.query("SELECT " +
      "user_trainings.training," +
      "user_trainings.organizer," +
      "user_trainings.city," +
      "user_trainings.start_date," +
      "user_trainings.end_date," +
      "user_trainings.`user`," +
      "user_trainings.point," +
      "user_trainings.certificate_number," +
      "user_trainings.certificate_date," +
      "CASE user_trainings.isRegular " +
      "WHEN user_trainings.isRegular=1 THEN 'true' " +
      "ELSE 'false' " +
      "END  as 'isRegular', " +
      "user_trainings.id " +
      "FROM user_trainings", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_kendo_format_subgrid:function(req,res){
    User_training.query("SELECT * FROM (SELECT " +
      "CASE " +
      "WHEN users.`name` IS NOT NULL THEN '1' " +
      "ELSE '0' " +
      "END as 'status', " +
      "users.`name` as 'username', " +
      "users.nip, " +
      "courseinstitutes.`name` as 'institute', " +
      "cities.`name` as 'city', " +
      "user_trainings.training, " +
      "user_trainings.start_date, " +
      "user_trainings.end_date, " +
      "user_trainings.point, " +
      "user_trainings.certificate_number, " +
      "user_trainings.certificate_date, " +
      "user_trainings.isRegular, " +
      "user_trainings.id " +
      "FROM " +
      "user_trainings " +
      "INNER JOIN courseinstitutes ON courseinstitutes.id = user_trainings.organizer " +
      "INNER JOIN cities ON cities.id = user_trainings.city " +
      "INNER JOIN users ON users.id = user_trainings.`user` " +
      "WHERE user_trainings.`user`='"+req.param('userId')+"') virtualUserTraining " +
      "RIGHT OUTER JOIN trainings t2 ON virtualUserTraining.training=t2.id " +
      "WHERE t2.user_level='"+req.param('userLevelId')+"'",function(err,results){
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

