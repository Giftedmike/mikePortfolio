import React from 'react'

const App = () => {
  return (
    <>
      <div className='container text-center'>
        <div className="row py-5 border-solid">
          <div className="col pb-1">
            <h2 className='text-light'>Mike's Portfolio <br /> Software Engineer</h2>
            <img src="https://media.licdn.com/dms/image/v2/C5622AQEuZSwWcbn4Xw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1597068097698?e=2147483647&v=beta&t=-DDMrmlKavklNQ1pCK8WpduyaDh0Dv-XBbaTbhUNbiA" alt="" />
          </div>
          <div className="col">
            <div className="row">
              <div className="col-md-6 pb-4">
                <button className='btn btn-warning p-1'>
                  <img src="Linkedin.png" alt="" />
                </button>
              </div>
              <div className="col-md-6 pb-4">
                <a href="www.linkedin.com/in/michael-patrick-54ab80231">
                <button className='btn btn-primary p-5' id='linkedin'>linkedIn</button>
                </a>
              </div>
              <div className="col-md-6 pb-4">
                <button className='btn btn-primary p-1'>
                  <img src="github-icon-7.png" alt="" />
                </button>
              </div>
              <div className="col-md-6 pb-4">
                <button className='btn btn-warning p-5' id='git'>Github</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='text-center text-light pb-5'>Work Experience</h1>
      <div className="container text-center ps-5">
        <div className="row">
          <div className="col-md-4 pb-3">
          <div className="card" style={{width: '18rem'}}>
            <img src="fidelity.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">I.T Support <br /> staff </h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="www.linkedin.com/in/michael-patrick-54ab80231" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
          </div>
          <div className="col-md-4 pb-3">
          <div className="card" style={{width: '18rem'}}>
            <img src="sqi.jpeg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Frontend Engineer Internship</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="www.linkedin.com/in/michael-patrick-54ab80231" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
          </div>
          <div className="col-md-4 pb-3">
          <div className="card" style={{width: '18rem'}}>
            <img src="uog.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Junior Database Programmer</h5>
              <p classn ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="www.linkedin.com/in/michael-patrick-54ab80231" className="btn btn-primary">LinkedIn</a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App