# Substrate Chain Tracker Mobile App

## Description
The Substrate Chain Tracker Mobile App is a React Native-based application that allows users to track the state of a Substrate blockchain network by reading the metadata of the Substrate node. It provides a user-friendly interface to monitor blockchain statistics and perform wallet-like functionality, such as making transfers. The app utilizes the PolkadotJS API library to interact with the Substrate network.

## Features
- Track blockchain statistics: The app fetches and displays real-time data about the Substrate blockchain network, including block height, transaction count, and other relevant information.
- Wallet functionality: Users can create and manage wallets within the app. They can view their account balances, transaction history, and initiate transfers to other addresses.
- Transfer funds: The app enables users to send funds from their wallets to other addresses on the Substrate blockchain network.
- Secure authentication: Users can authenticate themselves using their private keys or other secure login methods supported by the PolkadotJS API.

## Installation
To install and run the Substrate Chain Tracker Mobile App, follow these steps:

1. Make sure you have Node.js and React Native development environment set up on your machine.
2. Clone the repository or download the source code.
3. Install the dependencies by running the following command in the project directory:

```bash
npm install
```

4. Update the configuration: Modify the configuration file to specify the connection details of the Substrate node, including the node URL and network information.
5. Build and run the app using the appropriate React Native commands for your target platform (iOS or Android).

## Usage
Once the app is installed and running, users can perform the following actions:

- View blockchain statistics: The app's dashboard provides real-time information about the Substrate blockchain, including the latest block height, transaction count, and other relevant metrics.
- Wallet management: Users can create new wallets, import existing wallets, and manage their account balances and transaction history.
- Make transfers: Users can initiate transfers from their wallets to other addresses on the Substrate blockchain. They can specify the recipient address and the amount to transfer.
- Transaction history: The app maintains a history of all the transactions made by the user, allowing them to review their past transfers.

## Security Considerations
- Private keys: Users must ensure the safety and confidentiality of their private keys. It is recommended to store private keys securely and avoid sharing them with unauthorized individuals.
- Node connection: The app relies on connecting to a Substrate node. It is crucial to verify the authenticity and security of the node being connected to, as well as ensuring that the node is running the desired Substrate network.

## Future Enhancements
- QR code scanning: Implement the ability to scan QR codes to simplify the process of transferring funds or importing wallets.
- Push notifications: Provide push notifications for important events, such as incoming transfers or confirmation of outgoing transactions.
- Multi-chain support: Extend the app to support multiple Substrate networks and allow users to switch between different chains.
- Enhanced wallet security: Implement additional security features, such as hardware wallet integration or biometric authentication.

## Dependencies
- React Native: [Version]
- PolkadotJS API: [Version]
- Other dependencies specified in the `package.json` file