const languageCodes = {
   alpha2Codes : [
     "aa",
     "ab",
     "ae",
     "af",
     "ak",
     "am",
     "an",
     "ar",
     "as",
     "av",
     "ay",
     "az",
     "ba",
     "be",
     "bg",
     "bh",
     "bi",
     "bm",
     "bn",
     "bo",
     "br",
     "bs",
     "ca",
     "ce",
     "ch",
     "co",
     "cr",
     "cs",
     "cu",
     "cv",
     "cy",
     "da",
     "de",
     "dv",
     "dz",
     "ee",
     "el",
     "en",
     "eo",
     "es",
     "et",
     "eu",
     "fa",
     "ff",
     "fi",
     "fj",
     "fo",
     "fr",
     "fy",
     "ga",
     "gd",
     "gl",
     "gn",
     "gu",
     "gv",
     "ha",
     "he",
     "hi",
     "ho",
     "hr",
     "ht",
     "hu",
     "hy",
     "hz",
     "ia",
     "id",
     "ie",
     "ig",
     "ii",
     "ik",
     "io",
     "is",
     "it",
     "iu",
     "ja",
     "jv",
     "ka",
     "kg",
     "ki",
     "kj",
     "kk",
     "kl",
     "km",
     "kn",
     "ko",
     "kr",
     "ks",
     "ku",
     "kv",
     "kw",
     "ky",
     "la",
     "lb",
     "lg",
     "li",
     "ln",
     "lo",
     "lt",
     "lu",
     "lv",
     "mg",
     "mh",
     "mi",
     "mk",
     "ml",
     "mn",
     "mr",
     "ms",
     "mt",
     "my",
     "na",
     "nb",
     "nd",
     "ne",
     "ng",
     "nl",
     "nn",
     "no",
     "nr",
     "nv",
     "ny",
     "oc",
     "oj",
     "om",
     "or",
     "os",
     "pa",
     "pi",
     "pl",
     "ps",
     "pt",
     "qu",
     "rm",
     "rn",
     "ro",
     "ru",
     "rw",
     "sa",
     "sc",
     "sd",
     "se",
     "sg",
     "si",
     "sk",
     "sl",
     "sm",
     "sn",
     "so",
     "sq",
     "sr",
     "ss",
     "st",
     "su",
     "sv",
     "sw",
     "ta",
     "te",
     "tg",
     "th",
     "ti",
     "tk",
     "tl",
     "tn",
     "to",
     "tr",
     "ts",
     "tt",
     "tw",
     "ty",
     "ug",
     "uk",
     "ur",
     "uz",
     "ve",
     "vi",
     "vo",
     "wa",
     "wo",
     "xh",
     "yi",
     "yo",
     "za",
     "zh",
     "zu"
   ],  
   languageInEnglish : [
     "Afar",
     "Abkhazian",
     "Avestan",
     "Afrikaans",
     "Akan",
     "Amharic",
     "Aragonese",
     "Arabic",
     "Assamese",
     "Avaric",
     "Aymara",
     "Azerbaijani",
     "Bashkir",
     "Belarusian",
     "Bulgarian",
     "Bihari",
     "Bislama",
     "Bambara",
     "Bengali",
     "Tibetan",
     "Breton",
     "Bosnian",
     "Catalan",
     "Chechen",
     "Chamorro",
     "Corsican",
     "Cree",
     "Czech",
     "Church Slavic",
     "Chuvash",
     "Welsh",
     "Danish",
     "German",
     "Divehi",
     "Dzongkha",
     "Ewe",
     "Greek",
     "English",
     "Esperanto",
     "Spanish",
     "Estonian",
     "Basque",
     "Persian",
     "Fulah",
     "Finnish",
     "Fijian",
     "Faroese",
     "French",
     "Frisian",
     "Irish",
     "Gaelic",
     "Galician",
     "Guarani",
     "Gujarati",
     "Manx",
     "Hausa",
     "Hebrew",
     "Hindi",
     "Hiri Motu",
     "Croatian",
     "Haitian",
     "Hungarian",
     "Armenian",
     "Herero",
     "Interlingua", 
     "Indonesian",
     "Interlingue",
     "Igbo",
     "Sichuan Yi",
     "Inupiaq",
     "Ido",
     "Icelandic",
     "Italian",
     "Inuktitut",
     "Japanese",
     "Javanese",
     "Georgian",
     "Kongo",
     "Kikuyu",
     "Kuanyama",
     "Kazakh",
     "Kalaallisut",
     "Central Khmer",
     "Kannada",
     "Korean",
     "Kanuri",
     "Kashmiri",
     "Kurdish",
     "Komi",
     "Cornish",
     "Kirghiz",
     "Latin",
     "Luxembourgish",
     "Ganda",
     "Limburgan",
     "Lingala",
     "Lao",
     "Lithuanian",
     "Luba-Katanga",
     "Latvian",
     "Malagasy",
     "Marshallese",
     "Maori",
     "Macedonian",
     "Malayalam",
     "Mongolian",
     "Marathi",
     "Malay",
     "Maltese",
     "Burmese",
     "Nauru",
     "Bokmål",
     "Ndebele",
     "Nepali",
     "Ndonga",
     "Flemish",
     "Nynorsk",
     "Norwegian",
     "South Ndebele",
     "Navajo",
     "Chichewa",
     "Occitan", 
     "Ojibwa",
     "Oromo",
     "Oriya",
     "Ossetian",
     "Panjabi",
     "Pali",
     "Polish",
     "Pushto",
     "Portuguese",
     "Quechua",
     "Romansh",
     "Rundi",
     "Romanian",
     "Russian",
     "Kinyarwanda",
     "Sanskrit",
     "Sardinian",
     "Sindhi",
     "Northern Sami",
     "Sango",
     "Sinhala",
     "Slovak",
     "Slovenian",
     "Samoan",
     "Shona",
     "Somali",
     "Albanian",
     "Serbian",
     "Swati",
     "Sotho",
     "Sundanese",
     "Swedish",
     "Swahili",
     "Tamil",
     "Telugu",
     "Tajik",
     "Thai",
     "Tigrinya",
     "Turkmen",
     "Tagalog",
     "Tswana",
     "Tonga",
     "Turkish",
     "Tsonga",
     "Tatar",
     "Twi",
     "Tahitian",
     "Uighur",
     "Ukrainian",
     "Urdu",
     "Uzbek",
     "Venda",
     "Vietnamese",
     "Volapük",
     "Walloon",
     "Wolof",
     "Xhosa",
     "Yiddish",
     "Yoruba",
     "Zhuang",
     "Chinese",
     "Zulu",
   ]
 }
 
 export default languageCodes