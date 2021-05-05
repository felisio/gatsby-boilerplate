import React from 'react';
import { Helmet } from 'react-helmet';
import apercuPro from '../assets/fonts/ApercuPro.otf';
import apercuMonoPro from '../assets/fonts/ApercuPro-Mono.otf';
import apercuRegularItalicPro from '../assets/fonts/ApercuPro-Italic.otf';
import apercuBoldPro from '../assets/fonts/ApercuPro-Bold.otf';
import apercuBoldItalicPro from '../assets/fonts/ApercuPro-BoldItalic.otf';
import apercuMediumPro from '../assets/fonts/ApercuPro-Medium.otf';
import apercuMediumItalicPro from '../assets/fonts/ApercuPro-MediumItalic.otf';
import caladeaRegular from '../assets/fonts/Caladea-Regular.ttf';
import caladeaItalic from '../assets/fonts/Caladea-Italic.ttf';
import caladeaBold from '../assets/fonts/Caladea-Bold.ttf';
import caladeaBoldItalic from '../assets/fonts/Caladea-BoldItalic.ttf';
import domineRegular from '../assets/fonts/Domine-Regular.ttf';

export default function TypographyHelmet() {
    return (
        <Helmet>
            <style type="text/css">
                {`
          @font-face {
            font-family: 'ApercuRegularPro';
            src: url(${apercuPro});
          }
          @font-face {
            font-family: 'ApercuMonoPro';
            src: url(${apercuMonoPro});
          }
          @font-face {
            font-family: 'ApercuRegularItalicPro';
            src: url(${apercuRegularItalicPro});
          }
          @font-face {
            font-family: 'ApercuBoldPro';
            src: url(${apercuBoldPro});
          }
          @font-face {
            font-family: 'ApercuBoldItalicPro';
            src: url(${apercuBoldItalicPro});
          }
          @font-face {
            font-family: 'ApercuMediumPro';
            src: url(${apercuMediumPro});
          }
          @font-face {
            font-family: 'ApercuMediumItalicPro';
            src: url(${apercuMediumItalicPro});
          }
          @font-face {
            font-family: 'CaladeaRegular';
            src: url(${caladeaRegular});
          }
          @font-face {
            font-family: 'CaladeaItalic';
            src: url(${caladeaItalic});
          }
          @font-face {
            font-family: 'CaladeaBold';
            src: url(${caladeaBold});
          }
          @font-face {
            font-family: 'CaladeaBoldItalic';
            src: url(${caladeaBoldItalic});
          }
          @font-face {
            font-family: 'DomineRegular';
            src: url(${domineRegular});
          }
        `}
            </style>
        </Helmet>
    );
}
