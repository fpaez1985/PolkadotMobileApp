import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import SeedPhraseInput from './SeedPhraseInput';
import AddressDisplay from './AddressDisplay';
import BalanceDisplay from './BalanceDisplay';
import { ApiProvider } from './ApiContext';
import AccountSelector from './AccountSelector';

const App = () => {
  const [address, setAddress] = useState('');

  return (
    <ApiProvider>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <AccountSelector />
        <AddressDisplay address={address} />
        <BalanceDisplay address={address} />
      </View>
    </ApiProvider>
  );
};

export default App;
