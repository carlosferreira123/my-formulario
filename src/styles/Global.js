import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    font-family: 'popins', sans-serif;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
}

#root {
    width: 100vw;
    height: 100vh;
}

#root {
    width: 100%;
}
`;
export default Global;
