import {Link} from "react-router-dom";

function MenuButton(label, link, chapters) {
    if (chapters === undefined) {
        chapters = []
    }

    return (
        <div className="dropdown relative">
            <Link to={link}>
                <button
                    className="min-w-full leading-tight transition duration-150 ease-in-out flex items-center
                     justify-evenly whitespace-nowrap"

                    type="button"
                    id="dropdownMenu"
                    aria-expanded="false">

                    {label}
                    {(chapters.length !== 0) &&
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            className="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512">
                            <path
                                fill="currentColor"
                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5
                                 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                        </svg>
                    }
                </button>
            </Link>
            <ul
                className="dropdown-menu min-w-full absolute hidden bg-gray text-blue text-base z-50 float-left
                     list-none hidden bg-clip-padding border-none transition duration-150 ease-in-out"
                aria-labelledby="dropdownMenu">

                {chapters.map((item, index) =>
                    <Link to={item.link} key={index}>
                        <li className="dropdown-item hover:bg-blue hover:text-white text-sm py-2 px-4 font-normal block
                                w-full whitespace-nowrap bg-transparent text-gray-700 pointer-events-auto">
                            <div>
                                {item.label}
                            </div>
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    );
}

export default MenuButton;