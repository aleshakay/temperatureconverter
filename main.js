console.log('temperature converter')

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};


let convertItBtn = document.getElementById('tempConvertbtn')
let resetItBtn = document.getElementById('reset');



const convertToFar = (celsuis) => {
    let farhenheit = Math.round((celsuis * (9/5))+ 32);
    return farhenheit;}

const convertToCel = (farhenheit) => {
    let celsuis = Math.round((farhenheit - 32) *(5/9));
    return celsuis;}  

let enteredTemp = document.getElementById('tempcomment'); 
let selectedRadioBtns = document.getElementById('tempRadioBtn')
let selectedbtn = selectedRadioBtns.value[selectedRadioBtns.selectedIndex].value;
let radioresponse;

const getRadioVal = (form, name) => {
    let val;
    let radios = form.elements[name];
    for(let i=0; i < radios.length; i++){
        if (radios[i].checked){
        val = radios[i].value;
        break;
        }
    }
    return val;
}



const determineMetric = (e) => {
    e.preventDefault();
        if (val == customRadio1){
            console.log(val)
          //  radioresponse = convertToCel(userTemp)
          //  printToDom('tempOutPut',radioresponse)
        }
        else if (selectedbtn == customRadio2){
            radioresponse = convertToFar(userTemp)
            printToDom('tempOutPut', radioresponse)
        }
    }





// convertItBtn.addEventListner("click", e => {
//     determineMetric()
// },
enteredTemp.addEventListner('keyup', (e) => {
    if (e.keyCode === 13){
        e.preventDefault
        determineMetric();
        }
    })



  