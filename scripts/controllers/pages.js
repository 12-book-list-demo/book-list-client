'use strict';
var app = app || {};

if (window.location.protocol.startsWith('https:')) {
  page.base('/book-list-client');
}

page('/book/:id', result => app.Book.fetchOne(result.params.id, app.bookView.detailView));

page('/new', app.formView.show);



page.start();