import ImageSlider from "../../components/slider/ImageSlider";
import beach from '../../assets/slider/image-1.jpeg'
import boat from '../../assets/slider/image-4.jpeg'
import forest from '../../assets/slider/image-2.jpeg'
import city from '../../assets/slider/image-3.jpeg'
import italy from '../../assets/slider/image-5.jpeg'

function SliderTest() {

    const slides = [
        { url: beach, title: "beach" },
        { url: boat, title: "boat" },
        { url: forest, title: "forest" },
        { url: city, title: "city" },
        { url: italy, title: "italy" },
      ];

      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };

  return (
    <div>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
    </div>
  )
}

export default SliderTest