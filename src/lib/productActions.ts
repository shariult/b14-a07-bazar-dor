async function getProductIndex() {
  const res = await fetch(`${process.env.API_URL}/products`);
  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }
  const data = await res.json();
  return data;
}

async function getProductShow(pId: string) {
  const res = await fetch(`${process.env.API_URL}/products/${pId}`);
  if (!res.ok) {
    console.log("Something went wrong!");
    return;
  }
  const data = await res.json();
  return data;
}

export { getProductIndex, getProductShow };
