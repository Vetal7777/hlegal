<!--    lazy load-->
    const lazyImages = document.querySelectorAll('img[data-src],source[data-srcset]');
    const windowHeight = document.documentElement.clientHeight;

    let lazyImagesPositions = [];
    if(lazyImages.length > 0) {
    console.log(lazyImages)
    lazyImages.forEach(img => {
    if (img.dataset.src || img.dataset.srcset) {
    lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
    lazyScrollCheck();
}
});
}

    window.addEventListener('scroll',lazyScroll);

    function lazyScroll(){
    if(document.querySelectorAll('img[data-src],source[data-srcset]').length >0){
    lazyScrollCheck();
}
}

    console.log(lazyImagesPositions);

    function lazyScrollCheck(){
    let imgIndex = lazyImagesPositions.findIndex(
    item => pageYOffset > item - windowHeight
    );
    if(imgIndex >=0){
    if (lazyImages[imgIndex].dataset.src){
    lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
    lazyImages[imgIndex].removeAttribute('data-src');
}else if (lazyImages[imgIndex].dataset.srcset){
    lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
    lazyImages[imgIndex].removeAttribute('data-srcset');
}
    delete lazyImagesPositions[imgIndex];
}
}
<!--    Modal-->
    $(document).ready(function (){
    $('.header-right__toggle').on('click', function () {
        $('.toggle-modal').toggleClass('active')
    })
    })
    $(document).ready(function (){
        $('.exit__a').on('click', function () {
            $('.toggle-modal').removeClass('active')
        })
    })
// <!--    Modal-->
$(document).ready(function (){
    $('.free').on('click', function () {
        $('.modal-form-services').toggleClass('active')
    })
})
$(document).ready(function (){
    $('.contact-form__exit').on('click', function () {
        $('.modal-form-services').removeClass('active')
    })
})

//Pre-loader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}