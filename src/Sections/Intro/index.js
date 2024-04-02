"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

import Paragraph from "@/components/Paragraph";
import Heading from "@/components/Heading";


function Intro({ content }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-10 col-md-8 mb-5">
          <Heading content={content} />
          <Paragraph content={content} />

          <p className="fs-5 d-flex text-dark my-3">
            <Link
              href="https://github.com/Prabhs-kaur"
              className="d-flex justify-content-start align-items-center text-dark pr-5"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </Link>
            <Link
              href="http://www.linkedin.com/in/prabhjotkaur1111"
              className="d-flex justify-content-start align-items-center text-dark"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </Link>
          </p>
         
          <a href="/assets/Resume.pdf">
            <button className="btn-animated" href="#intro">
              <span>Resume</span>
            </button>
          </a>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
              <h5 className="card-title pb-5">
                <img src="/assets/frontend.png" className="rounded" alt="..." />
              </h5>
              <p className="card-text fw-bold">Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
              <h5 className="card-title pb-5">
                <img src="/assets/backend.png" className="rounded" alt="..." />
              </h5>
              <p className="card-text fw-bold">Software Design</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
              <h5 className="card-title pb-5">
                <img src="/assets/design.png" className="rounded" alt="..." />
              </h5>
              <p className="card-text fw-bold">UI/UX Design</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-bg-dark mb-3">
            <div className="card-body d-flex flex-col justify-content-center align-items-center p-5">
              <h5 className="card-title pb-5">
                <img src="/assets/software.png" className="rounded" alt="..." />
              </h5>
              <p className="card-text fw-bold">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
