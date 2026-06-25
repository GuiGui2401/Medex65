import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '@/store/slices/categoriesSlice'
import { fetchProducts }   from '@/store/slices/productsSlice'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppFAB from '../public/WhatsAppFAB'
import ProductModal from '../public/ProductModal'

export default function PublicLayout() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ProductModal />
    </div>
  )
}
