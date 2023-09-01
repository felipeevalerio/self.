import type { Config } from 'tailwindcss'
import { colors } from '@self-system/tokens'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}

export default config
