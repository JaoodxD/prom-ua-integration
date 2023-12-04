import bodyParse from './bodyParse.js'
const apiUrl = 'https://my.prom.ua/api/v1'

export default function PromUa (PROM_API_KEY) {
  if (!PROM_API_KEY) throw new Error('No Api key provided')
  const Authorization = `Bearer ${PROM_API_KEY}`
  const headers = { Authorization }

  return { getProducts, updateProducts }

  async function getProducts () {
    const path = 'products/list'
    const url = `${apiUrl}/${path}`
    const response = await fetch(url, { headers, method: 'GET' })
    return await bodyParse(response.body)
  }

  async function updateProducts (body) {
    if (typeof body !== 'string') body = JSON.stringify(body)
    const path = 'products/edit'
    const url = `${apiUrl}/${path}`
    const method = 'POST'
    const response = await fetch(url, { headers, method, body })
    return await bodyParse(response.body)
  }
}
