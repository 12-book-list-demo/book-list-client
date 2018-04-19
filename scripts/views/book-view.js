'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  }

  bookView.detailView = () => {
    $('.book-items').hide();
    let template = Handlebars.compile($('#detail-list-template').text());
    console.log(app.Book.new[0]);
    $('.detail-view').append(template(app.Book.new[0]));
  };

  module.bookView = bookView;

})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
})