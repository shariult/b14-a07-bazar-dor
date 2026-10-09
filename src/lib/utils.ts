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

export { getCurrentDateBn, delay, toBanglaNum, formatUnit };
