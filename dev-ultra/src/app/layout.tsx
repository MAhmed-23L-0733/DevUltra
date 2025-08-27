import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevUltra",
  description: "digital Solutions startup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items = [
    {
      label: "Business",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Web Development",
          ariaLabel: "webdev",
          href: "/web-development",
        },
        {
          label: "UI/UX Design",
          ariaLabel: "ui/ux",
          href: "/ui-ux-design",
        },
        {
          label: "Consulting",
          ariaLabel: "consultation",
          href: "/consulting",
        },
        {
          label: "Work with us",
          ariaLabel: "Featured Projects",
          href: "/contact",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email us",
          href: "mailto:Devultrasolutions@gmail.com",
        },
        {
          label: "Instagram",
          ariaLabel: "Twitter",
          href: "https://www.instagram.com/devultrasolutions?igsh=Nm1yNDh5b3d4c3k4",
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/company/devultrasolutions/",
        },
        {
          label: "Threads",
          ariaLabel: "LinkedIn",
          href: "https://www.threads.com/@devultrasolutions",
        },
      ],
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar
          logo={"/DevUltra_Logo.png"}
          items={items}
          logoAlt="Company Logo"
          baseColor="#fff"
          menuColor="#fff"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        ></Navbar>
        <div className="pt-20 bg-black">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
