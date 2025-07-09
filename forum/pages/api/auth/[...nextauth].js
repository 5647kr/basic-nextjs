import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lirwcV4UgWMPdtnL',
      clientSecret: '775ccc93f64f61deb587c491797a7e98d897849e',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 