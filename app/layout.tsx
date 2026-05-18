import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiramisu — Press Kit",
  description:
    "DJ Tiramisu · House, Prog Dark e Psytrance · Bahia. Groove, progressão e transe.",
  openGraph: {
    title: "Tiramisu — Press Kit",
    description: "Groove, progressão e transe. House · Prog Dark · Psytrance.",
    type: "website",
    images: ["/tiramisu-photo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
