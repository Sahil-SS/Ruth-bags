import BlogPreview from '@/components/home/BlogPreview'
import CategoryCircular from '@/components/home/Category'
import FeaturedProduct from '@/components/home/FeaturedProduct'
import Footer from '@/components/home/Footer'
import GalleryGrid from '@/components/home/GalleryGrid'
import Hero from '@/components/home/Hero'
import Narrative from '@/components/home/Narrative'
import Navbar from '@/components/home/Navbar'
import Newsletter from '@/components/home/Newsletter'
import ProductSection from '@/components/home/ProductSection'
import MobileNavbar from '@/components/ui/MobileNavbar'
import ScrollToTop from '@/components/ui/ScrollToTop'
import WhatsAppFloatingIcon from '@/components/ui/WhatsAppFloatingIcon'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <CategoryCircular />
      <Hero />
      {/* <ProductSection /> */}
      <FeaturedProduct />
      <GalleryGrid />
      <Narrative />
      <BlogPreview />
      <Newsletter />
      <Footer />

      <WhatsAppFloatingIcon />
      {/* <ScrollToTop /> */}
      <MobileNavbar />
    </>
  )
}

export default page