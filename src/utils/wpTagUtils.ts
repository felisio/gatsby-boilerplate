import { WpTag } from '../../graphql-types';
import { BreadcrumbPage } from '../components/breadcrumb/breadcrumb';

export function getTagBreadcrumbData(tag: WpTag) {
    const data = Array<BreadcrumbPage>();
    data.push({ title: 'Home', link: '/' });
    data.push({ title: tag.name ?? '', link: tag.uri ?? '' });
    return data;
}
