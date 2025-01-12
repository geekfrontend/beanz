import SearchInput from "./SearchInput";

type HeroProps = {
  onSearch: (value: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
  const handleSearchChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className=" bg-background px-8 pt-8 pb-16 space-y-6 ">
      <div className="space-y-3">
        <h1 className=" text-4xl leading-snug font-semibold">
          Let`s find your <br />
          coffee!
        </h1>
      </div>
      <SearchInput placeholder="Cari kopi..." onChange={handleSearchChange} />
    </div>
  );
};

export default Hero;
