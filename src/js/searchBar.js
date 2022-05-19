function SearchBar() {
    return (
        <div className="flex justify-center flex-row">
            <div className="xl:w-full">
                <div className="input-group flex flex-row items-stretch w-full rounded align-middle">
                    <span
                        className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray text-center whitespace-nowrap rounded">
                        <svg aria-hidden="true" focusable="false"
                             className="w-4 h-8"
                             role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path className="fill-blue"
                                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </span>
                    <input type="search"
                           className="form-control flex-auto h-8 min-w-0 m-auto block w-full px-3 py-1.5 text-base text-sm text-gray bg-white bg-clip-padding border border-solid border-blue rounded transition focus:text-blue focus:bg-white focus:border-blue focus:outline-none"
                           placeholder="Поиск" aria-label="Search">
                    </input>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
