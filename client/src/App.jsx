import Home from "./home/Home";

function App() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
    <Home/>
    </div>
  );
}

export default App;
