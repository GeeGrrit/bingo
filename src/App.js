import './App.css';

//Json File later
const data = [
  { B: "Big test with some stuff", I: "19", N: "TEST",G: "34",O: "2" },
  { B: "Big test with some stuff", I: "19", N: "TEST",G: "34",O: "2" },
  { B: "Big test with some stuff", I: "19", N: "Big test with some stuff",G: "34",O: "2" },
  { B: "Big test with some stuff", I: "19", N: "TEST",G: "34",O: "2" },
  { B: "Big test with some stuff And so on and so so so sos sososo", I: "19", N: "Wow",G: "Big test with some stuff",O: "2" },
]

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.B}</td>
              <td>{val.I}</td>
              <td>{val.N}</td>
              <td>{val.G}</td>
              <td>{val.O}</td>
            </tr>
          )
        })}
    </table>
    </div>
  );
}

export default App;
