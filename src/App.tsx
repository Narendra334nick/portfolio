import './App.css';
import LandingPage from './containers/LandingPage/LandingPage';
import ErrorPage from './containers/Core/Error';
import {
  createBrowserRouter,
  RouterProvider,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
