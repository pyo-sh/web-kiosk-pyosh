import { injectGlobal } from "@emotion/css";

injectGlobal`
    * {
        box-sizing: border-box;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR';
        font-style: normal; 
    }
    @font-face {
        font-family: "BMDOHYEON";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }
`;
