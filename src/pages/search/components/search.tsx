import { FormControl, OutlinedInput, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

import * as Images from "../images";

const LogoImage = styled(Image)`
  max-width: 60px;
`;

interface SearchProps {
  query: string;
  doSearch: (query: string) => void;
}

export default function Component(props: SearchProps) {
  const [query, setQuery] = useState(props.query);

  return (
    <Stack direction="row" spacing={2}>
      <LogoImage src={Images.LogoImage} alt="logo" />
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
  );
}
