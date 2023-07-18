import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import ErrorPage from './containers/Core/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Layout from './containers/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/layout",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/> {/* 👈 Renders at /#/app/ */}
        <Route path="/layout" element={<Layout />}/> {/* 👈 Renders at /#/app/ */}
      </Routes>
      </HashRouter>
      {/* <RouterProvider router={router} /> */}
    </div>
  );
}

export default App;
