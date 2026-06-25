const WA = import.meta.env.VITE_WHATSAPP_NUMBER || '237696809909'

export const waLink = (productName = '') => {
  const msg = productName
    ? `Bonjour, je suis intéressé par l'équipement : ${productName}. Pouvez-vous me donner plus d'informations ?`
    : `Bonjour, je voudrais avoir des informations sur vos équipements médicaux.`
  return `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`
}

export const callLink  = (phone = '+237696809909') => `tel:${phone}`
export const mailLink  = (email = 'info@medex237.com', subject = '') =>
  `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

export const formatPhone = (p) => p.replace(/(\+237)(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')
