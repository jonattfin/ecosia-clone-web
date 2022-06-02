import { FormControl, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState, useContext } from "react";
import styled from "@emotion/styled";

import * as Images from "./images";
import { Image, AppColor, getTranslations } from "../../../shared-components";
import { Language, LanguageContext } from "../../../providers/context";

export interface SearchComponentProps {
  onSearch: (query: string) => void;
  counter: number;
  language?: Language;
}

export default function Component({
  onSearch,
  counter,
  language,
}: SearchComponentProps) {
  const [query, setQuery] = useState("");

  const imageProps = { width: 200, height: 0 };
  imageProps.height = imageProps.width * 0.7;

  const t = useTranslations(language);

  return (
    <MainSection>
      <div>
        <LogoImage src={Images.LogoImage} alt="logo" {...imageProps} />
      </div>
      <div>
        <SearchFormControl variant="outlined">
          <OutlinedInput
            value={query}
            placeholder={t("searchTheWeb")}
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
        <h1>{t("searchEngine")}</h1>
      </div>
      <CounterTextDiv>{counter.toLocaleString()}</CounterTextDiv>
      <div>{t("numberOfTrees")}</div>
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

// translations

const useTranslations = (language?: Language) => {
  const translation: any = {
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

  let currentLanguage = useContext(LanguageContext);
  if (language) currentLanguage = language;

  return getTranslations(translation)(currentLanguage);
};
