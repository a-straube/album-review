import Ember from "ember";

export default Ember.Controller.extend({
  needs: ['album'],
  actions: {
    save: function() {
      var newComment = this.store.createRecord('comment', {
        commentAuthor: this.get('commentAuthor'),
        body: this.get('body')
      });
      newComment.save();

      var album = this.get('controllers.album.model');
      album.get('comments').pushObject(newComment);
      album.save();

      this.setProperties({commentAuthor: " ", body: " "});
      this.transitionToRoute('album', album.id);
    }
  }
});
