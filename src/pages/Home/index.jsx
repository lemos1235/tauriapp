import { dateFormat } from "@/utils";
import { useEffect, useState } from "react";

function getCurrentDate() {
  return dateFormat(new Date(), "yyyy年MM月dd日 hh:mm:ss");
}

export default function () {
  const [time, setTime] = useState(getCurrentDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentDate());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="m-5 p-5 shadow-sm text-sm">
      <h1>{time}</h1>
    </div>
  );
}
