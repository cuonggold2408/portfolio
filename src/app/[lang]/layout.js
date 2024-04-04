import { Inter } from "next/font/google";
import Providers from "./Providers";
import { getDictionary } from "../../../getDictionary";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children, params }) {
  const lang = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className="light" style={{ colorScheme: "light" }}>
      <head>
        <meta name="description" content={lang.description} />
        <title>My portfolio</title>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
