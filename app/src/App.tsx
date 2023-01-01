import { useState } from 'react';
import { Homepage } from './components/views';

export const App = () => {
  const [activeView, setActiveView] = useState<'splash' | 'home'>('home');

  return (
    <div className="App">
      <header/>
      { <Homepage/> }
    </div>
  );
};