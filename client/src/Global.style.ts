import { injectGlobal } from "@emotion/css";
import { COLOR } from "@constants/style";

injectGlobal`
    * {
        box-sizing: border-box;
    }

    html, body, #root{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR';
        font-style: normal; 
        overflow: hidden;
    }

    @font-face {
        font-family: "BMDOHYEON";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }

    body {
        padding: 20px;
        display: flex;
        justify-content: center;
        background-color: ${COLOR.titleActive};
    }

    #root {
        max-width: 1280px;
        flex: 1;

        display: flex;
        flex-direction: column;

        border: 1px solid black;
        border-radius: 10px;
        background-color: ${COLOR.white};
    }
`;
