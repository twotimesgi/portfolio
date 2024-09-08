
import Header from "./components/Header";
import Content from "./components/Content";
import Spotlight from "./components/Spotlight";

export default function Home() {
  return (<>
    <div className="lg:flex lg:justify-between lg:gap-4">
    <Spotlight/>
      <Header/>
      <Content/>
    </div>

    </>

  );
}
