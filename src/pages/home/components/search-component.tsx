import { FormControl, OutlinedInput } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

import * as Images from "./images";
import styles from "./home.module.scss";

interface SearchComponentProps {
  onSearch: (query: string) => void;
  counter: number;
}

export default function Component({ onSearch, counter }: SearchComponentProps) {
  const [query, setQuery] = useState("");
  return (
    <section className={styles["search-section"]}>
      <div>
        <Image
          className={styles["logo-image"]}
          src={Images.LogoImage}
          alt="logo"
        />
      </div>
      <div>
        <FormControl className={styles["search-input"]} variant="outlined">
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
        </FormControl>
      </div>
      <div>
        <h1>The search engine that plants trees.</h1>
      </div>
      <div className={styles["counter-text"]}>{counter.toLocaleString()}</div>
      <div>Trees planted by Ecosia users.</div>
    </section>
  );
}
