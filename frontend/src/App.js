import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      
      <Header/>
      <main className='py-4'>
        <Container>
          <Outlet/>
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
