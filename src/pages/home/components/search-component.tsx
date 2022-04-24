import { FormControl, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

import * as Images from "./images";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const SearchControl = styled(FormControl)`
  width: 25vw;
  /* border: 1px solid blue; */

  @media (max-width: 1080px) {
    width: 75vw;
  }
`;

const LogoImage = styled(Image)`
  padding: 20px;
  width: 200px;
`;

const CounterDiv = styled.div`
  font-size: 4vh;
  color: teal;
`;

interface SearchComponentProps {
  onSearch: (query: string) => void;
  counter: number;
}

export default function Component({ onSearch, counter }: SearchComponentProps) {
  const [query, setQuery] = useState("");
  return (
    <DivContainer>
      <div>
        <LogoImage src={Images.LogoImage} alt="logo" />
      </div>
      <div>
        <SearchControl variant="outlined">
          <OutlinedInput
            value={query}
            placeholder="Search the web to plant trees..."
            onChange={(ev) => {
              setQuery(ev.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") onSearch(query);
            }}
            inputProps={{ "data-test": "searchInput" }}
            endAdornment={<SearchIcon />}
          />
        </SearchControl>
      </div>
      <div>
        <h1>The search engine that plants trees.</h1>
      </div>
      <CounterDiv>{counter.toLocaleString()}</CounterDiv>
      <div>Trees planted by Ecosia users.</div>
    </DivContainer>
  );
}
