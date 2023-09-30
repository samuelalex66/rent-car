import { Link } from "react-router-dom";
import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
    const [goUp, setGouP] = useState(false);

    const scrollToUp = () => {
        window.scrollTo({ top:(0, 0), behavior: "smooth"})
    };

    const bookBtn = () => {
        document
        .querySelector('#booking-section')
        .scrollIntoView({ behavior: "smooth"})
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGouP(true)
            } else {
                setGouP(false)
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll)
        };

    }, []);
    
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img src={BgShape} alt="bg-shape" className="bg-shape"/>
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Plan Your Trip Now!</h4>
                            <h1>
                                Save <span>big</span> with our car rental
                            </h1>
                            <p>
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </p>
                            <div className="hero-content__text__btns">
                                <Link
                                    onClick={bookBtn}
                                    className="hero-content__text__btns__book-ride"
                                    to="/"
                                >
                                    Book Ride &nbsp; <IconCircleCheck />
                                </Link>
                                <Link className="hero-content__text__btns__learn-more" to="/">
                                    Learn More! &nbsp; <IconChevronRight />
                                </Link>
                            </div>
                        </div>

                        {/* img */}
                        <img 
                            src={HeroCar} 
                            alt="car-img" 
                            className="hero-content__car-img"
                        />
                    </div>
                </div>

                {/* page up */}
                <div onClick={scrollToUp} className={`scroll-up ${goUp ? "show-scroll" : " "}`}>
                    ^
                </div>
            </section>
        </>
    )


}

export default Hero;