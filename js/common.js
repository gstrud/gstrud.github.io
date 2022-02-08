$(function() {




    //Валидация для полей формы
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();




});

function FunChbox() {
    var chbox, btnSend;

    chbox = document.getElementById('check');
    btnSend = document.getElementById('btn-send');


        if (chbox.checked==true){
            btnSend.disabled = false;
        }
        if (chbox.checked==false){
            btnSend.disabled = true;
        }


    }





