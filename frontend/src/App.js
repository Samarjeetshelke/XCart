import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
      
      <Header/>
      <main className='py-4'>
        <Container>
          <h1>XCart</h1>
          <HomeScreen/>
        </Container>
        
      </main>
      <Footer/>
    </>
  );
}

export default App;
