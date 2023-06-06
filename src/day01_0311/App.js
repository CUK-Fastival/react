import React from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './routes/Home';
import Artist from './routes/Artist';
import Schedule from './routes/Schedule';
import Board from './routes/Board';
import Login from './routes/Login';
import Select from './routes/Select';
import Signup from './routes/Signup';
import Agree from './routes/Agree';
import Notice from './routes/Notice';
import Success from './routes/Success';
import FindID from './routes/FindID';
import FindPW from './routes/FindPW';
import Rap from './routes/Rap';
import WriteBoard from './routes/WriteBoard';
import Content from './routes/Content';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/artist' element={<Artist />}/>
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/board' element={<Board/>} />
            <Route path='/notice' element={<Notice />} />
            <Route path='/login' element={<Login />} />
            <Route path='/select' element={<Select />}/>
            <Route path='/agree' element={<Agree />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/success' element={<Success />}/>
            <Route path='/find_id' element={<FindID/>}/>
            <Route path='/find_pw' element={<FindPW/>}/>
            <Route path='/rap' element={<Rap/>} />
            <Route path='/write' element={<WriteBoard/>} />
            <Route path='/content' element={<Content/>} />
          </Routes>
          <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;