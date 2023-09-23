import './App.css';

import {

  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'  //v6.16.1
import RootLayout from './layout/RootLayout';

import NotFound from './pages/NotFound';
import My__Courses from './pages/My__Courses';

import SelectesCourse from './pages/SelectesCourse';
import SectionsLayout from './layout/SectionsLayout';
import RegisterModal from './components/RegisterModal';
import ResetPaspord from './components/ResetPaspord';
import RegisterSigup from './components/RegisterSigup';

import PaymentModal from './pages/PaymentModal';
import { useEffect, useState } from 'react';


function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  };
  const fetchData = async (token) => {
    try {
      const response = await fetch('https://shark.brim.uz/api/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // Ma'lumotlarni olishdan so'ng kerakli ishlarni bajaring
        return data;
      } else {
        throw new Error('Ma\'lumotlarni yuklashda xatolik yuz berdi');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

 

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    alert(token)
    if (token) {
      fetchData(token).then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <span class="loader"></span>;
  }

  if (!data) {
    // return <div>Error loading data</div>;
  }



  const routes = createBrowserRouter(
    createRoutesFromElements(

        <Route  element={<RootLayout  />}>
           
            
           
          <Route path="/" element={<SectionsLayout   />}>
                 <Route path='/login'  element={<RegisterModal    />}     />
                 <Route path='/autho'  element={<RegisterSigup />}      />
                 <Route path='/resetpassword' element={<ResetPaspord />} />
            </Route>
            <Route path="/courses" element={<My__Courses  />}  />
            <Route path="/courses/:slug" element={< SelectesCourse />}  />
            <Route path='/courses/:slug/payment' element={ <PaymentModal />} />
            
            <Route path="*" element={ <NotFound />} />
               
        </Route>
    )
)
  return (
    <div className="App">
   
     <RouterProvider router={routes} />
    </div>
  );
}

export default App;
