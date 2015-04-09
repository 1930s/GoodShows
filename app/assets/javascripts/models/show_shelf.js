GoodShows.Models.ShowShelf = Backbone.Model.extend({
  urlRoot: '/show_shelves/',

  initialize: function(options) {
    if(options.userId){
      this.userId = options.userId;
    }
  },

  shows: function () {
    if (!this._shows) {
      this._shows = new GoodShows.Collections.Shows([], { shelf: this });
    }
    return this._shows;
  },

  parse: function (response) {
    if (response.shows) {
      this.shows().set(response.shows, { parse: true });
      delete response.shows;
    }

    return response;
  }
});