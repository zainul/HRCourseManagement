/**
 * UserComplaintController
 *
 * @description :: Server-side logic for managing Usercomplaints
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index:function(req,res){
        if(req.session.user_complaint != null){
            res.view('user/manage_complaint',{
                user:req.session.user_complaint
            });
        }else{
            res.redirect('/');
        }
    }
};

