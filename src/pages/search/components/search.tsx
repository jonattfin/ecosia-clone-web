import { FormControl, OutlinedInput, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";


import * as Images from "../images";

const DivContainer = styled.div`
  margin-top: 100px;
`;

interface SearchProps {
  query: string;
  doSearch: (query: string) => void;
}

export default function Component(props: SearchProps) {
  const [query, setQuery] = useState(props.query);

  return (
    <DivContainer>
      <Stack direction="row" spacing={2}>
        <Image
          src={Images.LogoImage}
          alt="logo"
          width={"60px"}
          height={"50px"}
        />
        <FormControl size="small" variant="outlined">
          <OutlinedInput
            value={query}
            onChange={(ev) => {
              setQuery(ev.target.value);
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") props.doSearch(query);
            }}
            endAdornment={<SearchIcon />}
          />
        </FormControl>
      </Stack>
    </DivContainer>
  );
}
