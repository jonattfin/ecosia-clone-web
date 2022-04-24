import { useState, useEffect, useContext } from "react";
import { interval, tap } from "rxjs";
import { useRouter } from "next/router";

import HomeComponent from "./home-component";

export default function Component() {
  const initialValue = 146000000;
  const [counter, setCounter] = useState(initialValue);

  const router = useRouter();
  const onSearch = (q: string) => {
    router.push(`/search/${q}`);
  };

  useEffect(() => {
    const subscription = interval(5000)
      .pipe(tap((value) => console.log(value + 1)))
      .subscribe((value) => setCounter(initialValue + (value + 1)));
    return () => subscription.unsubscribe();
  }, []);

  return <HomeComponent {...{ counter, onSearch }} />;
}
