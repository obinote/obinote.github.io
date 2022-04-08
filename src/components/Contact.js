import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container text-center">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="text-dark">Contact</h2>
            <hr />
          </div>
        </div>
        <div className="row row-value">
          <div className="col-sm-6 offset-sm-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telp">No Telp</label>
                <input
                  type="tel"
                  id="telp"
                  className="form-control"
                  placeholder="telp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="messenger">Messenger</label>
                <textarea
                  className="form-control"
                  rows={10}
                  placeholder="messenger"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sent
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
