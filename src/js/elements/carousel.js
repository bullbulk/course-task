import {Link} from "react-router-dom";

import React, {Component} from 'react';

import {Carousel} from 'flowbite-react';

const images = [
    {
        img: {
            src: "/assets/banners/banner_1.svg",
            alt: "banner_1"
        },
        link: "/catalog/equipment"
    },
    {
        img: {
            src: "/assets/banners/banner_2.svg",
            alt: "banner_2"
        },
        link: "/catalog/equipment"
    },
    {
        img: {
            src: "/assets/banners/banner_3.svg",
            alt: "banner_3"
        },
        link: "/catalog/equipment"
    },
    {
        img: {
            src: "/assets/banners/banner_4.svg",
            alt: "banner_4"
        },
        link: "/catalog/equipment"
    },
];

class CustomCarousel extends Component {
    render() {
        return (
            <Carousel slideInterval={5000}>
                {images.map((item, index) => (
                    <Link to={item.link} key={index}>
                        <img src={item.img.src} alt={item.img.alt}/>
                    </Link>
                ))}
            </Carousel>
        );
    }
}

export default CustomCarousel;