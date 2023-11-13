import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
      <Header/>
      <main className='py-4'>
        <Container>
          <h1>XCart</h1>
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
