import Script from "next/script";
import "@/styles/globals.css"; // Only if you have global styles

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCcnDpN23KL5_m6rAJebebNoyJqItDw1mY&libraries=places`}
      />
      <Component {...pageProps} />
    </>
  );
}
