import { useId, useState } from "react";

import useCurrencyInfo from "../../hooks/useCurrencyInfo";
import InputBox from "../../Components/InputBox/InputBox.jsx";

function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const calFromAmount = (amount, currency) => {
    setConvertedAmount(amount);
    setAmount(Math.round((amount / currencyInfo[currency]) * 1000) / 1000);
  };

  const calToAmount = (amount, currency) => {
    setAmount(amount);
    setConvertedAmount(
      Math.round(amount * currencyInfo[currency] * 1000) / 1000
    );
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
    console.log(
      `Convert Function From Amount: ${amount} To Amount: ${convertedAmount}`
    );
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => {
                  calToAmount(amount, toCurrency);
                }}
                onCurrencyChange={(currency) => {
                  setFromCurrency(currency);
                  calToAmount(amount, toCurrency);
                }}
                currencyOptions={options}
                selectCurrency={fromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={(amount) => {
                  calFromAmount(amount, toCurrency);
                }}
                onCurrencyChange={(currency) => {
                  setToCurrency(currency);
                  calFromAmount(convertedAmount, currency);
                }}
                currencyOptions={options}
                amountDisable={false}
                selectCurrency={toCurrency}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter;
