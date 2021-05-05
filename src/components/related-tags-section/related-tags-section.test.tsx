import { render, screen } from '@testing-library/react';
import React from 'react';
import RelatedTags, { RelatedTagsSectionProps } from './related-tags-section';

const createTestProps = (props: RelatedTagsSectionProps) => ({
    ...props,
});

const controlledMockData: RelatedTagsSectionProps = {
    tags: [
        {
            id: '0',
            databaseId: 0,
            children: [{ id: '', children: [], internal: { contentDigest: '', owner: '', type: '' } }],
            internal: { owner: '', type: '', contentDigest: '' },
            name: 'yPRKi',
            uri: '#',
            link: '#',
        },
    ],
};

test('should verify RelatedTags Component props', () => {
    const props = createTestProps(controlledMockData);
    render(<RelatedTags {...props} />);

    expect(screen.getByText(props.tags[0].name!)).toBeDefined();
    expect(screen.getByText(props.tags[0].name!)).toHaveAttribute('href', props.tags[0].link!);
});
