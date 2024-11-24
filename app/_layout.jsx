import { StatusBar } from 'expo-status-bar';
import ModalDropdown from 'react-native-modal-dropdown';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions, Dimensions, useColorScheme, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import "../global.css";

const _layout = () => {

  const Theme = useColorScheme();
  const [systemTheme, setSystemTheme] = useState(Theme);
  

  const toggleTheme = () => {
    setSystemTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const currencies = [
    { code: "USD", name: "United States Dollar" },
    { code: "INR", name: "Indian Rupee" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British Pound" },
    { code: "AUD", name: "Australian Dollar" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "CHF", name: "Swiss Franc" },
    { code: "NZD", name: "New Zealand Dollar" },
    { code: "SGD", name: "Singapore Dollar" },
    { code: "HKD", name: "Hong Kong Dollar" },
    { code: "SEK", name: "Swedish Krona" },
    { code: "NOK", name: "Norwegian Krone" },
    { code: "DKK", name: "Danish Krone" },
    { code: "RUB", name: "Russian Ruble" },
    { code: "ZAR", name: "South African Rand" },
    { code: "BRL", name: "Brazilian Real" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "KRW", name: "South Korean Won" },
    { code: "THB", name: "Thai Baht" },
    { code: "MYR", name: "Malaysian Ringgit" },
    { code: "IDR", name: "Indonesian Rupiah" },
    { code: "PHP", name: "Philippine Peso" },
    { code: "VND", name: "Vietnamese Dong" },
    { code: "PLN", name: "Polish Zloty" },
    { code: "TRY", name: "Turkish Lira" },
    { code: "SAR", name: "Saudi Riyal" },
    { code: "AED", name: "United Arab Emirates Dirham" },
    { code: "EGP", name: "Egyptian Pound" },
    { code: "NGN", name: "Nigerian Naira" },
    { code: "KES", name: "Kenyan Shilling" },
    { code: "PKR", name: "Pakistani Rupee" },
    { code: "BDT", name: "Bangladeshi Taka" },
  ];

  
  

  const [baseAmount, setBaseAmount] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("INR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchExchangeRate = async () => {
    setIsLoading(true); 
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/00a863bff80a54e06d0d9590/latest/${baseCurrency}`
      );
      const data = await response.json();
  
      if (response.ok) {
        const rate = data.conversion_rates[targetCurrency]; 
        setExchangeRate(rate); 
      } else {
        console.error("Error fetching rates:", data.error); 
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    const recalculateTargetAmount = () => {
      if (baseAmount && !isNaN(baseAmount) && exchangeRate) {
        setTargetAmount((parseFloat(baseAmount) * exchangeRate).toFixed(2));
      } else {
        setTargetAmount(""); // Clear target amount if base amount is invalid
      }
    };
  
    recalculateTargetAmount();
  }, [exchangeRate, baseAmount]);


  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
    setBaseAmount(targetAmount);
    setTargetAmount(baseAmount);
  }

  const handleBaseAmountChange = (value) => {
    setBaseAmount(value);

    if(!isNaN(value) && value.trim() !== ""){
      setTargetAmount((parseFloat(value)* exchangeRate).toFixed(2));
    }
    else{
      setTargetAmount("");
    }
  }

  const getCurrencyName = (code) => {
    const currency = currencies.find((curr) => curr.code === code);
    return currency ? currency.name : code;
  };
  

  return (
    <SafeAreaProvider>
      <SafeAreaView className={`flex-1 items-center ${systemTheme === "dark" ? "bg-black" : "bg-white"}`}>
        <Text className={` text-3xl pt-2 font-bold ${systemTheme === "dark" ? "text-white" : "text-black"}`}>Currency Converter</Text>
        <View className="flex-1 items-center justify-center space-y-4">

          {/* Base Currency Input */}
          <View className="flex-row items-center w-4/5 gap-2">
            <TextInput
              className={`flex-1 p-3 rounded-lg border ${
                systemTheme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-gray-200 text-black border-gray-400"
              }`}
              placeholder="Enter base amount"
              placeholderTextColor={systemTheme === "dark" ? "#aaa" : "#666"}
              keyboardType="numeric"
              value={baseAmount}
              onChangeText={handleBaseAmountChange}
            />

            <ModalDropdown
              options={currencies.map((curr) => curr.name)}
              defaultValue={baseCurrency}

              onSelect={(index, value) => {
                const selectedCurrency = currencies.find((curr) => curr.name === value);
                if (selectedCurrency) setBaseCurrency(selectedCurrency.code);
              }}
              style={{
                padding: 10,
                backgroundColor: systemTheme === "dark" ? "#3B82F6" : "#3B82F6",
                borderRadius: 8,
              }}
              textStyle={{
                color: "white",
                fontWeight: "bold",
              }}
              dropdownStyle={{
                borderRadius: 8,
                backgroundColor: systemTheme === "dark" ? "#000" : "#fff",
              }}
              dropdownTextStyle={{
                color: systemTheme === "dark" ? "#000" : "#000",
                fontSize: 16,
              }}
              renderButtonText={(rowData) => {
                const selectedCurrency = currencies.find((curr) => curr.name === rowData);
                return selectedCurrency ? selectedCurrency.code : baseCurrency;
              }}
            />

          </View>

          {/* Swap Button */}
          <TouchableOpacity className="my-6 items-center bg-pink-400 py-3 px-9 rounded-3xl" onPress={handleSwap}>
            {/* <Text className="text-blue-500 p-3 font-bold">Swap</Text> */}
            <Ionicons
              name="swap-vertical-outline"
              size={30}
              color={systemTheme === "dark" ? "yellow" : "yellow"}
            />
          </TouchableOpacity>

          {/* Target Currency Input */}
          <View className="flex-row items-center w-4/5 gap-2">
            <TextInput
              className={`flex-1 p-3 rounded-lg border ${
                systemTheme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-gray-200 text-black border-gray-400"
              }`}
              placeholder="Enter target amount"
              placeholderTextColor={systemTheme === "dark" ? "#aaa" : "#666"}
              keyboardType="numeric"
              value={targetAmount}
              editable={false}
            />

            <ModalDropdown
              options={currencies.map((curr) => curr.name)}
              defaultValue={targetCurrency}
              onSelect={(index, value) => {
                const selectedCurrency = currencies.find((curr) => curr.name === value);
                if (selectedCurrency) setTargetCurrency(selectedCurrency.code);
              }}
              style={{
                padding: 10,
                backgroundColor: systemTheme === "dark" ? "#3B82F6" : "#3B82F6",
                borderRadius: 8,
              }}
              textStyle={{
                color: "white",
                fontWeight: "bold",
              }}
              dropdownStyle={{
                borderRadius: 8,
                backgroundColor: systemTheme === "dark" ? "#000" : "#fff",
              }}
              dropdownTextStyle={{
                color: systemTheme === "dark" ? "#000" : "#000",
                fontSize: 16,
              }}
              renderButtonText={(rowData) => {
                const selectedCurrency = currencies.find((curr) => curr.name === rowData);
                return selectedCurrency ? selectedCurrency.code : targetCurrency;
              }}
            />

          </View>

          {isLoading && <Text className="text-gray-500">Fetching rates...</Text>}

          <StatusBar style={systemTheme === "dark" ? "light" : "dark"} />
        </View>
        <TouchableOpacity
          onPress={toggleTheme} // This toggles the theme
          className={`p-3 rounded-lg ${systemTheme === "dark" ? "bg-gray-700" : "bg-gray-200"} items-center`} 
>
          <Ionicons
            name={systemTheme === "dark" ? "sunny" : "moon"} 
            size={24}
            color={systemTheme === "dark" ? "yellow" : "black"} 
          />
          <Text
            className={`text-xl ${systemTheme === "dark" ? "text-white" : "text-black"}`}
          >
            {systemTheme === "dark" ? "Switch to Light" : "Switch to Dark"}
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

//export default _layout

export default _layout;
