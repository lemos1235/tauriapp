import { invoke } from "@tauri-apps/api/tauri";
import { useEffect, useState } from "react";

export default function Home() {
  const [num, setNum] = useState("");

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const result = await invoke("greet", { name: "lisi" });
      if (!ignore) {
        setNum(result);
      }
    }
    fetchData();
    return () => {
      ignore = true;
    };
  }, []);
  return <h1>Home {num}</h1>;
}
