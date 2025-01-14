import '@/styles/reset.sass'
import '@/styles/fonts.sass'
import '@/styles/global.sass'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <html lang="en">
    <body>
      {children}
    </body>
  </html>
}
