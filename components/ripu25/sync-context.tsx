"use client"



import {

  createContext,

  useCallback,

  useContext,

  useEffect,

  useState,

  type ReactNode,

} from "react"

import { RIPU25_AUTO_MS, ripu25Slides } from "@/components/ripu25/data"



type RIPU25SyncContextValue = {

  active: number

  setActive: (index: number) => void

  slide: (typeof ripu25Slides)[number]

  total: number

}



const RIPU25SyncContext = createContext<RIPU25SyncContextValue | null>(null)



export function RIPU25SyncProvider({ children }: { children: ReactNode }) {

  const [active, setActiveState] = useState(0)

  const [paused, setPaused] = useState(false)



  const setActive = useCallback((index: number) => {

    setActiveState(index % ripu25Slides.length)

  }, [])



  const next = useCallback(() => {

    setActiveState((i) => (i + 1) % ripu25Slides.length)

  }, [])



  useEffect(() => {

    if (paused) return

    const id = setInterval(next, RIPU25_AUTO_MS)

    return () => clearInterval(id)

  }, [next, paused])



  return (

    <RIPU25SyncContext.Provider

      value={{

        active,

        setActive,

        slide: ripu25Slides[active],

        total: ripu25Slides.length,

      }}

    >

      <div

        onMouseEnter={() => setPaused(true)}

        onMouseLeave={() => setPaused(false)}

        onFocusCapture={() => setPaused(true)}

        onBlurCapture={(e) => {

          if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false)

        }}

      >

        {children}

      </div>

    </RIPU25SyncContext.Provider>

  )

}



export function useRIPU25Sync() {

  const ctx = useContext(RIPU25SyncContext)

  if (!ctx) throw new Error("useRIPU25Sync must be used within RIPU25SyncProvider")

  return ctx

}


