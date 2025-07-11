import { NextResponse } from "next/server";
import { getToken, encode } from "next-auth/jwt";
import axios from "axios";


export async function middleware(req) {

  //1. 유저가 보낸 JWT 가져오기
  let token = await getToken({
    req: req,
    secret: 'password1234', //.env파일을 이용합시다.
  });

  //JWT없으면 통과
  if (!token) return NextResponse.next();


  //2. 테스트용으로 8시간이 아니라 10초 후 바로 만료되게
  let now = Math.floor(Date.now() / 1000)
  
  if (now + 28800 - 10 > token.accessTokenExpires) {
    console.log('------- access token 재발급요청함');
    let newToken = await refreshAccessToken(token);
    let JWT = await encode({
      token: newToken,
      secret: 'password1234', //.env파일을 이용합시다.
    });


    //3. 발급받아온 JWT를 다시 쿠키에 저장시킴
    let response = NextResponse.next();
    response.cookies.set('next-auth.session-token', JWT, {
      path: '/',
      httpOnly: true,
    });
    return response;
  }

  return NextResponse.next();
}

async function refreshAccessToken(token) {

    //2. access token 재발급해달라고 POST요청
    let url = 'https://github.com/login/oauth/access_token'
    let params = {
      grant_type: 'refresh_token',
      refresh_token: token.refreshToken,
      client_id: '깃헙에서발급받은 ClientID',
      client_secret: '깃헙에서발급받은 Secret',
    }
    let res = await axios.post(url, null, { params : params })
    let newTokens = await res.data
    if (res.status !== 200) {
      console.log('실패', newTokens)
    }


    //3. 재발급한거 출력해보기 
    console.log('토큰 재발급한거 : ')
    console.log(newTokens)
    // access_token=ghu_8afeApnRAkzkBYDmshCKqq6uyKJunA1EScAS
    // &expires_in=28800 등

    //4. 이걸로 새로운 토큰 만들어서 return 해주기 
    let data = new URLSearchParams(newTokens);
    if (data.get('error') == null){
      return {
        ...token,
        accessToken: data.get('access_token'),
        accessTokenExpires:
          Math.round(Date.now() / 1000) + Number(data.get('expires_in')),
        refreshToken: data.get('refresh_token')
      }
    } else {
      return token
    }
} 