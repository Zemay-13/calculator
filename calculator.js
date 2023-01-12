/*ЗНАЧЕНИЕ THIS: Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.*/

let calculator = {
  read() {
    this.a = prompt("Введите первое число");
    this.b = prompt("Введите второе число");
  },

  sum() {
    let sum = Number(this.a) + Number(this.b);
    return sum;
  },
  mul() {
    let mul = Number(this.a) * Number(this.b);
    return mul;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
