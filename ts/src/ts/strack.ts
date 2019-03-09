/**
 * 模拟栈的实现
 */
function Strack(){
  let strack: Array<any> = []

  // 压栈
  this.push = function(item: any): void{
    strack.push(item)
  }

  // 出栈
  this.pop = function(): any{
    return strack.pop()
  }

  // 返回栈顶的元素
  this.top = function(): any{
    return strack[strack.length - 1]
  }

  // 栈是否为空
  this.isEmpty = function(): Boolean{
    return strack.length === 0
  } 

  // 清空栈
  this.clear = function(): void{
    strack = []
  }
}

class Strack_class {
  private strack: Array<any> = []
  constructor(){
    this.strack = []
  }

 // 压栈
  push (item: any): void{
    this.strack.push(item)
  }

  // 出栈
  pop (): any{
    return this.strack.pop()
  }

  // 返回栈顶的元素
  top (): any{
    return this.strack[this.strack.length - 1]
  }

  // 栈是否为空
  isEmpty (): Boolean{
    return this.strack.length === 0
  } 

  // 清空栈
  clear (): void{
    this.strack = []
  }
}


// 判断括号是否合法
function is_ok(str): Boolean{
  let strack = new Strack_class()
  for(let i = 0; i < str.length; i++){
    if(str[i] === '('){
      strack.push(str[i])
    }else if(str[i] === ')'){
      if(strack.isEmpty()){
        return false
      }else{
        strack.pop()
      }
    }
  }

  return strack.isEmpty()
}
// console.log(is_ok('asd)('));
// console.log(is_ok('asd()sadas(sd(asdasd(asd)))'));
// console.log(is_ok('asd()sadas(sd(asdasd(asd)())))'));


let strackClass = new Strack_class();

function CalcExp(){
  let data_strack = new Strack_class();
  let min_strack = new Strack_class();

  this.push = function(item: any): void{
    data_strack.push(item)

    if(min_strack.isEmpty() || item < min_strack.top()){
      min_strack.push(item)
    }else{
      min_strack.push(min_strack.top())
    }
  }

  this.pop = () => {
    data_strack.pop()
    min_strack.pop()
  }

  this.min = function(){
    return min_strack.top()
  }

  this.getItem = () => {
    return min_strack
  }
}

let minStrack = new CalcExp()

minStrack.push(3)
minStrack.push(6)
minStrack.push(11)

console.log(minStrack.min())
console.log(minStrack.getItem())
