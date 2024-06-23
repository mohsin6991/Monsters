import { Component } from "react";
import '../card-list/card-list.styles.css'

const cardContainer= ({mons}) =>{
    
       // const { mons } = this.props;
        return(
    <div className="card-list">
        {
          mons.map((monster) => {
            const { id, name, email } = monster;
            return (
              <div key={id} className="card-container">
                <img 
                  alt={`monster ${name}`}
                  src={`https://robohash.org/${id}?set=set2&size=180x180`}
                />
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            );
          })
        }
    </div>
        )
    


}

export default cardContainer;