import 'antd/dist/antd.css'
// import '../styles/vars.css'
import '../styles/global.css'
import { CssBaseline } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;