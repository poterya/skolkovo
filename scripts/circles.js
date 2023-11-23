document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.main__desktop__rent_and_services__floorsPlans__nameAndbuttons__buttons__item');
    
    // Добавляем класс к первой кнопке при загрузке страницы
    buttons[0].classList.add('main__desktop__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            buttons.forEach(function(innerButton) {
                innerButton.classList.remove('main__desktop__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');
            });
            button.classList.add('main__desktop__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');
        });
    });

    var buttonsm = document.querySelectorAll('.main__mobile__rent_and_services__floorsPlans__nameAndbuttons__buttons__item');

    // Добавляем класс к первой кнопке при загрузке страницы
    buttonsm[0].classList.add('main__mobile__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');

    buttonsm.forEach(function(button) {
        button.addEventListener('click', function() {
            buttonsm.forEach(function(innerButton) {
                innerButton.classList.remove('main__mobile__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');
            });
            button.classList.add('main__mobile__rent_and_services__floorsPlans__nameAndbuttons__buttons__currentitem');
        });
    });
});

