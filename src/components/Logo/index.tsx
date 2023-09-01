import Image from 'next/image'
import logoImg from '@/assets/logo.svg'

export function Logo() {
  return (
    <Image
      src={logoImg}
      height={43}
      width={74}
      alt={"Logo from self., it represents a smooth version of the word 'self'"}
    />
  )
}
