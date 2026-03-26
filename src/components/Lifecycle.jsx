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

  return (
    <section id="center">
      <button 
        className="counter" 
        onClick={() => setCount(count + 1)}
      >
        Current Count: {count}
      </button>
    </section>
  );
}

export default Lifecycle;
