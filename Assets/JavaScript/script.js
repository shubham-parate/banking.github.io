let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);

   if (enterAmount > 100000) {
      alert("Insufficient Balance.");
   }else if (enterAmount < 0) {
      alert("Enter valid amount");
    } else {
      var findUserBankAccount = enterName + "BankBalance";
      var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
      var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
      document.getElementById("myAccountBalance").innerText = myAccountBalance
      document.getElementById(findUserBankAccount).innerHTML = finalAmount;
      alert(`Successful Transaction !!  
      INR ${enterAmount} is transferred successfully to ${enterName}@gmail.com.`)

      // transaction history 
      var createPTag = document.createElement("li");
      var textNode = document.createTextNode(`INR ${enterAmount} is transferred to recepient with Email-id ${enterName}@gmail.com on ${Date()}.`);
      createPTag.appendChild(textNode);
      var element = document.getElementById("transaction-history-body");
      element.insertBefore(createPTag, element.firstChild);
   }
}