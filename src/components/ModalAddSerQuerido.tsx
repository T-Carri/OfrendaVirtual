import { useState } from 'react';
import '../assets/styles/ModalASQ.css'
import { db, storage  } from '../config/Firebase';
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Swal from 'sweetalert2';

interface ModalProps {
    onHide: () => void;

 
}
const ModalAddSerQuerido = ({ onHide }: ModalProps) => {

    const [nombre, setNombre] = useState<string>("");
    const [imagen, setImagen] = useState<File | null>(null);
  
    // Captura el archivo seleccionado
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        setImagen(e.target.files[0]);
      }
    };
  
    // Guarda el nombre y la imagen en Firebase
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (nombre && imagen) {
        try {
          // Sube la imagen a Firebase Storage
          const imageRef = ref(storage, `seres_queridos/${imagen.name}`);
          await uploadBytes(imageRef, imagen);
          const imageUrl = await getDownloadURL(imageRef);
  
          // Guarda el nombre y la URL de la imagen en Firestore
          await addDoc(collection(db, "seres_queridos"), {
            nombre: nombre,
            imageUrl: imageUrl,
          });
  
          onHide(); // Cierra el modal
          Swal.fire({
           
            icon: "success",
            title: "Ser querido agregado con éxito",
           
            timer: 1500
          });
          
        } catch (error) {
          console.error("Error al agregar ser querido: ", error);
        }
      } else {
        alert("Por favor, ingresa un nombre y selecciona una imagen.");
      }
    };


  return (
    <div className="modal_backdrop" onClick={onHide}>
        <div className="modal_ad_sq" onClick={(e) => e.stopPropagation()}>
         
            <div className='agrega_serquerido'>


           
<div id="Container">
  <form className="formadd"  onSubmit={handleSubmit}>
           <span className='AgregaSQspan'>Agrega un ser querido que ya no está...</span>
            <input
              id="nombre"
            className='nombre_serquerido'
              type="Text"
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
            /> 



<div className="file-input">
      <input
        type="file"
        name="file-input"
        id="file-input"
        className="file-input__input"
        onChange={handleFileChange}
      />
      <label className="file-input__label" htmlFor="file-input">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="upload"
          className="svg-inline--fa fa-upload fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
          ></path>
        </svg>
        <span>Upload file</span></label>
    </div>
    <button type="submit" className="submit_butt">Agregar</button>

  </form>

  <div id="rays">
    <svg
        fill="none"
        viewBox="0 0 299 152"
        height="9em"
        width="18em"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="url(#paint0_linear_8_3)"
            d="M149.5 152H133.42L9.53674e-07 4.70132e-06H149.5L299 4.70132e-06L165.58 152H149.5Z"
        ></path>
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                y2="12.1981"
                x2="150.12"
                y1="152"
                x1="149.5"
                id="paint0_linear_8_3"
            >
                <stop stop-color="#FF4500"></stop> 
                <stop stop-opacity="0" stop-color="#FF8C00" offset="1"></stop> 
            </linearGradient>
        </defs>
    </svg>
</div>

<div id="emiter">
    <svg
        fill="none"
        viewBox="0 0 160 61"
        height="61"
        width="160"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g filter="url(#filter0_di_1_38)">
            <path
                fill="#2B2B2B"
                d="M80 27.9997C121.974 27.9997 156 22.4032 156 15.4996L156 40.4998C156 47.4034 121.974 52.9998 80 52.9998C38.0265 52.9998 4.00028 47.4034 4 40.4998V40.4998V15.51C4.0342 22.4089 38.0474 27.9997 80 27.9997Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            ></path>
        </g>
        <ellipse
            fill="url(#paint0_radial_1_38)"
            ry="4.80773"
            rx="28.3956"
            cy="17.4236"
            cx="80"
        ></ellipse>
        <g filter="url(#filter1_i_1_38)">
            <path
                fill="#323232"
                d="M80 28.0002C121.974 28.0002 156 22.4037 156 15.5001C156 8.59648 121.974 3 80 3C38.0264 3 4 8.59648 4 15.5001C4 22.4037 38.0264 28.0002 80 28.0002ZM80.0001 20.308C96.1438 20.308 109.231 18.1555 109.231 15.5002C109.231 12.845 96.1438 10.6925 80.0001 10.6925C63.8564 10.6925 50.7693 12.845 50.7693 15.5002C50.7693 18.1555 63.8564 20.308 80.0001 20.308Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            ></path>
        </g>
        <g filter="url(#filter2_di_1_38)">
            <path
                fill="#FF4500" 
                d="M106.725 17.4505C108.336 16.8543 109.231 16.1943 109.231 15.4999C109.231 12.8446 96.1438 10.6921 80.0001 10.6921C63.8564 10.6921 50.7693 12.8446 50.7693 15.4999C50.7693 16.1943 51.6645 16.8543 53.2752 17.4504C53.275 17.4414 53.2748 17.4323 53.2748 17.4232C53.2748 14.768 65.2401 12.6155 80.0001 12.6155C94.7601 12.6155 106.725 14.768 106.725 17.4232C106.725 17.4323 106.725 17.4414 106.725 17.4505Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
            ></path>
        </g>
        <defs>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="45.5002"
                width="160"
                y="15.4996"
                x="0"
                id="filter0_di_1_38"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                ></feColorMatrix>
                <feOffset dy="4"></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite operator="out" in2="hardAlpha"></feComposite>
                <feColorMatrix
                    values="0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0 0.620833 0 0 0 0.25 0"
                    type="matrix"
                ></feColorMatrix>
                <feBlend
                    result="effect1_dropShadow_1_38"
                    in2="BackgroundImageFix"
                    mode="normal"
                ></feBlend>
                <feBlend
                    result="shape"
                    in2="effect1_dropShadow_1_38"
                    in="SourceGraphic"
                    mode="normal"
                ></feBlend>
                <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                <feComposite
                    k3="1"
                    k2="-1"
                    operator="arithmetic"
                    in2="hardAlpha"
                ></feComposite>
                <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    type="matrix"
                ></feColorMatrix>
                <feBlend
                    result="effect2_innerShadow_1_38"
                    in2="shape"
                    mode="normal"
                ></feBlend>
            </filter>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="25.0002"
                width="152"
                y="3"
                x="4"
                id="filter1_i_1_38"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                <feBlend
                    result="shape"
                    in2="BackgroundImageFix"
                    in="SourceGraphic"
                    mode="normal"
                ></feBlend>
                <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                ></feColorMatrix>
                <feMorphology
                    result="effect1_innerShadow_1_38"
                    in="SourceAlpha"
                    operator="erode"
                    radius="3"
                ></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="6.5"></feGaussianBlur>
                <feComposite
                    k3="1"
                    k2="-1"
                    operator="arithmetic"
                    in2="hardAlpha"
                ></feComposite>
                <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    type="matrix"
                ></feColorMatrix>
                <feBlend
                    result="effect2_innerShadow_1_38"
                    in2="shape"
                    mode="normal"
                ></feBlend>
            </filter>
            <filter
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
                height="26.0002"
                width="157"
                y="10"
                x="55"
                id="filter2_di_1_38"
            >
                <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
                <feBlend
                    result="shape"
                    in2="BackgroundImageFix"
                    in="SourceGraphic"
                    mode="normal"
                ></feBlend>
                <feColorMatrix
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    type="matrix"
                    in="SourceAlpha"
                ></feColorMatrix>
                <feMorphology
                    result="effect1_innerShadow_1_38"
                    in="SourceAlpha"
                    operator="erode"
                    radius="2"
                ></feMorphology>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                <feComposite
                    k3="1"
                    k2="-1"
                    operator="arithmetic"
                    in2="hardAlpha"
                ></feComposite>
                <feColorMatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                    type="matrix"
                ></feColorMatrix>
                <feBlend
                    result="effect2_innerShadow_1_38"
                    in2="shape"
                    mode="normal"
                ></feBlend>
            </filter>
        </defs>
    </svg>
</div>

</div>






 



          </div>


        </div>
    </div>
  )
}

export default ModalAddSerQuerido