import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

export const metadata = {
  title: {
    default: "Welcome to Wild Oasis",
    template: "%s",
  },
  description: "A Next.js app using the App Router",
  icons: {
    icon: "/logo.png",

  },
};
// const inter = Inter({
//   subsets: ["latin"],
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-gray-900 ">
        <Header />
        <div className="grid px-8 py-12 flex-1">
          <main className="max-w-7x w-full  mx-auto  text-zinc-300">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
