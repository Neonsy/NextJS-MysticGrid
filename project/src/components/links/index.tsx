import { NavLinkType, ExternalNavLinkType } from '@/types/navLink';
import ExternalLinks from '@/components/links/external';
import InternalLinks from '@/components/links/internal';

type Props = {
    links: NavLinkType[];
    className?: string;
};

export default function Links({ links, className }: Props) {
    return (
        <ul className={className}>
            {links.map((link) => (
                <li key={link.text}>
                    {(link as ExternalNavLinkType).iconName ? <ExternalLinks link={link as ExternalNavLinkType} /> : <InternalLinks link={link} />}
                </li>
            ))}
        </ul>
    );
}
