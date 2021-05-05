import renderer from 'react-test-renderer';
import React from 'react';
import { AuthorInfo, AuthorInfoProps } from './author-info';
import { getMockAvatar } from '../../utils/wpMockUtils';

const createTestProps = (props: AuthorInfoProps) => ({
    ...props,
});

test('should verify AuthorInfo Component snapshot', () => {
    const props = createTestProps({ avatar: getMockAvatar(), name: 'Mock name' });
    const tree = renderer.create(<AuthorInfo {...props} />).toJSON();

    expect(tree).toMatchSnapshot();
});
