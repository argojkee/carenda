import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

//!ВЕЧНАЯ ПРОБЛЕМА СО ШРИФТАМИ
//* Пробовал разные ресурсы конвертирования - всё время одна и та же ошибка на всех проектах
/* Failed to decode downloaded font: http://localhost:3000/Manrope-Medium.woff2
localhost/:1 OTS parsing error: invalid sfntVersion: 1008813135
localhost/:1 Failed to decode downloaded font: http://localhost:3000/Manrope-Medium.woff
localhost/:1 OTS parsing error: invalid sfntVersion: 1008813135 */
/* @font-face {
  font-family: "Montserrat";
  src: url("./Montserrat-SemiBold.woff2") format("woff2"),
    url("./Montserrat-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("./Manrope-Regular.woff2") format("woff2"),
    url("./Manrope-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("./Manrope-Medium.woff2") format("woff2"),
    url("./Manrope-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("./Manrope-SemiBold.woff2") format("woff2"),
    url("./Manrope-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
} */
`;
