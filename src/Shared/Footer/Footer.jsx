import React from "react";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white pt-4 mt-4">
        <div className="container p-4 pb-0">
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example29"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example29">
                      Email address
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div className="text-center p-3">
          © 2020 Copyright: Created by me !!{" "}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
