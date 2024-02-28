import spanish from "@/i18n/es.json"
import english from "@/i18n/en.json"

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en"
}

export const getI18n = (currentLocale: string = 'es') => {
  return function $t(key: string, index = 0, subkey = '') {
    const languages = {
      [LANGUAGES.SPANISH]: spanish,
      [LANGUAGES.ENGLISH]: english
    }

    let language = languages[currentLocale] || spanish;
    /* used for data that is an array */
    if (!!subkey) {
      return (language as any)[key][index][subkey]
    } else {
      for (const k of key.split('.')) {
        language = (language as any)[k] || ''
      }
      return language
    }
  }
}

export const resume = () => spanish;
