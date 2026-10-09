import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SavedPropertiesProvider } from "@/context/SavedPropertiesContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: {
    default: "Haven & Co. | Architectural Real Estate",
    template: "%s | Haven & Co.",
  },
  description:
    "Curating the world's most distinctive architectural properties, landmark estates, and contemporary sanctuaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface font-sans text-on-surface antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          <SavedPropertiesProvider>
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </SavedPropertiesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
