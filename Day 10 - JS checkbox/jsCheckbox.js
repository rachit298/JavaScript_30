// const input = document.querySelectorAll(".container input[type='checkbox']");

// input.forEach((item) => item.addEventListener("click", handleChange));

// function handleChange(event) {
//   let inBetween = false;
//   if (event.shiftKey && this.checked) {
//     input.forEach((checkbox) => {
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// let lastChecked;

// //uncheck the checkboxes after reload
// window.onload = function () {
//   input.forEach((key) => {
//     if (key.checked) {
//       key.checked = false;
//     }
//   });
// };

const checkboxes = document.querySelectorAll(
  ".container input[type='checkbox']"
);

let lastChecked;

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

function handleCheck(event) {
  let inBetween = false;

  if (event.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

window.onload = function () {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  });
};
