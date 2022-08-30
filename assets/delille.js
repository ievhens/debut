$(document).ready(function(){
    $(".slider").fadeSlide({
        "autoPlay": true,
        "startImage": 1,
        "autoplaySpeed": 5,
        "fadeSpeed": 3000,
        "hoverStop": true});
});

document.querySelector(".burger").onclick = function() {
document.getElementById("mobile-menu").classList.toggle("active");
document.querySelector(".burger").classList.toggle("active");
    
}
document.querySelectorAll(".quantity").forEach(item => {

    item.addEventListener("click", event => {

        let input = event.target.parentNode.querySelector("input[type='number']");
        let qnt = +(input.value);
        let increment = event.target.classList.contains("more") ? 1 : -1;
        qnt += increment;
        if (qnt < +(input.min) || qnt > +(input.max)) return;
        else { input.value = qnt };

    })
})