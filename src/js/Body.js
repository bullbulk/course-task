import banner_1 from "../assets/banners/banner_1.svg";

function Body() {
    return (
        <div className="flex flex-row px-12 flex-grow">
            <div>
                <img src={banner_1} className="" alt="Banner 1"/>
            </div>
            <a
                className="Body-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default Body;