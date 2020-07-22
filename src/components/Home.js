import React from "react";
import Image from "../assets/MyImage.jpg";
export default function Home() {
  const [click, setClick] = React.useState(false);
  const [category, setCategory] = React.useState([
    "Accounting & Finance(2)",
    "Education & Training(2)",
    "Graphics Design(2)",
    "Restaurant & Food(3)",
    "Website & Software(1)",
  ]);
  const [image, setImage] = React.useState(Image);
  const [state, setState] = React.useState([
    {
      skillsheading: "Graphics Design, Website & Software",
      name: "Priyansh Vatsal",
      location: "Laxminagar Colony, Jaspur, India",
      salary: "$10 per hour",
      skills: ["HTML", "Photoshop", "PHP"],
    },
    {
      skillsheading: "Graphics Design, Website & Software",
      name: "Priyansh Vatsal",
      location: "Laxminagar Colony, Jaspur, India",
      salary: "$10 per hour",
      skills: ["HTML", "Photoshop", "PHP"],
    },
    {
      skillsheading: "Graphics Design, Website & Software",
      name: "Priyansh Vatsal",
      location: "Laxminagar Colony, Jaspur, India",
      salary: "$10 per hour",
      skills: ["HTML", "Photoshop", "PHP"],
    },
    {
      skillsheading: "Graphics Design, Website & Software",
      name: "Priyansh Vatsal",
      location: "Laxminagar Colony, Jaspur, India",
      salary: "$10 per hour",
      skills: ["HTML", "Photoshop", "PHP"],
    },
  ]);
  return (
    <>
      <nav>
        <div className="nav">
          <h1>Candidate List</h1>

          <div className="menu">
            <div
              className="menu-bar"
              onClick={() => {
                if (click) {
                  setClick(false);
                } else {
                  setClick(true);
                }
              }}
            >
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        {click ? (
          <div className="menu-list">
            <li>
              <ul>
                <a href="/login">Login</a>
              </ul>
              <ul>
                <a href="/register">Register</a>
              </ul>
            </li>
          </div>
        ) : (
          ""
        )}
        <div className="route-option">
          <div
            className="button3"
            onClick={() => {
              window.location.href = "/login";
            }}
          >
            Login
          </div>
          <div
            className="button3"
            onClick={() => {
              window.location.href = "/register";
            }}
          >
            Register
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="left">
            <div className="left-second">
              {state.map((data) => (
                <div className="user-one">
                  <div className="user">
                    <img src={image} />

                    <div className="userone-detail">
                      <h5>{data.skillsheading}</h5>
                      <h3>{data.name}</h3>
                      <div className="userone-address">
                        <div className="userone-address1">
                          <h5>Location: </h5> <p>{data.location}</p>
                        </div>
                        <div className="userone-address2">
                          <h5>Salary: </h5> <p>{data.salary}</p>
                        </div>
                      </div>
                      <div className="userone-skils">
                        {data.skills.map((skill) => (
                          <div className="skills">{skill}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="left-last">
              <div className="button1">
                <a href="">Prev</a>
              </div>
              <div className="button2">
                <a href="">Next</a>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search">
              <h2>Search Keywords</h2>
              <input type="text" placeholder="e.g.web desgin" />
            </div>
            <div className="category">
              <h2>Candidate Category</h2>
              <li>
                {category.map((categ) => (
                  <ul>
                    <input type="checkbox" />
                    <p>{categ}</p>
                  </ul>
                ))}
              </li>
            </div>
            <div className="location">
              <h2>Location</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
