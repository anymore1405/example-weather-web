import React, { useState, useEffect } from 'react';
import { getDataWeather } from './api';

function App() {
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    getDataWeather((data) => {
      setStatus(data.Headline.Text);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {status}
        </a>
      </header>
    </div>
  );
}

export default App;
