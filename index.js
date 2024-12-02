let display = document.querySelector(".display");
let deposit = document.querySelector(".deposit");
let withdraw = document.querySelector(".withdraw");
let checkbalance = document.querySelector(".checkbalance");
let details = document.querySelector(".details");
let enter = document.querySelector(".enter");

display.style.width = "15em";
display.style.height = "1.5em";

let obj = {
  checkBalance: 1000,
  deposit: 0,
  withdraw: 0,

  totalBalance1: function () {
    display.textContent = `Total amount : ${this.checkBalance}`;
  },

  deposit1: function () {
    this.checkBalance = Number(this.checkBalance) + Number(this.deposit);
    display.textContent = `${this.deposit} rupees deposited !`;
  },

  withdraw1: function () {
    if (Number(this.withdraw) > Number(this.checkBalance)) {
      display.textContent = `insufficent funds!`;
    } else {
      this.checkBalance = Number(this.checkBalance) - Number(this.withdraw);
      display.textContent = `${this.withdraw} rupees withdrawed !`;
    }
  },
};

// // console.log(obj)

checkbalance.addEventListener("click", () => {
  obj.totalBalance1();
});

// deposit.addEventListener("click", () => {
//   details.style.display = "inline-block";
//   details.value = "";
//   enter.style.display = "inline-block";
//   let add = 0;
//   details.addEventListener("input", (e) => {
//     add = e.target.value;
//   });
//   enter.addEventListener("click", () => {
//     obj.deposit = add;
//     details.value = "";
//     details.style.display = "none";
//     enter.style.display = "none";
//     obj.deposit1();
//   });
// });

// // console.log(obj)

// withdraw.addEventListener("click", () => {
//   details.style.display = "inline-block";
//   details.value = "";
//   enter.style.display = "inline-block";
//   let sub;
//   details.addEventListener("input", (e) => {
//     sub = e.target.value;
//   });
//   enter.addEventListener("click", () => {
//     obj.withdraw = sub;
//     details.value = "";
//     details.style.display = "none";
//     enter.style.display = "none";
//     obj.withdraw1();
//   });
// });

function handleTransaction(type) {
  details.style.display = "inline-block";
  enter.style.display = "inline-block";

  // Clear any previous value in the input
  details.value = "";

  enter.onclick = () => {
    const value = Number(details.value); // Convert input to a number
    if (!value || value < 0) {
      display.textContent = "Please enter a valid amount!";
    } else {
      if (type === "deposit") {
        obj.deposit = value;
        obj.deposit1();
      } else if (type === "withdraw") {
        obj.withdraw = value;
        obj.withdraw1();
      }
    }

    // Reset UI elements
    details.style.display = "none";
    enter.style.display = "none";
    details.value = "";
  };
}

deposit.addEventListener("click", () => handleTransaction("deposit"));
withdraw.addEventListener("click", () => handleTransaction("withdraw"));
