import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h4 className="lead">
              Feel free to contact me for any work or suggestions below: 
              </h4>
              <br></br>
              <h4>LinkedIn :
                  {resumeData.linkedinId}
              </h4>
              <h4>Email: thompsonel2011@gmail.com</h4>
            </div>
          </div>
        </section>
        );
  }
}