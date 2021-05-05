import { createGlobalStyle } from 'styled-components';

const RootVariables = createGlobalStyle`
  :root {
    --white: #ffffff;
    --amber: #ffbf00;
    --athens-grey: #eceff3;
    --athens-grey-light: #f8f9fa;
    --big-stone: #162334;
    --black: #000000;
    --chetwode-blue: #7a9bda;
    --dodger-blue: #4c79ff;
    --dodger-blue-dark: #3c5eff;
    --dodger-blue-light: #678cff;
    --facebook: #3b5998;
    --fiord: #3c4c5f;
    --gull-grey: #9ba9bb;
    --heather: #b7c2d0;
    --indigo: #3d60cc;
    --linkedin: #0077b5;
    --lynch: #79899f;
    --malibu: #5fa9fa;
    --orange: #ff6252;
    --pastel-green: #54de6f;
    --portage: #aa7dee;
    --shuttle-grey: #59687c;
    --slate-grey: #dbdfe5;
    --pale-grey: #f1f3f5;
    --tamarillo: #a51022;
    --torea-bay: #0e37af;
    --twitter: #1da1f2;
    --wild-watermelon: #ff4d63;
    --wild-watermelon-dark: #cc3d4f;
    --wild-watermelon-light: #ff6175;
    --pink-rose: #ff687b;
    --light-plum: #a85272;
    --dusky-rose: #ba6179;
    --dusky-rose-two: #c4596d;
    /**
    * colors with transparency
    */
   --white-transparent: rgba(255, 255, 255, 0);
   --white-transparent-8: rgba(255, 255, 255, 0.08);
   --black-transparent-5: rgba(0, 0, 0, 0.05);
   --black-transparent-8: rgba(0, 0, 0, 0.08);
   --black-transparent-12: rgba(0, 0, 0, 0.12);
   --black-transparent-14: rgba(0, 0, 0, 0.14);
    /**
    * theme variables 
    * (uses Bootstrap nomenclatures)
    */
    --text-primary: var(--lynch);
    --text-secondary: var(--dodger-blue);
    --text-link: var(--dodger-blue);
    --text-link-hover: var(--dodger-blue-light);
    --bg-primary: var(--white);
  }
`;

export default RootVariables;
