import Header from "@/app/_components/Header";
import { ReservationsProvider } from "@/app/_components/ReservationsContext";
import "@/app/_styles/globals.css";

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
      <body className="flex min-h-screen flex-col bg-gray-900">
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="max-w-7x mx-auto w-full text-zinc-300">
            <ReservationsProvider>{children}</ReservationsProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
