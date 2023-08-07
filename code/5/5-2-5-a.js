// 原先實作
class Bank {
  constructor() {
    this._balance = 0
  }
  get balance() {
    return this._balance
  }
  deposit(amount) {
    this._balance += amount
    console.log(this._balance)
  }
  withdraw(amount) {
    this._balance -= amount
  }
}

// 呼叫後將會把目前 Bank 的 balance 改為傳入的 fakePrice
const useFakeBank = (fakePrice) => {
  Object.defineProperty(Bank.prototype, 'balance', {
    get() {
      return fakePrice
    }
  })
}

const myBank = new Bank()

myBank.balance // 0

useFakeBank(1000)

myBank.balance // 1000

useFakeBank(10000)

myBank.balance // 10000
