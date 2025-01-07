import type { IconType } from 'react-icons';
import Link from 'next/link';

interface TechnologyCardProps {
    name: string;
    icon: IconType;
    href: string;
    color: string;
}

export default function TechnologyCard({ name, icon: Icon, href, color }: TechnologyCardProps) {
    return (
        <Link
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={`group relative flex items-center gap-2 rounded-lg border border-tech-${color} border-opacity-20 p-4 backdrop-blur-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95`}>
            <Icon
                className={`h-5 w-5 text-tech-${color} transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:animate-pulse`}
            />
            <span className={`text-tech-${color} transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:font-medium`}>
                {name}
            </span>

            <div
                className={`absolute inset-0 -z-10 rounded-lg bg-tech-${color} opacity-0 blur transition-opacity duration-300 group-hover:opacity-5`}
            />
        </Link>
    );
}
