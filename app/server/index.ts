import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

serve(app, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

export default handle(app)