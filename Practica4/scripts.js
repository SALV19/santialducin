const btn = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
btn.forEach((button) =>
  button.addEventListener("click", (e) => handleInput(e.target))
);

let prev_input = null;
let prev_op = null;
let input;

function handleInput(button) {
  // console.log(button.innerHTML);
  if (button.id == "plusminus") {
    result.innerHTML = Number(result.innerHTML) * -1;
    return;
  } else if (button.id == "percent") {
    result.innerHTML = Number(result.innerHTML) / 100;
  } else if (button.id) {
    handleOperation(button.id);
    result.innerHTML = parseFloat(Number(result.innerHTML).toFixed(8));
  } else {
    if (result.innerHTML == 0) {
      result.innerHTML = button.innerHTML;
    } else {
      result.innerHTML = result.innerHTML + button.innerHTML;
    }
  }
}

function handleOperation(op) {
  switch (op) {
    case "AC":
      result.innerHTML = 0;
      prev_input = null;
      prev_op = null;
      break;
    case "equals":
      calculate();
      break;
    default:
      prev_op = op;
      if (!prev_input) {
        prev_input = Number(result.innerHTML);
        result.innerHTML = 0;
      } else {
        calculate();
      }
      break;
  }
}

function calculate() {
  if (!prev_input) {
    prev_input = Number(result.innerHTML);
    result.innerHTML == 0;
    return;
  }
  switch (prev_op) {
    case "plus":
      result.innerHTML = Number(result.innerHTML) + Number(prev_input);
      prev_input = null;
      break;
    case "minus":
      result.innerHTML = Number(prev_input) - Number(result.innerHTML);
      prev_input = null;
      break;
    case "times":
      result.innerHTML = Number(result.innerHTML) * Number(prev_input);
      prev_input = null;
      break;
    case "between":
      result.innerHTML = Number(prev_input) / Number(result.innerHTML);
      prev_input = null;
      break;
  }
}
