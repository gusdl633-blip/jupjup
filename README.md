# 문장줍기 MVP

Pinterest 글귀 이미지를 수집해 OCR로 텍스트화하고, 랜덤으로 보여주는 앱 뼈대입니다.

## 지금 포함된 것
- 랜딩/홈 화면
- Pinterest URL 입력 UI
- 랜덤 문장 보기
- 카테고리 필터
- 수집 문장 masonry 스타일 리스트
- 정적 배포 가능 파일

## 배포 방법
Netlify, Vercel, Cloudflare Pages에 이 폴더를 그대로 업로드하면 됩니다.

## 실제 수집 기능 연결 구조
프론트에서 `/api/collect`로 URL을 보내고, 서버에서 아래 순서로 처리합니다.

1. Playwright로 Pinterest URL 접속
2. 자동 스크롤
3. img src 수집
4. 이미지 OCR
5. OpenAI API로 카테고리 분류
6. Supabase 저장
7. 프론트에서 랜덤 노출

## 주의
Pinterest 이미지 대량 수집/재배포는 저작권 및 약관 이슈가 있을 수 있습니다. 개인 보관/텍스트 추출 중심으로 설계하는 편이 안전합니다.
