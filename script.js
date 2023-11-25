
function checkWord() {
  let textareaValue = document.getElementById("Textarea").value.toLowerCase();
  let inputWord = document.getElementById("Input").value.toLowerCase();
  if (textareaValue.includes(inputWord)) {
    console.log("Matnda bunday so'z mavjud");
  } else {
    console.log("Matnda bunday so'z mavjud emas");
  }
}

document.querySelector(".btn").addEventListener("click", checkWord)


