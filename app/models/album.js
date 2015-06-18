import DS from 'ember-data';

export default DS.Model.extend({
  albumName: DS.attr('string'),
  bandName: DS.attr('string'),
  reviewer: DS.attr('string'),
  rating: DS.attr('string'),
  description: DS.attr('string'),
  albumCover: DS.attr('string'),
  timestamp: DS.attr('date')
});
