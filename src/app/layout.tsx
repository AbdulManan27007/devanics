import "./globals.css";
import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: "Devanics",
  description: "World-class software solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
