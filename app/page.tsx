"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Copy, RotateCcw, Check, ArrowRight, Sparkles } from "lucide-react"
import { Script, convert } from "@/lib/pali-script-extensions"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function PaliConverter() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [sourceScript, setSourceScript] = useState(Script.RO)
  const [targetScript, setTargetScript] = useState(Script.THAI)
  const [preserveFormatting, setPreserveFormatting] = useState(true)
  const [activeTab, setActiveTab] = useState("convert")
  const [copied, setCopied] = useState(false)
  const [isConverting, setIsConverting] = useState(false)
  const { theme } = useTheme()

  const scriptOptions = [
    { value: Script.RO, label: "Roman" },
    { value: Script.SI, label: "Sinhala" },
    { value: Script.HI, label: "Devanagari" },
    { value: Script.THAI, label: "Thai" },
    { value: Script.LAOS, label: "Lao" },
    { value: Script.MY, label: "Myanmar" },
    { value: Script.SHAN, label: "Shan (Tai / Dai)" },
    { value: Script.KM, label: "Khmer" },
    { value: Script.BENG, label: "Bengali" },
    { value: Script.GURM, label: "Gurmukhi" },
    { value: Script.GUJA, label: "Gujarati" },
    { value: Script.TELU, label: "Telugu" },
    { value: Script.KANN, label: "Kannada" },
    { value: Script.MALA, label: "Malayalam" },
    { value: Script.THAM, label: "Tai Tham" },
    { value: Script.BRAH, label: "Brahmi" },
    { value: Script.TIBT, label: "Tibetan" },
    { value: Script.CYRL, label: "Cyrillic" },
   
  ]

  const handleConvert = async () => {
    if (!inputText.trim()) return

    setIsConverting(true)

    // Add a small delay to show the loading state
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      // If preserveFormatting is true, process text by chunks
      if (preserveFormatting) {
        const chunks = inputText.split(/(\s+)/)
        const convertedChunks = chunks.map((chunk) => {
          if (chunk.trim() === "") {
            return chunk // Preserve whitespace
          }
          return convert(chunk, sourceScript, targetScript)
        })
        setOutputText(convertedChunks.join(""))
      } else {
        // Remove all whitespace and convert as a single chunk
        const textWithoutSpaces = inputText.replace(/\s+/g, "")
        setOutputText(convert(textWithoutSpaces, sourceScript, targetScript))
      }
    } finally {
      setIsConverting(false)
    }
  }

  const handleReset = () => {
    setInputText("")
    setOutputText("")
  }

  const handleCopy = () => {
    if (outputText) {
      navigator.clipboard.writeText(outputText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleSwapScripts = () => {
    const temp = sourceScript
    setSourceScript(targetScript)
    setTargetScript(temp)
  }

  // Auto-convert when input changes or script selection changes
  useEffect(() => {
    if (inputText.trim() && sourceScript !== targetScript) {
      const debounceTimer = setTimeout(() => {
        handleConvert()
      }, 500)

      return () => clearTimeout(debounceTimer)
    }
  }, [inputText, sourceScript, targetScript, preserveFormatting])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="inline-block"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Pali Script Converter
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Convert Pali text between different scripts and writing systems from across Buddhist traditions
          </motion.p>
        </div>

        <Card className="border-2 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="convert" className="text-base">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Convert
                </TabsTrigger>
                <TabsTrigger value="about" className="text-base">
                  About
                </TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <TabsContent value="convert" className="space-y-8 mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="source-script" className="text-lg font-medium">
                            Source Script
                          </Label>
                          <Select value={sourceScript} onValueChange={setSourceScript}>
                            <SelectTrigger id="source-script" className="w-[180px]">
                              <SelectValue placeholder="Select script" />
                            </SelectTrigger>
                            <SelectContent>
                              {scriptOptions.map((script) => (
                                <SelectItem key={script.value} value={script.value}>
                                  {script.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <Textarea
                          id="input-text"
                          placeholder="Enter Pali text here..."
                          className="min-h-[220px] font-pali text-lg transition-all duration-200 focus-visible:ring-primary"
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                        />
                      </div>

                      <div className="space-y-4 relative">
                        <div className="flex justify-between items-center">
                          <Label htmlFor="target-script" className="text-lg font-medium">
                            Target Script
                          </Label>
                          <Select value={targetScript} onValueChange={setTargetScript}>
                            <SelectTrigger id="target-script" className="w-[180px]">
                              <SelectValue placeholder="Select script" />
                            </SelectTrigger>
                            <SelectContent>
                              {scriptOptions.map((script) => (
                                <SelectItem key={script.value} value={script.value}>
                                  {script.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-x-[20px] md:-translate-y-1/2 z-10">
                          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              size="icon"
                              variant="outline"
                              className="rounded-full h-10 w-10 bg-background border-2 shadow-md"
                              onClick={handleSwapScripts}
                            >
                              <ArrowRight className="h-4 w-4 rotate-90 md:rotate-0" />
                            </Button>
                          </motion.div>
                        </div>

                        <div className="relative">
                          <Textarea
                            id="output-text"
                            placeholder="Converted text will appear here..."
                            className={cn(
                              "min-h-[220px] font-pali text-lg transition-all duration-200",
                              isConverting && "opacity-50",
                            )}
                            value={outputText}
                            readOnly
                          />

                          <AnimatePresence>
                            {isConverting && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <div className="loading-spinner"></div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t">
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="preserve-formatting"
                          checked={preserveFormatting}
                          onCheckedChange={setPreserveFormatting}
                        />
                        <Label htmlFor="preserve-formatting" className="font-medium">
                          Preserve formatting
                        </Label>
                      </div>

                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="outline" onClick={handleReset}>
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Reset
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            onClick={handleCopy}
                            disabled={!outputText}
                            className={cn(
                              "transition-all duration-300",
                              copied && "bg-green-500/10 text-green-600 border-green-500/30",
                            )}
                          >
                            {copied ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="mr-2 h-4 w-4" />
                                Copy
                              </>
                            )}
                          </Button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button onClick={handleConvert} disabled={isConverting}>
                            {isConverting ? "Converting..." : "Convert"}
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="about" className="mt-0">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <h3 className="text-2xl font-bold">About Pali Script Converter</h3>
                      <p>
                        This tool allows you to convert Pali text between different scripts and writing systems used
                        throughout Buddhist countries and traditions.
                      </p>
                      <p>
                        Pali is an ancient Indian language used in the sacred texts of Theravada Buddhism. While the
                        language is the same, it can be written in various scripts including Roman (Latin), Thai,
                        Devanagari, Myanmar (Burmese),Shan (လိၵ်ႈတႆး), Khmer, and Sinhala.
                      </p>
                      <h4 className="text-xl font-bold">Supported Scripts</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        <div>
                          <ul className="space-y-1">
                            <li>
                              <strong>Roman/Latin:</strong> Used internationally and in academic contexts
                            </li>
                            <li>
                              <strong>Sinhala:</strong> Used in Sri Lanka
                            </li>
                            <li>
                              <strong>Devanagari:</strong> Used in India and Nepal
                            </li>
                            <li>
                              <strong>Thai:</strong> Used in Thailand
                            </li>
                            <li>
                              <strong>Lao:</strong> Used in Laos
                            </li>
                            <li>
                              <strong>Myanmar:</strong> Used in Burma/Myanmar
                            </li>
                            <li>
                              <strong>Shan (Tai / Dai):</strong> Used in Shan State, Myanmar
                            </li>
                            <li>
                              <strong>Khmer:</strong> Used in Cambodia
                            </li>
                            <li>
                              <strong>Bengali:</strong> Used in Bangladesh and parts of India
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="space-y-1">
                            <li>
                              <strong>Gurmukhi:</strong> Used for Punjabi
                            </li>
                            <li>
                              <strong>Gujarati:</strong> Used in Gujarat, India
                            </li>
                            <li>
                              <strong>Telugu:</strong> Used in Andhra Pradesh and Telangana, India
                            </li>
                            <li>
                              <strong>Kannada:</strong> Used in Karnataka, India
                            </li>
                            <li>
                              <strong>Malayalam:</strong> Used in Kerala, India
                            </li>
                            <li>
                              <strong>Tai Tham:</strong> Used in Northern Thailand
                            </li>
                            <li>
                              <strong>Brahmi:</strong> Ancient Indian script
                            </li>
                            <li>
                              <strong>Tibetan:</strong> Used in Tibet
                            </li>
                            <li>
                              <strong>Cyrillic:</strong> Used in Russia and Eastern Europe
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>
                        The converter preserves the original formatting including paragraphs, line breaks, and spacing
                        when the "Preserve formatting" option is enabled.
                      </p>
                      <p>
                        This converter is based on the{" "}
                        <a
                          href="https://github.com/pnfo/pali-script-converter"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          pnfo/pali-script-converter
                        </a>{" "}
                        project.
                      </p>
                    </div>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </CardContent>
          <CardFooter className="text-center text-sm text-muted-foreground py-4 border-t">
            © 2025 Pali Script Converter | SSBU.
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

