# 줍줍 MVP

Pinterest 글귀 이미지를 텍스트가 아니라 **이미지 원본 그대로 랜덤 노출**하는 정적 프론트 뼈대입니다.

## 포함된 기능

- Pinterest URL 입력 UI
- 랜덤 이미지 보기
- Pinterest 스타일 masonry 이미지 피드
- 이미지 확대 모달
- OCR 텍스트 접기/펼치기 영역
- 카테고리 필터
- 정적 배포 가능

## 배포

Vercel / Netlify / Cloudflare Pages에 그대로 업로드하면 됩니다.

- Framework Preset: Other
- Root Directory: ./
- Build Command: 비움
- Output Directory: 비움

## 실제 수집 연결

`server-collect-example.js`를 서버 API로 분리해서 연결하세요.
프론트에서는 `/api/collect?url=...` 형태로 호출하면 됩니다.

저장 DB 권장 구조:

```sql
id
image_url
ocr_text
category
source_url
created_at
```
