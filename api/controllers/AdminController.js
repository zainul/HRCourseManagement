/**
 * AdminController
 *
 * @description :: Server-side logic for managing admins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    city:function(req,res){
        res.view('admin/city', {message: '', layout: null});
    },
    area:function(req,res){
        res.view('admin/area', {message: '', layout: null});
    },
    grade:function(req,res){
        res.view('admin/grade', {message: '', layout: null});
    },
    directory:function(req,res){
        res.view('admin/directory', {message: '', layout: null});
    },
    user_level:function(req,res){
        res.view('admin/user_level', {message: '', layout: null});
    },
    institute:function(req,res){
        res.view('admin/course_institute', {message: '', layout: null});
    },
    unit:function(req,res){
        res.view('admin/unit', {message: '', layout: null});
    },
    training:function(req,res){
        res.view('admin/training', {message: '', layout: null});
    },
    user_training:function(req,res){
        res.view('admin/user_training', {message: '', layout: null});
    },
    user:function(req,res){
        res.view('admin/user', {message: '', layout: null});
    }
};