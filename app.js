const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Redirect to landing page when product image is clicked

// var productImages = document.querySelectorAll('.product img');
// productImages.forEach(function(image) {
//   image.addEventListener('click', function() {
//     var product = this.parentNode;
//     var landingPageURL = product.getAttribute('data-landingPageURL');
//     window.location.href = landingPageURL;
//   });
// });