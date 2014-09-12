/**
 * ComplaintController
 *
 * @description :: Server-side logic for managing complaints
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    get_kendo_format:function(req,res) {
        User.query("SELECT u.name,c.subject,c.message,c.createdAt,c.status FROM complaints c JOIN users u ON c.user=u.id", function (err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    },
    update_admin:function(req,res){
        User.query("UPDATE complaints SET status='"+req.body.status+"' WHERE id='"+req.body.id+"' ", function (err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    },
    by_user_login:function(req,res){
        User.query("SELECT c.*,u.id FROM complaints c JOIN users u ON c.user=u.id WHERE c.user='"+req.session.user_complaint+ "' ", function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    },
    insert_by_user_login:function(req,res){
        var d = new Date();
        User.query("INSERT INTO complaints(`user`,`subject`,`message`,`status`,`createdAt`,`updatedAt`) values " +
            "(" +
            "'"+req.session.user_complaint+"'," +
            "'"+req.body.subject+"'," +
            "'"+req.body.message+"'," +
            "'0'," +
            "'"+d+"'," +
            "'"+d+"'" +
            ")", function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    },
    update_by_user_login:function(req,res){
        User.query("UPDATE complaints set `subject`='"+req.body.subject+"', `message`='"+req.body.message+"' WHERE id='"+req.body.id+"' ", function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    },
    delete_by_user_login:function(req,res){
        var d = new Date();
        User.query("DELETE FROM complaints WHERE id='"+req.body.id+"' ", function(err, results) {
            if (err) return res.serverError(err);
            return res.ok(results);
        });
    }
};

