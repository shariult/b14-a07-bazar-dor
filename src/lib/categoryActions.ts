async function getCategoryIndex() {
  const res = await fetch(`${process.env.API_URL as string}/categories`);

  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }

  const data = await res.json();
  return data;
}

async function getCategoryShow(cId: string) {
  const res = await fetch(`${process.env.API_URL as string}/categories/${cId}`);

  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }

  const data = await res.json();
  return data;
}

export { getCategoryIndex, getCategoryShow };
