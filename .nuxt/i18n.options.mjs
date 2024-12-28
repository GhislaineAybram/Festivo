
// @ts-nocheck


export const localeCodes =  [
  "en",
  "fr"
]

export const localeLoaders = {
  "en": [{ key: "../i18n/en.json", load: () => import("../i18n/en.json" /* webpackChunkName: "locale_C_58_C_58_Users_ghiso_Documents_RNCP_Festify_i18n_en_json" */), cache: true }],
  "fr": [{ key: "../i18n/fr.json", load: () => import("../i18n/fr.json" /* webpackChunkName: "locale_C_58_C_58_Users_ghiso_Documents_RNCP_Festify_i18n_fr_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "restructureDir": "i18n",
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false,
    "typedPages": true,
    "typedOptionsAndMessages": false,
    "generatedLocaleFilePathFormat": "absolute"
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false,
    "optimizeTranslationDirective": true
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "language": "en-US",
      "files": [
        "C:/Users/ghiso/Documents/RNCP/Festify/i18n/en.json"
      ]
    },
    {
      "code": "fr",
      "language": "fr-FR",
      "files": [
        "C:/Users/ghiso/Documents/RNCP/Festify/i18n/fr.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "./",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "en",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "language": "en-US",
    "files": [
      {
        "path": "C:/Users/ghiso/Documents/RNCP/Festify/i18n/en.json"
      }
    ]
  },
  {
    "code": "fr",
    "language": "fr-FR",
    "files": [
      {
        "path": "C:/Users/ghiso/Documents/RNCP/Festify/i18n/fr.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18nInternal"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
