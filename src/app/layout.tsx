import Footer from "@/components/Footer";
import NavBar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Last Mile Enterprises",
  description: "Under Construction ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
