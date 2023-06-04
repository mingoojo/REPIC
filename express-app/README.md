## 서버 실행하기

```shell
cd express-app

npm install

npx nodemon app.ts
```

### 추가 dependency

- dotenv : 환경변수를 관리해줄 수 있는 라이브러리
- cookie-parser : {
  npm install cookie-parser
  npm i --save-dev @types/cookie-parser
}
ts환경에서 사용하기 위해 설치해야 하는 모듈

- jsonwebtoken : {
  npm intsall jsonwebtoken
  npm i --save-dev @types/jsonwebtoken
}

- get secret key by random :
{
  require('crypto').randomBytes(64).toString('hex')
}