import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function LanguageSwitcher() {
  const router = useRouter()
  const { locale, pathname, asPath, query } = router

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (newLocale) => {
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <button className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 text-white hover:bg-white/20 transition-all duration-200 border border-white/20">
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage.name}</span>
        <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:rotate-180" />
      </button>

      {/* Dropdown */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                locale === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {locale === language.code && (
                <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 