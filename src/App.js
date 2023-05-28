import { useEffect, useState } from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isTokenExpired } from "./utils/isTokenExpired";
import { isRefreshTokenExpired } from "./utils/isRefreshTokenExpired";
import { refreshToken } from "./utils/refreshToken";

function App() {
  const isAuthorized = localStorage.getItem("refresh");
  const refreshExpired = isRefreshTokenExpired();
  const tokenExpired = isTokenExpired();
  const [loading, setLoading] = useState(false);
 
  console.log(isAuthorized,refreshExpired, tokenExpired);

  useEffect(() => {
    if (isAuthorized) {
      if (refreshExpired) {
        localStorage.removeItem("token");
      } else if (tokenExpired) {
        refreshToken(setLoading);
      }
    }
  }, []);

  return (
    <>
      {isAuthorized && tokenExpired && !refreshExpired ? (
        loading && <p>Loading ...</p>
      ) : (
        <Routes />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
