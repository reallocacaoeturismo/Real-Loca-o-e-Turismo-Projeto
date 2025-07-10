export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { 
      name, 
      email, 
      phone, 
      notes,
      selectedService,
      selectedDate,
      selectedTime,
      guests 
    } = req.body

    // Validação básica
    if (!name || !email || !phone || !selectedService || !selectedDate || !selectedTime) {
      return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos' })
    }

    // Aqui você pode integrar com:
    // 1. Sistema de reservas (Calendly, etc.)
    // 2. Email de confirmação
    // 3. WhatsApp Business API
    // 4. Banco de dados
    // 5. Sistema de pagamentos (Pix, cartão, etc.)

    // Por enquanto, vamos simular o processamento
    console.log('Nova reserva recebida:', {
      name,
      email,
      phone,
      notes,
      selectedService,
      selectedDate,
      selectedTime,
      guests,
      timestamp: new Date().toISOString()
    })

    // Simular delay de processamento
    await new Promise(resolve => setTimeout(resolve, 1000))

    res.status(200).json({ 
      success: true, 
      message: 'Reserva enviada com sucesso! Entraremos em contato em breve para confirmar.' 
    })
  } catch (error) {
    console.error('Erro ao processar reserva:', error)
    res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor. Tente novamente.' 
    })
  }
} 