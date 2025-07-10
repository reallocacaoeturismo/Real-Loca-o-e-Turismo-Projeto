import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  XMarkIcon,
  CameraIcon
} from '@heroicons/react/24/outline'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentCategory, setCurrentCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todas', nameEn: 'All' },
    { id: 'boats', name: 'Embarcações', nameEn: 'Boats' },
    { id: 'tours', name: 'Passeios', nameEn: 'Tours' },
    { id: 'events', name: 'Eventos', nameEn: 'Events' },
    { id: 'nature', name: 'Natureza', nameEn: 'Nature' }
  ]

  const images = [
    {
      id: 1,
      src: '/images/gallery/boat-1.jpg',
      alt: 'Lanchão navegando no mar azul',
      category: 'boats',
      title: 'Lanchão Premium',
      description: 'Navegando pelas águas cristalinas da Bahia'
    },
    {
      id: 2,
      src: '/images/gallery/tour-1.jpg',
      alt: 'Passeio para ilha paradisíaca',
      category: 'tours',
      title: 'Passeio para Ilha',
      description: 'Descobrindo ilhas paradisíacas da costa baiana'
    },
    {
      id: 3,
      src: '/images/gallery/event-1.jpg',
      alt: 'Casamento no barco',
      category: 'events',
      title: 'Casamento no Mar',
      description: 'Celebrando o amor em um cenário único'
    },
    {
      id: 4,
      src: '/images/gallery/nature-1.jpg',
      alt: 'Pôr do sol na praia',
      category: 'nature',
      title: 'Pôr do Sol',
      description: 'Momentos mágicos ao pôr do sol'
    },
    {
      id: 5,
      src: '/images/gallery/boat-2.jpg',
      alt: 'Jet ski em alta velocidade',
      category: 'boats',
      title: 'Jet Ski Adventure',
      description: 'Aventura e adrenalina no mar'
    },
    {
      id: 6,
      src: '/images/gallery/tour-2.jpg',
      alt: 'Snorkeling nas águas claras',
      category: 'tours',
      title: 'Snorkeling',
      description: 'Explorando a vida marinha'
    },
    {
      id: 7,
      src: '/images/gallery/event-2.jpg',
      alt: 'Aniversário no catamarã',
      category: 'events',
      title: 'Aniversário Especial',
      description: 'Celebrando momentos especiais'
    },
    {
      id: 8,
      src: '/images/gallery/nature-2.jpg',
      alt: 'Praia deserta',
      category: 'nature',
      title: 'Praia Deserta',
      description: 'Tranquilidade e beleza natural'
    },
    {
      id: 9,
      src: '/images/gallery/boat-3.jpg',
      alt: 'Barco de pesca',
      category: 'boats',
      title: 'Pesca Esportiva',
      description: 'Pesca profissional e recreativa'
    },
    {
      id: 10,
      src: '/images/gallery/tour-3.jpg',
      alt: 'Passeio de barco com família',
      category: 'tours',
      title: 'Passeio Familiar',
      description: 'Momentos inesquecíveis em família'
    },
    {
      id: 11,
      src: '/images/gallery/event-3.jpg',
      alt: 'Evento corporativo',
      category: 'events',
      title: 'Evento Corporativo',
      description: 'Eventos profissionais no mar'
    },
    {
      id: 12,
      src: '/images/gallery/nature-3.jpg',
      alt: 'Aves marinhas',
      category: 'nature',
      title: 'Vida Marinha',
      description: 'Observando a fauna local'
    }
  ]

  const filteredImages = currentCategory === 'all' 
    ? images 
    : images.filter(img => img.category === currentCategory)

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const nextIndex = (currentIndex + 1) % filteredImages.length
      setSelectedImage(filteredImages[nextIndex])
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
      const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
      setSelectedImage(filteredImages[prevIndex])
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Galeria de Fotos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore nossos momentos mais especiais e descubra a beleza da Bahia
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Placeholder for image */}
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <CameraIcon className="w-12 h-12 mx-auto mb-2 opacity-80" />
                    <div className="text-sm opacity-90">{image.title}</div>
                  </div>
                </div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <XMarkIcon className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>

                {/* Image Content */}
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Placeholder for image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <CameraIcon className="w-24 h-24 mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                        <p className="text-lg opacity-90">{selectedImage.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {selectedImage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Categoria: {categories.find(cat => cat.id === selectedImage.category)?.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} de {filteredImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Quer fazer parte da nossa galeria?
          </h3>
          <p className="text-gray-600 mb-6">
            Agende seu passeio e capture momentos inesquecíveis
          </p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Agendar Passeio
          </button>
        </motion.div>
      </div>
    </section>
  )
} 