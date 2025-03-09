import "@/styles/globals.css";
import { Poppins } from 'next/font/google'
import { UserProvider } from '@/context/UserContext';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <main className={poppins.variable}>
        <Component {...pageProps} />
      </main>
    </UserProvider>
  )
}



