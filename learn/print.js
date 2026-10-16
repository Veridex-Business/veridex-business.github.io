(function () {
  var buttons = document.querySelectorAll(".print-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      window.print();
    });
  }
})();
