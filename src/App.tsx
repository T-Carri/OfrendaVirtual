import logoutfv from './assets/utfv.png';
import './App.css';
import calavera from './assets/calavera-svgrepo-com.svg';
import { useEffect, useState } from 'react';
import ModalAddSerQuerido from './components/ModalAddSerQuerido';
import { collection, getDocs } from 'firebase/firestore'; // Firebase Firestore
import { db } from './config/Firebase';

interface SerQuerido {
  nombre: string;
  imageUrl: string;
}

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [seresQueridos, setSeresQueridos] = useState<SerQuerido[]>([]);

  // Función para obtener los datos de Firestore
  useEffect(() => {
    const fetchSeresQueridos = async () => {
      const querySnapshot = await getDocs(collection(db, "seres_queridos"));
      const seres: SerQuerido[] = querySnapshot.docs.map((doc) => ({
        nombre: doc.data().nombre,
        imageUrl: doc.data().imageUrl,
      }));
      setSeresQueridos(seres);
    };

    fetchSeresQueridos();
  }, []);

  return (
    <>
      <img className="logoUTFV" src={logoutfv} alt="utfv" />
      <section className="Container_ofrenda_retrato d-flex flex-column justify-content-center">
        <span className='carousel_name text-center'>Recordando con cariño a:</span>   
        {seresQueridos.length > 0 ? (
          <div id="carouselExampleIndicators" className="carousel slide d-flex flex-row justify-content-center align-items-center" data-bs-ride="carousel">
            <div className="carousel-indicators ">
              {seresQueridos.map((_, index) => (
                <button 
                  key={index}
                  type="button" 
                  data-bs-target="#carouselExampleIndicators" 
                  data-bs-slide-to={index} 
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}>
                </button>
              ))}
            </div>
            <div className="carousel-inner  ">
              {seresQueridos.map((ser, index) => (
                <div key={index} className={`carousel-item mx-auto ${index === 0 ? "active" : ""}`}>
                  <img src={ser.imageUrl} className="d-block carousel_image mx-auto" alt={ser.nombre} />
                  <p className="carousel_name text-center">{ser.nombre}</p>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          <p>No hay seres queridos agregados aún.</p>
        )}
      </section>
      
      <button className="Agregar_serquerido" onClick={() => setShow(true)}>
        <img src={calavera} width={50} alt="+" />
      </button>
      {show && <ModalAddSerQuerido onHide={() => setShow(false)} />}
    </>
  );
}

export default App;