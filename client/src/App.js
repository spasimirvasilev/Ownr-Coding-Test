import { useEffect, useState } from "react";
import SelectableButton from "./components/SelectableButton/SelectableButton";
import Carousel from "./components/Carousel/Carousel";
import "./App.css";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";

function App() {
  const [showSharks, setShowSharks] = useState(false);
  const [showCats, setShowCats] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      let data = [];
      if (showCats && showSharks) {
        data = await (await fetch("/api/animals")).json();
        data = data.data;
      } else if (showCats) {
        data = await (await fetch("/api/animals?animal=cats")).json();
        data = data.data;
      } else if (showSharks) {
        data = await (await fetch("/api/animals?animal=sharks")).json();
        data = data.data;
      } else {
        setImages([]);
      }

      if (data.length !== 0) {
        setImages(data);
      }
      setLoading(false);
    };
    dataFetch();
  }, [showCats, showSharks]);

  return (
    <div className="App">
      <LoadingOverlay isLoading={loading} />
      <div className="buttons">
        <SelectableButton
          active={showSharks}
          onClick={() => setShowSharks((prev) => !prev)}
        >
          Sharks
        </SelectableButton>
        <SelectableButton
          active={showCats}
          onClick={() => setShowCats((prev) => !prev)}
        >
          Cats
        </SelectableButton>
      </div>
      <Carousel images={images} loading={loading} />
    </div>
  );
}

export default App;
