import renderer from 'react-test-renderer';
import React from 'react';
import RoundAvatar, { RoundAvatarProps } from './round-avatar';
import { getMockAvatar } from '../../utils/wpMockUtils';

const createTestProps = (props: RoundAvatarProps) => ({
    ...props,
});

test('should verify RoundAvatar Component props', () => {
    const avatarProps = createTestProps({ avatar: getMockAvatar(), alt: 'author-avatar' });
    const tree = renderer.create(<RoundAvatar {...avatarProps} />);

    expect(tree).toMatchSnapshot();
});
