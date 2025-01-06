import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='sticky top-0 z-50 border-b border-white/30 bg-header/60 py-6 shadow-lg backdrop-blur-lg'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
