import { useEffect, useState } from "react";

function Lifecycle() {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ Lifecycle ~ count:", count)

  useEffect(() => {
    console.log('Componente Montado');

    // Cleanup function
    return () => {
      console.log('Componente Desmontado');
    }
  }, [])

  useEffect(() => {
    if (count !== 0) 
      console.log('Componente Actualizado');

    // Cleanup function
    return () => {
      console.log('Funcion de Cleanup');
    }
  }, [count])
  
  if (count === 5) 
    return null;

  const handleClick = () => {
    console.log("🚀 ~ antes ~ count:", count)
    setCount(count + 1)
    console.log("🚀 ~ despues ~ count:", count)
    // más codigo
  };

  return (
    <section id="center">
      <button 
        className="counter" 
        onClick={handleClick}
      >
        Current Count: {count}
      </button>
    </section>
  );
}

export default Lifecycle;
