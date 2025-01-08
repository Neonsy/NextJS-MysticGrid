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
            className={`group relative flex items-center justify-center rounded-lg border ~gap-2/4 border-tech-${color} bg-tech-${color} bg-opacity-5 backdrop-blur-lg transition-all duration-300 ease-in-out ~p-3/6 hover:scale-105 hover:shadow-lg active:scale-95`}>
            <Icon
                className={`~text-3xl/4xl text-tech-${color} transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:animate-pulse`}
            />
            <span
                className={`~text-xl/4xl text-tech-${color} transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:font-medium`}>
                {name}
            </span>

            <div
                className={`absolute inset-0 -z-10 rounded-lg bg-tech-${color} opacity-0 blur transition-opacity duration-300 group-hover:opacity-5`}
            />
        </Link>
    );
}
