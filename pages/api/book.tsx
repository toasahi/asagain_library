// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
    res.status(200).json([{ book: {title: '若草物語',price: '680'}},{ book: {title: 'ホワイトラビット',price: '300'}}]);
  }
  