import { BsSearch } from "react-icons/bs";

interface ISearchButtonProps {
  additionalClasses?: string;
}

function SearchButton({ additionalClasses }: ISearchButtonProps) {
  return (
    <button type="submit" className={`ml-3 z-10 ${additionalClasses}`}>
      <span className="h-10 w-10 object-contain">
        <BsSearch />
      </span>
    </button>
  );
}

export default SearchButton;
