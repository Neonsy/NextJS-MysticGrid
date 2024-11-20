import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='bg-header/95 sticky top-0'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
