import React, { ChangeEvent } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className="relative">
        <SearchIcon
          size={24}
          className="absolute left-2 top-2.5  text-muted-foreground"
        />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
          className="pl-10 py-4 h-12 text-lg rounded-full"
        />
      </div>
    </>
  );
};

export default SearchInput;
