const express = require("express"); // express 임포트
const path = require("path"); // 파일 경로 모듈
require("dotenv").config({ path: path.join(__dirname, "./env/server.env") }); //dotenv : env 로드 모듈 server.env 환경변수 가져오기
require("dotenv").config();

const logger = require("./winston");
const morgan = require("morgan");

const app = express(); // app생성

const combined =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';
// 기존 combined 포멧에서 timestamp만 제거
const morganFormat = process.env.NODE_ENV !== "production" ? "dev" : combined; // NOTE: morgan 출력 형태 server.env에서 NODE_ENV 설정 production : 배포 dev : 개발
console.log(morganFormat);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(morganFormat, { stream: logger.stream })); // morgan 로그 설정

const router = require("./router/route");

app.use("/capstone", router);

// 몽구스 연결
const { mongoConnection } = require("./database/mongodbConnection");
mongoConnection();

app.listen(process.env.PORT, () => console.log(`${process.env.PORT}포트입니다.`));
