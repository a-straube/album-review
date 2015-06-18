import DS from 'ember-data';

export default DS.Model.extend({
  commentAuthor: DS.attr('string'),
  body: DS.attr('string'),
  timestamp: DS.attr('date'),
  album: DS.belongsTo('album', {async: true})
});
