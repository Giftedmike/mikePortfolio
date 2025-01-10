import React from 'react'

const App = () => {
  return (
    <>
      <div className='container text-center'>
        <div className="row py-1 border-solid">
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

      
    </>
  )
}

export default App