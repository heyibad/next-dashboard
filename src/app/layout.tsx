import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const ubuntu = Ubuntu({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Nextpress Dashboard",
    description:
        "Dashboard which was built on the top of Nextjs | Tailwind | TypeScript | React Hook Form | ShadCn | ZOD",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ubuntu.className}>
                <Navbar
                    className="text-white bg-primary dark:bg-slate-700"
                    LogoName="DASHBOARD"
                    name="Muhmmad Ibad"
                    imageUrl="https://github.com/heyibad.png"
                />
                <div className="flex">
                    <div className="h-[100vh] hidden md:block w-[300px]">
                        <Sidebar />
                    </div>
                    <div
                    className="w-full md:max-w-[1140px] p-5 "
                    >{children}</div>
                </div>
            </body>
        </html>
    );
}
