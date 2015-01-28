/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  Sosi.create({name: '태연'}).exec(console.log);
  Sosi.create({name: '윤아'}).exec(console.log);
  Sosi.create({name: '수영'}).exec(console.log);
  Sosi.create({name: '효연'}).exec(console.log);
  Sosi.create({name: '유리'}).exec(console.log);
  Sosi.create({name: '티파니'}).exec(console.log);
  Sosi.create({name: '써니'}).exec(console.log);
  Sosi.create({name: '서현'}).exec(console.log);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
