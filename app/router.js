import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');
  this.resource('albums');
  this.resource('album', {path: 'albums/:album_id'}, function() {
    this.resource('new-comment');
  });
  this.resource('new-album');
});

export default Router;
