import "./globals.css";
import MainLayout from "../components/MainLayout"
import MainContextProvider from "../context/MenuContext"

export const metadata = {
  title: " NextJs TailwindCSS Snadbox",
  description: "This is a sample webpage to learn NextJs and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainContextProvider>
          <MainLayout>{children}</MainLayout>
        </MainContextProvider>
      </body>
    </html>
  );
}
