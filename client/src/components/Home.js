import { useState, useEffect } from 'react';
import Cube from './Cube';
function Home() {

  const [cube, setCube] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((data) => setCube(data));
  }, []);

  return (
    <div style={{padding: '20px'}} className="App">
      {
        cube &&
        <Cube cube={cube} />
      }

    </div>
  );
}

export default Home;
