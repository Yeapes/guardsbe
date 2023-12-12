import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import "./globals.css";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.BASE_URL;

export const metadata = {
  title: "VisiWave",
  description: "VisiWave",
};

export default async function RootLayout({ children }) {
  const res = await fetch(`${baseUrl}/settings`);
  const data = await res.json();
  const settingsData = data.data[0];

  return (
    <html lang="en">
      <body className={barlow.className}>
        <header>
          <Navigation settingsData={settingsData} />
        </header>
        {children}
        <footer>
          <Footer settingsData={settingsData} />
        </footer>
      </body>
    </html>
  );
}
