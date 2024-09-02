"use client";

import { useEffect, useState } from "react";

const CurrentYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <p class="font-14 fw-500 text-center">
        © {year} SteadFast. All rights reserved
      </p>
    </>
  );
};

export default CurrentYear;
