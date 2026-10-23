# 제자로교회 모바일웹

디자인 시안 "A · 모바일웹"을 React + Vite로 옮긴 프로젝트입니다.

## 실행

```
npm install      # 처음 한 번
npm run dev      # http://localhost:5173 (같은 와이파이의 휴대폰에서는 터미널에 뜨는 Network 주소로 접속)
npm run build    # 배포용 파일 → dist/
npm run deploy   # 빌드 후 gh-pages 브랜치에 올려 GitHub Pages 갱신
```

웹 주소: https://levelup233.github.io/church/

## 구조

- `src/data.js` — 모든 문구·예배 시간·소식. `[대괄호]` 항목을 실제 정보로 바꾸세요.
- `src/components/` — Header(햄버거 메뉴), Sections(설교·예배 순서·예배 시간·소식·사진·처음 오셨나요), Footer(오시는 길·하단 바로가기)
- `src/styles.css` — 색/글꼴 변수와 반응형 규칙 (360px 미만 / 641px 이상)
