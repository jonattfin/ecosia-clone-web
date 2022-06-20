import {
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useRef, useState } from "react";
import styled from "@emotion/styled";

import * as Images from "./images";
import { Image, AppColor } from "../../../shared-components";
import { Language } from "../../../providers/context";
import { ITranslationFunc, withTranslations } from "../../../helpers";
import { useEffect } from "@storybook/addons";

export interface SearchComponentProps {
  onSearch: (query: string) => void;
  onSearchValueSelected: (query: string) => void;
  counter: number;
  language?: Language;
  t: ITranslationFunc;
  data: string[];
}

const Component = ({
  onSearch,
  onSearchValueSelected,
  counter,
  t,
  data,
}: SearchComponentProps) => {
  const [query, setQuery] = useState("");
  const [value, setSelectedValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const imageProps = { width: 200, height: 0 };
  imageProps.height = imageProps.width * 0.7;

  const handleChange = (ev) => {
    setQuery(ev.target.value);
    setIsOpen(true);
  };

  return (
    <MainSection>
      <div>
        <LogoImage src={Images.LogoImage} alt="logo" {...imageProps} />
      </div>
      <div>
        <FormControl fullWidth>
          <SearchFormControl variant="outlined" fullWidth>
            <OutlinedInput
              value={query}
              placeholder={t("searchTheWeb")}
              onChange={handleChange}
              onKeyDown={() => {
                onSearch(query);
              }}
              inputProps={{ "data-test": "searchInput" }}
              endAdornment={<SearchIcon />}
            />
          </SearchFormControl>
          {data && data.length > 0 && (
            <Select
              onChange={(event: SelectChangeEvent<string>) => {
                const value = event.target.value;

                setSelectedValue(value);
                onSearchValueSelected(value);
              }}
              value={value}
              open={isOpen}
              onClose={() => setIsOpen(false)}
              onOpen={() => setIsOpen(true)}
            >
              {data.map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </div>
      <div>
        <h1>{t("searchEngine")}</h1>
      </div>
      <CounterTextDiv>{counter.toLocaleString()}</CounterTextDiv>
      <div>{t("numberOfTrees")}</div>
    </MainSection>
  );
};

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

// translations

const translations = {
  [Language.English]: {
    searchTheWeb: "Search the web to plant trees...",
    searchEngine: "The search engine that plants trees.",
    numberOfTrees: "Trees planted by Ecosia users.",
  },
  [Language.French]: {
    searchTheWeb: "Rechercher sur le Web pour planter des arbres...",
    searchEngine: "Le moteur de recherche qui plante des arbres.",
    numberOfTrees: "Arbres plantés par les utilisateurs d'Ecosia",
  },
};

export default withTranslations(translations)(Component);
