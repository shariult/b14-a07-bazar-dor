type category = {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
};

type PriceDirection = "up" | "down";

type PriceChange = {
  dir: PriceDirection;
  pct: number;
};

type Market = {
  market: string;
  division: string;
  min: number;
  max: number;
};

type Product = {
  id: number;
  slug: string;
  nameBn: string;
  category: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: string;
  image: string;
  today: number;
  yesterday: number;
  lastWeek: number;
  lastMonth: number;
  change: PriceChange;
  markets: Market[];
};

export { type category, type PriceDirection, type PriceChange, type Product };
