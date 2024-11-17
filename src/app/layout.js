export const metadata = {
  title: " NextJs TailwindCSS Snadbox",
  description: "This is a sample webpage to learn NextJs and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
