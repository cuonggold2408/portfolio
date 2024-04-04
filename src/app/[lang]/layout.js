import { Inter } from "next/font/google";
import Providers from "./Providers";
import { getDictionary } from "../../../getDictionary";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "F8 portfolio",
//   description: "Xin chào, mình là F8, đây là trang cá nhân của mình.",
// };

export default async function RootLayout({ children, params }) {
  const lang = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className="light" style={{ colorScheme: "light" }}>
      <head>
        <meta name="description" content={lang.description} />
        <title>F8 portfolio</title>
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
