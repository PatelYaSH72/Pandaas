import React from "react";
import "./RosurcesAi.css";
import { GrResources } from "react-icons/gr";
import { RiRobot2Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const RosourcesAi = () => {

  

  return (
    <div className="RosAI-container" id="Services">
      <div className="Left-Rosources">
        <div className="left-text">
          <h1>
            Resources & Information <br />
            For Technologies
          </h1>
          <p> <FaArrowRightLong />&nbsp;&nbsp;&nbsp;
            Pandas Learning: Data Science, Web Development, AI/ML aur dusri{" "}
            <br />
            technologies ke resources aur information.
          </p>
        </div>
        <div className="btn-container">
           <button><GrResources size={20}/> <Link to='/Resources-Information'>VIEW ALL RESOURCES</Link></button>
        </div>
       
      </div>

      <div className="right-Rosources">
        <div className='right-text'>
          <h1>
            AI Tools & information <br />
            for Technologies
          </h1>
          <p> <FaArrowRightLong />
               &nbsp;&nbsp;&nbsp;Pandas Learning offers quick and useful resources on popular <br /> 
            AI tools and their uses.
          </p>
        </div>
        <div className="btn-container">
            <button><RiRobot2Line size={20}/><Link to='/Ai-Tools'>  EXPLORE AI TOOLS</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default RosourcesAi;
