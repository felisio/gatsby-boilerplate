import { render } from '@testing-library/react';
import React from 'react';
import { Helmet } from 'react-helmet';
import Seo, { SeoProps } from './seo';

const createTestProps = (props: SeoProps) => ({
    ...props,
});

test('should verify Seo Component props', () => {
    const titleOnlySEO = {
        title: 'The Quantic Blog -',
    };

    const props = createTestProps({ seo: titleOnlySEO });
    render(<Seo {...props} />);
    const helmet = Helmet.peek();

    expect(helmet.title).toEqual(props.seo.title);
});
