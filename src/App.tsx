import './App.css';
import { useEffect, useRef } from 'react';
import { ComponentDownCount } from './components/ComponentDownCount';
import { ComponentInstagram } from './components/ComponentInstagram';
import { Fireworks } from 'fireworks-js';

function App() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (canvasRef.current) {
            const fireworks = new Fireworks(canvasRef.current, {
                rocketsPoint: { min: 3, max: 3 },
            });
            fireworks.start();

            return () => fireworks.stop();
        }
    }, []);

    return (
        <div className="app-container text-white">
            {/* Fireworks Canvas */}
            <canvas ref={canvasRef} className="fireworks-canvas"
                    style={{width: "100%", height: "100%", position: "absolute", zIndex: -1}}></canvas>
            <div className="vertical-text left">GENERAL +18</div>
            <div className="vertical-text right">VIP +24 / +30</div>
            <div className="text-white">
                <div className="container pt-2">
                    <h1 className="text-center anton-regular">RESET</h1>
                    <h3 className="text-center anton-regular">OUTDOOD</h3>
                    <ComponentDownCount />
                </div>

                <div className="container mt-5 position-relative d-block d-lg-none">
                    <img
                        src={"images/logo.png"}
                        alt=""
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{ width: "300px", height: "160px", zIndex: -1 }}
                    />
                </div>
                <div className="container mt-2 d-flex justify-content-center align-items-center">
                    <ComponentInstagram />
                </div>

                <div className="container mt-1">
                    <div className="row">
                        <div className="ol-sm-12 col-md-12 col-lg-8 ms-auto me-auto mt-2 ms-1 me-1">
                            <h3 className="anton-regular">Ubicacion</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3387.861663549503!2d-62.726953999999985!3d-31.883178000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDUyJzU5LjQiUyA2MsKwNDMnMzcuMCJX!5e0!3m2!1ses-419!2sar!4v1735232113409!5m2!1ses-419!2sar"
                                width="100%"
                                height="300"
                                allowFullScreen={true}
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

export default App;