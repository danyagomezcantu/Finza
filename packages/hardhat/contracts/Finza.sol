// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0; 
contract ETHContract {
    address public borrower;
    address public owner; // no this is borrower
    address public lender; // investors, propy, etc.
    uint public totalLoanAmount; 
    uint public loanLength; // in years
    uint public interestRate; // need a function to calcuate this, interest each yr, depends on down payment
    uint public monthlyPayment; // then if monthy payment went through function
    uint public totalPayments; // expected total payments, also function for this, loanLength/ 12
    uint public paymentsMade; 
    bool public contractActive; //boolean
    bool public contractCompleted; 

    event PaymentMade(uint amount, uint remainingBalance);

    constructor (address _lender, uint _totalLoanAmount, uint _loanLength) {
        owner = msg.sender; // initiated transaction
        borrower = msg.sender; //applies for loan
        loanLength = _loanLength;
        lender = _lender;
        totalLoanAmount = _totalLoanAmount;
        interestRate = 8;
        monthlyPayment = calculateMonthlyPayment();
        totalPayments = _totalLoanAmount / monthlyPayment;
        paymentsMade = 0;
        contractActive = true;
        contractCompleted = false;
    }

    function calculateMonthlyPayment() internal view returns (uint) {
        //morgage payment calculation
       
       uint monthlyInterestRate = (interestRate * 100) / 12; 
   uint numPayments = loanLength * 12; // Convert years to months

  
    uint monthlyPaymentis = (totalLoanAmount * monthlyInterestRate)/(100 * (1 - (1 + monthlyInterestRate / 100) ^numPayments));


        return monthlyPaymentis;
    }

    function makePayment() public payable {
        require(msg.sender == borrower, "Only the borrower can make payments.");
        require(contractActive, "Contract is not active.");
        require(!contractCompleted, "Contract is already completed.");
        require(msg.value >= monthlyPayment, "Insufficient payment."); //msg.value is the monthly payment on the contract

        paymentsMade++;
        if (paymentsMade >= totalPayments) {
            contractCompleted = true;
            contractActive = false;
        }

        emit PaymentMade(msg.value, (totalPayments - paymentsMade) * monthlyPayment);
    }

    function cancelContract() public {
        require(msg.sender == owner, "Only the owner can cancel the contract.");
        require(contractActive, "Contract is not active.");

        contractActive = false;
    }
}
