import React, { useLayoutEffect, useState } from 'react';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    EmailShareButton,
    WhatsappShareButton,
} from 'react-share';
import { ComponentOrientation } from '../../utils/componentOrientation';
import { ComponentState } from '../../utils/componentState';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import Tooltip, { ArrowPosition } from '../tooltip/tooltip';
import { StyledShare } from './share.styles';

export type ShareProps = {
    orientation: ComponentOrientation;
    title: string;
    url: string;
    emailIntro: string;
    twitterHandle: string;
    hasTopBanner?: boolean;
};

export default function Share({
    orientation,
    title,
    url,
    emailIntro,
    twitterHandle,
    hasTopBanner = false,
}: ShareProps) {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const tooltipArrowPosition =
        orientation === ComponentOrientation.vertical ? ArrowPosition.top : ArrowPosition.bottom;
    const [tooltipStatus, updateTooltipStatus] = React.useState({ visible: false, success: false });
    const [facebookIconIsHovered, setFacebookIconIsHovered] = React.useState(false);
    const facebookIconState = facebookIconIsHovered ? ComponentState.hover : ComponentState.normal;
    const [twitterIconIsHovered, setTwitterIconIsHovered] = React.useState(false);
    const twitterIconState = twitterIconIsHovered ? ComponentState.hover : ComponentState.normal;
    const [linkedinIconIsHovered, setLinkedinIconIsHovered] = React.useState(false);
    const linkedinIconState = linkedinIconIsHovered ? ComponentState.hover : ComponentState.normal;
    const [emailIconIsHovered, setEmailIIconsHovered] = React.useState(false);
    const emailIconState = emailIconIsHovered ? ComponentState.hover : ComponentState.normal;
    const [whatsAppIconIsHovered, setWhatsAppIconIsHovered] = React.useState(false);
    const whatsAppIconState = whatsAppIconIsHovered ? ComponentState.hover : ComponentState.normal;
    const [copyIconIsHovered, setCopyIconIsHovered] = React.useState(false);
    const copyIconState = copyIconIsHovered ? ComponentState.hover : ComponentState.normal;

    useLayoutEffect(() => {
        function updateWindowSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('scroll', updateWindowSize);
        updateWindowSize();
        return () => {
            window.removeEventListener('scroll', updateWindowSize);
        };
    }, [orientation]);

    function handleCopyButtonClick(link: string) {
        navigator.clipboard.writeText(link).then(
            () => {
                updateTooltipStatus({ visible: true, success: true });
                setTimeout(() => updateTooltipStatus({ visible: false, success: false }), 800);
            },
            () => {
                updateTooltipStatus({ visible: true, success: false });
                setTimeout(() => updateTooltipStatus({ visible: false, success: false }), 800);
            },
        );
    }

    return (
        <StyledShare
            className={orientation === ComponentOrientation.horizontal ? 'horizontal' : 'vertical'}
            hasTopBanner={hasTopBanner}
        >
            <p className="title">SHARE</p>
            <div className="share-icons">
                <FacebookShareButton
                    url={url}
                    onMouseEnter={() => setFacebookIconIsHovered(true)}
                    onMouseLeave={() => setFacebookIconIsHovered(false)}
                >
                    <Icon iconName={GlobalIconName.facebook24} state={facebookIconState} />
                </FacebookShareButton>
                <TwitterShareButton
                    title={title}
                    url={url}
                    via={twitterHandle}
                    onMouseEnter={() => setTwitterIconIsHovered(true)}
                    onMouseLeave={() => setTwitterIconIsHovered(false)}
                >
                    <Icon iconName={GlobalIconName.twitter24} state={twitterIconState} />
                </TwitterShareButton>
                <WhatsappShareButton
                    windowWidth={windowSize.width}
                    windowHeight={windowSize.height}
                    url={url}
                    onMouseEnter={() => setWhatsAppIconIsHovered(true)}
                    onMouseLeave={() => setWhatsAppIconIsHovered(false)}
                >
                    <Icon iconName={GlobalIconName.whatsApp24} state={whatsAppIconState} />
                </WhatsappShareButton>
                <LinkedinShareButton
                    title={title}
                    url={url}
                    onMouseEnter={() => setLinkedinIconIsHovered(true)}
                    onMouseLeave={() => setLinkedinIconIsHovered(false)}
                >
                    <Icon iconName={GlobalIconName.linkedin24} state={linkedinIconState} />
                </LinkedinShareButton>
                <EmailShareButton
                    subject={title}
                    body={`${emailIntro}\n\n${title}\n\n`}
                    url={url}
                    onMouseEnter={() => setEmailIIconsHovered(true)}
                    onMouseLeave={() => setEmailIIconsHovered(false)}
                >
                    <Icon iconName={GlobalIconName.mail24} state={emailIconState} />
                </EmailShareButton>
                <Tooltip
                    isVisible={tooltipStatus.visible}
                    message={tooltipStatus.success ? 'Copied to clipboard' : 'Copy failed'}
                    iconName={tooltipStatus.success ? GlobalIconName.check16 : GlobalIconName.close16}
                    arrowPosition={tooltipArrowPosition}
                >
                    <button
                        className="copy-link"
                        type="button"
                        onClick={() => handleCopyButtonClick(url)}
                        onMouseEnter={() => setCopyIconIsHovered(true)}
                        onMouseLeave={() => setCopyIconIsHovered(false)}
                    >
                        <Icon iconName={GlobalIconName.link24} state={copyIconState} />
                    </button>
                </Tooltip>
            </div>
        </StyledShare>
    );
}
