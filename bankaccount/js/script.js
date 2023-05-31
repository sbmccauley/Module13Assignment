
const $ = (id) => {
    return document.getElementById(id);
}

let ownerName = $('name')
ownerName.addEventListener('click', function() {
  let ownerName = prompt('Please enter your name:')
  console.log( ownerName)
} )

const bankAccount = function(ownerName) {
    let owner = ownerName
    let balance = 1000
    return {
      getOwnerName: function(owner) {
        return owner
      },
      getBalance: function() {
        
        return balance;
      },
      deposit: function(depositAmount) {
        
        balance += depositAmount
       
        return balance;
      },
      withdrawal: function(withdrawalAmount) {
        if (withdrawalAmount > balance) {
          alert('you do not have sufficient funds for this withdrawal')
        } else { balance -= withdrawalAmount}
       
        return balance
      },
      handleOwnerName: function(owner) {
        let me = this
        return me.owner
        
      },
      handleDeposit: function() {
        let me = this
        return function () {
          depositAmount = parseInt(prompt('Enter deposit amount:'))
          
          if (depositAmount) {
            me.deposit(depositAmount)
            console.log(`after deposit ${depositAmount} balance is ${balance}`)
            
          }
        }
      },
      handleWithdrawal: function() {
        let me = this
        return function () {
          withdrawalAmount = parseInt(prompt('Enter withdrawal amount:'))
          if (withdrawalAmount) {
            me.withdrawal(withdrawalAmount)
            
          }
        }
      },
    };


  };
  
  const customerAccount = bankAccount(ownerName);
  
window.addEventListener('load', () => {

  //get customer name
  $('name').onclick = customerAccount.handleOwnerName()
  //collect deposit
  $('deposit').onclick = customerAccount.handleDeposit()
  //make withdrawal
  $('withdrawal').onclick = customerAccount.handleWithdrawal()

})

  const accountOwner = document.createElement('p')
  accountOwner.innerText = `Account information for ${customerAccount.handleOwnerName()}:`
  $('accountActivity').appendChild(accountOwner)
  
  const currentBalance = document.createElement('p')
  currentBalance.innerText = `Your current balance is:  ${parseInt(customerAccount.getBalance())}`
  $('accountActivity').appendChild(currentBalance)

  const depositInfo = document.createElement('p');
  depositInfo.innerText = `Your deposit total: ${customerAccount.deposit()}.`;
 $('accountActivity').appendChild(depositInfo);

  const withdrawalInfo = document.createElement('p');
  withdrawalInfo.innerText = `Your withdrawal total: ${parseInt(customerAccount.withdrawal())}.`;
 $('accountActivity').appendChild(withdrawalInfo);