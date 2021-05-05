import React, { ReactNode, useState } from 'react';
import AccordionSection from '../accordion-section/accordion-section';

export type AccordionSectionData = {
    title: string;
    content: ReactNode;
};

export type AccordionProps = {
    sections: Array<AccordionSectionData>;
    defaultOpenSectionTitle?: string;
};

export default function Accordion({ sections, defaultOpenSectionTitle }: AccordionProps) {
    const [openSectionTitle, setOpenSectionTitle] = useState(defaultOpenSectionTitle);
    return (
        <div>
            {sections.map(section => {
                return (
                    <AccordionSection
                        onSectionOpen={() => setOpenSectionTitle(section.title)}
                        onSectionClose={() => setOpenSectionTitle(undefined)}
                        isOpen={section.title === openSectionTitle}
                        key={section.title}
                        title={section.title}
                        content={section.content}
                    />
                );
            })}
        </div>
    );
}
