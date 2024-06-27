import { memo, useContext, useEffect, useState } from "react";
import { Context } from "../context/context";
import { LocalVideo } from "./ItemDetailsContent";

import dynamic from "next/dynamic";

const ProjectSlider = dynamic(() => import("./ItemDetailsContent"), {
  ssr: false,
});

const ProjectDetails = () => {
  const {
    activeProject,
    showProject,
    showProjectFunction,
    activeProjectFunction,
  } = useContext(Context);
  const [length, setLength] = useState(null);
  useEffect(() => {
    setLength(document.querySelectorAll("#bl-panel-work-items>div").length);
  }, []);

  return (
    <div
      className={`bl-panel-items ${showProject ? "bl-panel-items-show" : ""}`}
      id="bl-panel-work-items"
    >
      {/* Project Starts */}
      <div
        data-panel="panel-1"
        className={activeProject == 1 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img
              className="responsive-img"
              src="images/projects/bluestarparlor.png"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Google Search & Meta Ads Camapign</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase"><a href="https://www.bluestarparlor.com/">Blue Star Parlor</a></span>
              </li>
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">05/22/2024</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">05/31/2024</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Campaign Objective</span> :{" "}
                <span className="font-weight-400">
                  Brand Awareness | KPIs: CPC, CTR
                </span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://docs.google.com/presentation/d/19TaG-6q4PLQQuRyfy_2AUXjNABzv54ucAesXBdpc_48/edit?usp=sharing"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-2"
        className={activeProject == 2 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            {/* <ProjectSlider /> */}
            <img
              className="responsive-img"
              src="images/projects/bunnysflower.png"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Google Search Ads</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase"><a href="https://bunnysflowers.org/">Bunny's Flower</a></span>
              </li>
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">03/25/2024</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">04/22/2024</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Campaign Objective</span> :{" "}
                <span className="font-weight-400">
                  Website Traffic | KPIs: Clicks, CPC, CTR 
                </span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1JaoAkNaBlajGS1gr-kwMX4ZuIq8vOjkO/view?usp=drive_link"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-3"
        className={activeProject == 3 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <div className="videocontainer">
              {activeProject == 3 && (
                <iframe
                  className="youtube-video"
                  src="https://www.youtube.com/embed/7e90gBu4pas"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen=""
                />
              )}
            </div>
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Youtube Video</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-700"> Client </span>:{" "}
                <span className="font-weight-400 uppercase">Photodune</span>
              </li>
              <li>
                <i className="fa fa-calendar-o" />
                <span className="font-weight-700"> Start Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/09/2022</span>
              </li>
              <li>
                <i className="fa fa-calendar-check-o" />
                <span className="font-weight-700"> End Date </span>:{" "}
                <span className="font-weight-400 uppercase">02/08/2023</span>
              </li>
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Adobe After Effects, Adobe Audition
                </span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="#"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-4"
        className={activeProject == 4 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
          <img
              className="responsive-img"
              src="images/projects/shopifytheme.png"
              alt="project"
            />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Custom Shopify Liquid Theme</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">Shopfiy hompage for BlackDog Fit, a fitness apparel brand. It effectively showcases the brand, products, and unique selling points. This theme features a personalized header, clean product highlights, and big collection banners.</span>
              </li>
             
              <li>
                <i className="fa fa-cogs" />{" "}
                <span className="font-weight-700"> Used Technologies</span> :{" "}
                <span className="font-weight-400 uppercase">
                  Liquid code, NextJS, JavaScript, HTML, CSS, Github 
                </span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://github.com/muhammadarif2113/securehome2-theme"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-5"
        className={activeProject == 5 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/apple.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Apple Newsletter Email Clone</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">Created a responsive template that easily allows changing stories for Apple's daily newsletter "Apple News", coded with Foundation Framework for emails.</span>
              </li>
              <li>
                <a href="https://github.com/muhammadarif2113/apple-newsletter-email" target="_blank"> <i className="fa fa-github" style={{fontSize: "25px"}} /></a>
              </li>
            </ul>
            <hr />
            <a
              href="images/projects/applenewsletterclone.html"
              target="_blank"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-6"
        className={activeProject == 6 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/airline.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Airline Marketing Email</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">A promotional email sent from an airline's company advertising a discount on domestic flights. Designed in Photoshop and coded using MJML.</span>
              </li>
              <li>
                <a href="https://github.com/muhammadarif2113/airline-promo-email" target="_blank"> <i className="fa fa-github" style={{fontSize: "25px"}} /></a>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://muhammadarif2113.github.io/airline-promo-email/"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-7"
        className={activeProject == 7 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/myprotein.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">MyProtein Transaction Email Clone</h3>
            <ul className="project-details second-font">
              <li>
                <i className="fa fa-user" />
                <span className="font-weight-400">A clone of a transactional email sent by MyProtein, coded with the email framework MJML.</span>
              </li>
              
              <li>
              <a href="https://github.com/muhammadarif2113/transactional-email" target="_blank"> <i className="fa fa-github" style={{fontSize: "25px"}} /></a>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://muhammadarif2113.github.io/transactional-email"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-8"
        className={activeProject == 8 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/nba.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">NBA Store Promotional Email Clone</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">A promotional email clone sent from NBAStore. Coded with MJML. </span>
              </li>
              <li>
              <a href="https://github.com/muhammadarif2113/nbastore-promo-email" target="_blank"> <i className="fa fa-github" style={{fontSize: "25px"}} /></a>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="https://muhammadarif2113.github.io/nbastore-promo-email"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Project Starts */}
      <div
        data-panel="panel-9"
        className={activeProject == 9 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/suckerz-welcome-html.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Suckerz Klaviyo Welcome Email Flow</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">This is a Welcome Series and Lead Nurturing Flow for the CPG brand Suckerz.
                                This flow is triggered when a subscriber signs up for promotional emails.
                                The first email sent is an offer for signing up followed by lead-nurturing emails that aim 
                                to build customer interest for their low-sugar sweets.</span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="images/projects/suckerz-welcome.html"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>
      {/* Project Ends */}
      {/* Portfolio Navigation Starts */}


<div
        data-panel="panel-10"
        className={activeProject == 10 ? "bl-show-work" : ""}
      >
        <div className="row">
          {/* Project Main Content Starts */}
          <div className="col s12 l6 xl6 section-padding section-padding-right-none">
            <img src="images/projects/vc-welcome.png" alt="project" />
          </div>
          {/* Project Main Content Ends */}
          {/* Project Details Starts */}
          <div className="col s12 l6 xl6 section-padding">
            <h3 className="font-weight-700 uppercase">Vegancuts Klaviyo Welcome Email Flow</h3>
            <ul className="project-details second-font">
              <li>
                <span className="font-weight-400">This is a Welcome Series flow for a subscription box company, Vegancutz.
                                This flow is triggered when a subscriber signs up for promotional emails.
                                The first email sent is an offer for signing up followed by lead-nurturing emails that aim 
                                to build customer interest for their vegan and cruelty-free snacks and beauty products.</span>
              </li>
            </ul>
            <hr />
            <a
              target="_blank"
              href="images/projects/vegancuts-welcome.html"
              className="waves-effect waves-light btn font-weight-700"
            >
              Preview <i className="fa fa-external-link" />
            </a>
          </div>
          {/* Project Details Ends */}
        </div>
      </div>










      <nav>
        {/* Previous Work Icon Starts */}
        <span
          className="control-button bl-previous-work"
          onClick={() =>
            activeProjectFunction(activeProject == 1 ? 1 : activeProject - 1)
          }
        >
          <i className="fa fa-angle-left" />
        </span>
        {/* Previous Work Icon Ends */}
        {/* Close Work Icon Starts */}
        <img
          alt="close"
          src="images/close-button.png"
          className="control-button bl-icon-close"
          onClick={() => {
            showProjectFunction();
            activeProjectFunction(null);
          }}
        />
        {/* Close Work Icon Ends */}
        {/* Next Work Icon Starts */}
        <span
          className="control-button bl-next-work"
          onClick={() =>
            activeProjectFunction(
              activeProject == length ? 1 : activeProject + 1
            )
          }
        >
          <i className="fa fa-angle-right" />
        </span>
        {/* Previous Work Icon Ends */}
      </nav>
      {/* Portfolio Navigation Ends */}
    </div>
  );
};
export default memo(ProjectDetails);
