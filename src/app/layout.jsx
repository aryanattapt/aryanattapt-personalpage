import { Inter } from "next/font/google";
import { ChakraUIProviders } from '../providers/chakraui.provider';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aryanatta P.T Personal Page",
  description: "Aryanatta P.T Personal Page",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraUIProviders>{children}</ChakraUIProviders>
      </body>
    </html>
  );
}