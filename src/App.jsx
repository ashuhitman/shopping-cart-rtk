import "./App.css";

import Card from "./components/Card";
import Header from "./components/Header";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Checkout from "./components/Checkout";
import axios from "axios";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "./redux/shop/shopActions";

function App() {
  const [showCheckOut, setShowCheckOut] = useState(false);
  const dispatch = useDispatch();
  const { loading, items } = useSelector((state) => ({
    loading: state.shop.loading,
    items: state.shop.shopItems,
  }));

  useEffect(() => {
    if (items.length == 0) {
      fetchItems();
    }
  }, []);
  const fetchItems = async () => {
    console.log("fetching....");
    dispatch(fetchRequest);
    try {
      const result = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
      );

      if (result) {
        const data = result.data;
        dispatch(fetchSuccess(data));
      }
    } catch (error) {
      dispatch(fetchFailure());
    }
  };
  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Header setShowCheckOut={setShowCheckOut} />
      <main className="">
        {!showCheckOut ? (
          <div className="p-3 md:p-4 md:flex md:flex-wrap md:gap-4 gap-3 grid grid-cols-2">
            {items.map((item, index) => (
              <Card item={item} key={index} setShowCheckOut={setShowCheckOut} />
            ))}
          </div>
        ) : (
          <Checkout setShowCheckOut={setShowCheckOut} />
        )}
      </main>
    </>
  );
}

export default App;
