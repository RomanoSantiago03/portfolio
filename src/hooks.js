import { useEffect, useState } from "react"

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

// Agrega .is-visible a cada .reveal cuando entra en pantalla
export function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Devuelve cuántas palabras "encender" según cuánto se scrolleó el elemento
export function useScrollProgressWords(ref, totalWords) {
  const [lit, setLit] = useState(prefersReducedMotion() ? totalWords : 0)

  useEffect(() => {
    if (prefersReducedMotion()) return
    let frame = 0
    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.9
      const end = vh * 0.35
      const progress = (start - rect.top) / (start - end + rect.height * 0.6)
      const clamped = Math.min(1, Math.max(0, progress))
      setLit(Math.round(clamped * totalWords))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref, totalWords])

  return lit
}
