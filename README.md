# 🧡TEMU🧡
### AT SOPT 데스크탑 웹 2조 테무

![테무 리디자인](https://github.com/user-attachments/assets/f356b08c-7d55-489b-9afe-50392ceb7aae)
![테무_Keyfindings   Insights](https://github.com/user-attachments/assets/83be2f2b-6ed0-4b45-bcb3-8535cca4e9e4)

<br/>


### 👥 OUR TEAM

| <img src="https://github.com/user-attachments/assets/ab5706ab-4290-4ba5-808b-6b2cbde62746" width="200" alt="프로필사진"> | <img src="https://github.com/user-attachments/assets/d74ea5e1-4d8c-4632-a749-27e865e16e6e" width="200" alt="프로필사진">  | <img src="https://github.com/user-attachments/assets/218e1072-8d0e-4732-ab99-82deaf9b64bc" width="200" alt="프로필사진"> |  <img src="https://github.com/user-attachments/assets/4e815ecc-1cd7-430b-a9b9-13033d657ff8" width="200" alt="프로필사진">  |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------:
|                            <div align = "center"><b>박희선</b></div>                            |                            <div align = "center"><b>엄지우</b></div>                            |                            <div align = "center"><b>장정훈</b></div>                            |                             <div align = "center"><b>권동희</b></div>
|                            [@heesunee](https://github.com/heesunee)                            |                [@1jiwoo27](https://github.com/1jiwoo27)                                 |                       [@jeonghoon11](https://github.com/jeonghoon11)                        |                        [@hamxxn](https://github.com/hamxxn)   | 

<br/>
<br/>

### 🛠 기술스택

| 역할                 | 종류                                                                                                                                                                                                                                                                                                                            |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Library              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                                                                                                              |
| Programming Language | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                                                                                                               |
| Styling              | ![Vanilla Extract CSS](https://img.shields.io/badge/Vanilla%20Extract%20CSS-FFDB4F?style=for-the-badge&logo=Vanilla%20Extract&logoColor=black)                                                                                                                                                                                        |
| Data Fetching        | ![Tanstack Query](https://img.shields.io/badge/tanstackquery-FF4154.svg?style=for-the-badge&logo=tanstackquery&logoColor=white)   |                                                                                                                                                                                                              |
| Formatting           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E) |
| Package Manager      |  ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)             |
| Version Control      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)                                                                                                                |
| Deployment           | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                                                                                                                                           |


<br/>

### 📄 컨벤션 및 브랜치 전략

<h3>Git Branch</h3>

```
- main (배포용)
- develop (개발용)
- feat/#issue/기능명 (작업용)
```

<h3>Commit Convention</h3>

Commit Message 👉 [기능 키워드] 커밋 내용</br>

```
feat : 새로운 기능 추가
fix : 버그 수정
chore : 빌드 업무, 패키지 매니저, 라이브러리, dependencies 설정
docs : 문서 수정 - ex) [README.md](http://readme.md/)
style : 기능 수정 없는 코드 스타일 변경
refactor : 코드 리팩터링
test : 테스트 코드, 리펙토링 테스트 코드 추가
ci : ci 설정 파일 수정
init: 초기 세팅
code review: 코드 리뷰 반영
```

<h3>폴더 구조</h3>

```
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src
      |-- 📁 assets
      |-- 📁 api
      |-- 📁 pages
      |      |--📁APage
      |      |     |--📁components
      |      |     |--📁constants
      |      |     |--📁utils
      |      |     |--📁types
      |      |     |-APage.tsx
      |      |     |-APage.css.ts
      |      |--📁BPage
      |      |--📁CPage
      |-- 📁 router
      |-- 📁 shared
      |      |--📁components
      |      |--📁styles
      |      |--📁utils
      |      |--📁types
      |      |--📁constants
      |-- App.tsx
      |-- main.tsx
|-- .eslintrc.json
|-- .prettierrc
```

## 📦 초기세팅 역할 분배

| 구분                                | 담당자 |
| --------------------------------- | --- |
| TanStackQuery 세팅                          | 박희선 |
| path alias | 박희선 |
| ci-cd, vercel 배포| 박희선 |
| 협업 전반 설정 , Error, Loading               | 박희선 |
| VITE svg                  | 엄지우 |
| 스타일 커스텀 (theme.css)              | 엄지우 |
| router 설정                       | 권동희 |
| global 설정                       | 권동희 |
| Eslint 설정                    | 장정훈  |
| Prettier 설정                    | 장정훈  |


## 📦 뷰 & 컴포넌트 역할 분배

| 구분                                | 담당자 |
| --------------------------------- | --- |
| 헤더 & 푸터                           | 박희선 |
| 메인 페이지 (번쩍특가 상단까지 - 아이템 네비게이션 포함) | 박희선 |
| 제품 상세정보 (상세보기탭/테이블/이미지뷰) | 박희선 |
| 메인 페이지 (그 외 나머지)                  | 권동희 |
| 검색 & 검색 결과 페이지                    | 엄지우 |
| 제품 상세정보 (구성 포함 전체)                | 장정훈 |
| 버튼 공통 컴포넌트                        | 장정훈 |
| 카드 공통 컴포넌트                        | 권동희 |
| Skeleton                       | 권동희 |
| 텍스트, 헤드 컴포넌트                      | 엄지우 |
| Divider 컴포넌트                      | 박희선 |

---

## 🔧 API 역할 분배

| 기능        | 담당자 |
| --------- | --- |
| 메인 페이지 조회 | 권동희 |
| 특가 상품 조회  | 권동희 |
| 검색 기능     | 엄지우 |
| 제품 상세 조회  | 박희선 |
| 제품 리뷰 조회  | 장정훈 |
