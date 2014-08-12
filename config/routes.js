/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'home'
  },

  // admin
  'get /admin/city':{
    view: 'admin/city'
  },
  'get /admin/area':{
    view: 'admin/area'
  },
  'get /admin/grade':{
    view: 'admin/grade'
  },
  'get /admin/directory':{
    view: 'admin/directory'
  },
  'get /admin/unit':{
    view: 'admin/unit'
  },
  'get /admin/user_level':{
    view: 'admin/user_level'
  },
  'get /admin/institute':{
    view: 'admin/course_institute'
  },
  'get /admin/training':{
    view: 'admin/training'
  },
  'get /admin/user_training':{
    view: 'admin/user_training'
  },
  'get /admin/':{
    view: 'admin/home'
  },
  'get /admin/user':{
    view: 'admin/user'
  },


  // home
  'get /home/user_training':{
    view: 'home/user_training'
  },
  'get /home/user_level_training':{
    view: 'home/user_level_training'
  },
  'get /home/user_realitation':{
    view: 'home/user_realitation'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
