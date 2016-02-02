$('document').ready(function () {
  hideContentPanels();
  $('.ui.video').video();

  $("#menu-bar").on("click", 'a', function (e) {
    selectMenuItem($(this));
  });

});


function hideContentPanels() {
  $("#content-panel > *:not(#about-content)").hide();
}
