$(document).ready(function(){
    $(".slider").fadeSlide({
        "autoPlay": true,
        "startImage": 1,
        "autoplaySpeed": 5,
        "fadeSpeed": 3000,
        "hoverStop": true});

    function lockHolidays(date) {
        let month = date.getMonth(), day = date.getDate(), year = date.getFullYear(), weekday = date.getDay();
        if($.inArray(`${day}-${month + 1}-${year}`, holidays) != -1 || new Date() > date || weekdays.includes(weekday) ){return [false]};
        return [true];
    }
    $("#delivery-date").datepicker({
        beforeShowDay: lockHolidays
    })
    $("#delivery-time").timepicker({
        timeFormat: 'HH:mm',
        interval: 30,
        minTime: '10',
        maxTime: '11:00pm',
        defaultTime: 'select time',
        startTime: '10:00',
        dynamic: true,
        dropdown: true,
        scrollbar: false
    });
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