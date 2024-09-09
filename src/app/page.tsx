
import Header from "./components/Header";
import Content from "./components/Content";
import Spotlight from "./components/Spotlight";
import useIsMobile from "./hooks/useMousePosition copy";



export default function Home() {
  const isMobile = useIsMobile()
  return (<>
    <div className="lg:flex lg:justify-between lg:gap-5">
    
    {!isMobile && <Spotlight/>}
      <Header/>
      <Content/>
    </div>

    </>

  );
}
