import { Aside } from '@/components/Aside'
import './globals.css'


export const metadata = {
  title: 'Code Connect',
    description: 'Uma rede social para desenvolvedores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Aside />
        {children}
        </body>
    </html>
  )
}   