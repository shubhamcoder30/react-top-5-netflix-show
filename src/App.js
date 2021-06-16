import React from "react";
import Cards from './Cards';
import Header from './Header';
export default function App() {
  return (
    <>
    <Header />
   <Cards imglink="https://i.pinimg.com/564x/20/b0/ec/20b0ecaa7dd10552fe839079444843f4.jpg" name="1. STRANGER THINGS"  link="https://www.netflix.com/in/title/80057281"  cardtext="Stranger Things
2016 | 16+ | 3 Seasons | Sci-Fi TV


" />
   <Cards imglink="https://i.pinimg.com/564x/07/a2/21/07a221868ba342eb05ffa3def4afd935.jpg" name="2. MONEY HEIST" link="https://www.netflix.com/in/title/80192098" cardtext="Money Heist
 2017  |  18+  |  4 Seasons  | Crime TV Shows


"/>
 <Cards imglink="https://i.pinimg.com/564x/2b/db/f4/2bdbf4630e18046e08f10ec5231f3f93.jpg" name="3. BREAKING BAD" link="https://www.netflix.com/in/title/70143836" cardtext="Breaking Bad
2008 | 18+ | 5 Seasons | Crime TV Shows

"/>
<Cards imglink="https://i.pinimg.com/originals/95/0a/7a/950a7a59105c9f8653bd370a91a86020.jpg" name="4. THE WITCHER" link="https://www.netflix.com/in/title/80189685" cardtext="The Witcher
2019 | 18+ | 1 Season | US TV Shows

"/>
<Cards imglink="https://i.pinimg.com/564x/93/da/21/93da21a55f3a78fdbc031f077dd4324d.jpg" name="5. PEAKY BLINDERS" link="https://www.netflix.com/in/title/80002479" cardtext="Peaky Blinders
2013 | 18+ | 5 Seasons | Crime TV Shows

"/>
</>
  );
}
