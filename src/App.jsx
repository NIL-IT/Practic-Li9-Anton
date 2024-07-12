import { Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage.jsx";
import InfoPage from "./pages/InfoPage.jsx";
import SupportPage from "./pages/SupportPage.jsx";
import About from "./pages/About.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import AddressesPages from "./pages/AddressesPages.jsx";
import FormPage from "./pages/FormPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://testingnil1.ru/assets/output.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data);
  return (
    <div className='relative w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Routes>
        <Route
          path='/'
          element={<StartPage />}
        />
        <Route
          path='/faq'
          element={<InfoPage jsonData={data} />}
        />
        <Route
          path='/support'
          element={<SupportPage />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='appointment'
          element={<AppointmentPage jsonData={data} />}
        />
        <Route
          path='appointment/:cityName'
          element={<AddressesPages jsonData={data} />}
        />
        <Route
          path={"appointment/:cityName/form"}
          element={<FormPage />}
        />
        <Route
          path={"faq/:quest"}
          element={<SearchPage jsonData={data} />}
        />
      </Routes>
    </div>
  );
}

export default App;
