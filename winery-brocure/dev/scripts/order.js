$(document).ready(function () {
    //move to order.html when clicked single wine image
    $('.gallery img').click(function () {
        window.location.href = 'order.html';
    });
});

$('.show-detail img').click(function () {
    if (this.src != null) {
        let val = this.src.substring(0, this.src.length - 4);
        document.getElementById('detail-wine').src = val + "-l.png";
    }
});

