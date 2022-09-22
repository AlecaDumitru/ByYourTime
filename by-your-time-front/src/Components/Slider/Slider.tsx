import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slider.css'

const Slider = () =>(
    <AwesomeSlider className="slider">
        <div data-src="/images/1.jpg"/>
        <div data-src="/images/2.jpg" />
        <div data-src="/images/concertpic.jpg" />
    </AwesomeSlider>
);

export default Slider;

