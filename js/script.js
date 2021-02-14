$('span').click(function() {
    var clicks = $(this).data('clicks');
    if (clicks) {
        $(this).addClass('closed')
        $(this).removeClass('active')
    } else {
        $(this).removeClass('closed')
        $(this).addClass('active')
    }
    $(this).data('clicks', !clicks);
});

document.querySelector('.nav__btn').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('show')
})
document.querySelectorAll('.nav__item').forEach((el) => el.addEventListener('click', () => {
    document.querySelector('.nav').classList.remove('show')
    document.querySelector('.nav__btn').classList.remove('active')
}))