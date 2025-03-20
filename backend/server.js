const express = require("express"); // Express 불러오기
const app = express(); // Express 애플리케이션 생성

// 기본 라우트 (서버 테스트용)
app.get("/", (req, res) => {
    res.send("서버가 정상적으로 실행되고 있습니다!");
});

// 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
