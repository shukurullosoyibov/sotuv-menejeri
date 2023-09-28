import './App.css';
import ScaleLoader from "react-spinners/ScaleLoader";

import {

  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
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
import UserCourse from './pages/UserCourse';
import { toast } from 'react-toastify';

import LessonLayout from './layout/LessonLayout';
import LessonSrc from './components/LessonSrc';
import './style/Carusel.css';
import './style/CourseSales.css';
import './style/footer.css';
import './style/Header.css';
import './style/Lesson__src.css';
import './style/LessonLayout.css';
import './style/myCourses.css';
import './style/PaymentModal.css';
import './style/refisterSigInUp.css';
import './style/registerModal.css';
import './style/section-1.css';
import './style/section-4.css';
import './style/section-5.css';
import './style/seleact.css';
import './style/UserCourse.css';
import './style/Verify.css';
import './style/config/Responsive style/maxWidth576.css'



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
      throw error; // Xatoni o'z ichiga qabul qilib berish
    }
  };

  useEffect(() => {
    const token = getTokenFromLocalStorage();
    setTimeout(()=>{
      setLoading(false);
    },2000)
    if (token) {
      fetchData(token)
        .then((fetchedData) => {
          setData(fetchedData);
          setLoading(false); // Ma'lumotlar olinganda "loading" ni o'chirish
        })
        .catch((error) => {
          toast.error('Ma\'lumotlarni olishda xatolik yuz berdi');
         // setLoading(false); // Xatolik yuz berdi, "loading" ni o'chirish
        });
    } else {
      //setLoading(false); // Token mavjud emas, "loading" ni o'chirish
      // toast.success('Hush kelibsiz mehmon');
    }
  }, []);

  if (loading) {
    return (
      <div className="load">
        <span>
            <ScaleLoader
              color="#36d7b7"
              height={40}
              margin={5}
              radius={0}
              width={20}
            />
        </span>
        
      </div>
    );
  }

  // if (!data) {
  //   return (
  //     <div>
  //       Error loading data
        
  //     </div>
  //   );
  // }

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<SectionsLayout />}>
          <Route path='/login' element={<RegisterModal />} />
          <Route path='/autho' element={<RegisterSigup />} />
          <Route path='/resetpassword' element={<ResetPaspord />} />
        </Route>
        <Route path="/courses" element={<My__Courses />} />
        <Route path="/courses/:slug" element={<SelectesCourse />} />
        <Route path='/courses/:slug/payment' element={<PaymentModal />} />
        <Route path='/userCourse' element={<UserCourse />} />
        <Route path='/lesson/:slug' element={<LessonLayout/>} >
            <Route path='/lesson/:slug/:id' element={<LessonSrc/>} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
