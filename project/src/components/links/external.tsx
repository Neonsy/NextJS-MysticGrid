import Link from 'next/link';
import Icon from '@/components/icons';
import type { ExternalNavLinkType } from '@/types/navLink';

type Props = {
    link: ExternalNavLinkType;
};

export default function ExternalLinks({ link }: Props) {
    return (
        <Link href={link.href} target={link.target} rel={link.rel}>
            <Icon name={link.iconName} className='h-5 w-5' />
        </Link>
    );
}
