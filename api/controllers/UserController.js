/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  test:function(req,res){
    User.query('SELECT u.name as "username1",u.name as "username2",u.name as "username3",u.name as "username4",u.name as "username", ul.name as "user_level_name" FROM users u JOIN userlevels ul ON u.userLevel = ul.id', function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  must_have_training:function(req,res) {
    User.query("SELECT " +
      "trainings.id as 'TrainingId'," +
      "trainings.`name` as 'CourseName'," +
      "users.`name` as 'Name' " +
      "FROM users " +
      "JOIN trainings ON users.user_level=trainings.user_level", function (err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_dropdown_kendo_format:function(req,res){
    User.query("SELECT id as 'value', name as 'text' FROM users ", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  get_kendo_format:function(req,res){
    User.query("SELECT * FROM users", function(err, results) {
      if (err) return res.serverError(err);
      return res.ok(results);
    });
  },
  authenticate:function(req,res){
    User.findOneByNip(req.body.nip,function (err, user) {
      if (err) res.json({ error: 'DB error' }, 500);

      if(user){
        if(req.body.password == user.password){
          req.session.user = user.id;
          res.json(user,200);
        }else{
          if (req.session.user) req.session.user = null;
          res.json({ error: 'Invalid password',is_error:true }, 400);
        }
      }else {
        res.json({ error: 'User not found',is_error:true }, 404);
      }
    });
  }
};

