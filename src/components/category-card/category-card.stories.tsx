import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CategoryCard, { CategoryCardProps } from './category-card';
import { getMockCardBanner } from '../../utils/wpMockUtils';

export default {
    title: 'Components/CategoryCard',
    component: CategoryCard,
} as Meta;

const Template: Story<CategoryCardProps> = args => <CategoryCard {...args} />;
const loremIpsum =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum nunc vitae massa tincidunt facilisis. Nulla ipsum velit, ornare posuere feugiat sit amet, consequat sit amet arcu. Praesent tincidunt ipsum vitae augue venenatis auctor. Donec tincidunt, mauris a cursus sagittis, nisl ipsum gravida massa, in euismod leo erat sit amet eros. Mauris erat velit, laoreet sit amet semper in, faucibus sed nulla. Suspendisse accumsan metus quis tortor venenatis, eu semper risus ornare. Nulla tempor diam at ex lobortis commodo. Sed posuere rutrum ipsum sit amet laoreet. Vivamus sagittis fermentum massa, quis rutrum massa. Maecenas consequat, eros ullamcorper tempus scelerisque, augue felis pretium urna, ac hendrerit magna odio in nisl. Sed pellentesque, urna vel vehicula vulputate, eros tortor aliquet arcu, volutpat gravida mauris ante non lectus. Cras euismod eget turpis eget blandit. Proin eu tempus tortor. Nunc tristique maximus est et condimentum.';

export const Default = Template.bind({});
Default.args = {
    fluidImage: getMockCardBanner(),
    title: 'Education',
    description: loremIpsum,
    categoryLink: '#',
};
