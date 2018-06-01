
function CCNUMValidation() {
    let CCNum = document.getElementById('card').value;
    let type = document.getElementById('type');


    if((CCNum.toString()[0]) == 4){
        type.innerText = 'Visa';
        if ((CCNum.toString().length) >= 13 && (CCNum.toString().length) <= 16  ) {
           $('#type').append('<i class="glyphicon glyphicon-ok"></i>');  
        }   
    } else if ((CCNum.toString()[0] == 5)) {
        type.innerHTML = 'Mastercard';
        if ((CCNum.toString().length) == 16) {
            $('#type').append('<i class="glyphicon glyphicon-ok"></i>')
        }
    } else if((CCNum.toString()[0] == 3 && CCNum.toString()[1] == 4) || (CCNum.toString()[0] == 3 && CCNum.toString()[1] == 7)) {
        type.innerHTML = 'American Express';
        if ((CCNum.toString().length) == 15) {
            $('#type').append('<i class="glyphicon glyphicon-ok"></i>')
        }
    } else if(CCNum == "") {
        type.innerHTML = '';
    } else if((CCNum.toString()[0] != 4 || CCNum.toString()[0] != 5)) {
        type.innerHTML = '?';
    }


}

function validateCC() {
    let CCNum = document.getElementById('card').value;

    if(checkLuhn(CCNum) == false){
            $("#invalid").fadeTo(2000, 500).slideUp(500, function(){
            $("#invalid").slideUp(500);
        });   
    }
}

function checkLuhn(value) {

      if (/[^0-9-\s]+/.test(value)) return false;

      let nCheck = 0, nDigit = 0, bEven = false;
      value = value.replace(/\D/g, "");
  
      for (let n = value.length - 1; n >= 0; n--) {
            let cDigit = value.charAt(n),
                nDigit = parseInt(cDigit, 10);
  
          if (bEven) {
              if ((nDigit *= 2) > 9) nDigit -= 9;
          }
  
          nCheck += nDigit;
          bEven = !bEven;
      }
  
      return (nCheck % 10) == 0;
  }
