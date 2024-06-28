import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Advertiser - </span><a className="uppercase" href="https://www.instagram.com/bluestarparlor/" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520", fontWeight: "bold"}}> Blue Star Parlor</a>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> April 2024 - June 2024
          </span>
          <p>
            <p style={{fontStyle: "italic", paddingBottom: "0"}}>Brand Awareness Campaign (Meta Ads, Google Search Ads)</p>
            Created Google Search and Meta Ads tailored to the restaurant’s target audience and marketing goals
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">Advertiser - </span> <a className="uppercase" href="https://bunnysflowers.org/" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520", fontWeight: "bold"}}>Bunny's Flower</a>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> March 2024 - May 2024
          </span>
          <p>
            <p style={{fontStyle: "italic", paddingBottom: "0"}}>Site Traffic & Brand Awareness Campaign (Google Search Ads)</p>
            Executed a targeted search campaign with goals to enhance brand awareness and site traffic for non-profit
          </p>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6>
            <span className="uppercase">E-Commerce Logistics Manager - </span><a className="uppercase" href="https://www.pietrastudio.com/" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520", fontWeight: "bold"}}>Pietra</a>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> March 2022 - May 2023
          </span>
          <p>
            Oversaw movement of goods from suppliers to customers, managed inventory, warehousing, transportation, and delivery operations. 
            <p style={{paddingBottom: "0"}}>Ensured seamless order fulfillment and optimized logistics processes to enhance client satisfaction and reduced company costs.</p>
          </p>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Education
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>COOP Fellowship - </span> <span style={{color: "#DAA520"}}>Digital Marketing </span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> February 2024 - June 2024
          </span>
          <p>
            Focused on developing technical expertise in SEM Ads, Paid Social, and
            Programmatic ads, as well as cultivating soft skills in communication, conflict resolution, and relationship building.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Kepler Academy - </span> <span style={{color: "#DAA520"}}>Paid Search Extern</span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> March 2024 - May 2024
          </span>
          <p>
          Acquired advanced skills in Google Ads and gained hands-on experience in campaign creation, targeting, optimization, and analysis by fine-tuning ad settings, bids, and keywords.
          </p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Computer Information Systems, B.S. - </span><span style={{color: "#DAA520"}}>Brooklyn College </span>
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> June 2021
          </span>
          <p>
          {/* <ul>
            <li>
                Multimedia Programming (HTML, CSS, JavaScript)
              </li>
              <li>
              Design & Implementation Web Apps (Photoshop/Figma)
              </li>
              <li>
              Computer Applications (Word, Excel, PowerPoint)
              </li>
              <li>
                Data Structures (Java)
              </li>
              <li>
                Object-Oriented Java
              </li>
              <li>
                Database Systems (SQL)
              </li>
              <li>
                Artificial Intelligence (Python)
              </li>
            </ul> */}
          </p>
        </div>

        <div className="resume-content">
        <h6 className="uppercase">
            <span>Certifications </span>
          </h6>
          <ul>
            <li>
              <a href="https://skillshop.exceedlms.com/student/award/BouMqNN4fYEB8s2jaigCUawZ" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520"}}>Google Ads Search Certification</a>
            </li>
            <li>
              <a href="https://skillshop.exceedlms.com/student/award/JK1PzQpX4T9SMW3SowSfnh2p" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520"}}>Google Ads Measurement</a>
            </li>
            <li>
            <a href="https://skillshop.exceedlms.com/student/award/6JZLqxbxrNo9nb9aoNEiNuFt" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520"}}>Google Ads Display Certification</a>
            </li>
            <li>
            <a href="https://www.credly.com/badges/e5a78194-e066-4f64-aef3-25c82faa66ae/public_url" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520"}}>Microsoft Advertising Search</a>
            </li>
            <li>
              <a href="https://app.hubspot.com/academy/achievements/kydrtws4/en/1/muhammad-saim-arif/email-marketing" target="_blank" rel="noopener noreferrer" style={{color: "#DAA520"}}>HubSpot Email Marketing</a>
            </li>
          </ul>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Search Ads - Google/Bing</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Meta Ads</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Email Marketing - Klaviyo/MailChimp</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">CMS - Shopify/Wordpress/HubSpot</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            <div className="resume-content">
              <h6 className="uppercase">Salesforce Marketing Cloud</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">PhotoShop/Canva</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Google Suite/Analytics</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Excel/Word/Powerpoint</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">HTML/CSS/JS</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />                
                <i className="fa fa-star" />              
              </p>
            </div>

            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/men.jpg"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Personal Info
              </h6>
              <div className="col m12 l12 xl9 p-none" style={{width: "85%"}}>
                <p className="second-font">
                  {`I'm`} a Digital Marketing Specialist with a passion for advertising &amp; driving business' success.
                  My experience equipped me with a rich and diverse skill set. I bring to the table a range of transferable skills, including adept problem-solving abilities, strong project management expertise, and a keen client-focused approach. 
                  I am eager to harness these skills and experiences in my next endeavor, contributing to its success and growth.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span className="font-weight-700">Name: </span>
                    Saim Arif
                  </li>
                  <li>
                    <span className="font-weight-700">Location: </span>
                    New York, New York
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    saim@saimarif.com
                  </li>
                </ul>
              </div>
              {/* <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Location: </span>
                    New York, New York
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    saim@saimarif.com
                  </li>
                </ul>
              </div> */}
              {/* <a href="#" className="btn font-weight-700">
                Download Resume <i className="fa fa-file-pdf-o" />
              </a>
              <Link href={`/blog-${dark ? "dark" : "light"}`}>
                <a className="btn btn-blog font-weight-700">
                  My Blog <i className="fa fa-edit" />
                </a>
              </Link> */}
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges" style={{padding: "34px 50px"}}>
          <span style={{fontSize: "25px"}}>"</span>
          <span style={{fontStyle: "italic", color: "#FFFFFF", lineHeight: "0"}}>
            Saim's attention to detail and creative approach stood out. 
            His ability to understand our brand and tailor content 
            to resonate with our target audience was impressive. The engaging 
            and well-crafted creatives captured our message and improved 
            performance metrics.
          </span>
          <span style={{fontSize: "25px"}}>" </span>  
          <span style={{color: "#DAA520", fontSize: "16px", fontStyle: "normal"}}>- Blue Star Parlor</span>
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
