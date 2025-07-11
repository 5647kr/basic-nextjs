import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23lirwcV4UgWMPdtnL',
      clientSecret: '775ccc93f64f61deb587c491797a7e98d897849e',
    }),
  ],

  jwt : {
    maxAge: 15,  //테스트삼아서 유효기간 15초로 함
  },

  callbacks: {
    async jwt({ token, account, user }) {
      console.log('account', account);
      console.log('user', user);
      console.log('token', token);
      // 1. 첫 로그인시 JWT 만들어주기 (첫 로그인시에만 실행)
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token, 
          accessTokenExpires: account.expires_at,
          user,
        }
      }
      return token
    },

    //getServerSession 실행시 토큰에 있던 어떤 정보 뽑아서 컴포넌트로 보내줄지
    async session({ session, token }) {
      session.user = token.user
      session.accessToken = token.accessToken
      session.accessTokenExpires = token.accessTokenExpires
      session.error = token.error
      return session
    },
  },

  //JWT만드는 암호키인데 .env 파일을 이용합시다.
  secret : 'password1234',
};

export default NextAuth(authOptions); 






























// 개인 회원가입 기능 구현
// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: 'Ov23lirwcV4UgWMPdtnL',
//       clientSecret: '775ccc93f64f61deb587c491797a7e98d897849e',
//     }),

//     CredentialsProvider({
//       // 로그인페이지 폼 자동 생성해주는 코드
//       name: "credentials",
//       credentials: {
//         email: { label: "email", type: "text" },
//         password: { label: "password", type: "password" },
//       },
//       // 로그인 요청시 실행되는 코드
//       // 직접 db에서 아이디 비번 비교하고
//       // 아이디, 비번 맞으면 return 결과, 틀리면 return null 해야함

//       async authorize(credentials) {
//         let db = (await connectDB).db('forum');
//         let user = await db.collection('user_cred').findOne({email : credentials.email})
//         if (!user) {
//           console.log('해당 이메일은 없음');
//           return null
//         }
//         const pwcheck = await bcrypt.compare(credentials.password, user.password);
//         if (!pwcheck) {
//           console.log('비번틀림');
//           return null
//         }
//         return user
//       }
//     })
//   ],

//   session: {
//     strategy: 'jwt',
//     // 로그인 유지 기간
//     maxAge: 30 * 24 * 60 * 60 //30일
//   },

//   callbacks: {
//     // jwt 만들 때 실행되는 코드
//     // user 변수는 db의 유저정보담겨있고 token.user에 뭐 저장하면 jwt에 들어감
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.user = {};
//         token.user.name = user.name
//         token.user.email = user.email
//       }
//       return token;
//     },
//     // 유저 세션이 조회될 떄마다 실행되는 코드
//     session: async ({ session, token }) => {
//       session.user = token.user;  
//       return session;
//     },
//   },

//   // adapter 라인 제거
//   secret: 'qwer1234'  
// };

// export default NextAuth(authOptions);