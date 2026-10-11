function getCurrentDateBn() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return formattedDate;
}

const delay = function (ms: number) {
  const dummyPromise = new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
  return dummyPromise;
};

const toBanglaNum = (num: number | string) => {
  const toNum = Number(num);
  const bnNumber = new Intl.NumberFormat("bn-BD");
  return bnNumber.format(toNum);
};

const formatUnit = (unit: string) => {
  const units: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
    gm: "গ্রাম",
  };
  return units[unit.toLowerCase()] || unit;
};

function validateInput(
  type: "string" | "number" | "email" | "password",
  data: string | null,
): boolean {
  if (type === "string") {
    return data !== null && data.trim().length > 0;
  }

  if (type === "number") {
    return data !== null && data.trim() !== "" && !isNaN(Number(data));
  }

  if (type === "email") {
    return data !== null && data.length > 0 && data.includes("@");
  }

  if (type === "password") {
    return data !== null && data.length >= 8;
  }

  return false;
}

export { getCurrentDateBn, delay, toBanglaNum, formatUnit, validateInput };
