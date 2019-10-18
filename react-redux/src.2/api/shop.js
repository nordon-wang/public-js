const _products = [
  {
    id:1,
    title: '商品1',
    price: 11,
    inventory: 2
  },{
    id:2,
    title: '商品22',
    price: 22,
    inventory: 3
  },{
    id:3,
    title: '商品33333',
    price: 33,
    inventory: 4
  }
]

export const getAllProducts = cb =>{
  let timer = setTimeout(() => {
    cb(_products)
    clearTimeout(timer)
  }, 100);
}


export const buyProducts = (products, cb, errCb) => {
  let timer = setTimeout(() => {
    Math.random() > 0.5 ? cb() : errCb()
    clearTimeout(timer)
  }, 100);
}