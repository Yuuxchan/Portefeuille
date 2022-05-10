// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Get the modal
// var modal = document.getElementById("myModal2");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn2");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close2")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// // Get the modal
// var modal = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn3");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close3")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

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


jQuery(function(){
  $(function () {
      $(window).scroll(function () { //Fonction appelée quand on descend la page
          if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
              $('#scrollUp').css('right','10px'); // Replace à 10pixels de la droite l'image
          } else { 
              $('#scrollUp').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
          }
      });
  });
});