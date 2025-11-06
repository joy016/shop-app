import type { Metadata } from "next";
import NavBar from "./ui/NavBar";
import ThemeRegistry from "./styles/ThemeRegistry";

export const metadata: Metadata = {
  title: "Olivia's Shopping App",
  description: "This app is create using next js and Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <NavBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
