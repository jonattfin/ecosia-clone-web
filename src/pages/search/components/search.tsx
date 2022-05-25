import { FormControl, OutlinedInput, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import * as Images from "../images";
import styles from "../search.module.scss";

interface SearchProps {
  query: string;
  doSearch: (query: string) => void;
}

export default function Component(props: SearchProps) {
  const [query, setQuery] = useState(props.query);

  return (
    <section className={styles["search-section"]}>
      <Stack direction="row" spacing={2}>
        <Link href="/">
          <a>
            <Image
              src={Images.LogoImage}
              alt="logo"
              width={"60px"}
              height={"50px"}
            />
          </a>
        </Link>
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
    </section>
  );
}
