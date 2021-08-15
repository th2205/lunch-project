import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Layout from "../../components/Layout";
import LoginModal from "../../components/LoginModal";
import "react-toastify/dist/ReactToastify.css";
import { useLogin } from "../../hooks/useLogin";

export default function Main() {
  const { isLoggedIn } = useLogin();

  return (
    <>
      <Layout>
        <Home />
      </Layout>
      {!isLoggedIn && <LoginModal />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}
