// var swiper = new Swiper('.swiper-jwp', {
//    centeredSlides: true,
//    slidesPerView: 'auto',
//    longSwipesMs: 0,
//   loopPreventsSlide:false,
//    longSwipes: true,
//    longSwipesRatio: 0,
//    threshold: 0,
//    slideToClickedSlide:true,
//    speed: 900,
//    loop: true,
//    loopedSlides:2,
//    spaceBetween: 20,
//    keyboard: {
//    enabled: true,
//    onlyInViewport: true,
// },
//    grabCursor: true,
//    pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },

//   formatFractionCurrent: function (number) {
// if (number < 10) {
// number = '0' + number;
// }
// return number;
// },

//  renderFraction: function (currentClass, totalClass) {
//     return '<span class="' + currentClass + '"></span>' +
//             ' of' +
//             '<span class="' + totalClass + '"></span>';
// },
              

//    navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    
// });


// Function to change the video source
function changeVideo(videoSrc) {
   const videoPlayer = document.getElementById("videoPlayer");
   videoPlayer.src = videoSrc; // Update the video source
   videoPlayer.play(); // Ensure the video starts playing
}
