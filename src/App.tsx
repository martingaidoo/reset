import './App.css'
import { ComponentDownCount } from './components/ComponentDownCount'
import { ComponentInstagram } from './components/ComponentInstagram'
function App() {
  return (
      <div className="app-container text-white">

          <div className='text-white'>
              <div className="container pt-2">
                  <h1 className='text-center anton-regular'>RESET</h1>
                  <ComponentDownCount/>
              </div>

              {/*<div className="container mt-2">*/}
              {/*    <div className="row mt-2 ms-1 me-1">*/}
              {/*        <div className="col-sm-12 col-md-12 col-lg-8 ms-auto me-auto mt-2">*/}
              {/*            <iframe*/}
              {/*                style={{borderRadius: "12px"}}*/}
              {/*                src="https://open.spotify.com/embed/playlist/136uPDZnTuQs5DncYxpVJ8?utm_source=generator&theme=0"*/}
              {/*                width="100%"*/}
              {/*                height="352"*/}
              {/*                frameBorder="0"*/}
              {/*                allowFullScreen={true} // Corrección aquí*/}
              {/*                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"*/}
              {/*                loading="lazy"*/}
              {/*            ></iframe>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}

              <div className="container mt-2 d-flex justify-content-center align-items-center">
                  <ComponentInstagram/>
              </div>

              <div className="container mt-1">
                  <div className="row">
                      <div className="ol-sm-12 col-md-12 col-lg-8 ms-auto me-auto mt-2 ms-1 me-1">
                          <h3 className='anton-regular'>Ubicacion</h3>
                          <iframe
                              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3387.861663549503!2d-62.726953999999985!3d-31.883178000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUyJzU5LjQiUyA2MsKwNDMnMzcuMCJX!5e0!3m2!1ses-419!2sar!4v1735232113409!5m2!1ses-419!2sar"
                              width="100%"
                              height="300"
                              allowFullScreen={true} // Corrección aquí
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
}

export default App