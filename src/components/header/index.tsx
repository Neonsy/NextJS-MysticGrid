import Container from '@/components/container';
import Nav from '@/components/header/nav';

export default function Header() {
    return (
        <header className='bg-header/80'>
            <Container>
                <Nav />
            </Container>
        </header>
    );
}
