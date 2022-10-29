import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import {BooksByComponent} from "./src/components/BooksByComponent";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

    const sortBy =
        [{
            titre: 'De A - Z', taille: '32', couleur: '#FFFFFF', trierPar: "aOrder"
        }, {
            titre: 'De Z - A', taille: '32', couleur: '#FFFFFF', trierPar: "zOrder"
        }

        ]
    const trieValue = "aOrder";



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <BooksByComponent sortBy={sortBy} trie={trieValue}></BooksByComponent>
      </SafeAreaProvider>
    );
  }
}
