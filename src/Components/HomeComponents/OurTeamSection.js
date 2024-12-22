import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import teamMember1 from "../../Assets/teamMember1.png";
import teamMember2 from "../../Assets/teamMember2.png";
import teamMember3 from "../../Assets/teamMember3.png";
import teamMember4 from "../../Assets/teamMember4.png";

const OurTeamSection = () => {
  const teamMembers = [
    {
      name: "James Martins",
      title: "Founder and CEO",
      image: teamMember1,
      social: {
        facebook: "https://www.facebook.com/your-facebook-page1",
        twitter: "https://twitter.com/your-twitter-handle1",
        instagram: "https://www.instagram.com/your-instagram-page1",
        linkedin: "https://www.linkedin.com/in/your-linkedin-profile1",
      },
    },
    {
      name: "John Doe",
      title: "Co-Founder & CTO",
      image: teamMember2,
      social: {
        facebook: "https://www.facebook.com/your-facebook-page2",
        twitter: "https://twitter.com/your-twitter-handle2",
        instagram: "https://www.instagram.com/your-instagram-page2",
        linkedin: "https://www.linkedin.com/in/your-linkedin-profile2",
      },
    },
    {
      name: "Jane Smith",
      title: "Head of Marketing",
      image: teamMember3,
      social: {
        facebook: "https://www.facebook.com/your-facebook-page3",
        twitter: "https://twitter.com/your-twitter-handle3",
        instagram: "https://www.instagram.com/your-instagram-page3",
        linkedin: "https://www.linkedin.com/in/your-linkedin-profile3",
      },
    },
    {
      name: "David Lee",
      title: "Chief Financial Officer",
      image: teamMember4,
      social: {
        facebook: "https://www.facebook.com/your-facebook-page4",
        twitter: "https://twitter.com/your-twitter-handle4",
        instagram: "https://www.instagram.com/your-instagram-page4",
        linkedin: "https://www.linkedin.com/in/your-linkedin-profile4",
      },
    },
  ];

  return (
    <section style={{ backgroundColor: "#f8f9fa", padding: "5rem 0" }}>
      <div className="container mb-5">
        <div
          style={{
            width: "80px",
            height: "2px",
            background: "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
            margin: "0 auto 1rem",
          }}
        ></div>
        <div className="text-center">
          <b
            className="fw-bold"
            style={{
              fontSize: "1.5rem",
              color: "#3F0B55",
              fontFamily: "Montserrat",
            }}
          >
            Our Team
          </b>
        </div>
        <h1 className="fw-bold"
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            marginTop: "1rem",
            fontSize: "2rem",
            color: "#3F0B55",
            fontFamily: "Montserrat",
          }}
        >
          Meet with Visiflux Team Member
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col">
              <div className="card shadow" style={{ borderRadius: "1rem" }}>
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                  style={{ borderRadius: "1rem 1rem 0 0" }}
                />
                <div className="card-body">
                  <h5
                    className="card-title fw-bold"
                    style={{
                      fontSize: "1rem",
                      color: "#3F0B55",
                      fontFamily: "Montserrat",
                    }}
                  >
                    {member.name}
                  </h5>
                  <p
                    className="card-text text-purple-500 fw-medium"
                    style={{ fontSize: "0.8rem", fontFamily: "Montserrat" }}
                  >
                    {member.title}
                  </p>
                  <div
                    className="social-icons-container"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginTop: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: "2px",
                          height: "18px",
                          background:
                            "linear-gradient(to right, #C0880E, #FFB617, #A07009)",
                        }}
                      ></div>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {member.social.facebook && (
                        <a
                          href={member.social.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook
                            style={{
                              fontSize: "1.2rem",
                              color: "#3F0B55",
                              fontWeight: "bold",
                            }}
                          />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaTwitter
                            style={{
                              fontSize: "1.2rem",
                              color: "#3F0B55",
                              fontWeight: "bold",
                            }}
                          />
                        </a>
                      )}
                      {member.social.instagram && (
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram
                            style={{
                              fontSize: "1.2rem",
                              color: "#3F0B55",
                              fontWeight: "bold",
                            }}
                          />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin
                            style={{
                              fontSize: "1.2rem",
                              color: "#3F0B55",
                              fontWeight: "bold",
                            }}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
