export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, phone, subject, message } = req.body

    // Validação básica
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos' })
    }

    // Aqui você pode integrar com:
    // 1. Email (Gmail, SendGrid, etc.)
    // 2. WhatsApp Business API
    // 3. CRM (HubSpot, etc.)
    // 4. Banco de dados

    // Por enquanto, vamos simular o envio
    console.log('Nova mensagem recebida:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1000))

    res.status(200).json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
    })
  } catch (error) {
    console.error('Erro ao processar mensagem:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor. Tente novamente.' 
    })
  }
} 