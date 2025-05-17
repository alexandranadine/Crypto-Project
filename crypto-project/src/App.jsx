import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=solana-ecosystem&order=market_cap_desc&per_page=50&page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Solana Ecosystem Coin Prices</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "10px solid #ccc", textAlign: "center", padding: "8px", borderBottomColor: "black" }}>Name</th>
              <th style={{ borderBottom: "10px solid #ccc", textAlign: "left", padding: "8px", borderBottomColor: "black" }}>Price (USD)</th>
              <th style={{ borderBottom: "10px solid #ccc", textAlign: "left", padding: "8px", borderBottomColor: "black" }}>Market Cap (USD)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td style={{ padding: "8px" }}>{coin.name}</td>
                <td style={{ padding: "8px" }}>${coin.current_price}</td>
                <td style={{ padding: "8px" }}>${coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
