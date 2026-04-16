import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Client-side initialization
    if (typeof window !== 'undefined') {
      // Optional: Sync dengan localStorage jika diperlukan
      const savedName = localStorage.getItem('userName');
      if (savedName && !pageProps.initialName) {
        // Anda bisa menambahkan logika untuk sync di sini
      }
    }
  }, [pageProps.initialName]);

  return <Component {...pageProps} />;
}

export default MyApp;