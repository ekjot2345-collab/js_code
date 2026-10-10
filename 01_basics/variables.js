const accountId=144553
let accountEmail="ekjot994@gmail.com"
var accountPassword="123455"
accountCity="jaipur"
let accountState;


// accountId=2//not allowed
accountEmail="nvifjijf@gmail.com"
accountPassword="155652"
accountCity="delhi"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountState])
// value will be undefined if no value is initiated to the variable
/*
prefer not to use var due to some scope reasons
 */


function processOrder(isPaid) {
  if (isPaid) {
    var status = "paid";
  }

  console.log(status); // "paid" — var escapes the if block
}

function processOrder(isPaid) {
  if (isPaid) {
    let status = "paid";
    console.log(status); // works
  }

  console.log(status); // Error — status exists only inside the if block
}

