import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  :root {
    --background: #F1EBFA;
    --background-show-case: #191C1D;
    --text-light: #EDE9F2;
    --text-nav: #CFCBD4;
    --text-dark: #373A3B;
    --secondary-color: #ff3c78;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }

	html, body {
		@media (max-width: 768px) {
			overflow-x: hidden;
		}
	}

  body, input, textarea, button, select {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  .reveal {
    position: relative;
		margin-top: 80px;
    opacity: 0;
    transition: all 1.5s ease;
  }

  .reveal.active {
		margin-top: 0;
    opacity: 1;
  }
`;
