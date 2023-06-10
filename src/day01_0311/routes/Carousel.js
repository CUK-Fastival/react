// import {useCallback, useRef} from 'react';
// import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
// import Slider from 'react-slick';
// import Item from 'antd/es/list/Item';

// const Carousel = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 1000,
//         autoplayspeed: 1000,
//         arrows: false,
//         slideToShow: 5,
//         slidesToScroll: 1,
//         // nextArrow: <SampleNextArrow />,
//         // prevArrow: <SamplePrevArrow />
//     };

//     const slickRef1 = useRef(null);
//     const slickRef2 = useRef(null);
//     const previous1 = useCallback(() => slickRef1.current.slickPrev(), []);
//     const next1 = useCallback(()=>slickRef1.current.slickNext(), []);
//     const previous2 = useCallback(()=>slickRef2.current.slickPrev(), []);
//     const next2 = useCallback(()=>slickRef2.current.slickNext(), []);

//     return (
//         <div className="carousel-container">
//             <Slider className="items" ref={slickRef1} {...settings}>
//                 <Item/>
//             </Slider>
//             {/* <PrevBuutton onClick={previous1}>
//                 <span><AiOutlineArrowLeft/></span>
//             </PrevBuutton>
//             <NextButton onClick={next1}>
//                 <span><AiOutlineArrowRight/></span>
//             </NextButton> */}
//         </div>
//     )
// }

// export default Carousel;