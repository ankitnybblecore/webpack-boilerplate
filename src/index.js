// Test import of a JavaScript module
import { example } from '@/js/example'
import { index } from '@/js/index'

// Test import of an asset
// import webpackLogo from 'public/images/webpack-logo.svg'

//jquery import here

// Test import of styles
import '@/styles/index.scss'

// Appending to the DOM
// const div = document.createElement('img')
// logo.src = webpackLogo   



$('.carousel').carousel();


{/* <script> */}
// $(document).ready(function () {
//   $(".egg-icon").hover(function () {
//     var target = '#' + $(this).data('target');
//     $(target).show();
//   });
// }, function () {
//   var target = '#' + $(this).data('target');
//   $(target).hide();
// }
// );

// $(document).ready(function(){
// $(".egg-icon").hover(function(){
// var target = '#' + $(this).data('target');
// $(target).show();
// $(this).css("background-color", "#ffffff33");
// }, function(){
//   var target = '#' + $(this).data('target');
//   $(target).hide();
// $(this).css("background-color", "");
// });
// });
// {/* </script> */}
// {/* <script> */}
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) { slideIndex = 1 }
//   if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// </script>


// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
