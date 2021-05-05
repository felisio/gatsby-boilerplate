import { css } from 'styled-components';

export const lineClamp = (numberOfLines: number) =>
    css`
        @supports (-webkit-line-clamp: ${numberOfLines}) {
            display: -webkit-box;
            -webkit-line-clamp: ${numberOfLines};
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    `;
