// Character mappings for Pali scripts
// Based on https://github.com/pnfo/pali-script-converter

// Consonants
export const consonants: Record<string, Record<string, string>> = {
  // Velars
  k: { romn: "k", deva: "क", thai: "ก", laoo: "ກ", mymr: "က", khmr: "ក", sinh: "ක" },
  kh: { romn: "kh", deva: "ख", thai: "ข", laoo: "ຂ", mymr: "ခ", khmr: "ខ", sinh: "ඛ" },
  g: { romn: "g", deva: "ग", thai: "ค", laoo: "ຄ", mymr: "ဂ", khmr: "គ", sinh: "ග" },
  gh: { romn: "gh", deva: "घ", thai: "ฆ", laoo: "ຆ", mymr: "ဃ", khmr: "ឃ", sinh: "ඝ" },
  ṅ: { romn: "ṅ", deva: "ङ", thai: "ง", laoo: "ງ", mymr: "င", khmr: "ង", sinh: "ඞ" },

  // Palatals
  c: { romn: "c", deva: "च", thai: "จ", laoo: "ຈ", mymr: "စ", khmr: "ច", sinh: "ච" },
  ch: { romn: "ch", deva: "छ", thai: "ฉ", laoo: "ຉ", mymr: "ဆ", khmr: "ឆ", sinh: "ඡ" },
  j: { romn: "j", deva: "ज", thai: "ช", laoo: "ຊ", mymr: "ဇ", khmr: "ជ", sinh: "ජ" },
  jh: { romn: "jh", deva: "झ", thai: "ฌ", laoo: "ຌ", mymr: "ဈ", khmr: "ឈ", sinh: "ඣ" },
  ñ: { romn: "ñ", deva: "ञ", thai: "ญ", laoo: "ຎ", mymr: "ဉ", khmr: "ញ", sinh: "ඤ" },

  // Retroflexes
  ṭ: { romn: "ṭ", deva: "ट", thai: "ฏ", laoo: "ຏ", mymr: "ဋ", khmr: "ដ", sinh: "ට" },
  ṭh: { romn: "ṭh", deva: "ठ", thai: "ฐ", laoo: "ຐ", mymr: "ဌ", khmr: "ឋ", sinh: "ඨ" },
  ḍ: { romn: "ḍ", deva: "ड", thai: "ฑ", laoo: "ຑ", mymr: "ဍ", khmr: "ឌ", sinh: "ඩ" },
  ḍh: { romn: "ḍh", deva: "ढ", thai: "ฒ", laoo: "ຒ", mymr: "ဎ", khmr: "ឍ", sinh: "ඪ" },
  ṇ: { romn: "ṇ", deva: "ण", thai: "ณ", laoo: "ຓ", mymr: "ဏ", khmr: "ណ", sinh: "ණ" },

  // Dentals
  t: { romn: "t", deva: "त", thai: "ต", laoo: "ຕ", mymr: "တ", khmr: "ត", sinh: "ත" },
  th: { romn: "th", deva: "थ", thai: "ถ", laoo: "ຖ", mymr: "ထ", khmr: "ថ", sinh: "ථ" },
  d: { romn: "d", deva: "द", thai: "ท", laoo: "ທ", mymr: "ဒ", khmr: "ទ", sinh: "ද" },
  dh: { romn: "dh", deva: "ध", thai: "ธ", laoo: "ຘ", mymr: "ဓ", khmr: "ធ", sinh: "ධ" },
  n: { romn: "n", deva: "न", thai: "น", laoo: "ນ", mymr: "န", khmr: "ន", sinh: "න" },

  // Labials
  p: { romn: "p", deva: "प", thai: "ป", laoo: "ປ", mymr: "ပ", khmr: "ប", sinh: "ප" },
  ph: { romn: "ph", deva: "फ", thai: "ผ", laoo: "ຜ", mymr: "ဖ", khmr: "ផ", sinh: "ඵ" },
  b: { romn: "b", deva: "ब", thai: "พ", laoo: "ພ", mymr: "ဗ", khmr: "ព", sinh: "බ" },
  bh: { romn: "bh", deva: "भ", thai: "ภ", laoo: "ຠ", mymr: "ဘ", khmr: "ភ", sinh: "භ" },
  m: { romn: "m", deva: "म", thai: "ม", laoo: "ມ", mymr: "မ", khmr: "ម", sinh: "ම" },

  // Semi-vowels and liquids
  y: { romn: "y", deva: "य", thai: "ย", laoo: "ຍ", mymr: "ယ", khmr: "យ", sinh: "ය" },
  r: { romn: "r", deva: "र", thai: "ร", laoo: "ຣ", mymr: "ရ", khmr: "រ", sinh: "ර" },
  l: { romn: "l", deva: "ल", thai: "ล", laoo: "ລ", mymr: "လ", khmr: "ល", sinh: "ල" },
  v: { romn: "v", deva: "व", thai: "ว", laoo: "ວ", mymr: "ဝ", khmr: "វ", sinh: "ව" },

  // Sibilants and aspirate
  s: { romn: "s", deva: "स", thai: "ส", laoo: "ສ", mymr: "သ", khmr: "ស", sinh: "ස" },
  h: { romn: "h", deva: "ह", thai: "ห", laoo: "ຫ", mymr: "ဟ", khmr: "ហ", sinh: "හ" },

  // Additional consonants
  ḷ: { romn: "ḷ", deva: "ळ", thai: "ฬ", laoo: "ຬ", mymr: "ဠ", khmr: "ឡ", sinh: "ළ" },
}

// Independent vowels
export const vowels: Record<string, Record<string, string>> = {
  a: { romn: "a", deva: "अ", thai: "อ", laoo: "ອ", mymr: "အ", khmr: "អ", sinh: "අ" },
  ā: { romn: "ā", deva: "आ", thai: "อา", laoo: "ອາ", mymr: "အာ", khmr: "អា", sinh: "ආ" },
  i: { romn: "i", deva: "इ", thai: "อิ", laoo: "ອິ", mymr: "ဣ", khmr: "ឥ", sinh: "ඉ" },
  ī: { romn: "ī", deva: "ई", thai: "อี", laoo: "ອີ", mymr: "ဤ", khmr: "ឦ", sinh: "ඊ" },
  u: { romn: "u", deva: "उ", thai: "อุ", laoo: "ອຸ", mymr: "ဥ", khmr: "ឧ", sinh: "උ" },
  ū: { romn: "ū", deva: "ऊ", thai: "อู", laoo: "ອູ", mymr: "ဦ", khmr: "ឩ", sinh: "ඌ" },
  e: { romn: "e", deva: "ए", thai: "เอ", laoo: "ເອ", mymr: "ဧ", khmr: "ឯ", sinh: "එ" },
  o: { romn: "o", deva: "ओ", thai: "โอ", laoo: "ໂອ", mymr: "ဩ", khmr: "ឱ", sinh: "ඔ" },
}

// Dependent vowel signs
export const vowelSigns: Record<string, Record<string, string>> = {
  ā: { romn: "ā", deva: "ा", thai: "า", laoo: "າ", mymr: "ာ", khmr: "ា", sinh: "ා" },
  i: { romn: "i", deva: "ि", thai: "ิ", laoo: "ິ", mymr: "ိ", khmr: "ិ", sinh: "ි" },
  ī: { romn: "ī", deva: "ी", thai: "ี", laoo: "ີ", mymr: "ီ", khmr: "ី", sinh: "ී" },
  u: { romn: "u", deva: "ु", thai: "ุ", laoo: "ຸ", mymr: "ု", khmr: "ុ", sinh: "ු" },
  ū: { romn: "ū", deva: "ू", thai: "ู", laoo: "ູ", mymr: "ူ", khmr: "ូ", sinh: "ූ" },
  e: { romn: "e", deva: "े", thai: "เ", laoo: "ເ", mymr: "ေ", khmr: "េ", sinh: "ෙ" },
  o: { romn: "o", deva: "ो", thai: "โ", laoo: "ໂ", mymr: "ော", khmr: "ោ", sinh: "ො" },
}

// Special characters and diacritics
export const specials: Record<string, Record<string, string>> = {
  ṃ: { romn: "ṃ", deva: "ं", thai: "ํ", laoo: "ໍ", mymr: "ံ", khmr: "ំ", sinh: "ං" },
  virama: { romn: "", deva: "्", thai: "฻", laoo: "຺", mymr: "္", khmr: "្", sinh: "්" },
  ".": { romn: ".", deva: "।", thai: "။", laoo: "။", mymr: "။", khmr: "។", sinh: "." },
}

// Additional mappings for special cases in each script
export const specialCases: Record<string, Record<string, string>> = {
  // Script-specific special cases
  deva: {
    // Devanagari specific rules
  },
  thai: {
    // Thai specific rules
  },
  // Add more as needed
}

