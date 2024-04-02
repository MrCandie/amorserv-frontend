import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import ReusableSpinner from "./components/reusables/ReusableSpinner";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Search = lazy(() => import("./components/search/Search"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));
const ForgotPassword = lazy(() => import("./components/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Dashboard />
          </Suspense>
        }
        path="/"
      />{" "}
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Search />
          </Suspense>
        }
        path="/search"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Profile />
          </Suspense>
        }
        path="/profile"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Login />
          </Suspense>
        }
        path="/login"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <Register />
          </Suspense>
        }
        path="/register"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <ForgotPassword />
          </Suspense>
        }
        path="/forgot-password"
      />
      <Route
        element={
          <Suspense fallback={<ReusableSpinner height="100vh" />}>
            <ResetPassword />
          </Suspense>
        }
        path="/reset-password"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
