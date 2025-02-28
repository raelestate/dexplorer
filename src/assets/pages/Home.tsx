import Loader from '../components/Loader'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import TravelGuides from '../components/TravelGuides'
import Highlights from '../components/Highlights'
import AboutSection from '../components/AboutSection'
const primaryHighlight = {
    id: 1,
    title: "My Trip to Alaska",
    description: "An Icy Adventure in the Last Frontier",
    image: "/images/img3.jpg",
    link: "/images/img4.jpg",
};

const secondaryHighlights = [
    {
        id: 2,
        image: "/images/img4.jpg",
        link: "/gallery/second",
    },
    {
        id: 3,
        image: "/images/img5.jpg",
        link: "/gallery/third",
    },
];

function Home() {
    return (
        <>
            <Loader />
            <div id="content" className="hidden">
                <HeroSection brand="dëxplorer"/>
                <AboutSection />
                <Highlights
                    primaryHighlight={primaryHighlight}
                    secondaryHighlights={secondaryHighlights}
                    seeMoreLink="/gallery"
                />
                <TravelGuides />
                <Footer />
            </div>

        </>
    )
}

export default Home