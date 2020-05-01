// 函数声明
function add(x: number, y: number, z?: number, w: number = 10): number {
  if(typeof z === 'number'){
    return x + y + z
  }
  return x + y
}

let result = add(2, 3, 4)

// 函数表达式
const add1 = (x: number, y: number, z?: number, w: number = 10): number => {
  if(typeof z === 'number'){
    return x + y + z
  }
  return x + y
}
const add2: (x: number, y: number, z?: number, w?: number) => number = add1