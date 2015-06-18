import Ember from "ember";

var AlbumController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    delete: function() {
      if (confirm("Are you sure you want to remove this album review?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('albums');
      }
    },
    doneEditing: function() {
      this.get('model').save();
      this.set('isEditing', false);
    }
  }
};

export default Ember.ObjectController.extend(AlbumController);
