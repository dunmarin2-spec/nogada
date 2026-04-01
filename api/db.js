// api/db.js
// 이 코드는 Vercel 서버에서만 실행되므로 남들이 절대 볼 수 없습니다.
export default function handler(req, res) {
  const config = {
    // Vercel Settings에 저장한 'FIREBASE_API_KEY'를 가져옵니다.
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "nogada-db.firebaseapp.com",
    databaseURL: "https://nogada-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "nogada-db",
    storageBucket: "nogada-db.firebasestorage.app",
    messagingSenderId: "479523158859",
    appId: "1:479523158859:web:582940fdbc348b251306ce"
  };

  // 브라우저가 요청하면 설정값들을 안전하게 보내줍니다.
  res.status(200).json(config);
}
