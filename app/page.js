import CategoryCircular from '@/components/home/Category'
import Footer from '@/components/home/Footer'
import GalleryGrid from '@/components/home/GalleryGrid'
import Hero from '@/components/home/Hero'
import Narrative from '@/components/home/Narrative'
import Navbar from '@/components/home/Navbar'
import Newsletter from '@/components/home/Newsletter'
import ProductSection from '@/components/home/ProductSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <CategoryCircular />
      <Hero />
      <ProductSection />
      <GalleryGrid />
      <Narrative />
      <Newsletter />
      <Footer />
    </>
  )
}

export default page