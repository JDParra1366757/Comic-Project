import Layout from "src/components/layout";
import "tailwindcss/tailwind.css";
import '../src/Styles/styles.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Component {...pageProps} />
    </Layout>
     )
    }

export default MyApp