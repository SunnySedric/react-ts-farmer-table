export type FarmerItem = {
  city: string;
  cp_spend: number;
  farmer_name: string;
  seed_purchases: number;
  state: string;
};

export type Data = FarmerItem[];

export type FormDataType = {
  state: string;
  keyword: string;
  hasCropProtectionPurchases: string;
  hasSeedPurchases: string;
})
