// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { API } from 'aws-amplify'
import { listTodos } from './graphql/queries'

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
