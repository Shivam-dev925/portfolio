import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Company from './components/Company';
// import Contact from './components/Contact';
import Header from './components/portfolioHeader';
import Footer from './components/portfolioFooter';
import ProjectSection from './components/projects/projectSection';
import raxaLogo from './images/raxaLogo.png';
function App() {
  let projects = [{
    name: 'Raxa',
    type: 'Health care',
    imageUrl:
      raxaLogo,
    about: 'Raxa is a comprehensive healthcare software platform designed to streamline clinical workflows, enhance patient management, and improve overall healthcare delivery. It offers tools for electronic health records (EHR), patient scheduling, billing, and telemedicine, making it a versatile solution for hospitals, clinics, and healthcare providers. With a user-friendly interface and secure data management, Raxa enables healthcare teams to access patient information seamlessly, coordinate care more effectively, and optimize administrative tasks, ultimately improving patient outcomes and operational efficiency.',
    webUrl: 'https://www.raxa.com/',
    projectUrl: 'https://www.raxa.io/raxaDesktop/',
  }];
  return (


    <div className="bg-gradient-to-b from-gray-900 via-red-800 to-black h-screen">
      <Header />
      <div className=" overflow-y-auto no-scrollbar" style={{ maxHeight: 'calc(100vh - 155px)' }}>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectSection projects={projects} />} />
          {/*<Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      <Footer />

    </div>

  );
}

export default App;
