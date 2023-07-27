class ContaBancaria {
  constructor(saldo) {
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  sacar(valor) {
    this.saldo -= valor;
  }
}

let conta = new ContaBancaria(2000);
conta.depositar(500);
console.log("Saldo = " + conta.saldo);

conta.sacar(1000);
console.log("Saldo = " + conta.saldo);
