import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        template: 'Mystic Grid | %s',
        default: 'Mystic Grid | Placeholder',
        absolute: 'Mystic Grid | Home',
    },
};

export default function Home() {
    return (
        <>
            <h1>MysticGrid</h1>
            <p>W.I.P</p>
        </>
    );
}
