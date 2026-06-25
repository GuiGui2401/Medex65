import { Link } from 'react-router-dom'

const scrollTo = (hash) => {
  const el = document.getElementById(hash)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white/60 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-green-light to-blue-light
                              flex items-center justify-center text-base">🫀</div>
              <span className="font-display font-bold text-white text-lg">Medex65</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Votre partenaire en technologies médicales de pointe. Équipements certifiés,
              maintenance rapide, formation incluse.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/237696809909" target="_blank" rel="noopener"
                 className="w-9 h-9 bg-white/8 hover:bg-[#25D366] rounded-lg flex items-center
                            justify-center text-sm transition-colors">💬</a>
              <a href="tel:+237696809909"
                 className="w-9 h-9 bg-white/8 hover:bg-blue-mid rounded-lg flex items-center
                            justify-center text-sm transition-colors">📞</a>
              <a href="mailto:info@medex237.com"
                 className="w-9 h-9 bg-white/8 hover:bg-blue-mid rounded-lg flex items-center
                            justify-center text-sm transition-colors">📧</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Accueil',           hash: 'hero' },
                { label: 'Imagerie médicale', hash: 'produits' },
                { label: 'Laboratoire',       hash: 'produits' },
                { label: 'Nos engagements',   hash: 'pourquoi' },
                { label: 'Contact',           hash: 'contact' },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.hash)}
                    className="text-white/55 hover:text-green-light transition-colors
                               bg-transparent border-0 cursor-pointer text-sm p-0"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {['Maintenance technique', 'Formation du personnel', 'Installation sur site',
                'Consommables & accessoires'].map((s) => (
                <li key={s}>
                  <span className="text-white/55">{s}</span>
                </li>
              ))}
              <li>
                <Link to="/admin/login" className="text-white/55 hover:text-green-light transition-colors no-underline">
                  ⚙️ Administration
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between
                        items-center gap-3 text-xs">
          <span>© 2025 Medex65 SARL. Tous droits réservés.</span>
          <span>
            Bafoussam, Cameroun —{' '}
            <a href="mailto:info@medex237.com" className="text-green-light hover:underline">
              info@medex237.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
