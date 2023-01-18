import Button from "./Button";

export default function Search({ searchValue, setSearchValue }) {
  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="blogs__search">
      <svg
        className="search-icon"
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.9214 12.6002C9.79246 13.4778 8.37392 14.0003 6.83332 14.0003C3.15143 14.0003 0.166656 11.0156 0.166656 7.33366C0.166656 3.65176 3.15143 0.666992 6.83332 0.666992C10.5152 0.666992 13.5 3.65176 13.5 7.33366C13.5 8.87425 12.9774 10.2928 12.0999 11.4217L16.5892 15.9111C16.9147 16.2365 16.9147 16.7641 16.5892 17.0896C16.2638 17.415 15.7362 17.415 15.4107 17.0896L10.9214 12.6002ZM11.8333 7.33366C11.8333 10.0951 9.59475 12.3337 6.83332 12.3337C4.0719 12.3337 1.83332 10.0951 1.83332 7.33366C1.83332 4.57224 4.0719 2.33366 6.83332 2.33366C9.59475 2.33366 11.8333 4.57224 11.8333 7.33366Z"
        />
      </svg>
      <input
        onChange={onChangeSearch}
        value={searchValue}
        type="text"
        className="search-input"
        placeholder="Search by tag, title, ..."
      />
      <Button children={"Search"} size={"BiggerBtn"} />
    </div>
  );
}
