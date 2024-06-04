$(document).ready(function() {
  $('#imageModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var src = button.data('src'); // Extract info from data-* attributes
    var modal = $(this);
    modal.find('.modal-body img').attr('src', src);
    modal.find('.modal-title').text(button.find('.gallery-caption h5').text());
  });
});