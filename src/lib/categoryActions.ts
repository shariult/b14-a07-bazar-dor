import { Category } from "@/types";
import { ActionResult } from "@/types";

async function getCategoryIndex(): Promise<ActionResult<Category[]>> {
  try {
    const res = await fetch(`${process.env.API_URL as string}/categories`);
    if (!res.ok) {
      return {
        isSuccess: false,
        error: `Failed to load categories (${res.status})`,
      };
    }
    return {
      isSuccess: true,
      data: (await res.json()) as Category[],
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      error: "Something went wrong!",
    };
  }
}

async function getCategoryShow(cSlug: string): Promise<ActionResult<Category>> {
  try {
    const res = await fetch(
      `${process.env.API_URL as string}/categories/${cSlug}`,
    );

    if (!res.ok) {
      return {
        isSuccess: false,
        error: `Failed to load categories (${res.status})`,
      };
    }

    return {
      isSuccess: true,
      data: (await res.json()) as Category,
    };
  } catch (err) {
    console.log(err);
    return {
      isSuccess: false,
      error: "Something went wrong!",
    };
  }
}

export { getCategoryIndex, getCategoryShow };
