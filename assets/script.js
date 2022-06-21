
function example(event) {
  el = document.getElementById("example");
  el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
  event.preventDefault();
}

function example2(event) {
  el = document.getElementById("example2");
  el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
  event.preventDefault();
}

function example3(event) {
  el = document.getElementById("example3");
  el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
  event.preventDefault();
}

$("div[id^='myModal']").each(function () {

  var currentModal = $(this);

  //click next
  currentModal.find('.btn-next').click(function () {
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").nextAll("div[id^='myModal']").first().modal('show');
  });

  //click prev
  currentModal.find('.btn-prev').click(function () {
    currentModal.modal('hide');
    currentModal.closest("div[id^='myModal']").prevAll("div[id^='myModal']").first().modal('show');
  });

});


jQuery(function () {
  $(function () {
    $(window).scroll(function () { //Fonction appelée quand on descend la page
      if ($(this).scrollTop() > 200) {  // Quand on est à 200pixels du haut de page,
        $('#scrollUp').css('right', '10px'); // Replace à 10pixels de la droite l'image
      } else {
        $('#scrollUp').removeAttr('style'); // Enlève les attributs CSS affectés par javascript
      }
    });
  });
});

(function ($) {

  var tabs = $(".tabs li a");

  tabs.click(function () {
    var terms = this.hash.replace('/', '');
    tabs.removeClass("active");
    $(this).addClass("active");
    $("#terms").find('p').hide();
    $(terms).fadeIn(200);
  });

})(jQuery);

function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}