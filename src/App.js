import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Company from './components/Company';
// import Contact from './components/Contact';
import Header from './components/portfolioHeader';
import Footer from './components/portfolioFooter';

function App() {
  return (


    <div className="bg-gradient-to-b from-gray-900 via-red-800 to-black min-h-screen">
      <Header className='sticky top-0 z-50' />
      <div className="flex-grow overflow-y-auto " style={{ maxHeight: 'calc(100vh - 130px)' }}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer className="sticky bottom-0" />

    </div>

  );
}

export default App;
