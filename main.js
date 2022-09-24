let numberInput = document.querySelector("#numberInput");
let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFecth);



function getFactFecth() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/' + number)
        .then(response => response.text()) //remove curly bracket when not needed and for JSOn data use JSON()
        .then(data => {
            if (number != '') {
                fact.style.display = 'block';
                factText.innerText = data;
            } else {

                fact.style.display = 'none';
            }
        })
        .catch(err => { console.log(err) })
}









// function getFactAjax() {
//     let number = numberInput.value;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/' + number);

//     xhr.onload = function() {
//         if (this.status === 200 && number != '') {
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//         //here response is same as response.Text but use the latter only

//     }
//     xhr.send();
// }