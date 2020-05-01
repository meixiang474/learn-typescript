class Animal {
  protected readonly name: string;
  static categories: string[] = ['mamal', 'bird']
  static isAnimal(a){
    return a instanceof Animal
  }
  constructor(name: string){
    this.name = name
  }
  run(): string{
    return `${this.name} is running`
  }
}

const snake = new Animal('lily')
console.log(snake.run())

class Dog extends Animal {
  bark(): string{
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())
console.log(xiaobao.bark())

class Cat extends Animal {
  constructor(name: string){
    super(name)
  }
  run(){
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run())

interface Radio {
  switchRadio(trigger: boolean): void
}
interface Battery {
  checkBatteryStatus():void
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus():void
}
class Car implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus(){

  }
}

class Cellphone implements Radio, Battery {
  switchRadio() {

  }
  checkBatteryStatus(){
    
  }
}