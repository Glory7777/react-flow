import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        height: 100%;
    }
    body {
        display: flex;
        align-items: flex-start;

        overflow-x: hidden;

        margin: 0;

        //background-color: #262626;
        min-height: 100vh;
    }

    //svg {
    //    fill: $color-icon;
    //    width: 25px;
    //    height: 25px;
    //}

    body > div#root {
        min-height: 100%;
        min-width: 100%;
    }

    /* 스크롤바의 폭 너비 */
    -webkit-scrollbar {
        width: 10px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background: rgba(220, 20, 60); /* 스크롤바 색상 */
        border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    .scrollbar::-webkit-scrollbar-track {
        background: rgba(220, 20, 60, .1);  /*스크롤바 뒷 배경 색상*/
    }
`

export default GlobalStyle