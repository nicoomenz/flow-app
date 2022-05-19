import ClimaProvider from "./modules/Weather/pages";
import WeatherMapTemplate from "./modules/Weather/templates/WeatherMapTemplate";
import "./scss/app.scss";

function App() {
  return (
    <ClimaProvider>
      <WeatherMapTemplate />
    </ClimaProvider>
  );
}

export default App;
