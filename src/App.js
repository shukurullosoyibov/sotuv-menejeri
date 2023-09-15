import './App.css';
import Header from './components/Header';
import {

  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link
} from 'react-router-dom'  //v6.16.1
import RootLayout from './layout/RootLayout';
import Sections from './components/Sections';
import NotFound from './pages/NotFound';
import My__Courses from './pages/My__Courses';


function App() {
  const data = [
    {   id: 0,
    
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/f5cb/2b32/134312119200857c97bd79968ae6ccbd?Expires=1695600000&Signature=Qr6c88OrLpUmCFz8SpWZCPfZ8xUuK4f6PPsPdUqjp7JCWZ7K-Nc60WhizC900aS6dHBv44uiuxmH5q7Vzc9nHe8r5iQtq9FIJaOIG3jJWhWeJekhHi9kKDDfa039k~8AAgxkzDE7M-m9H66b6oin9XH1abXMfztVCI6X4DXUDFdUPp8Rvp0tsRBzroWAD9vT-NLeI2bfV~CxrCahL9rAhFCa9Cmt~M0bsXRU-bL4nHXEhtfmGR~ev4xizbwdjPqke7vuylxc65DEf6vNl3ItPVuZ~ej3AD1hLwVnGvJvpa8ZcAn12~zGhYTc7sfvGm8pStyvBmV0ChZXHXRqr0gWtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Sotuvlarni bosharish",
        title: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    },
    {   id: 1,
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/cfef/2d6d/83660be01b8578c2850505a83c662dab?Expires=1695600000&Signature=k0mxgIc~mVdOcls3JCQ35MUyWCs2sC86sc~u9Gg6v2ICKR3tJ5pZ9PYAZo55QoDk07jaDf1BX56lTEaZnHj9UVyLFeFnXDRoz-vFyXKoNkVrn9if7oq1xKBo72iWLvohcm4IMiZMxJD7idlWd5NgsCo~UwAQPLO7RdXenHuc8AKzjqR7hsEWCVJLPsJG0fdC4AxNuRVChdi8tx8VN~CkMC8RGfiH9Rtd3Tv7L6ypME4KFPqEXmHhnSxcMCi83xsjVP437SyYHa-8WcoK7XaqH4UvV6zXiSPTb5Kj1lm4jMTKTA9urpbl2wMT3RMRbi6mzVRbo8Jk9z7nbFz871atyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Anonim qo’ng’iroqlar",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    },
    {   id: 2,
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/8620/8ff6/e6300f5bd2ab2ace1aa2343bcea19392?Expires=1695600000&Signature=IB64DTIAJG4-8y29MkTQ~8wL-pgf5zQn0XbDopQlkPfUtkHxKCTuW5-lgYdNF1wYM1z4swjfDZ9UdX2Oez~oK2fdF5gNvQX1GgQCLIyBA22GUuVVcCx-Z8RZ847aeO85yzOIBJkdvzFdh3aZpo0QiJdj7P9pmzHFLX6yS5H4MhQt~SvGLD2LhLHecAbI1hTlRsQzIo47jUEJ9WRogT3n6vOwfzhDk-Tg2WvSBsPq0gqlJNka~USwebCnElaPqVUAFtsvuAGgKu-4wsGCstEzceZJWLZ-Bpp5AfOTGlzHlMTctmG0Z1MfQw06Fcq5Ib~UgbHepBqXCmkOVRK8bma8Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Sotuvlarni bosharish",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    },
    {   id: 3,
    
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/f5cb/2b32/134312119200857c97bd79968ae6ccbd?Expires=1695600000&Signature=Qr6c88OrLpUmCFz8SpWZCPfZ8xUuK4f6PPsPdUqjp7JCWZ7K-Nc60WhizC900aS6dHBv44uiuxmH5q7Vzc9nHe8r5iQtq9FIJaOIG3jJWhWeJekhHi9kKDDfa039k~8AAgxkzDE7M-m9H66b6oin9XH1abXMfztVCI6X4DXUDFdUPp8Rvp0tsRBzroWAD9vT-NLeI2bfV~CxrCahL9rAhFCa9Cmt~M0bsXRU-bL4nHXEhtfmGR~ev4xizbwdjPqke7vuylxc65DEf6vNl3ItPVuZ~ej3AD1hLwVnGvJvpa8ZcAn12~zGhYTc7sfvGm8pStyvBmV0ChZXHXRqr0gWtQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Sotuvlarni bosharish",
        title: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    },
    {   id: 4,
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/cfef/2d6d/83660be01b8578c2850505a83c662dab?Expires=1695600000&Signature=k0mxgIc~mVdOcls3JCQ35MUyWCs2sC86sc~u9Gg6v2ICKR3tJ5pZ9PYAZo55QoDk07jaDf1BX56lTEaZnHj9UVyLFeFnXDRoz-vFyXKoNkVrn9if7oq1xKBo72iWLvohcm4IMiZMxJD7idlWd5NgsCo~UwAQPLO7RdXenHuc8AKzjqR7hsEWCVJLPsJG0fdC4AxNuRVChdi8tx8VN~CkMC8RGfiH9Rtd3Tv7L6ypME4KFPqEXmHhnSxcMCi83xsjVP437SyYHa-8WcoK7XaqH4UvV6zXiSPTb5Kj1lm4jMTKTA9urpbl2wMT3RMRbi6mzVRbo8Jk9z7nbFz871atyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Anonim qo’ng’iroqlar",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    },
    {   id: 5,
        divStyle : {
            background: `url("https://s3-alpha-sig.figma.com/img/8620/8ff6/e6300f5bd2ab2ace1aa2343bcea19392?Expires=1695600000&Signature=IB64DTIAJG4-8y29MkTQ~8wL-pgf5zQn0XbDopQlkPfUtkHxKCTuW5-lgYdNF1wYM1z4swjfDZ9UdX2Oez~oK2fdF5gNvQX1GgQCLIyBA22GUuVVcCx-Z8RZ847aeO85yzOIBJkdvzFdh3aZpo0QiJdj7P9pmzHFLX6yS5H4MhQt~SvGLD2LhLHecAbI1hTlRsQzIo47jUEJ9WRogT3n6vOwfzhDk-Tg2WvSBsPq0gqlJNka~USwebCnElaPqVUAFtsvuAGgKu-4wsGCstEzceZJWLZ-Bpp5AfOTGlzHlMTctmG0Z1MfQw06Fcq5Ib~UgbHepBqXCmkOVRK8bma8Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"), lightgray`,
             backgroundPosition: '0px -121px',
             backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'
          },
        sub__title:  "Sotuvlarni bosharish",
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        card_link_span : "Batafsil ko'rish"
    }
]
  const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route  element={<RootLayout />}>
            <Route exact path="/" element={<Sections data = {data} />}  />
            <Route path="/courses" element={<My__Courses data = {data} />}  />
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
