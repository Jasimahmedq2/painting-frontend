import ReduxProvider from "@/lib/ReduxProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import Footer from "@/components/UI/footer";
import WholeLayout from "@/components/layout/WholeLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaintingHut",
  description: "painting hut created by Jasim Ahmed",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <StyledComponentsRegistry>
        <html lang="en">
          <body className={inter.className}>
            <WholeLayout>
              <div className="sm:min-h-screen max-w-[1280px] mx-auto">
                {children}
              </div>
            </WholeLayout>
          </body>
        </html>
      </StyledComponentsRegistry>
    </ReduxProvider>
  );
}
