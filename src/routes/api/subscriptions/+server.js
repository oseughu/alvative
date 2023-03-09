import { PUBLIC_PAYSTACK_KEY } from '$env/static/public'
import https from 'https'
// const https = require('https')

// const params = JSON.stringify({
//   name: 'Monthly Retainer',
//   interval: 'monthly',
//   amount: 500000
// })

export const GET = async () => {
  const options = {
    hostname: 'api.paystack.co',
    port: 443,
    path: '/plan',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PUBLIC_PAYSTACK_KEY}`,
      'Content-Type': 'application/json'
    }
  }

  const req = https
    .request(options, (res) => {
      let data = ''

      res.on('data', (chunk) => {
        data += chunk
      })

      res.on('end', () => {
        console.log(JSON.parse(data))
        const params = JSON.stringify({
          email: 'customer@email.com',
          amount: '500000',
          plan: data.plan_code
        })

        const options = {
          hostname: 'api.paystack.co',
          port: 443,
          path: '/transaction/initialize',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${PUBLIC_PAYSTACK_KEY}`,
            'Content-Type': 'application/json'
          }
        }

        const req = https
          .request(options, (res) => {
            let data = ''

            res.on('data', (chunk) => {
              data += chunk
            })

            res.on('end', () => {
              console.log(JSON.parse(data))
            })
          })
          .on('error', (error) => {
            console.error(error)
          })

        req.write(params)
        req.end()
      })
    })
    .on('error', (error) => {
      console.error(error)
    })

  req.write(params)
  req.end()

  return new Response(JSON.stringify({ req }, { status: 200 }))
}
