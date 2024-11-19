import { LuSun } from 'react-icons/lu';
import { LuMoon } from 'react-icons/lu';

export default function Nav() {
    const links = [
        { name: 'Home', href: '/' },
        { name: 'Play', href: '/play' },
        { name: 'Generate', href: '/generate' },
        { name: 'Solve', href: '/solve' },
        { name: 'Verify', href: '/verify' },
    ];

    return (
        <nav className='flex items-center justify-between py-5'>
            <h1 className='text-default text-5xl'>Mystic Grid</h1>

            <ul className='flex gap-x-5 text-lg'>
                {links.map((link) => (
                    <li key={link.name}>
                        <a href={link.href} className='text-default'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <button className='text-3xl bg-header p-2.5 rounded-full'>
                <LuSun className='text-default' />
                <LuMoon className='text-default hidden' />
            </button>
        </nav>
    );
}
