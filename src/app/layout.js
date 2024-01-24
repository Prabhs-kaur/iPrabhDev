import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prabhjot | Portfolio",
  description: "Built using next js",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
  }