
import React, { useEffect, useState } from "react";
import './product.css';

const Product = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [selectedCard, setSelectedCard] = useState(null);

   useEffect(() => {
      fetch("https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20")
         .then(response => response.json())
         .then(usefulData => {
            console.log(usefulData.results);
            setLoading(false);
            setData(usefulData.results);
         })
         .catch(error => {
            setLoading(false);
            setError(true);
         });
   }, []);

   const handleCardClick = (card) => {
      setSelectedCard(card);
   }

   // if (handleCardClick){
   //    selectedCard.color="yellow";
   // }

   return loading ? <h3 style={{ textAlign: "center" }}>Loading...</h3> : error ? <h3 style={{ textAlign: "center" }}>something went wrong...</h3> : (

      <div className="container">
         <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
               {selectedCard && (
                  <div className="card m-2 shadow-sm bg-body-tertiary rounded" >
                     <div className="row p-5">
                        <div className="col-md-3">
                           <img src={selectedCard.picture.medium} alt="Profile" className="card-img-top" style={{ width: "100px", borderRadius: "50%" }} />
                        </div>
                        <div className=" col-md-9">
                           <h1 className="card-text mb-2 text-danger text-decoration-underline">{selectedCard.name.title} {selectedCard.name.first} {selectedCard.name.last} </h1>
                           <i className="card-link text-primary fst-normal">{selectedCard.location.street.number},  </i>
                           <i className="fst-normal">{selectedCard.location.street.name},{selectedCard.location.city},{selectedCard.location.state},{selectedCard.location.country},{selectedCard.location.postcode}</i>
                           <p className="card-subtitle fs-6">{selectedCard.location.timezone.offset}-{selectedCard.location.timezone.description}</p>
                           <p className="card-subtitle fs-6 text-secondary">{selectedCard.gender}</p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
         <div className="row justify-content-center mb-5">
            <div className="col-lg-3 " style={{ display: "contents" }}>
               {
                  data.map((name) => (
                     <div
                        key={name}
                        className={`card m-2 shadow-sm  rounded ${selectedCard === name ? 'selected' : ''
                           }`}
                        style={{ width: "19rem" }}
                        onClick={() => handleCardClick(name)}
                     >
                        <div className="card-body " >
                           <p className="card-subtitle fs-6">{name.gender} . {name.nat}</p>
                           <h5 className="card-text mb-2">{name.name.title} {name.name.first} {name.name.last} </h5>
                           <h6 className="card-link text-danger">{name.email}</h6>
                        </div>
                     </div>
                  ))
               }
            </div>

         </div>
      </div>
   );
};

export default Product;
