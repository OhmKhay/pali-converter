// Based on https://github.com/pnfo/pali-script-converter

// Script codes following ISO 15924
// romn - Roman/Latin
// deva - Devanagari
// thai - Thai
// laoo - Lao
// mymr - Myanmar
// khmr - Khmer
// sinh - Sinhala

// Character mappings
import { consonants, vowels, vowelSigns, specials } from "./mappings"

// Main conversion function
export function convertText(text: string, fromScript: string, toScript: string, preserveFormatting: boolean): string {
  if (fromScript === toScript) {
    return text
  }

  // If preserving formatting, process text by chunks
  if (preserveFormatting) {
    // Split text into chunks (words and whitespace)
    const chunks = text.split(/(\s+)/)
    return chunks
      .map((chunk) => {
        if (chunk.trim() === "") {
          return chunk // Preserve whitespace
        }
        return convertWord(chunk, fromScript, toScript)
      })
      .join("")
  } else {
    // Remove all whitespace and convert as a single chunk
    return convertWord(text.replace(/\s+/g, ""), fromScript, toScript)
  }
}

// Convert a single word or chunk of text
function convertWord(word: string, fromScript: string, toScript: string): string {
  // First convert to a standardized internal representation
  const internalForm = scriptToInternal(word, fromScript)

  // Then convert from internal representation to target script
  return internalToScript(internalForm, toScript)
}

// Convert from a specific script to internal representation
function scriptToInternal(text: string, script: string): string[] {
  const result: string[] = []
  let i = 0

  while (i < text.length) {
    let matched = false

    // Try to match special characters first
    for (const [internal, scriptMap] of Object.entries(specials)) {
      const scriptChar = scriptMap[script]
      if (scriptChar && text.startsWith(scriptChar, i)) {
        result.push(internal)
        i += scriptChar.length
        matched = true
        break
      }
    }

    if (matched) continue

    // Try to match consonants
    for (const [internal, scriptMap] of Object.entries(consonants)) {
      const scriptChar = scriptMap[script]
      if (scriptChar && text.startsWith(scriptChar, i)) {
        result.push(internal)
        i += scriptChar.length
        matched = true
        break
      }
    }

    if (matched) continue

    // Try to match vowels
    for (const [internal, scriptMap] of Object.entries(vowels)) {
      const scriptChar = scriptMap[script]
      if (scriptChar && text.startsWith(scriptChar, i)) {
        result.push(internal)
        i += scriptChar.length
        matched = true
        break
      }
    }

    if (matched) continue

    // Try to match vowel signs
    for (const [internal, scriptMap] of Object.entries(vowelSigns)) {
      const scriptChar = scriptMap[script]
      if (scriptChar && text.startsWith(scriptChar, i)) {
        result.push(internal)
        i += scriptChar.length
        matched = true
        break
      }
    }

    if (matched) continue

    // If no match found, keep the character as is
    result.push(text[i])
    i++
  }

  return result
}

// Convert from internal representation to a specific script
function internalToScript(internalForm: string[], script: string): string {
  let result = ""

  for (let i = 0; i < internalForm.length; i++) {
    const internal = internalForm[i]

    // Check if it's a special character
    if (specials[internal] && specials[internal][script]) {
      result += specials[internal][script]
      continue
    }

    // Check if it's a consonant
    if (consonants[internal] && consonants[internal][script]) {
      result += consonants[internal][script]
      continue
    }

    // Check if it's a vowel
    if (vowels[internal] && vowels[internal][script]) {
      result += vowels[internal][script]
      continue
    }

    // Check if it's a vowel sign
    if (vowelSigns[internal] && vowelSigns[internal][script]) {
      result += vowelSigns[internal][script]
      continue
    }

    // If no mapping found, keep the character as is
    result += internal
  }

  return result
}

// Helper function to handle special cases and combinations
export function processSpecialCases(text: string, script: string): string {
  // This would handle script-specific rules and combinations
  // For example, handling virama/conjuncts in Devanagari

  if (script === "deva") {
    // Handle Devanagari specific rules
  } else if (script === "thai") {
    // Handle Thai specific rules
  }

  return text
}

