$(function() {

    //Валидация для полей формы
    $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

});

//Checkbox
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
};

//Start Checkbox function
check.onclick = function(){FunChbox();};





//------------------------------------
/*
//TEST
function handler() {
  alert( 'Спасибо!' );
};

//test = document.getElementById('test');
test.addEventListener("click", handler);
*/
