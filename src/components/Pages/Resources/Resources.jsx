import React, { useEffect, useReducer, useState } from "react";
import "./Resources.css";
import { HiHome } from "react-icons/hi2";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Technologyes } from "../../../assets/assets";
import { Technologyes1 } from "../../../assets/assets";
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";


const Resources = () => {
  console.log(Technologyes1[0].technology);

  const [Select, setSelect] = useState("Information Technology");
  const [TeData, setTeData] = useState("AI");
  const [Tehide, setHide] = useState(false);
//  console.log(TeData.job_roles[0])

  const findData = async () => {
    console.log("fi");
    const Tedaa = Technologyes1.find((item) => item.technology === Select);

    setTeData(Tedaa);
  };

  useEffect(() => {
    findData();
  }, [Select]);

  return (
    <div className="Resources-container">
      
      <div className="resources-navbar">
        <div className="res-navbar">
          <HiHome size={30} />{" "}
          <Link to="/">
            <FaArrowLeft size={20} /> Back
          </Link>
        </div>
      </div>

      <div className="text-container">
        <span onClick={()=>setHide(!Tehide)} className="Hidetoggle"><CiMenuKebab /> Menu</span>


        <div className={`left-slidebar ${Tehide?"hide":"left-slidebar"} `}>

          
          {Technologyes.map((lisname) => (
            <div
              className={` ${Select === lisname ? "active" : "te"}`}
              key={lisname}
              onClick={() => {
                setSelect(lisname); setHide(!Tehide)
              }}
            >
              <MdKeyboardArrowRight />
              {lisname}
            </div>
          ))}
        </div>

        {/* Heading */}

     {/* RIGHT TEXTBAR */}
        <div className="right-textbar">
          {!TeData ? (
            <p style={{ padding: "40px", fontSize: "20px" }}>Loading...</p>
          ) : (
            <>
              {/* Heading */}
              <div className="heading">
                <h1>{TeData.technology}</h1>
                <p>{TeData.short_description}</p>
              </div>

              {/* Detailed Overview / Applications / Key Concepts */}
              <div className="Detailed-Key">
                <div className="Detailed-Application" >
                  <div className="Detailed">
                    <h2>DETAILED OVERVIEW</h2>
                    <p>{TeData.detailed_description}</p>
                  </div>
                  <div className="Application">
                    <h2>Applications</h2>
                    {TeData.applications?.map((c) => (
                      <p key={c}>{c}</p>
                    ))}
                  </div>
                </div>
                <div className="Key-Concepts">
                  <h2>KEY CONCEPTS</h2>
                  <div className="key">
                  {TeData.key_concepts?.map((c) => (
                    <p key={c}>
                      <GoDotFill /> <span>{c}</span>
                    </p>
                  ))}
                  </div>
                </div>
              </div>

              {/* TOOLS & TECHNOLOGIES STACK */}
              <div className="TOOLS-container">
                <h2>TOOLS & TECHNOLOGIES STACK</h2>
                <div className="Tools">
                  {TeData.tools_and_technologies &&
                    Object.entries(TeData.tools_and_technologies).map(
                      ([category, items]) => (
                        <div key={category} className="inr-tools">
                          <h3
                            style={{
                              textTransform: "uppercase",
                              marginBottom: "5px",
                            }}
                          >
                            {category}
                          </h3>
                          <div className="inr-p">
                            {items.map((tool) => (
                              <p key={tool}>{tool}</p>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                </div>
              </div>

              {/* LEARNING ROADMAP */}
              <div className="Learning-roadmap" >
                <h2>LEARNING ROADMAP</h2>
                <div className="Learmomg">
                  {TeData.roadmap &&
                    Object.entries(TeData.roadmap).map(([category, items]) => (
                      <div key={category}  className="roadmap-card">
                        <h3
                          style={{
                            textTransform: "uppercase",
                            marginBottom: "5px",
                          }}
                        >
                          {category}
                        </h3>
                        <div className="roadmap">
                          {items.map((tool) => (
                            <p key={tool}>
                              <GoDotFill /> {tool}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* INTERVIEW QUESTIONS */}
              <div className="Interview-Ouestions">
                <h2>INTERVIEW QUESTIONS</h2>
                <div className="Interview">
                  {TeData.interview_questions?.map((c) => (
                    <p key={c}><FaArrowRightLong /> {c}</p>
                  ))}
                </div>
              </div>

              {/*SALARY_INFO & GLOBAL */}
              <div className="Salary_info-Global">
                <div className="Salary_info">
                  <h2>Salary Information</h2>
                  {TeData.salary_info &&
                    Object.entries(TeData.salary_info).map(
                      ([category, items]) => (
                        <div key={category} style={{ marginBottom: "15px" }} className="Salary">
                          <h3
                            style={{
                              textTransform: "uppercase",
                              marginBottom: "5px",
                            }}
                          >
                            {category}:
                          </h3>
                          <div>
                            {Object.entries(items).map(([role, salary]) => (
                              <p key={role}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{role}:</strong> {salary}
                              </p>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                </div>
                <div className="Jobroles">
                  <h2>JOB ROLES:</h2>
                  <div className="Jobroles-text">
                    {TeData.job_roles?.map((items)=> (
                       <p key={items}><FaArrowRightLong /> {items}</p>
                    ))}
                  </div>
                </div>
              </div>


              {/* PROS_AND_CONS & FUTURE_TRENDS */}
              
              <div className="Pro-Future">

                <div className="Pro-Cons">
                  <h2>Benefits & Drawbacks</h2>
                     {TeData.pros_and_cons &&
                    Object.entries(TeData.pros_and_cons).map(
                      ([category, items]) => (
                        <div key={category} style={{ marginBottom: "15px" }} >
                          <h3
                            style={{
                              textTransform: "uppercase",
                              marginBottom: "5px",
                            }}
                          >
                            {category}:
                          </h3>
                          <div className="Pro-Cons-text">
                            {items.map((role) => (
                              <p key={role}>
                               <FaArrowRightLong /> {role}
                              </p>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                </div>

                <div className="Future">
                   <h3>Future Trends:</h3>
                   <div className="inr-Future">
                    {TeData.future_trends?.map((items)=>(
                      <p> <FaArrowRightLong />{items}</p>
                    ))}
                   </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resources;
