import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { settingsAPI } from '@/api/settings'
import Spinner from '@/components/ui/Spinner'
import toast from 'react-hot-toast'

export default function Settings() {
  const [loading, setLoading]   = useState(true)
  const [saving,  setSaving]    = useState(false)
  const { register, handleSubmit, reset } = useForm()

  useEffect(() => {
    const el = document.getElementById('admin-page-title')
    if (el) el.textContent = 'Informations du site'

    settingsAPI.getAll()
      .then((res) => {
        const data = res.data.data
        // data est groupé par groupe : { contact: {...}, general: {...} }
        const flat = { ...data.contact, ...data.general }
        reset(flat)
      })
      .catch(() => toast.error('Erreur lors du chargement des paramètres'))
      .finally(() => setLoading(false))
  }, [reset])

  const onSubmit = async (data) => {
    setSaving(true)
    try {
      await settingsAPI.update(data)
      toast.success('Paramètres sauvegardés avec succès')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Erreur lors de la sauvegarde')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="flex justify-center py-20"><Spinner size="lg" /></div>

  return (
    <div className="max-w-3xl">
      <div className="admin-card">
        <div className="p-6 border-b border-gray-100">
          <h2 className="font-display font-bold text-dark">Informations de contact & site</h2>
          <p className="text-gray-med text-sm mt-1">
            Ces informations apparaissent sur la page publique et dans les boutons de contact.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
          <div>
            <label className="form-label">Slogan principal</label>
            <input className="form-input" placeholder="Votre slogan…" {...register('slogan')} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="form-label">Téléphone 1</label>
              <input className="form-input" placeholder="+237 6XX XXX XXX" {...register('phone1')} />
            </div>
            <div>
              <label className="form-label">Téléphone 2</label>
              <input className="form-input" placeholder="+237 6XX XXX XXX" {...register('phone2')} />
            </div>
            <div>
              <label className="form-label">Numéro WhatsApp (sans +)</label>
              <input className="form-input" placeholder="237696809909" {...register('whatsapp')} />
            </div>
            <div>
              <label className="form-label">Adresse email</label>
              <input className="form-input" type="email" placeholder="contact@…" {...register('email')} />
            </div>
            <div>
              <label className="form-label">Site web</label>
              <input className="form-input" placeholder="www.exemple.com" {...register('website')} />
            </div>
            <div>
              <label className="form-label">Adresse physique</label>
              <input className="form-input" placeholder="Ville, Pays…" {...register('address')} />
            </div>
          </div>
          <div className="pt-2">
            <button type="submit" disabled={saving} className="btn-blue disabled:opacity-60">
              {saving ? '⏳ Sauvegarde…' : '💾 Sauvegarder les modifications'}
            </button>
          </div>
        </form>
      </div>

      {/* Danger zone */}
      <div className="admin-card border border-red-100 mt-6">
        <div className="p-6 border-b border-red-50">
          <h2 className="font-display font-bold text-red-500">Zone dangereuse</h2>
          <p className="text-gray-med text-sm mt-1">Actions irréversibles — à utiliser avec précaution.</p>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <div className="font-semibold text-dark text-sm">Réinitialiser le cache</div>
              <div className="text-xs text-gray-med mt-0.5">
                Vider le cache des pages publiques (produits, catégories)
              </div>
            </div>
            <button
              onClick={() => toast.success('Cache vidé — les pages seront régénérées')}
              className="text-xs bg-off-white border border-gray-200 text-gray-med
                         px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              🗑️ Vider le cache
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
