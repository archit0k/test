# Currency Converter App

A simple and user-friendly **Currency Converter** application built with React Native. This app allows users to convert between currencies in real-time using live exchange rates.

## Features
- **Live Currency Conversion**: Fetches real-time exchange rates using the ExchangeRate-API.
- **Light and Dark Mode Support**: Automatically adjusts to the system theme.
- **User-Friendly Interface**: Clean and intuitive design with interactive dropdowns for currency selection.
- **Swap Functionality**: Quickly swap base and target currencies.
- **Dynamic Updates**: Instant calculations based on user input.

## Screenshots
*(Add screenshots of your app here)*

## Tech Stack
- **React Native**: For building cross-platform mobile applications.
- **Expo**: For streamlined development and testing.
- **ExchangeRate-API**: For fetching real-time currency exchange rates.
- **NativeWind**: For responsive and scalable styling using Tailwind CSS syntax.

## How to Use
1. Enter the amount in the **Base Currency** input field.
2. Use the dropdown to select your desired currencies.
3. View the converted amount in the **Target Currency** field.
4. Click the **Swap** button to interchange the base and target currencies.

## Setup and Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/archit0k/test.git
   ```
2. Navigate to the project directory:
    ```bash
    cd fpaz
    ```  
3. Install dependencies:
    ```bash
    npm install  <(dependencies)>
    ```
4. Start the development server:
    ```bash
    npm start
    ```  
5.  Scan the QR code with the Expo Go app to preview the app on your device.

## Dependencies

  react-native-safe-area-context
  nativewind
  expo-status-bar
  react-native-modal-dropdown
  @expo/vector-icons

## API Integration
  This app integrates the ExchangeRate-API to fetch the latest currency exchange rates. For more details on this API, visit ExchangeRate-API.

## Contributing
  Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License
  This project is licensed under the MIT License.