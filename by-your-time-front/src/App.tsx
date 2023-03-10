import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories";
import ContactUs from "./Components/Contact/Contact";
import ProductDetails from "./Components/ProductPage/ProductPage";
import CheckoutPage from "./Components/Checkout/CheckoutPage";
import Login from "./Pages/Account/Login";
import Register from "./Pages/Account/Register";
import EventsByCategoryId from "./Pages/EventsByCategoryId";
import Homepage from "./Pages/Homepage";
import AboutPage from "./Components/Footer/AboutPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "./app/errors/ServerError";
import { createBrowserHistory } from "history";
import { CustomRouter } from "./CustomRouter";
import NotFound from "./app/errors/NotFound";
import BasketPage from "./features/basket/BasketPage";
import { useStoreContext } from "./app/context/StoreContext";
import { useCallback, useEffect, useState } from "react";
import { getCookie } from "./app/util/util";
import agent from "./api/agent";
import LoadingComponent from "./app/layout/LoadingComponent";
import { useAppDispatch } from "./app/store/configureStore";
import { fetchCurrentUser } from "./Pages/Account/accountSlice";
import { fetchBasketAsync } from "./features/basket/basketSlice";

export const history = createBrowserHistory();

function App() {
  const { setBasket } = useStoreContext();
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    // initApp().then(() => setLoading(false));
    const buyerId = getCookie("buyerId");
    dispatch(fetchCurrentUser());
    if (buyerId) {
      agent.Basket.get()
        .then((basket) => setBasket(basket))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBasket]);

  if (loading) return <LoadingComponent message="By Your Time..." />;

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        hideProgressBar
        toastStyle={{ backgroundColor: "black" }}
      />
      <Navbar />
      <CustomRouter history={history}>
        <Routes>
          <Route path="/events/product" element={<ProductDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/events" element={<Categories />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events/category/:id" element={<EventsByCategoryId />} />
          <Route path="/event/:id" element={<ProductDetails />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route element={<NotFound />} />
          <Route path="/basket" element={<BasketPage />} />
        </Routes>
      </CustomRouter>
      <Footer />
    </div>
  );
}

export default App;
