import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image"
import { motion, useScroll } from "framer-motion";
// import mage_1 from "../images/mage_1.png"
import "../styles/сarusel.modul.css";

const Carusel = () => {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });
    return (
        <>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <ul className="carusel-parant" ref={ref}>
                <li>
                    <StaticImage   
                        className="corusel-img"
                        src="../images/image_1.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_2.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li> 
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_4.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_3.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_4.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_1.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_2.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_3.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
                <li>
                    <StaticImage  
                        className="corusel-img"
                        src="../images/image_4.avif"
                        alt="A dinosaur"
                        layout="constrained"
                    />
                    <aside>
                        <h5>Nature</h5>
                        <p>Nature, in the broadest sense, is the physical world or universe. 
                            "Nature" can refer to the phenomena of the physical world, and also to life in general. 
                            The study of nature is a large, if not the only, part of science.
                        </p>
                    </aside>
                </li>
            </ul>
        </>
    );
}

export default Carusel;
