import { Cards } from "./components/Cards.jsx";
import Title from "./components/Title.jsx";




{ /* Progress so far
    
    - added a sample card to test and tweak
    - added the floating dock but cannot use it apparently
    - adjusted layout for better spacing
    - apparent plan -> the title on top > 2 cards (portfolio & resume) > floatingdock for socials link
    - Might think of complete revamp from the retro & lo.cafe theme
    - v5 pushed
  */ }


function App() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 flex flex-col antialiased">
      <div className="flex justify-center pt-10 pb-2">
        <Title />
        <Cards />
      </div>
    </div>
  );
}


export default App
