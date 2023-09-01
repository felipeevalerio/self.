import Link from 'next/link'
import { Logo } from '../Logo'

export function Header() {
  return (
    <header className="flex items-center justify-between px-6">
      <Logo />
      <nav className="flex items-center justify-center gap-12 tracking-tight font-semibold">
        <Link href="/">FEATURES</Link>
        <Link href="/">RECIPES</Link>
        <Link href="/">PRICING</Link>
        <Link href="/">ABOUT</Link>
      </nav>
    </header>
  )
}
