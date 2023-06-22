import Header from '../components/Header'
import About from '../components/About'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <About />
        </main>
    );
}
