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
      "user_trainings.rank," +
      "CASE user_trainings.isRegular " +
      "WHEN user_trainings.isRegular=1 THEN 'true' " +
      "ELSE 'false' " +
      "END  as 'isRegular', " +
      "user_trainings.id " +
      "FROM user_trainings  JOIN users ON user_trainings.`user`=users.id", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_user_training_union_nonreg:function(req,res){
    User_training.query("SELECT " +
      "user_trainings.training," +
      "courseinstitutes.`name` as 'organizer'," +
      "user_trainings.city," +
      "user_trainings.start_date," +
      "user_trainings.end_date," +
      "user_trainings.`user`," +
      "user_trainings.point," +
      "user_trainings.certificate_number," +
      "user_trainings.certificate_date," +
      "user_trainings.rank," +
      "CASE user_trainings.isRegular " +
      "WHEN user_trainings.isRegular=1 THEN 'true' " +
      "ELSE 'false' " +
      "END  as 'isRegular', " +
      "user_trainings.id " +
      "FROM user_trainings  JOIN users ON user_trainings.`user`=users.id " +
      "JOIN courseinstitutes ON user_trainings.organizer = courseinstitutes.id "+
      "UNION "+
      "SELECT " +
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
      "FROM user_training_nonregs  JOIN users ON user_training_nonregs.`user`=users.id"
      , function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_kendo_format_subgrid:function(req,res){
    User_training.query("SELECT *,t3.name as 'course_name' FROM (SELECT " +
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
      "WHERE user_trainings.`user`='"+req.param('userId')+"' UNION " +
        "SELECT " +
        "CASE " +
        "WHEN users.`name` IS NOT NULL THEN '1' " +
        "ELSE '0' " +
        "END as 'status'," +
        "users.`name` as 'username', " +
        "users.nip, " +
        "user_training_nonregs.organizer as 'institute'," +
        "user_training_nonregs.city as 'city'," +
        "user_training_nonregs.training," +
        "user_training_nonregs.start_date," +
        "user_training_nonregs.end_date," +
        "user_training_nonregs.point," +
        "user_training_nonregs.certificate_number," +
        "user_training_nonregs.certificate_date," +
        "user_training_nonregs.isRegular," +
        "user_training_nonregs.id" +
        " FROM " +
        "user_training_nonregs " +
        "INNER JOIN users ON users.id = user_training_nonregs.`user`  " +
            "WHERE user_training_nonregs.`user`='"+req.param('userId')+"') virtualUserTraining " +
      "RIGHT OUTER JOIN user_level_trainings t2 ON virtualUserTraining.training=t2.training " +
      "JOIN trainings t3 ON t2.training = t3.id "+
      "WHERE t2.user_level='"+req.param('userLevelId')+"'",function(err,results){
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  }
};

