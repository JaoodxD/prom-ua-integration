import PromUa from './lib/prom-ua.js'

const PROM_API_KEY = process.env.PROM_API_KEY

const { getProducts } = PromUa(PROM_API_KEY)

console.time('products')
const products = await getProducts()
console.timeEnd('products')

console.log(products.products.map(({ id, name, sku }) => ({ id, name, sku })))
