// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
$(document).on("turbolinks:load", function() {

  const wrap = document.getElementsByClassName("wrap")[0];
  const wbone = document.getElementsByClassName("workbox")[0];
  const wbtwo = document.getElementsByClassName("workbox")[1];
  const wbthree = document.getElementsByClassName("workbox")[2];
  const wbfour = document.getElementsByClassName("workbox")[3];
  const wbfive = document.getElementsByClassName("workbox")[4];
  const wbsix = document.getElementsByClassName("workbox")[5];
  const worklower = document.getElementsByClassName("worklower")[0];
  const menu = document.getElementsByClassName("mobilego")[0];
  const close = document.getElementsByClassName("mlclose")[0];
  const menubtn = document.getElementsByClassName("mobileicon")[0];



  if (close != undefined) { close.addEventListener('click', hideMen, false); }
    if (menubtn != undefined) { menubtn.addEventListener('click', showMen, false); }

  function showMen() {
 menu.style.left = "0";
 dark.style.opacity = ".4";
 dark.style.zIndex = "3";
 dark.addEventListener('click', hideMen, false);
}
 function hideMen() {
 menu.style.left = "-100%";
 dark.style.opacity = "0";

 setTimeout(function() {
  dark.style.zIndex = "-1";
 }, 500);

}
  // $(wbone).hover(function() {
  //     $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //     // $( this ).find( "h1" ).css("color", "white");
  //     $( worklower ).css("background-image", "url(\"http://localhost:3000/assets/one-db0a7decf2c58d4c71f15962ea9dee54eecd73ee6758b78040d1666d081f7eb3.jpg\")");
  //
  //   }, function() {
  //     $( ".workbox" ).find( "h1" ).css("color", "black");
  //     $( worklower ).find( "h1" ).css("background-color", "none");
  //   });
  //
  //   $(wbtwo).hover(function() {
  //       $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //       $( this ).find( "h1" ).css("color", "white");
  //       $( worklower ).find( "h1" ).css("background-color", "blue");
  //     }, function() {
  //       $( ".workbox" ).find( "h1" ).css("color", "white");
  //       $( worklower ).find( "h1" ).css("background-color", "none");
  //     });
  //
  //
  //     $(wbthree).hover(function() {
  //         $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //         $( this ).find( "h1" ).css("color", "white");
  //         $( worklower ).find( "h1" ).css("background-color", "yellow");
  //       }, function() {
  //         $( ".workbox" ).find( "h1" ).css("color", "white");
  //         $( worklower ).find( "h1" ).css("background-color", "none");
  //       });
  //
  //
  //       $(wbfour).hover(function() {
  //           $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //           $( this ).find( "h1" ).css("color", "white");
  //         }, function() {
  //           $( ".workbox" ).find( "h1" ).css("color", "white");
  //         });
  //
  //
  //         $(wbfive).hover(function() {
  //             $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //             $( this ).find( "h1" ).css("color", "white");
  //           }, function() {
  //             $( ".workbox" ).find( "h1" ).css("color", "white");
  //           });
  //
  //
  //
  //           $(wbsix).hover(function() {
  //               $( ".workbox" ).find( "h1" ).css("color", "rgba(255,255,255,.3)");
  //               $( this ).find( "h1" ).css("color", "white");
  //             }, function() {
  //               $( ".workbox" ).find( "h1" ).css("color", "white");
  //             });

});
