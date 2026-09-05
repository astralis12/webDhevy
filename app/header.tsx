'use client'

import { TextScramble } from '@/components/ui/text-scramble'
import { Tilt } from '@/components/ui/tilt'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { PERSONAL_INFO } from './data'

function ProfilePhoto({ isDark }: { isDark: boolean }) {
  const [lit, setLit] = useState(false)
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const sx = useSpring(x, { stiffness: 200, damping: 25 })
  const sy = useSpring(y, { stiffness: 200, damping: 25 })
  const sheen = useMotionTemplate`radial-gradient(circle at ${sx}% ${sy}%, rgba(255,255,255,0.55), transparent 55%)`

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(((e.clientX - rect.left) / rect.width) * 100)
    y.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <Tilt rotationFactor={10} isRevese>
      <div
        className="relative overflow-hidden rounded-md"
        onMouseMove={handleMove}
        onMouseEnter={() => setLit(true)}
        onMouseLeave={() => setLit(false)}
      >
        <Image
          src={isDark ? '/img/PP.png' : '/img/profile-light.png'}
          alt="Profile photo"
          width={128}
          height={128}
          className="h-28 w-28 rounded-md object-cover"
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-md"
          style={{ background: sheen, mixBlendMode: 'soft-light' }}
          animate={{ opacity: lit ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>
    </Tilt>
  )
}

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkTheme()
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="mb-8 flex items-center justify-between">
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.3 }}
        >
          <ProfilePhoto isDark={isDark} />
        </motion.div>
        <div>
          <div className="text-foreground inline-block font-medium">
            <TextScramble characterSet={PERSONAL_INFO.name.english}>
              {PERSONAL_INFO.name.english}
            </TextScramble>
          </div>
          <p className="text-muted-foreground">
            <TextScramble
              as="span"
              characterSet={PERSONAL_INFO.title.replace(/\s/g, '')}
            >
              {PERSONAL_INFO.title}
            </TextScramble>
          </p>
        </div>
      </div>
    </header>
  )
}
