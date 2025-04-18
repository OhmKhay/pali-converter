/**
 * Copyright Path Nirvana 2018
 * The code and character mapping defined in this file can not be used for any commercial purposes.
 * Permission from the author is required for all other purposes.
 */

// https://en.wikipedia.org/wiki/ISO_15924
export const Script = Object.freeze({
  SI: "Sinh",
  HI: "Deva",
  RO: "Latn",
  THAI: "Thai",
  LAOS: "Laoo",
  MY: "Mymr",
  KM: "Khmr",
  BENG: "Beng",
  GURM: "Guru",
  THAM: "Lana",
  GUJA: "Gujr",
  TELU: "Telu",
  KANN: "Knda",
  MALA: "Mlym",
  BRAH: "Brah",
  TIBT: "Tibt",
  CYRL: "Cyrl",
  SHAN: "Shan", // Added Shan script
})

// Locale TLAs from https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
export const PaliScriptInfo = new Map([
  [Script.SI, ["Sinhala", "සිංහල", [[0x0d80, 0x0dff]], { f: "sl_flag.png", locale: "si", localeName: "සිංහල" }]],
  [Script.HI, ["Devanagari", "नागरी", [[0x0900, 0x097f]], { f: "in_flag.png", locale: "hi", localeName: "हिन्दी" }]],
  // latin extended and latin extended additional blocks
  [
    Script.RO,
    [
      "Roman",
      "Roman",
      [
        [0x0000, 0x017f],
        [0x1e00, 0x1eff],
      ],
      { f: "uk_flag.png", locale: "en", localeName: "English" },
    ],
  ],
  // thai special letters are outside the range
  [
    Script.THAI,
    ["Thai", "ไทย", [[0x0e00, 0x0e7f], 0xf70f, 0xf700], { f: "th_flag.png", locale: "th", localeName: "ไทย" }],
  ],
  [Script.LAOS, ["Laos", "ລາວ", [[0x0e80, 0x0eff]], { f: "laos_flag.png", locale: "lo", localeName: "ລາວ" }]],
  [Script.MY, ["Myanmar", "ဗမာစာ", [[0x1000, 0x107f]], { f: "my_flag.png", locale: "my", localeName: "ဗမာစာ" }]],
  [Script.KM, ["Khmer", "ភាសាខ្មែរ", [[0x1780, 0x17ff]], { f: "kh_flag.png", locale: "km", localeName: "ភាសាខ្មែរ" }]],
  [
    Script.BENG,
    ["Bengali", "বাংলা", [[0x0980, 0x09ff]], { f: "bangla_flag.png", locale: "bn", localeName: "বাংলা", g: "indian" }],
  ],
  [Script.GURM, ["Gurmukhi", "ਗੁਰਮੁਖੀ", [[0x0a00, 0x0a7f]], { locale: "pa", localeName: "ਪੰਜਾਬੀ", g: "indian" }]],
  [Script.GUJA, ["Gujarati", "ગુજરાતી", [[0x0a80, 0x0aff]], { locale: "gu", localeName: "ગુજરાતી", g: "indian" }]],
  [Script.TELU, ["Telugu", "తెలుగు", [[0x0c00, 0x0c7f]], { locale: "te", localeName: "తెలుగు", g: "indian" }]],
  [Script.KANN, ["Kannada", "ಕನ್ನಡ", [[0x0c80, 0x0cff]], { locale: "kn", localeName: "ಕನ್ನಡ", g: "indian" }]],
  [Script.MALA, ["Malayalam", "മലയാളം", [[0x0d00, 0x0d7f]], { locale: "ml", localeName: "മലയാളം", g: "indian" }]],
  [
    Script.THAM,
    [
      "Tai Tham",
      "Tai Tham LN",
      [[0x1a20, 0x1aaf]],
      { locale: "th", localeName: "ไทย (Lanna)", c: "beta-script", g: "other" },
    ],
  ],
  // charCodeAt returns two codes for each letter [[0x11000, 0x1107F]]
  [
    Script.BRAH,
    [
      "Brahmi",
      "Brāhmī",
      [
        [0xd804, 0xd804],
        [0xdc00, 0xdc7f],
      ],
      { locale: "hi", localeName: "हिन्दी (Brah)", g: "other" },
    ],
  ],
  [
    Script.TIBT,
    [
      "Tibetan",
      "བོད་སྐད།",
      [[0x0f00, 0x0fff]],
      { f: "tibet_flag.png", c: "larger", locale: "bo", localeName: "བོད་སྐད།", g: "other" },
    ],
  ],
  // also adding the "Combining Diacritical Marks" block
  [
    Script.CYRL,
    [
      "Cyrillic",
      "кириллица",
      [
        [0x0400, 0x04ff],
        [0x0300, 0x036f],
      ],
      { f: "russia_flag.png", locale: "ru", localeName: "ру́сский", g: "other" },
    ],
  ],
  // Adding Shan script
  [
    Script.SHAN,
    [
      "Shan",
      "လိၵ်ႈတႆး",
      [[0x1000, 0x109f]], // Shan uses Myanmar Unicode block with extensions
      { locale: "shn", localeName: "လိၵ်ႈတႆး", g: "other" },
    ],
  ],
])

export function getScriptForCode(charCode: number): string | -1 {
  for (const info of PaliScriptInfo) {
    for (const range of info[1][2]) {
      if (Array.isArray(range) && charCode >= range[0] && charCode <= range[1]) return info[0]
      if (typeof range === "number" && charCode === range) return info[0]
    }
  }
  return -1
}

export const ScriptIndex: Record<string, number> = {
  [Script.SI]: 0,
  [Script.HI]: 1,
  [Script.RO]: 2,
  [Script.THAI]: 3,
  [Script.LAOS]: 4,
  [Script.MY]: 5,
  [Script.KM]: 6,
  [Script.BENG]: 7,
  [Script.GURM]: 8,
  [Script.THAM]: 9,
  [Script.GUJA]: 10,
  [Script.TELU]: 11,
  [Script.KANN]: 12,
  [Script.MALA]: 13,
  [Script.BRAH]: 14,
  [Script.TIBT]: 15,
  [Script.CYRL]: 16,
  [Script.SHAN]: 17, // Added Shan script index
}

// Character mappings for different scripts
export const specials = [
  // independent vowels
  ["අ", "अ", "a", "อ", "ອ", "အ", "អ", "অ", "ਅ", "\u1A4B", "અ", "అ", "ಅ", "അ", "𑀅", "ཨ", "а", "ဢ"],
  ["ආ", "आ", "ā", "อา", "ອາ", "အာ", "អា", "আ", "ਆ", "\u1A4C", "આ", "ఆ", "ಆ", "ആ", "𑀆", "ཨཱ", "а̄", "ဢႃ"],
  ["ඉ", "इ", "i", "อิ", "ອິ", "ဣ", "ឥ", "ই", "ਇ", "\u1A4D", "ઇ", "ఇ", "ಇ", "ഇ", "𑀇", "ཨི", "и", "ဢိ"],
  ["ඊ", "ई", "ī", "อี", "ອີ", "ဤ", "ឦ", "ঈ", "ਈ", "\u1A4E", "ઈ", "ఈ", "ಈ", "ഈ", "𑀈", "ཨཱི", "ӣ", "ဢီ"],
  ["උ", "उ", "u", "อุ", "ອຸ", "ဥ", "ឧ", "উ", "ਉ", "\u1A4F", "ઉ", "ఉ", "ಉ", "ഉ", "𑀉", "ཨུ", "у", "ဢု"],
  ["ඌ", "ऊ", "ū", "อู", "ອູ", "ဦ", "ဩ", "ঊ", "ਊ", "\u1A50", "ઊ", "ఊ", "ಊ", "ഊ", "𑀊", "ཨཱུ", "ӯ", "ဢူ"],
  ["එ", "ए", "e", "อเ", "ອເ", "ဧ", "ឯ", "এ", "ਏ", "\u1A51", "એ", "ఏ", "ಏ", "ഏ", "𑀏", "ཨེ", "е", "ဢေ"],
  ["ඔ", "ओ", "o", "อโ", "ອໂ", "ဩ", "ឱ", "ও", "ਓ", "\u1A52", "ઓ", "ఓ", "ಓ", "ഓ", "𑀑", "ཨོ", "о", "ဢူဝ်"],
  /*
   * various signs
   */
  // niggahita - anusawara
  ["ං", "ं", "ṃ", "\u0E4D", "\u0ECD", "ံ", "ំ", "ং", "ਂ", "\u1A74", "ં", "ం", "ಂ", "ം", "𑀁", "\u0F7E", "м̣", "ံ"],
  // visarga - not in pali but deva original text has it
  // (thai/lao/tt - not found. using the closest equivalent per wikipedia)
  ["ඃ", "ः", "ḥ", "ะ", "ະ", "း", "ះ", "ঃ", "ਃ", "\u1A61", "ઃ", "ః", "ಃ", "ഃ", "𑀂", "\u0F7F", "х̣", "း"],
  // virama (al - hal). roman/cyrillic need special handling
  ["්", "्", "", "\u0E3A", "\u0EBA", "္", "្", "্", "੍", "\u1A60", "્", "్", "್", "്", "\uD804\uDC46", "\u0F84", "", "်"],
  // digits
  ["0", "०", "0", "๐", "໐", "၀", "០", "০", "੦", "\u1A90", "૦", "౦", "೦", "൦", "𑁦", "༠", "0", "႐"],
  ["1", "१", "1", "๑", "໑", "၁", "១", "১", "੧", "\u1A91", "૧", "౧", "೧", "൧", "𑁧", "༡", "1", "႑"],
  ["2", "२", "2", "๒", "໒", "၂", "២", "২", "੨", "\u1A92", "૨", "౨", "೨", "൨", "𑁨", "༢", "2", "႒"],
  ["3", "३", "3", "๓", "໓", "၃", "៣", "৩", "੩", "\u1A93", "૩", "౩", "೩", "൩", "𑁩", "༣", "3", "႓"],
  ["4", "४", "4", "๔", "໔", "၄", "៤", "৪", "੪", "\u1A94", "૪", "౪", "೪", "൪", "𑁪", "༤", "4", "႔"],
  ["5", "५", "5", "๕", "໕", "၅", "៥", "৫", "੫", "\u1A95", "૫", "౫", "೫", "൫", "𑁫", "༥", "5", "႕"],
  ["6", "६", "6", "๖", "໖", "၆", "៦", "৬", "੬", "\u1A96", "૬", "౬", "೬", "൬", "𑁬", "༦", "6", "႖"],
  ["7", "७", "7", "๗", "໗", "၇", "៧", "৭", "੭", "\u1A97", "૭", "౭", "೭", "൭", "𑁭", "༧", "7", "႗"],
  ["8", "८", "8", "๘", "໘", "၈", "៨", "৮", "੮", "\u1A98", "૮", "౮", "೮", "൮", "𑁮", "༨", "8", "႘"],
  ["9", "९", "9", "๙", "໙", "၉", "៩", "৯", "੯", "\u1A99", "૯", "౯", "೯", "൯", "𑁯", "༩", "9", "႙"],
]

export const consos = [
  // velar stops
  ["ක", "क", "k", "ก", "ກ", "က", "ក", "ক", "ਕ", "\u1A20", "ક", "క", "ಕ", "ക", "𑀓", "ཀ", "к", "ၵ"],
  ["ඛ", "ख", "kh", "ข", "ຂ", "ခ", "ខ", "খ", "ਖ", "\u1A21", "ખ", "ఖ", "ಖ", "ഖ", "𑀔", "ཁ", "кх", "ၶ"],
  ["ග", "ग", "g", "ค", "ຄ", "ဂ", "គ", "গ", "ਗ", "\u1A23", "ગ", "గ", "ಗ", "ഗ", "𑀕", "ག", "г", "ၷ"],
  ["ඝ", "घ", "gh", "ฆ", "\u0E86", "ဃ", "ឃ", "ঘ", "ਘ", "\u1A25", "ઘ", "ఘ", "ಘ", "ഘ", "𑀖", "གྷ", "гх", "ꧠ"],
  ["ඞ", "ङ", "ṅ", "ง", "ງ", "င", "ង", "ঙ", "ਙ", "\u1A26", "ઙ", "ఙ", "ಙ", "ങ", "𑀗", "ང", "н̇", "င"],
  // palatal stops
  ["ච", "च", "c", "จ", "ຈ", "စ", "ច", "চ", "ਚ", "\u1A27", "ચ", "చ", "ಚ", "ച", "𑀘", "ཙ", "ч", "ၸ"],
  ["ඡ", "छ", "ch", "ฉ", "\u0E89", "ဆ", "ឆ", "ছ", "ਛ", "\u1A28", "છ", "ఛ", "ಛ", "ഛ", "𑀙", "ཚ", "чх", "ꧡ"],
  ["ජ", "ज", "j", "ช", "ຊ", "ဇ", "ជ", "জ", "ਜ", "\u1A29", "જ", "జ", "ಜ", "ജ", "𑀚", "ཛ", "дж", "ၹ"],
  ["ඣ", "झ", "jh", "ฌ", "\u0E8C", "ဈ", "ឈ", "ঝ", "ਝ", "\u1A2B", "ઝ", "ఝ", "ಝ", "ഝ", "𑀛", "ཛྷ", "джх", "ꧢ"],
  ["ඤ", "ञ", "ñ", "ญ", "\u0E8E", "ဉ", "ញ", "ঞ", "ਞ", "\u1A2C", "ઞ", "ఞ", "ಞ", "ഞ", "𑀜", "ཉ", "н̃", "ၺ"],
  // retroflex stops
  ["ට", "ट", "ṭ", "ฏ", "\u0E8F", "ဋ", "ដ", "ট", "ਟ", "\u1A2D", "ટ", "ట", "ಟ", "ട", "𑀝", "ཊ", "т̣", "ꩦ"],
  ["ඨ", "ठ", "ṭh", "ฐ", "\u0E90", "ဌ", "ឋ", "ঠ", "ਠ", "\u1A2E", "ઠ", "ఠ", "ಠ", "ഠ", "𑀞", "ཋ", "т̣х", "ꩧ"],
  ["ඩ", "ड", "ḍ", "ฑ", "\u0E91", "ဍ", "ឌ", "ড", "ਡ", "\u1A2F", "ડ", "డ", "ಡ", "ഡ", "𑀟", "ཌ", "д̣", "ꩨ"],
  ["ඪ", "ढ", "ḍh", "ฒ", "\u0E92", "ဎ", "ឍ", "ঢ", "ਢ", "\u1A30", "ઢ", "ఢ", "ಢ", "ഢ", "𑀠", "ཌྷ", "д̣х", "ꩩ"],
  ["ණ", "ण", "ṇ", "ณ", "\u0E93", "ဏ", "ណ", "ণ", "ਣ", "\u1A31", "ણ", "ణ", "ಣ", "ണ", "𑀡", "ཎ", "н̣", "ꩪ"],
  // dental stops
  ["ත", "त", "t", "ต", "ຕ", "တ", "ត", "ত", "ਤ", "\u1A32", "ત", "త", "ತ", "ത", "𑀢", "ཏ", "т", "တ"],
  ["ථ", "थ", "th", "ถ", "ຖ", "ထ", "ថ", "থ", "ਥ", "\u1A33", "થ", "థ", "ಥ", "ഥ", "𑀣", "ཐ", "тх", "ထ"],
  ["ද", "द", "d", "ท", "ທ", "ဒ", "ទ", "দ", "ਦ", "\u1A34", "દ", "ద", "ದ", "ദ", "𑀤", "ད", "д", "ၻ"],
  ["ධ", "ध", "dh", "ธ", "\u0E98", "ဓ", "ធ", "ধ", "ਧ", "\u1A35", "ધ", "ధ", "ಧ", "ധ", "𑀥", "དྷ", "дх", "ꩪ"],
  ["න", "न", "n", "น", "ນ", "န", "ន", "ন", "ਨ", "\u1A36", "ન", "న", "ನ", "ന", "𑀦", "ན", "н", "ၼ"],
  // labial stops
  ["ප", "प", "p", "ป", "ປ", "ပ", "ប", "প", "ਪ", "\u1A38", "પ", "ప", "ಪ", "പ", "𑀧", "པ", "п", "ပ"],
  ["ඵ", "फ", "ph", "ผ", "ຜ", "ဖ", "ផ", "ফ", "ਫ", "\u1A39", "ફ", "ఫ", "ಫ", "ಫ", "𑀨", "ཕ", "пх", "ၽ"],
  ["බ", "ब", "b", "พ", "ພ", "ဗ", "ព", "ব", "ਬ", "\u1A3B", "બ", "బ", "ಬ", "ബ", "𑀩", "བ", "б", "ၿ"],
  ["භ", "भ", "bh", "ภ", "\u0EA0", "ဘ", "ភ", "ভ", "ਭ", "\u1A3D", "ભ", "భ", "ಭ", "ഭ", "𑀪", "བྷ", "бх", "ꧤ"],
  ["ම", "म", "m", "ม", "ມ", "မ", "ម", "ম", "ਮ", "\u1A3E", "મ", "మ", "ಮ", "മ", "𑀫", "མ", "м", "မ"],
  // liquids, fricatives, etc.
  ["ය", "य", "y", "ย", "ຍ", "ယ", "យ", "য", "ਯ", "\u1A3F", "ય", "య", "ಯ", "യ", "𑀬", "ཡ", "й", "ယ"],
  ["ර", "र", "r", "ร", "ຣ", "ရ", "រ", "র", "ਰ", "\u1A41", "ર", "ర", "ರ", "ര", "𑀭", "ར", "р", "ရ"],
  ["ල", "ल", "l", "ล", "ລ", "လ", "ល", "ল", "ਲ", "\u1A43", "લ", "ల", "ಲ", "ല", "𑀮", "ལ", "л", "လ"],
  ["ළ", "ळ", "ḷ", "ฬ", "\u0EAC", "ဠ", "ឡ", "ল়", "ਲ਼", "\u1A4A", "ળ", "ళ", "ಳ", "ള", "𑀴", "ལ༹", "л̣", "ꩮ"],
  ["ව", "व", "v", "ว", "ວ", "ဝ", "វ", "ৰ", "ਵ", "\u1A45", "વ", "వ", "ವ", "വ", "𑀯", "ཝ", "в", "ဝ"],
  ["ස", "स", "s", "ส", "ສ", "သ", "ស", "স", "ਸ", "\u1A48", "સ", "స", "ಸ", "സ", "𑀲", "ས", "с", "သ"],
  ["හ", "ह", "h", "ห", "ຫ", "ဟ", "ហ", "হ", "ਹ", "\u1A49", "હ", "హ", "ಹ", "ഹ", "𑀳", "ཧ", "х", "ႁ"],
]

export const vowels = [
  // dependent vowel signs 1A6E-1A63
  ["ා", "ा", "ā", "า", "າ", "ာ", "ា", "া", "ਾ", "\u1A63", "ા", "ా", "ಾ", "ാ", "𑀸", "\u0F71", "а̄", "ႃ"],
  ["ි", "ि", "i", "\u0E34", "\u0EB4", "ိ", "ិ", "ি", "ા", "ా", "ಾ", "ാ", "𑀸", "\u0F71", "а̄", "ႃ"],
  ["ි", "ि", "i", "\u0E34", "\u0EB4", "ိ", "ិ", "ি", "ਿ", "\u1A65", "િ", "ి", "ಿ", "ി", "𑀺", "\u0F72", "и", "ိ"],
  ["ී", "ी", "ī", "\u0E35", "\u0EB5", "ီ", "ី", "ী", "ੀ", "\u1A66", "ી", "ీ", "ೀ", "ീ", "𑀻", "\u0F71\u0F72", "ӣ", "ီ"],
  ["ු", "ु", "u", "\u0E38", "\u0EB8", "ု", "ុ", "ু", "ੁ", "\u1A69", "ુ", "ు", "ು", "ു", "𑀼", "\u0F74", "у", "ု"],
  ["ූ", "ू", "ū", "\u0E39", "\u0EB9", "ူ", "ូ", "ূ", "ੂ", "\u1A6A", "ૂ", "ూ", "ೂ", "ೂ", "𑀽", "\u0F71\u0F74", "ӯ", "ူ"],
  // for th/lo - should appear in front
  ["ෙ", "े", "e", "เ", "ເ", "ေ", "េ", "ে", "ੇ", "\u1A6E", "ે", "ే", "ೇ", "േ", "𑁂", "\u0F7A", "е", "ေ"],
  // for th/lo - should appear in front
  ["ො", "ो", "o", "โ", "ໂ", "ော", "ោ", "ো", "ੋ", "\u1A6E\u1A63", "ો", "ో", "ೋ", "ോ", "𑁄", "\u0F7C", "о", "ေႃ"],
]

export const sinh_conso_range = "ක-ෆ"
export const thai_conso_range = "ก-ฮ"
export const lao_conso_range = "ກ-ຮ"
export const mymr_conso_range = "က-ဠ"
export const shan_conso_range = "ၵ-ႁ"

function beautify_sinh(text: string, _script: string, _rendType = ""): string {
  // change joiners before U+0DBA Yayanna and U+0DBB Rayanna to Virama + ZWJ
  return text.replace(/\u0DCA([\u0DBA\u0DBB])/g, "\u0DCA\u200D$1")
}

// long vowels replaced by short vowels as sometimes people type long vowels by mistake
function un_beautify_sinh(input: string): string {
  let text = input
  text = text.replace(/ඒ/g, "එ").replace(/ඕ/g, "ඔ")
  return text.replace(/ේ/g, "ෙ").replace(/ෝ/g, "ො")
}

// new unicode 5.1 spec https://www.unicode.org/notes/tn11/UTN11_3.pdf
function beautify_mymr(input: string, _script: string, _rendType = ""): string {
  let text = input
  text = text.replace(/[,;]/g, "၊") // comma/semicolon -> single line
  text = text.replace(/[\u2026\u0964\u0965]+/g, "။") // ellipsis/danda/double danda -> double line

  text = text.replace(/ဉ\u1039ဉ/g, "ည") // kn + kna has a single char
  text = text.replace(/သ\u1039သ/g, "ဿ") // s + sa has a single char (great sa)
  text = text.replace(/င္([က-ဠ])/g, "င\u103A္$1") // kinzi - ඞ + al
  text = text.replace(/္ယ/g, "ျ") // yansaya  - yapin
  text = text.replace(/္ရ/g, "ြ") // rakar - yayit
  text = text.replace(/္ဝ/g, "ွ") // al + wa - wahswe
  text = text.replace(/္ဟ/g, "ှ") // al + ha - hahto
  // following code for tall aa is from https://www.facebook.com/pndaza.mlm
  text = text.replace(/([ခဂငဒပဝ]ေ?)\u102c/g, "$1\u102b") // aa to tall aa
  text = text.replace(/(က္ခ|န္ဒ|ပ္ပ|မ္ပ)(ေ?)\u102b/g, "$1$2\u102c") // restore back tall aa to aa for some pattern
  return text.replace(/(ဒ္ဓ|ဒွ)(ေ?)\u102c/g, "$1\u102b")
}

// reverse of beautify above
function un_beautify_mymr(input: string): string {
  let text = input
  text = text.replace(/\u102B/g, "ာ")
  text = text.replace(/ှ/g, "္ဟ") // al + ha - hahto
  text = text.replace(/ွ/g, "္ဝ") // al + wa - wahswe
  text = text.replace(/ြ/g, "္ရ") // rakar - yayit
  text = text.replace(/ျ/g, "္ယ") // yansaya  - yapin
  text = text.replace(/\u103A/g, "") // kinzi
  text = text.replace(/ဿ/g, "သ\u1039သ") // s + sa has a single char (great sa)
  text = text.replace(/ည/g, "ဉ\u1039ဉ") // nnga
  text = text.replace(/သံဃ/g, "သင္ဃ") // nigghahita to ṅ for this word for searching - from Pn Daza

  text = text.replace(/၊/g, ",") // single line -> comma
  return text.replace(/။/g, ".") // double line -> period
}

// Add Shan script beautification functions
function beautify_shan(input: string, _script: string, _rendType = ""): string {
  // Shan script beautification is similar to Myanmar
  let text = input
  text = text.replace(/[,;]/g, "၊") // comma/semicolon -> single line
  text = text.replace(/[\u2026\u0964\u0965]+/g, "။") // ellipsis/danda/double danda -> double line

  // Specific Shan script adjustments
  text = text.replace(/ၺ\u1039ၺ/g, "ည") // Similar to Myanmar nnga
  text = text.replace(/သ\u1039သ/g, "ဿ") // Same as Myanmar great sa

  // Handle tone marks and other Shan-specific features
  text = text.replace(/([ၵၶၷငၸၹၺတထၻၼပၽၿမယရလဝသႁ]ေ?)\u102c/g, "$1\u102b") // aa to tall aa

  return text
}

function un_beautify_shan(input: string): string {
  // Reverse of beautify_shan
  let text = input
  text = text.replace(/\u102B/g, "ာ")
  text = text.replace(/ဿ/g, "သ\u1039သ")
  text = text.replace(/ည/g, "ၺ\u1039ၺ")

  text = text.replace(/၊/g, ",") // single line -> comma
  return text.replace(/။/g, ".") // double line -> period
}

/**
 * Each script need additional steps when rendering on screen
 * e.g. for sinh needs converting dandas/abbrev, removing spaces, and addition ZWJ
 */
function beautify_common(input: string, _script: string, rendType = ""): string {
  let text = input
  if (rendType === "cen") {
    // remove double dandas around namo tassa
    text = text.replace(/॥/g, "")
  } else if (rendType.startsWith("ga")) {
    // in gathas, single dandas convert to semicolon, double to period
    text = text.replace(/।/g, ";")
    text = text.replace(/॥/g, ".")
  }

  // remove Dev abbreviation sign before an ellipsis. We don't want a 4th dot after pe.
  text = text.replace(/॰…/g, "…")

  text = text.replace(/॰/g, "·") // abbre sign changed - prevent capitalization in notes
  text = text.replace(/[।॥]/g, ".") // all other single and double dandas converted to period

  // cleanup punctuation 1) two spaces to one
  // 2) There should be no spaces before these punctuation marks.
  text = text.replace(/\s([\s,!;?.])/g, "$1")
  return text
}

const un_capitalize = (text: string): string => text.toLowerCase()

// for thai text - this can also be done in the convert stage
function swap_e_o(text: string, script: string, _rendType = ""): string {
  if (script === Script.THAI) {
    return text.replace(/([ก-ฮ])([เโ])/g, "$2$1")
  }

  if (script === Script.LAOS) {
    return text.replace(/([ກ-ຮ])([ເໂ])/g, "$2$1")
  }

  throw new Error(`Unsupported script ${script} for swap_e_o method.`)
}

// to be used when converting from
function un_swap_e_o(text: string, script: string): string {
  if (script === Script.THAI) {
    return text.replace(/([เโ])([ก-ฮ])/g, "$2$1")
  }

  if (script === Script.LAOS) {
    return text.replace(/([ເໂ])([ກ-ຮ])/g, "$2$1")
  }

  throw new Error(`Unsupported script ${script} for un_swap_e_o method.`)
}

// in thai pali these two characters have special glyphs (using the encoding used in the THSarabunNew Font)
function beautify_thai(input: string, _script: string): string {
  let text = input
  text = text.replace(/\u0E34\u0E4D/g, "\u0E36") // 'iṃ' has a single unicode in thai
  text = text.replace(/ญ/g, "\uF70F")
  return text.replace(/ฐ/g, "\uF700")
}

function un_beautify_thai(input: string, _script: string): string {
  let text = input
  text = text.replace(/ฎ/g, "ฏ") // sometimes people use ฎ instead of the correct ฏ which is used in the tipitaka
  text = text.replace(/\u0E36/g, "\u0E34\u0E4D") // 'iṃ' has a single unicode in thai which is split into two here
  text = text.replace(/\uF70F/g, "ญ")
  return text.replace(/\uF700/g, "ฐ")
}

function un_beautify_khmer(input: string, _script: string): string {
  let text = input
  text = text.replace(/\u17B9/g, "\u17B7\u17C6") // 'iṃ' has a single unicode in khmer which is split into two here
  return text.replace(/\u17D1/g, "\u17D2") // end of word virama is different in khmer
}

/* zero-width joiners - replace both ways
['\u200C', ''], // ZWNJ (remove) not in sinh (or deva?)
['\u200D', ''], // ZWJ (remove) will be added when displaying */
function cleanup_zwj(inputText: string): string {
  return inputText.replace(/\u200C|\u200D/g, "")
}

// just replace deva danda with brahmi danda
function beautify_brahmi(input: string): string {
  let text = input
  text = text.replace(/।/g, "𑁇")
  text = text.replace(/॥/g, "𑁈")
  return text.replace(/–/g, "𑁋")
}

// todo - unbeautify needed
function beautify_tham(input: string): string {
  let text = input
  text = text.replace(/\u1A60\u1A41/g, "\u1A55") // medial ra - rakar
  text = text.replace(/\u1A48\u1A60\u1A48/g, "\u1A54") // great sa - ssa
  text = text.replace(/।/g, "\u1AA8")
  return text.replace(/॥/g, "\u1AA9")
}

// copied form csharp - consider removing subjoined as it makes it hard to read
function beautify_tibet(input: string): string {
  let text = input
  // not adding the intersyllabic tsheg between "syllables" (done in csharp code) since no visible change
  text = text.replace(/।/g, "།") // tibet dandas
  text = text.replace(/॥/g, "༎")
  // Iterate over all of the consonants, looking for tibetan halant + consonant.
  // Replace with the corresponding subjoined consonant (without halant)
  for (let i = 0; i <= 39; i += 1) {
    text = text.replace(new RegExp(String.fromCharCode(0x0f84, 0x0f40 + i), "g"), String.fromCharCode(0x0f90 + i))
  }
  // exceptions: yya and vva use the "fixed-form subjoined consonants as the 2nd one
  text = text.replace(/\u0F61\u0FB1/g, "\u0F61\u0FBB") // yya
  text = text.replace(/\u0F5D\u0FAD/g, "\u0F5D\u0FBA") // vva

  // exceptions: jjha, yha and vha use explicit (visible) halant between
  text = text.replace(/\u0F5B\u0FAC/g, "\u0F5B\u0F84\u0F5C") // jjha
  text = text.replace(/\u0F61\u0FB7/g, "\u0F61\u0F84\u0F67") // yha
  return text.replace(/\u0F5D\u0FB7/g, "\u0F5D\u0F84\u0F67") // vha
}

// todo undo the subjoining done above
function un_beautify_tibet(text: string): string {
  return text
}

const beautify_func_default: Array<(text: string, script: string, rendType?: string) => string> = []
const beautify_func: Record<string, Array<(text: string, script: string, rendType?: string) => string>> = {
  [Script.SI]: [beautify_sinh, beautify_common],
  [Script.RO]: [beautify_common],
  [Script.THAI]: [swap_e_o, beautify_thai, beautify_common],
  [Script.LAOS]: [swap_e_o, beautify_common],
  [Script.MY]: [beautify_mymr, beautify_common],
  [Script.KM]: [beautify_common],
  [Script.THAM]: [beautify_tham],
  [Script.GUJA]: [beautify_common],
  [Script.TELU]: [beautify_common],
  [Script.MALA]: [beautify_common],
  [Script.BRAH]: [beautify_brahmi, beautify_common],
  [Script.TIBT]: [beautify_tibet],
  [Script.CYRL]: [beautify_common],
  [Script.SHAN]: [beautify_shan, beautify_common], // Added Shan script beautification
}

// when converting from another script, have to unbeautify before converting
const un_beautify_func_default: Array<(text: string, script: string) => string> = []
const un_beautify_func: Record<string, Array<(text: string, script: string) => string>> = {
  [Script.SI]: [cleanup_zwj, un_beautify_sinh],
  [Script.HI]: [cleanup_zwj], // original deva script (from tipitaka.org) text has zwj
  [Script.RO]: [un_capitalize], // some sources (e.g. VRI) use caps, but pāli has no caps.
  [Script.THAI]: [un_beautify_thai, un_swap_e_o],
  [Script.LAOS]: [un_swap_e_o],
  [Script.KM]: [un_beautify_khmer],
  [Script.MY]: [un_beautify_mymr],
  [Script.TIBT]: [un_beautify_tibet],
  [Script.SHAN]: [un_beautify_shan], // Added Shan script un-beautification
}

function prepareHashMaps(fromIndex: number, toIndex: number, useVowels = true): Array<[number, Map<string, string>]> {
  const fullAr = consos.concat(specials, useVowels ? vowels : [])
  const finalAr: Array<Array<[string, string]>> = [[], [], []] // max 3
  fullAr.forEach((val) => {
    if (val[fromIndex]) {
      // empty mapping - e.g in roman
      finalAr[val[fromIndex].length - 1].push([val[fromIndex], val[toIndex]])
    }
  })
  return finalAr
    .filter((ar) => ar.length)
    .map((ar) => [ar[0][0].length, new Map(ar)])
    .reverse() // longest is first
}

function replaceByMaps(inputText: string, hashMaps: Array<[number, Map<string, string>]>): string {
  const outputAr: string[] = []
  let b = 0
  while (b < inputText.length) {
    let match = false
    for (const [len, hashMap] of hashMaps) {
      const inChars = inputText.substr(b, len)
      if (hashMap.has(inChars)) {
        outputAr.push(hashMap.get(inChars) || "") // note: can be empty string too
        match = true
        b += len
        break
      }
    }
    if (!match) {
      // did not match the hashmaps
      outputAr.push(inputText.charAt(b))
      b += 1
    }
  }
  return outputAr.join("")
}

// for roman/cyrl text - insert 'a' after all consonants that are not followed by virama, dependent vowel or 'a'
// cyrillic mapping extracted from https://dhamma.ru/scripts/transdisp.js
function insert_a(input: string, script: string): string {
  const a = script === Script.CYRL ? "\u0430" : "a" // roman a or cyrl a
  let text = input
  text = text.replace(new RegExp(`([ක-ෆ])([^\u0DCF-\u0DDF\u0DCA${a}])`, "g"), `$1${a}$2`)
  text = text.replace(new RegExp(`([ක-ෆ])([^\u0DCF-\u0DDF\u0DCA${a}])`, "g"), `$1${a}$2`)
  return text.replace(/([ක-ෆ])$/g, `$1${a}`) // conso at the end of string not matched by regex above
}

// eslint-disable-next-line prettier/prettier
const IV_TO_DV: Record<string, string> = { අ: "", ආ: "ා", ඉ: "ි", ඊ: "ී", උ: "ු", ඌ: "ූ", එ: "ෙ", ඔ: "ො" }

function remove_a(input: string, _script: string): string {
  let text = input
  text = text.replace(/([ක-ෆ])([^අආඉඊඋඌඑඔ\u0DCA])/g, "$1\u0DCA$2") // done twice to match successive hal
  text = text.replace(/([ක-ෆ])([^අආඉඊඋඌඑඔ\u0DCA])/g, "$1\u0DCA$2")
  text = text.replace(/([ක-ෆ])$/g, "$1\u0DCA") // last conso not matched by above
  text = text.replace(/([ක-ෆ])([අආඉඊඋඌඑඔ])/g, (_1, p1, p2) => p1 + IV_TO_DV[p2])
  return text
}

const fix_m_above = (text: string): string => text.replace(/ṁ/g, "ං") // per ven anandajothi request

function convert_to(text: string, script: string): string {
  const hashMaps = prepareHashMaps(ScriptIndex[Script.SI], ScriptIndex[script])
  return replaceByMaps(text, hashMaps)
}

function convert_from(text: string, script: string): string {
  // TODO create maps initially and reuse them
  const hashMaps = prepareHashMaps(ScriptIndex[script], ScriptIndex[Script.SI])
  // console.log(hashMaps);
  return replaceByMaps(text, hashMaps)
}

function convert_from_w_v(text: string, script: string): string {
  const hashMaps = prepareHashMaps(ScriptIndex[script], ScriptIndex[Script.SI], false) // without vowels for roman
  return replaceByMaps(text, hashMaps)
}

const convert_to_func_default: Array<(text: string, script: string) => string> = [convert_to]
const convert_to_func: Record<string, Array<(text: string, script: string) => string>> = {
  [Script.SI]: [],
  [Script.RO]: [insert_a, convert_to],
  [Script.CYRL]: [insert_a, convert_to],
}

const convert_from_func_default: Array<(text: string, script: string) => string> = [convert_from]
const convert_from_func: Record<string, Array<(text: string, script: string) => string>> = {
  [Script.SI]: [],
  [Script.RO]: [convert_from_w_v, fix_m_above, remove_a],
  [Script.CYRL]: [convert_from_w_v, remove_a],
}

export class TextProcessor {
  // convert from sinhala to another script
  static basicConvertFromSinh(input: string, script: string): string {
    let text = input
    ;(convert_to_func[script] || convert_to_func_default).forEach((func) => {
      text = func(text, script)
    })
    return text
  }

  // convert from another script to sinhala
  static basicConvertToSinh(input: string, script: string): string {
    let text = input
    ;(convert_from_func[script] || convert_from_func_default).forEach((func) => {
      text = func(text, script)
    })
    return text
  }

  // script specific beautification
  static beautify(input: string, script: string, rendType = ""): string {
    let text = input
    ;(beautify_func[script] || beautify_func_default).forEach((func) => {
      text = func(text, script, rendType)
    })
    return text
  }

  // from Sinhala to other script
  static convertFromSinh(input: string, script: string): string {
    let text = input
    text = this.basicConvertFromSinh(text, script)
    return this.beautify(text, script)
  }

  // from other script to Sinhala - one script
  static convertToSinh(input: string, script: string): string {
    let text = input
    ;(un_beautify_func[script] || un_beautify_func_default).forEach((func) => {
      text = func(text, script)
    })
    return this.basicConvertToSinh(text, script)
  }

  // from other scripts (mixed) to Sinhala
  static convertAnyToSinh(input: string): string {
    let mixedText = input
    mixedText = `${cleanup_zwj(mixedText)} ` // zwj messes with computing runs + hack to process last char
    let curScript = -1
    let run = ""
    let output = ""
    for (let i = 0; i < mixedText.length; i += 1) {
      const newScript = getScriptForCode(mixedText.charCodeAt(i))
      if (newScript !== curScript || i === mixedText.length - 1) {
        // make sure to process the last run
        output += this.convertToSinh(run, curScript)
        curScript = newScript
        run = mixedText.charAt(i)
      } else {
        run += mixedText.charAt(i)
      }
    }

    // console.log(`convert from mixed: "${mixedText}" => "${output}"`);
    return output
  }
}

