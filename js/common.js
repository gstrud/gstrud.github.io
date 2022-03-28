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




//Создать блок <DIV>  с классом 'content' в HTML-документе
document.querySelector('.content').innerHTML = `<div class="job-list"></div>`;
try {
  for (key in companyObjectList) {
    let company = document.createElement('h2');
    company.innerHTML = `${key}`;
    document.querySelector('.job-list').appendChild(company);
    let ul = document.createElement('ul');
    for (let index = 0; index < companyObjectList[key].length; index++) {
      ul.innerHTML += `<li><span>${companyObjectList[key][index][0]}</span><p>${companyObjectList[key][index][1]}</p></li>`;
      document.querySelector('.job-list').appendChild(ul);
    }
  }
} catch (err) {
  //alert('Ошибка ' + err.name + ':' + err.message + '\n' + err.stack);
  alert('Извините, в данных ошибка');
  alert(err.name);
  alert(err.message);
}
