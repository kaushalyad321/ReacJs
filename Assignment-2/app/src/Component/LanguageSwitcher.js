import React, { createContext, useState } from "react";
import LanguageStateChange from "./LanguageStateChange";
export const Context = createContext();
const LanguageSwitcher = () => {
  const [obj, setObj] = useState(
    "A 24-year-old health worker who came into close contact with a Nipah patient tested positive on Wednesday taking the total number of positive cases in the state to five. As the state government has announced containment zones and restrictions to stop the spread of the virus, the contact list of the patients has become a reason for worry as 700 people have come into contact of the patients. Out of these 700, about 77 are in the high-risk category, Kerala health minister Veena George said. 1. The high-risk Nipah patients have been asked to remain inside their houses. The routes of the two Nipah patients who died have been published so that people don't take those routes.In Kozhikode, restrictions have been imposed banning the gathering of a large number of people at festivals, and functions.wards across nine chayats in Vadakara taluk of Kozhikode district have been declared as containment zones. Essential services and only entry and exit are allowed in these areas. Shops selling essential goods will be allowed to function from 7am to 5pm. No time bar has been given for pharmacies and health centres.Buses or vehicles plying on national highways through the containment zones should not stop in the affected areas."
  );

  const EnglishContent = () => {
    setObj(
      "A 24-year-old health worker who came into close contact with a Nipah patient tested positive on Wednesday taking the total number of positive cases in the state to five. As the state government has announced containment zones and restrictions to stop the spread of the virus, the contact list of the patients has become a reason for worry as 700 people have come into contact of the patients. Out of these 700, about 77 are in the high-risk category, Kerala health minister Veena George said. 1. The high-risk Nipah patients have been asked to remain inside their houses. The routes of the two Nipah patients who died have been published so that people don't take those routes.In Kozhikode, restrictions have been imposed banning the gathering of a large number of people at festivals, and functions.wards across nine chayats in Vadakara taluk of Kozhikode district have been declared as containment zones. Essential services and only entry and exit are allowed in these areas. Shops selling essential goods will be allowed to function from 7am to 5pm. No time bar has been given for pharmacies and health centres.Buses or vehicles plying on national highways through the containment zones should not stop in the affected areas."
    );
  };

  const spanishContent = () => {
    setObj(
      "Un trabajador de salud de 24 años que entró en contacto cercano con un paciente de Nipah dio positivo el miércoles, llevando el número total de casos positivos en el estado a cinco. Como el gobierno estatal ha anunciado zonas de contención y restricciones para detener la propagación del virus, la lista de contactos de los pacientes se ha convertido en una razón de preocupación ya que 700 personas han entrado en contacto con los pacientes. De estos 700, alrededor de 77 están en la categoría de alto riesgo, dijo la ministra de Salud de 1. A los pacientes de alto riesgo de Nipah se les ha pedido que permanezcan dentro de sus casas. Las rutas de los dos pacientes de Nipah que murieron se han publicado para que las personas no tomen esas rutas.2. En Kozhikode, se han impuesto restricciones que prohíben la reunión de un gran número de personas en festivales y funciones.3. 58 salas en nueve panchayats en Vadakara taluk del distrito de Kozhikode han sido declaradas zonas de contención. Servicios esenciales y solo se permiten la entrada y salida en estas áreas. Las tiendas que venden productos esenciales podrán funcionar de 7 am a 5 pm. No se ha dado una barra de tiempo para farmacias y centros de salud."
    );
  };

  return (
    <div>
      <Context.Provider value={obj}>
        <button
          onClick={EnglishContent}
          style={{ width: "150px", height: "70px" ,marginLeft:'720px'}}
        >
          English
        </button>
        <button
          onClick={spanishContent}
          style={{ width: "150px", height: "70px" }}
        >
          Spanish
        </button>
        <LanguageStateChange />
      </Context.Provider>
    </div>
  );
};

export default LanguageSwitcher;
