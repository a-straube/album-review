import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newAlbum = this.store.createRecord('album', {
        albumName: this.get('albumName'),
        bandName: this.get('bandName'),
        reviewer: this.get('reviewer'),
        rating: this.get('rating'),
        description: this.get('description'),
        albumCover: this.get('albumCover')
      });
      newAlbum.save();
      this.setProperties({albumName: " ", bandName: " ", reviewer: " ", rating: " ", description: " ", albumCover: " "});
      this.transitionToRoute('albums');
    }
  }
});
