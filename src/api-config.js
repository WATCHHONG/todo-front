let backendHost; //백엔드 호스트 주소 결정

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost") {   //로컬로 접속시 연결 설정
  backendHost = "http://localhost:8080";
}else {                                    // 로컬이 아닌 경우에 연결 설정
  backendHost = "https://dev.watchhong.kro.kr";
}

export const API_BASE_URL = `${backendHost}`;