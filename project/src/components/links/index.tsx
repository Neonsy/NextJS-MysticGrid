import { NavLinkType, ExternalNavLinkType } from '@/types/navLink';
import ExternalLinks from '@/components/links/external';
import InternalLinks from '@/components/links/internal';

type Props = {
    links: NavLinkType[];
};

export default function Links({ links }: Props) {
    return (
        <ul className='flex items-center gap-x-9'>
            {links.map((link) => (
                <li key={link.text}>
                    {(link as ExternalNavLinkType).iconName ? <ExternalLinks link={link as ExternalNavLinkType} /> : <InternalLinks link={link} />}
                </li>
            ))}
        </ul>
    );
}
