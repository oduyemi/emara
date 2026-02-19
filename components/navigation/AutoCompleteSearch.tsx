"use client"
import { Combobox } from "@headlessui/react"
import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { useDebounce } from "./useDebounce"


export function AutocompleteSearch() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const debounced = useDebounce(query, 300)

  useEffect(() => {
    if (!debounced) return setResults([])

    async function fetchResults() {
      const res = await fetch(`/api/search?q=${debounced}`)
      const data = await res.json()
      setResults(data.slice(0, 8))
    }

    fetchResults()
  }, [debounced])

  return (
    <Combobox>
      <div className="relative w-full">
        <div className="flex rounded-md overflow-hidden">
          <Combobox.Input
            className="w-full px-4 py-2 text-black outline-none"
            placeholder="Search products"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-orange-400 px-4">
            <Search className="text-black" />
          </button>
        </div>

        {results.length > 0 && (
          <Combobox.Options className="absolute z-50 mt-1 w-full bg-white shadow-lg max-h-80 overflow-auto rounded-md">
            {results.map((item) => (
              <Combobox.Option
                key={item.id}
                value={item}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {item.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}
