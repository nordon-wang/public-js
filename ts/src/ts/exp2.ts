// 类的存取器
class People {
  
  // name: string

  private _name: string = ''

  get name(): string{
    return this._name
  }

  set name(value: string){
    if(value.length < 2 || value.length > 15){
      throw new Error('length is error')
    }

    this._name = value
  }

  // constructor(name: string){
  //   this.name = name
  // }
}

let p = new People()
p.name = 'nordon'
// console.log(p);


// 接口
// 接口就是一个约定 一个规范
interface AjaxOptions{
  url: string,
  type?: string,
  data?: object,
  success (data: object): void
}

function ajax(oprions: AjaxOptions){

}

ajax({
  url:"",
  success(data){
  }
})


interface Point{
  readonly x: number,
  y: number,
  [propName: string]: any // 额外属性检查
}

let point: Point = {
  x: 10,
  y: 10
}

// p.x = 12  只读属性 不能进行赋值

let point2: Point ={
  x: 12,
  y: 12,
  z: 12
}


