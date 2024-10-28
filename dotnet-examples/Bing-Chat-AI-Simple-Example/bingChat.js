import { BingChat } from 'bing-chat'

async function example() {
  const api = new BingChat({
    cookie: process.env.BING_COOKIE
  })
 
  const res = await api.sendMessage('What are neural networks!')
  console.log(res)
}

example()