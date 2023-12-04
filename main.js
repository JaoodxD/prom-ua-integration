import PromUa from './lib/prom-ua.js'

const PROM_API_KEY = process.env.PROM_API_KEY

const { getProducts, updateProducts } = PromUa(PROM_API_KEY)

console.time('products')
const data = await getProducts()
console.timeEnd('products')

const products = data.products.map(({ id, name, sku }) => ({ id, name, sku }))
const testProducts = products.filter(({ sku }) => sku.includes('test'))

const payload = testProducts.map(product => {
  const data = { ...product }
  data.name += '#'
  return data
})

console.log(payload)

const updateResult = await updateProducts(payload)
console.log(updateResult)
