import { NavLinkType, ExternalNavLinkType } from '@/types/navLink';
import ExternalLinks from '@/components/links/ExternalLinks';
import InternalLinks from '@/components/links/InternalLinks';

type Links = {
    links: NavLinkType[];
    className?: string;
};

export default function Links({ links, className }: Links) {
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
