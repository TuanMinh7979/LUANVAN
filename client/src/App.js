import "./App.css";
import { jobs } from './dummyData/jobs';
function App() {
  return (
    <div className="App">
      {jobs.map((el) => {
        return (
          <>
            <p>{el.company}</p>
            <p>{el.address.city}</p>
            <p>{el.skills}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
