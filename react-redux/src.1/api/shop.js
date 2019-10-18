const _products = [
  {
    id:1,
    title:'小米',
    price:1000.1,
    inventory:2
  },
  {
    id:2,
    title:'华为',
    price:2000.2,
    inventory:4
  },
  {
    id:3,
    title:'vivo',
    price:1500.3,
    inventory:6
  }
]

export  const getAllProductsApi = callback => {
  setTimeout(() => {
    callback(_products)
  }, 200)
}

export const buyProducts = ( products, callback, errorCallback ) => {
  setTimeout(() => {
    Math.random() > 0.5 ? callback() : errorCallback()
  }, 400)
}