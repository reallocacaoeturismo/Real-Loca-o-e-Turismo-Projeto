import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  StarIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export default function Boats() {
  const [selectedBoat, setSelectedBoat] = useState(0)

  const boats = [
    {
      id: 1,
      name: 'Lanchão Premium',
      nameEn: 'Premium Speedboat',
      type: 'Lanchão',
      capacity: '12 pessoas',
      duration: '4-8 horas',
      price: 'R$ 800',
      priceEn: '$800',
      description: 'Lanchão confortável e seguro para passeios em grupo. Ideal para famílias e amigos.',
      descriptionEn: 'Comfortable and safe speedboat for group tours. Perfect for families and friends.',
      features: [
        'Capacidade para 12 pessoas',
        'Som ambiente',
        'Geladeira',
        'Banheiro',
        'Equipamentos de segurança',
        'Guia experiente'
      ],
      featuresEn: [
        'Capacity for 12 people',
        'Ambient sound',
        'Refrigerator',
        'Bathroom',
        'Safety equipment',
        'Experienced guide'
      ],
      image: '/images/boat-1.jpg'
    },
    {
      id: 2,
      name: 'Jet Ski Duplo',
      nameEn: 'Double Jet Ski',
      type: 'Jet Ski',
      capacity: '2 pessoas',
      duration: '1-2 horas',
      price: 'R$ 200',
      priceEn: '$200',
      description: 'Aventura emocionante para casais ou amigos. Controle total da velocidade e direção.',
      descriptionEn: 'Exciting adventure for couples or friends. Full control of speed and direction.',
      features: [
        'Capacidade para 2 pessoas',
        'Controle total',
        'Equipamentos de segurança',
        'Instrutor disponível',
        'Seguro incluído',
        'Área delimitada'
      ],
      featuresEn: [
        'Capacity for 2 people',
        'Full control',
        'Safety equipment',
        'Instructor available',
        'Insurance included',
        'Delimited area'
      ],
      image: '/images/boat-2.jpg'
    },
    {
      id: 3,
      name: 'Barco de Pesca',
      nameEn: 'Fishing Boat',
      type: 'Barco',
      capacity: '6 pessoas',
      duration: '6-8 horas',
      price: 'R$ 600',
      priceEn: '$600',
      description: 'Barco especializado para pesca esportiva. Equipado com todos os acessórios necessários.',
      descriptionEn: 'Specialized boat for sport fishing. Equipped with all necessary accessories.',
      features: [
        'Capacidade para 6 pessoas',
        'Equipamentos de pesca',
        'Guia pescador',
        'Iscas incluídas',
        'Área de pesca exclusiva',
        'Refrigeração para peixes'
      ],
      featuresEn: [
        'Capacity for 6 people',
        'Fishing equipment',
        'Fishing guide',
        'Bait included',
        'Exclusive fishing area',
        'Fish refrigeration'
      ],
      image: '/images/boat-3.jpg'
    },
    {
      id: 4,
      name: 'Catamarã Luxo',
      nameEn: 'Luxury Catamaran',
      type: 'Catamarã',
      capacity: '20 pessoas',
      duration: '6-10 horas',
      price: 'R$ 1.500',
      priceEn: '$1,500',
      description: 'Catamarã de luxo para eventos especiais. Conforto máximo e experiência premium.',
      descriptionEn: 'Luxury catamaran for special events. Maximum comfort and premium experience.',
      features: [
        'Capacidade para 20 pessoas',
        'Deck superior',
        'Bar completo',
        'Cozinha gourmet',
        'Área de solário',
        'Equipe completa'
      ],
      featuresEn: [
        'Capacity for 20 people',
        'Upper deck',
        'Full bar',
        'Gourmet kitchen',
        'Sunbathing area',
        'Complete crew'
      ],
      image: '/images/boat-4.jpg'
    }
  ]

  return (
    <section id="boats" className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-primary-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossas Embarcações
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Escolha a embarcação perfeita para sua aventura na Bahia
          </motion.p>
        </div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedBoat === index 
                  ? 'ring-4 ring-primary-300 scale-105' 
                  : 'hover:shadow-xl hover:scale-102'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setSelectedBoat(index)}
            >
              {/* Boat Image */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-400 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">🚤</div>
                    <div className="text-sm opacity-90">{boat.type}</div>
                  </div>
                </div>
              </div>

              {/* Boat Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {boat.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {boat.description}
                </p>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    {boat.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {boat.duration}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary-600">
                    <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                    {boat.price}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(4.9)</span>
                </div>

                {/* Select Button */}
                <button className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                  selectedBoat === index
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100'
                }`}>
                  {selectedBoat === index ? 'Selecionado' : 'Selecionar'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Boat Details */}
        {boats[selectedBoat] && (
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Image and Basic Info */}
              <div>
                <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🚤</div>
                    <h3 className="text-2xl font-semibold">{boats[selectedBoat].name}</h3>
                    <p className="text-lg opacity-90">{boats[selectedBoat].type}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <UserGroupIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Capacidade</div>
                    <div className="font-semibold">{boats[selectedBoat].capacity}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <ClockIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Duração</div>
                    <div className="font-semibold">{boats[selectedBoat].duration}</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <CurrencyDollarIcon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                    <div className="text-sm text-gray-600">Preço</div>
                    <div className="font-semibold">{boats[selectedBoat].price}</div>
                  </div>
                </div>
              </div>

              {/* Right Column - Features */}
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">
                  Características e Inclusos
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {boats[selectedBoat].features.map((feature, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <StarIcon className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center">
                    Reservar Agora
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 