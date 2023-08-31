import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import img from '~/assets/images/img.jpg';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AnimatedPhoto = () => {
    const slider = (
        <AutoplaySlider cssModule={AwesomeSliderStyles}>
            <div data-src={img} />
            <div data-src={img} />
            <div data-src={img} />
        </AutoplaySlider>
    );

    return slider;
};

export default AnimatedPhoto;
