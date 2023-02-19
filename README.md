# 🎵 Chord Progression Finder

<div align="center">
<img src="https://www.musictheoryacademy.com/wp-content/uploads/2013/11/Chord-Progressions-Title-Sheet-Music.png" />
  <p>코드를 입력하시면 코드 진행을 알려드립니다 :)</p>
  <i>제작 중 (2023.2 ~ )</i>
</div>

## 🛠️ Development Stack

<table border="1" align="center">
  <th align="center">기술스택</th>
  <th align="center">선정이유</th>
  <tr>
    <td><img src="https://techstack-generator.vercel.app/ts-icon.svg" width="25px" alt="typescript_icon" /> TypeScript</td>
    <td>Type 안정성을 보장하여 마음이 매우 편-안함</td>
  </tr>
  <tr>
    <td><img src="https://techstack-generator.vercel.app/react-icon.svg" width="15px" alt="react_icon" /> React</td>
    <td>Backend가 없어서 굳이 Next.js 쓸 이유 없음</td>
  </tr>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" width="20px" alt="tailwindcss_icon" /> TailwindCSS</td>
    <td>페이지 수가 적어서 코드가 그리 더러워지진 않음</td>
  </tr>
  <tr>
    <td><img src="https://vitejs.dev/logo-with-shadow.png" width="15px" alt="vite_icon" /> Vite</td>
    <td>Webpack 상위호환 (번들링)</td>
  </tr>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/22247014?s=280&v=4" width="15px" alt="yarn_icon" /> Yarn</td>
    <td>NPM 상위호환 (패키지 매니징)</td>
  </tr>
</table>

- [no-chris/chord-symbol](https://github.com/no-chris/chord-symbol) v4.0.0

## 🕑 Project Timeline

- `0212` 프로젝트 스캐폴딩
- `0214` 기본 클래스 제작 (Sheet, Phrase, Measure, Beat 등)
- `0215` 다크 모드 및 스위치 UI 제작
- `0216` 4/8/16마디로 변경 가능하도록 Radio 버튼 제작
- `0217` 로마자 코드(Numeric Chord) 띄우도록
- `0218` 원하는 방식으로 Numeric Chord를 얻기 위해 chord-symbol 패키지 patch 시작

## 📕 References

https://medium.com/sjk5766/react-%EB%B0%B0%EC%97%B4%EC%9D%98-index%EB%A5%BC-key%EB%A1%9C-%EC%93%B0%EB%A9%B4-%EC%95%88%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-3ce48b3a18fb

그런데 inputArr의 경우에는 개수 고정이므로 상관 없다.

https://spicycookie.me/React/managedata/

배열을 다루지 말고 그걸 또 컴포넌트로 쪼개라.

https://medium.com/front-end-weekly/build-a-css-only-toggle-switch-using-tailwindcss-d2739882934

switch UI 만드는 법

https://23life.tistory.com/151

patch-package 사용하기
