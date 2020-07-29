

// Login Event Handler

const login = document.getElementById("login");
login.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = 'none';
   	const transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block";   	
})

// Deposit Event Handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click" , function(){
	const depositNumber = getInputAmount("depositAmount");

	updateAmount("currentDeposit", depositNumber);
	updateAmount("currentBalance", depositNumber);


	document.getElementById("depositAmount").value= "";

});

//Withdraw event handler

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
	const withdrawNumber = getInputAmount("withdrawAmount")

	updateAmount("currentWithdraw",withdrawNumber);
	updateAmount("currentBalance", -1*withdrawNumber);
})

// Function for fetching input amount

function getInputAmount(id) {
	// body... 
	const amount = document.getElementById(id).value;
	const amountNumber = parseFloat(amount);
	return amountNumber;
}


// Deposit & Balance Update Function
 	
function updateAmount(id, depositNumber) {
 		// body...
	const currentAmount = document.getElementById(id).innerText;
	const currentNumber = parseFloat(currentAmount);
	const totalAmount = currentNumber+depositNumber;

	document.getElementById(id).innerText = totalAmount; 		 
 } 	