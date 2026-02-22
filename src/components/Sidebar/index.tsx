'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

const LERP_FACTOR = 0.12

const Sidebar = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const currentRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const rafLoop = () => {
      const scrollTop = window.scrollY ?? document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const docHeight = scrollHeight - clientHeight

      const target =
        docHeight <= 0
          ? 0
          : Math.min(1, Math.max(0, scrollTop / docHeight))

      const current = currentRef.current
      const next =
        Math.abs(target - current) < 0.001
          ? target
          : current + (target - current) * LERP_FACTOR
      currentRef.current = next
      setScrollProgress(next)
      rafRef.current = requestAnimationFrame(rafLoop)
    }

    rafRef.current = requestAnimationFrame(rafLoop)

    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className={styles.sidebar}>
      <div
        className={styles.sidebar__progress}
        style={{ height: `${scrollProgress * 100}%` }}
      />
      <div className={styles.sidebar__content}>
        <Link href="/">
          <Image
            src="/2dm-logo-short.png"
            alt="2DM Technologies"
            width={331 / 5}
            height={120 / 5}
          />
        </Link>
      </div>
    </div>
  )
}

export default Sidebar