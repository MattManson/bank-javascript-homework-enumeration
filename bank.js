var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}
Bank.prototype.accountByName = function(name){
  var thing = undefined;
  this.accounts.find(function(account){
    if (account.name = name){thing = account}
  })
  return thing;
}
Bank.prototype.largestAccount = function(){
  var thing = Math.max(this.accounts.map(account => account.value));
  return thing[0];
}

module.exports = Bank;
