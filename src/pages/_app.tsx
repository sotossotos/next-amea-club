import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../styles/theme'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
