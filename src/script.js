const num1Input = document.getElementById("num1-input")
const num2Input = document.getElementById("num2-input")
const resultText = document.getElementById("result")
const calButton = document.getElementById("cal-btn")
const noticeText = document.getElementById("notice")
const operation = document.getElementsByName("operation")
console.log(operation.value)
const getNum1Input = () => num1Input.value;
const getNum2Input = () => num2Input.value;
const getOperation = () => {
    for (i = 0; i<operation.length; i++) {
        if (operation[i].type = "radio") {
            if (operation[i].checked) {
                return operation[i].value;
            }
        }
    }
};


const calculate = () => {
    noticeText.textContent = "";
    const num1 = getNum1Input();
    const num2 = getNum2Input();
    // const operation = getOperation();

    if (!num1) {
        noticeText.textContent = "Hãy điền giá trị cho Số thứ nhất";
        return;
    }

    if (!num2) {
        noticeText.textContent = "Hãy điền giá trị cho Số thứ hai";
        return;
    }



    // if (!Number(num2)) {
    //     noticeText.textContent = "Giá trị nhập ở Số thứ hai không phải là số";
    //     return; 
    // }


    let result;
    switch (getOperation()) { 
        case "plus":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "minus":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "multiply":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "divide":
            if (parseInt(num2) === 0) {
                noticeText.textContent = "Không thể chia cho 0";
                return;
            }
            result =parseInt(num1) / parseInt(num2);
            break;
        default:
            noticeText.textContent = "Hãy chọn phép tính";
            return;
    }
    resultText.textContent = result;
}

num1Input.addEventListener('input', function() {
    const num1 = getNum1Input();
    
    if (!num1) {}
    else if (!Number(num1)) {
        noticeText.textContent = "Giá trị nhập ở Số thứ nhất không phải là số";
       
    }
    else {
        noticeText.textContent = "";
    }
});


num2Input.addEventListener('input', function() {
  
    const num2 = getNum2Input();
    if (!num2) {

    }
    else if (!Number(num2)) {
        noticeText.textContent = "Giá trị nhập ở Số thứ hai không phải là số";
       
    }
    else {
        noticeText.textContent = "";
    }
});


calButton.addEventListener("click", calculate);
