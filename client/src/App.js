import { useEffect, useState } from "react";
import SelectableButton from "components/SelectableButton/SelectableButton";
import Carousel from "components/Carousel/Carousel";
import LoadingOverlay from "components/LoadingOverlay/LoadingOverlay";
import "./App.css";

function App() {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const handleAnimalSelection = (animal) => {
    setSelectedAnimals((prevAnimals) => {
      if (prevAnimals.includes(animal)) {
        return prevAnimals.filter((prevAnimal) => prevAnimal !== animal);
      } else {
        return [...prevAnimals, animal];
      }
    });
  };

  useEffect(() => {
    const dataFetch = async () => {
      setLoading(true);
      let data = [];

      if (selectedAnimals.length > 0) {
        const animalQuery = selectedAnimals.join(",");
        data = await (
          await fetch(`/api/animals?animals=${animalQuery}`)
        ).json();
        data = data.data;
      }

      if (data.length !== 0) {
        setImages(data);
      } else {
        setImages([]);
      }
      setLoading(false);
    };
    dataFetch();
  }, [selectedAnimals]);

  return (
    <div className="App">
      <LoadingOverlay isLoading={loading} />
      <div className="buttons">
        <SelectableButton
          active={selectedAnimals.includes("sharks")}
          onClick={() => handleAnimalSelection("sharks")}
        >
          Sharks
        </SelectableButton>
        <SelectableButton
          active={selectedAnimals.includes("cats")}
          onClick={() => handleAnimalSelection("cats")}
        >
          Cats
        </SelectableButton>
      </div>
      <Carousel images={images} loading={loading} />
    </div>
  );
}

export default App;
