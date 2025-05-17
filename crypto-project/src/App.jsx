import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1")
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Crypto Prices</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name}: ${coin.current_price}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
