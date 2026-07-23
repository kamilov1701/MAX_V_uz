// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // import Navbar from "./Components/Navbar";
// // // import Footer from "./Components/Footer";

// // // import Home from "./Pages/Home";
// // // import About from "./Pages/About";
// // // import Contact from "./Pages/Contact";
// // // import Projects from "./Pages/Projects";

// // function App() {
// //   return (
// //     <BrowserRouter>

// //       <Navbar />

// //       <Routes>
// //         {/* <Route path="/" element={<Home />} /> */}
// //         {/* <Route path="/about" element={<About />} /> */}
// //         {/* <Route path="/projects" element={<Projects />} /> */}
// //         {/* <Route path="/contact" element={<Contact />} /> */}
// //       </Routes>

// //       {/* <Footer /> */}

// //     </BrowserRouter>
// //   );
// // }

// // export default App;









// import { BrowserRouter } from "react-router-dom";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <h1>Hello Router</h1>
//     </BrowserRouter>
//   );
// }
























import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;