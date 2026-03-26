import React, { useEffect, useState } from "react";

function App() {
  const [payments, setPayments] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/api/payments")
      .then(res => res.json())
      .then(data => setPayments(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Dashboard</h2>
      <ul>
        {Object.keys(payments).map(id => (
          <li key={id}>
            Payment {id}: {payments[id]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
