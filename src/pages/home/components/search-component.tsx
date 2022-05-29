import { FormControl, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import styled from "@emotion/styled";

import * as Images from "./images";
import { Image, AppColor } from "../../../shared-components";

export interface SearchComponentProps {
  onSearch: (query: string) => void;
  counter: number;
}

export default function Component({ onSearch, counter }: SearchComponentProps) {
  const [query, setQuery] = useState("");

  const imageProps = { width: 200, height: 0 };
  imageProps.height = imageProps.width * 0.7;

  return (
    <MainSection>
      <div>
        <LogoImage src={Images.LogoImage} alt="logo" {...imageProps} />
      </div>
      <div>
        <SearchFormControl variant="outlined">
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
        </SearchFormControl>
      </div>
      <div>
        <h1>The search engine that plants trees.</h1>
      </div>
      <CounterTextDiv>{counter.toLocaleString()}</CounterTextDiv>
      <div>Trees planted by Ecosia users.</div>
    </MainSection>
  );
}

// Styled Components

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const LogoImage = styled(Image)`
  padding: 20px;
`;

const SearchFormControl = styled(FormControl)`
  width: 25vw;

  @media (max-width: 1080px) {
    width: 75vw;
  }
`;

const CounterTextDiv = styled.div`
  font-size: 4vh;
  color: ${AppColor.Teal};
`;
