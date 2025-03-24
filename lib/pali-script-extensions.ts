import * as PS from "./pali-script"

// Use Sinhala as intermediate language for all conversions
export const convert = (input: string, fromScript: string, toScript: string): string => {
  const sinh = PS.TextProcessor.convertToSinh(input, fromScript)
  return PS.TextProcessor.convertFromSinh(sinh, toScript)
}

export const convertAny = (input: string, toScript: string): string => {
  const sinh = PS.TextProcessor.convertAnyToSinh(input)
  return PS.TextProcessor.convertFromSinh(sinh, toScript)
}

export const getLocaleForScript = (s: string): string | undefined => PS.PaliScriptInfo.get(s)?.[3].locale

export const getLocaleNameForScript = (s: string): string | undefined => PS.PaliScriptInfo.get(s)?.[3].localeName

export const getSupportedLocales = (): Set<string> => {
  const sInfos = Object.getOwnPropertyNames(PS.Script).map((k) => PS.PaliScriptInfo.get(PS.Script[k])?.[3])
  const ls = new Set(sInfos.map((si) => si.locale))
  return ls
}

// Re-export Script enum for convenience
export const { Script } = PS

