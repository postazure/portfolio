function selectMenuItem(currentItem) {
  setActiveMenuItem(currentItem);
  $("#content-panel > *").hide();

  var selectedItem = currentItem.context.innerText.trim();
  switch(selectedItem) {
    case "Projects":
      $('#projects-content').fadeIn("slow");
      break;
    case "Games":
      $('#games-content').fadeIn("slow");
      break;
    case "About":
      $('#about-content').fadeIn("slow");
      break;
    default:
      throw "#menu-bar selection invalid.";
  }

}

function setActiveMenuItem(currentItem) {
  $("#menu-bar > a").removeClass("active");
  currentItem.addClass("active");
}
