import { useState, useEffect } from "react";

function useCurrencyInfo(currency = "inr") {
  const [data, setData] = useState({});

  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  )
    .then((res) => res.json())
    .then((res) => setData(res));

  return data;
}

export default useCurrencyInfo;
