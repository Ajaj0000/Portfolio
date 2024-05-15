import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'animate.css';
import { Main } from './main/main';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
