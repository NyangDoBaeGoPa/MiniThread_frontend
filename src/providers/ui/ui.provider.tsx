import {StacksProvider} from '@mobily/stacks';
import {PropsWithChildren} from 'react';
import {
  SafeAreaProvider,
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

type UIProviderProps = PropsWithChildren<{}>;

export const UIProvider = ({children}: UIProviderProps) => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StacksProvider spacing={1}>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          {children}
        </SafeAreaView>
      </StacksProvider>
    </SafeAreaProvider>
  );
};
