document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        const carousel = new bootstrap.Carousel(document.querySelector('#customCarousel'));
        carousel.to(index);
    });
});
