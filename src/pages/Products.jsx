import products from '../data/products.json'
import { useTranslation } from 'react-i18next'

export default function Products() {
  const { t } = useTranslation()
  const groups = products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || []
    acc[p.category].push(p)
    return acc
  }, {})

  return (
    <div className="container-page">
      <section className="py-10">
        <h1 className="text-2xl font-semibold">{t('pages.products.title')}</h1>
        <div className="mt-6 grid gap-10">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category} className="grid gap-4">
              <h2 className="text-lg font-semibold">{category}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((p) => (
                  <div key={p.id} className="rounded-lg border p-4 bg-white shadow-sm">
                    <div className="h-24 rounded bg-slate-100 mb-3" />
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


