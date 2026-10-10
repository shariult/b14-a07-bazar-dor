import { ActionResult, Product } from "@/types";

async function getProductIndex(): Promise<ActionResult<Product[]>> {
  try {
    const res = await fetch(`${process.env.API_URL}/products`);
    if (!res.ok) {
      return {
        isSuccess: false,
        error: `Failed to load categories (${res.status})`,
      };
    }

    return {
      isSuccess: true,
      data: (await res.json()) as Product[],
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      error: "Something went wrong!",
    };
  }
}

async function getProductsByCategory(
  category: string,
): Promise<ActionResult<Product[]>> {
  try {
    const res = await fetch(
      `${process.env.API_URL}/products?category=${category}`,
    );
    if (!res.ok) {
      return {
        isSuccess: false,
        error: `Failed to load categories (${res.status})`,
      };
    }

    return {
      isSuccess: true,
      data: (await res.json()) as Product[],
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      error: "Something went wrong!",
    };
  }
}

async function getProductShow(pId: string): Promise<ActionResult<Product>> {
  try {
    const res = await fetch(`${process.env.API_URL}/products/${pId}`);
    if (!res.ok) {
      return {
        isSuccess: false,
        error: `Failed to load categories (${res.status})`,
      };
    }
    return {
      isSuccess: true,
      data: (await res.json()) as Product,
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      error: "Something went wrong!",
    };
  }
}

export { getProductIndex, getProductShow, getProductsByCategory };
