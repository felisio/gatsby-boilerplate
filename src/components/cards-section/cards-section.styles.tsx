import styled from 'styled-components';
import { mediaQuery } from '../../styles/mediaQuery';

const StyledCardsSection = styled.div`
    display: block;
    padding: 7rem 0 10rem 0;
`;

const StyledCardsSectionHeader = styled.div<{ hasIcon: boolean }>`
    .strapline {
        padding: 0;
        margin: 0;
        font-size: 1.4rem;
        font-weight: normal;
        line-height: 1.57;
        color: var(--lynch);
        text-align: center;
        letter-spacing: normal;
    }

    .header-title {
        display: flex;
        justify-content: center;

        .title {
            justify-content: center;
            max-width: 200px;

            ${mediaQuery.upSm} {
                max-width: 100%;
            }
        }

        .icon {
            margin-right: 1.6rem;
        }
    }

    h2 {
        margin: 0;
        font-size: 3.2rem;
        font-weight: normal;
        line-height: 1.31;
        color: var(--fiord);
        text-align: ${props => (props.hasIcon ? 'left' : 'center')};
        letter-spacing: 0.3px;
        overflow-wrap: break-word;

        &.bold {
            font-weight: 500;
            line-height: 1.25;
            letter-spacing: 0.2px;
        }
    }

    .gatsby-image-wrapper {
        z-index: -1;
        flex: 0 0 4rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const StyledCardsSectionGrid = styled.div`
    --gap: 2rem;

    display: flex;
    flex-wrap: wrap;
    gap: var(--gap);
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 3rem;

    /* Safari issue to support gap */

    @media not all and (min-resolution: 0.001dpcm) {
        @supports (-webkit-appearance: none) {
            > button,
            > a,
            > div {
                margin-bottom: var(--gap);
                margin-left: var(--gap);
                ${mediaQuery.upLg} {
                    flex: 0 0 calc(33.33% - 3rem);
                }
            }
        }
    }

    ${mediaQuery.upMd} {
        padding-top: 5rem;
        --gap: 3rem;
    }
`;

const StyledCardsSectionCardLoading = styled.div`
    --animation-base-color: #e2e2e2;
    --animation-load-color: rgba(238, 238, 238, 0.67);

    @media (max-width: 28.8rem) {
        width: 100%;
    }

    display: flex;
    width: 28.8rem;
    height: 31.4rem;
    border: solid 1px var(--athens-grey);
    animation: CardsSectionCardLoading 0.7s infinite alternate ease-in-out;
    ${mediaQuery.upSm} {
        width: 35.9rem;
        height: 38.4rem;
    }

    @keyframes CardsSectionCardLoading {
        from {
            background: var(--animation-base-color);
        }

        to {
            background: var(--animation-load-color);
        }
    }
`;

const StyledCardsSectionPaginator = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 4rem;

    ${mediaQuery.upSm} {
        padding-top: 5rem;
    }
`;

export {
    StyledCardsSection,
    StyledCardsSectionGrid,
    StyledCardsSectionHeader,
    StyledCardsSectionPaginator,
    StyledCardsSectionCardLoading,
};
