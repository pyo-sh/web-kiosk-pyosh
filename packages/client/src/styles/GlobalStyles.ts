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
    }
`;
