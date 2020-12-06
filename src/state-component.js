import React, {useState} from "react";
import data from "./data";


const ShowHide = () => {
    const [show, setShow] = useState (false);
    return (
     <div> 
        <button className = "btn" onClick = {() => setShow(!show)}>show and hide items</button> 
{show && <Item />}
</div>
      
    )
}

const Item = () => {

    const people = (data);

    return (
        <>
        <h3>List of Famous People</h3>
       <section className = "handleName">
        {people.map((person) => {
            const {id, fullName, bio, imgSrc, profession} = person;
           
        
            return (
               
            <div key = {id} className = "Profile">
            <img className = "img" src = {imgSrc} alt= "..."/>   
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <h3>{profession}</h3>
            
            
           
          </div>
               
            );
        })}
        </section>
        </>

    );
};

export default ShowHide;


