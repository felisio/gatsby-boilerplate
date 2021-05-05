import React from 'react';
import { ComponentState } from '../../utils/componentState';
import Accordion, { AccordionSectionData } from '../accordion/accordion';
import AnchorLink from '../anchor-link/anchor-link';
import Icon from '../icon/icon';
import Iconlink from '../iconlink/iconlink';
import Logo, { LogoVariation } from '../logo/logo';
import { Logolink } from '../logolink/logolink';
import { StyledFooter } from './footer.styles';
import {
    FooterSection,
    FooterSections,
    FooterLinks,
    FooterSocialMediaIconData,
    FooterStoreIconData,
    QuanticTrademark,
    QuanticCity,
    QuanticAddress,
} from './footerData';

function footerSectionsToAccordionSectionData(sections: Array<FooterSection>): Array<AccordionSectionData> {
    return sections.map(section => {
        return {
            title: section.title,
            content: (
                <ul>
                    {section.options.map(option => {
                        return (
                            <li key={option.title}>
                                {option.icon && <Icon iconName={option.icon} state={ComponentState.normal} />}
                                <AnchorLink to={option.destination}>{option.title}</AnchorLink>
                            </li>
                        );
                    })}
                </ul>
            ),
        };
    });
}

export default function Footer() {
    const accordionSections = footerSectionsToAccordionSectionData(FooterSections);
    return (
        <StyledFooter>
            <div className="menu-mobile">
                <Accordion sections={accordionSections} defaultOpenSectionTitle={undefined} />
            </div>
            <div className="menu-desktop">
                <div className="quantic-logo-container">
                    <Logolink variation={LogoVariation.verticalColor} to="https://quantic.edu/" />
                </div>
                <div className="block-container">
                    {FooterSections.map(section => (
                        <div key={section.title} className="block">
                            <p>{section.title.toUpperCase()}</p>
                            <ul>
                                {section.options.map(option => (
                                    <li key={option.title}>
                                        {option.icon && <Icon iconName={option.icon} state={ComponentState.normal} />}
                                        <AnchorLink to={option.destination}>{option.title}</AnchorLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="empty-col" />
            </div>
            <div className="social-media">
                {FooterSocialMediaIconData.map(iconData => {
                    return <Iconlink key={iconData.iconName} {...iconData} />;
                })}
            </div>
            <div className="quantic-desktop">
                <div>
                    <p>{QuanticTrademark}</p>
                </div>
                <div>
                    <p>{QuanticCity}</p>
                </div>
                <div className="legal-links-desktop">
                    {FooterLinks.map((link, index) => {
                        return (
                            <div className="inline-link" key={link.key}>
                                <AnchorLink key={link.key} to={link.to}>
                                    {link.title}
                                </AnchorLink>
                                {index < FooterLinks.length - 1 && <span className="dot">·</span>}
                            </div>
                        );
                    })}
                </div>
            </div>
            <ul className="legal-links-mobile">
                {FooterLinks.map(link => {
                    return (
                        <li key={link.key}>
                            <AnchorLink key={link.key} to={link.to}>
                                {link.title}
                            </AnchorLink>
                        </li>
                    );
                })}
            </ul>
            <hr />
            <div className="stores">
                <div className="icon-container">
                    {FooterStoreIconData.map(iconData => {
                        return <Iconlink key={iconData.iconName} {...iconData} />;
                    })}
                </div>
            </div>
            <hr />
            <div className="quantic-mobile">
                <Logo variation={LogoVariation.verticalColor} />
                <div>
                    <p>{QuanticCity}</p>
                    <p>{QuanticTrademark}</p>
                </div>
            </div>
            <hr />
            <div className="license">
                <p>
                    Quantic School of Business and Technology is licensed by the Office of the State Superintendent of
                    Education (OSSE) in Washington, DC and{' '}
                    <span>
                        <AnchorLink to="https://quantic.edu/accreditation">accredited</AnchorLink>
                    </span>{' '}
                    by the Distance Education Accreditation Commission (DEAC). The DEAC is listed by the United States
                    Department of Education as a recognized accrediting agency and is also recognized by the Council for
                    Higher Education Accreditation (CHEA).
                </p>
                <p className="quantic-address">{QuanticAddress}</p>
            </div>
        </StyledFooter>
    );
}
