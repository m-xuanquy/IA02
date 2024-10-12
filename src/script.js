const num1Input = document.getElementById("num1-input")
const num2Input = document.getElementById("num2-input")
const resultText = document.getElementById("result")
const calButton = document.getElementById("cal-btn")
const noticeText = document.getElementById("notice")
const operation = document.getElementsByName("operation")
console.log(operation.value)
const getNum1Input = () => parseInt(num1Input.value);
const getNum2Input = () => parseInt(num2Input.value);
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
    const num1 = getNum1Input();
    const num2 = getNum2Input();
    // const operation = getOperation();

    if (isNaN(num1) || isNaN(num2)) {
        noticeText.textContent = "Hãy điền giá trị cho cả 2 số";
        
        return;
    }

    let result;
    switch (getOperation()) { 
        case "plus":
            result = num1 + num2;
            break;
        case "minus":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                noticeText.textContent = "Không thể chia cho 0";
                return;
            }
            result = num1 / num2;
            break;
        default:
            noticeText.textContent = "Hãy chọn phép tính";
            return;
    }
    resultText.textContent = result;
}

calButton.addEventListener("click", calculate);

// const cleanInputString = (str) => {
//     // const charArray = [/[.]/g, /[,]/g, /[-]/g, /[_]/g, /[ ]/g]
//     // for (const char of charArray) {
//     //     str = str.replace(char, '');
//     // }
//     // return str.toLowerCase();
//     return str.replace(/\W+|_/g,"").toLowerCase();
// }

// const isPalindrome = (inputText) => {
//     inputText = cleanInputString(inputText);
//     hintText.textContent = inputText ;

//     const reversedInputText = inputText.split("").reverse().join("");
//     hintText.textContent += " " + reversedInputText;
//     return (inputText === reversedInputText) ;
// }

// const palindromeChecker = () => {
//     const inputText = getTextInput();


//     if (!inputText) {
//         alert("Please input a value");
//         return;
//     }

//     resultText.classList.remove("hide");
//     if (isPalindrome(inputText)) {
//         resultText.textContent = `${inputText} is a palindrome`;
//     }
//     else {
//         resultText.textContent = `${inputText} is not a palindrome`;
//     }
// }

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

// async function demo() {
//     sleep(2 * 1000);
// }

// const mindRead = async () => {
//     const inputText = getTextInput();


//     if (!inputText) {
//         alert("Please input a value");
//         return;
//     }

//     resultText.classList.remove("hide"); 
//     resultText.textContent = `Tính toán các khả năng...`;
//     await sleep(1000);
//     resultText.textContent = `Tổng hợp dữ liệu từ máy chủ...`;
//     await sleep(1000);
//     resultText.innerHTML = ` Con số bạn đang nghĩ là ${inputText}!`;
//     resultButtonSection.classList.remove("hide");
// }

// const rightButton = document.querySelector("#right-btn");
// const wrongButton = document.querySelector("#wrong-btn");

// const rightButtonEvent = () => {
//     resultText.classList.add("hide");
//     resultButtonSection.classList.add("hide");
//     textInput.value = "";
// }

// const wrongButtonEvent = () => {
//     alert("fuck you");
// }
 
// const test = () => {
//     hintText.textContent = resultText;
// }

// checkButton.addEventListener("click", mindRead);
// rightButton.addEventListener("click", rightButtonEvent);
// wrongButton.addEventListener("click", wrongButtonEvent);

