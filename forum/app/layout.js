import Link from "next/link";
import "./globals.css"
import Login from "./Login";
import LogOut from "./LogOut";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  // 로그인된 유저정보를 출력해준다.
  let session = await getServerSession(authOptions);
  console.log(session)
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">AppleForum</Link>
          <Link href="/list">List</Link>
          {session ? 
          <>
            <span>{session.user.name}</span><LogOut />
          </>
          : <Login />
          }
          
        </nav>
        {children}
      </body>
    </html>
  );
}
