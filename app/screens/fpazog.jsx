// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions, Dimensions, useColorScheme, TextInput } from 'react-native';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { useState, useEffect } from 'react';
// import RNPickerSelect from 'react-native-picker-select';
// import "../global.css";

// const fpazog = () => {

//   const systemTheme = useColorScheme();

//   const [baseAmount, setBaseAmount] = useState("");
//   const [targetAmount, setTargetAmount] = useState("");
//   const [baseCurrency, setBaseCurrency] = useState("USD");
//   const [targetCurrency, setTargetCurrency] = useState("INR");
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchExchangeRate = async () => {
//     setIsLoading(true); 
//     try {
//       const response = await fetch(
//         `https://v6.exchangerate-api.com/v6/00a863bff80a54e06d0d9590/latest/${baseCurrency}`
//       );
//       const data = await response.json();
  
//       if (response.ok) {
//         const rate = data.conversion_rates[targetCurrency]; 
//         setExchangeRate(rate); 
//       } else {
//         console.error("Error fetching rates:", data.error); 
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };


//   useEffect(() => {
//     fetchExchangeRate();
//   }, [baseCurrency, targetCurrency]);


//   const handleSwap = () => {
//     setBaseCurrency(targetCurrency);
//     setTargetCurrency(baseCurrency);
//     setBaseAmount(targetAmount);
//     setTargetAmount(baseAmount);
//   }

//   const handleBaseAmountChange = (value) => {
//     setBaseAmount(value);

//     if(!isNaN(value) && value.trim() !== ""){
//       setTargetAmount((parseFloat(value)* exchangeRate).toFixed(2));
//     }
//     else{
//       setTargetAmount("");
//     }
//   }

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView className={`flex-1 ${systemTheme === "dark" ? "bg-black" : "bg-white"}`}>
//         <Text className={`text-lg font-bold pl-4 pt-1 ${systemTheme === "dark" ? "text-white" : "text-black"}`}>Currency Converter</Text>
//         <View className="flex-1 items-center justify-center space-y-4 bg-teal-400">
          
//           <View className="flex-row p-5 w-4/5 h-1/2 bg-pink-300">
//             <View className="p-5 bg-yellow-200">
//               <View className=" items-center w-4/5 gap-2 m-5 bg-blue-50">
//                 <TouchableOpacity className="p-3 bg-blue-500 rounded-lg">
//                   <Text className="text-white font-bold">{baseCurrency}</Text>
//                 </TouchableOpacity>

//                 <TextInput
//                   className={` p-3 rounded-lg border ${
//                     systemTheme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-gray-200 text-black border-gray-400"
//                   }`}
//                   placeholder="Enter base amount"
//                   placeholderTextColor={systemTheme === "dark" ? "#aaa" : "#666"}
//                   keyboardType="numeric"
//                   value={baseAmount}
//                   onChangeText={handleBaseAmountChange}
//                 />
//               </View>


//               {/* Target Currency Input */}
//               <View className=" items-center w-4/5 gap-2 m-5 bg-slate-600">

//                 <TouchableOpacity className="p-3 bg-blue-500 rounded-lg">
//                   <Text className="text-white font-bold">{targetCurrency}</Text>
//                 </TouchableOpacity>

//                 <TextInput
//                   className={` p-3 rounded-lg border ${
//                     systemTheme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-gray-200 text-black border-gray-400"
//                   }`}
//                   placeholder="Enter target amount"
//                   placeholderTextColor={systemTheme === "dark" ? "#aaa" : "#666"}
//                   keyboardType="numeric"
//                   value={targetAmount}
//                   editable={false}
//                 />

            
//               </View>
//             </View>
//               {/* Swap Button */}
//               <TouchableOpacity className="ml-1  items-center justify-center bg-blue-50" onPress={handleSwap}>
//                 <Text className="text-blue-500 font-bold">Swap</Text>
//               </TouchableOpacity>
//           </View>
//           {/* Base Currency Input */}

//           {isLoading && <Text className="text-gray-500">Fetching rates...</Text>}

//           <StatusBar style={systemTheme === "dark" ? "light" : "dark"} />
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// };

// //export default _layout

// export default fpazog;
// Inside fpazog.jsx
const Fpazog = () => {
    // Component code here
  };
  
  export default Fpazog;
  