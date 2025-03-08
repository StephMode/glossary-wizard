import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  font-synthesis:none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// basic global CSS reset for better alignment of box elements
* {
  box-sizing: border-box;
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 0.4rem;
}

// global hx reset due to prevent default margins from user agent stylesheets to collide with custom styling
h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

// global p reset due to prevent default margins from user agent stylesheets to collide with custom styling
p {
  margin: 0;
}


a {
  text-decoration:none;
  color: black;
}

// global CSS reset for diffrent UI elements that come with deeply embedded standard stylings
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  cursor: pointer;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  font-size: var(--button-font-size-main);
  padding: 0;
  border: none;
  outline: none;
  color: inherit;
  background: none;
}
`;
