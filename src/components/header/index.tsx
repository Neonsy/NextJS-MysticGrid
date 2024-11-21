import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='sticky top-0 z-10 h-header bg-header/75 backdrop-blur-sm'>
                <Container>
                    <Nav />
                </Container>
        </header>
    );
}
