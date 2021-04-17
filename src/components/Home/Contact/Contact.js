import React from 'react';
const Contact = () => {
    return (
       <section className="contact my-5 py-5 bg-info">
           <div className="container">
               <div className="section-header text-center mb-5">
                    <h5 className="text-dark mb-3">Contact</h5>
                    <h1>Let us handle your <br/> project, professionally.</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center mt-4">
                           <button type="button" className="btn btn-dark"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;