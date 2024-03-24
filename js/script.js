$(document).ready(function () {
    $(".multiple-slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $(".header-slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $(".item-slider").slick({
        slidesToShow: 1,
        fade: true,
        asNavFor: ".item-slider-nav",
        arrows: false,
    });

    $(".item-slider-nav").slick({
        slidesToShow: 3,
        asNavFor: ".item-slider",
        arrows: true,
        focusOnSelect: true,
    });

    $(".collapsible").collapsible();
});

$(document).ready(function () {
    $(".catalog-slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$(document).ready(function () {
    $(".modal").modal();
});

window.addEventListener("click", (event) => {
    console.log("click");
    if (event.target.classList.contains("button-buy")) {
        console.log("клік на кнопку");
        addItems(event.target);
    }
    if (event.target.classList.contains("delete-items")) {
        console.log("клік на кнопку видалення товару");
        addItems(event.target);
    }
});

function addItems(element) {
    console.log("додавання товару");
    let li = document.createElement("li");
    li.innerHTML =
        element.dataset.img +
        element.dataset.name +
        element.dataset.price +
        '<div class="delete-items">x</div>';
    cart.appendChild(li);
    addCartToForm(element.dataset.id);
    M.toast({ html: "товар у кошику", classes: "rounded" });
}

function deleteItems(element) {
    console.log("видалення товару");
    element.parentNode.remove();
}
let inputCart = document.getElementById("cartFF");
function addCartToForm(id) {
    inputCart.value += id + ",";
}
