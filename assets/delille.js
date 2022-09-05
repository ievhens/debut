$(document).ready(function(){
    $(".slider").fadeSlide({
        "autoPlay": true,
        "startImage": 1,
        "autoplaySpeed": 5,
        "fadeSpeed": 3000,
        "hoverStop": true});

    let holydays = ["9-20-2022", "9-28-2022"];

    function lockHolidays(date) {
        let month = date.getMonth(), day = date.getDate(), year = date.getFullYear(), weekday = date.getDay();
        if($.inArray(`${month + 1}-${day}-${year}`, holydays) != -1 || new Date() > date || weekday == 1 ){return [false]};
        return [true];
    }
    $('[name="delivery-date"]').datepicker({
        beforeShowDay: lockHolidays
    })
});




document.querySelector(".burger").onclick = function() {
document.getElementById("main-nav").classList.toggle("active");
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

console.log("delille-loaded")