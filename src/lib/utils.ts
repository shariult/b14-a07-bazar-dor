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

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { getCurrentDateBn, delay };
