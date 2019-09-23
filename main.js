console.log('temperature converter')

const printToDom = (divId, toPrint) => {
    document.getElementById(divId).innerHTML = toPrint;
};

let userTemp = document.getElementById('tempcomment').value;

