/**
 * HomeController
 *
 * @description :: Server-side logic for managing homes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    user_training:function(req,res){
        res.view('home/user_training', {message: '', layout: null});
    },
    user_level_training:function(req,res){
        res.view('home/user_level_training', {message: '', layout: null});
    },
    user_realitation:function(req,res){
        res.view('home/user_realitation', {message: '', layout: null});
    },
    export_excel_for_user:function(req,res){
        res.view('home/export_excel_for_user', {message: '', layout: null});
    },
    export_excel_for_system:function(req,res){
        res.view('home/export_excel_for_system', {message: '', layout: null});
    }
};

