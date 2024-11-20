import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='h-header sticky top-0 z-10 bg-header/95 backdrop-blur-sm'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
