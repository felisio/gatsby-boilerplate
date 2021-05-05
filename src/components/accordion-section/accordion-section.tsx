import React, { ReactNode, useRef } from 'react';
import { ComponentState } from '../../utils/componentState';
import Icon from '../icon/icon';
import { GlobalIconName } from '../icon/iconData';
import { StyledAccordionSection } from './accordion-section.styles';

export type AccordionSectionProps = {
    title: string;
    content: ReactNode;
    isOpen: boolean;
    onSectionOpen: Function;
    onSectionClose: Function;
};

export default function AccordionSection({
    title,
    content,
    isOpen,
    onSectionOpen,
    onSectionClose,
}: AccordionSectionProps) {
    const contentDiv = useRef<HTMLDivElement>(null);
    function toggleAccordion() {
        if (isOpen) {
            onSectionClose();
        } else {
            onSectionOpen();
        }
    }
    const contentHeight = contentDiv.current?.getBoundingClientRect().height ?? 0;
    return (
        <StyledAccordionSection>
            <button className="header" type="button" data-testid="accordion-button" onClick={toggleAccordion}>
                <span className="title">{title.toUpperCase()}</span>
                <div className={isOpen ? 'icon hide' : 'icon show'}>
                    <Icon iconName={GlobalIconName.plus12} state={ComponentState.normal} />
                </div>
                <div className={isOpen ? 'icon show' : 'icon hide'}>
                    <Icon iconName={GlobalIconName.minus12} state={ComponentState.normal} />
                </div>
            </button>
            <div
                className={isOpen ? 'content-container open' : 'content-container closed'}
                style={{ maxHeight: isOpen ? contentHeight : '0' }}
                data-testid="content-container"
            >
                <div ref={contentDiv}>{content}</div>
            </div>
        </StyledAccordionSection>
    );
}
