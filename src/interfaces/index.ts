export interface CryptoProps {
  id: string;
  symbol: string;
  name: string;
  metrics: Metrics;
}

interface Market_data {
  price_usd: number;
  percent_change_usd_last_24_hours: number;
}

interface Metrics {
  market_data: Market_data;
}
