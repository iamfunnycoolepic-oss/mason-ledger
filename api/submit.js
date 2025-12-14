export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { experience, portfolio, contact } = req.body;

  const message = `
📩 New Mason Ledger Application

🧠 Experience: ${experience}
💼 Portfolio: ${portfolio}
📞 Contact: ${contact}
`;

  const url = `https://api.telegram.org/bot${process.env.8555305756:AAEUI4etbd3FbVh9LXHoFhItVmiDNZ8OexY}/sendMessage`;

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: process.env.8270408952,
      text: message
    })
  });

  res.status(200).json({ success: true });
}
