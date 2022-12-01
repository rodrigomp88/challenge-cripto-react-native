export interface CryptoProps {
  id: string;
  symbol: string;
  name: string;
  market_data: Market_data;
}

interface Market_data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}
