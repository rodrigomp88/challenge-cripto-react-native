import {CryptoProps} from '../interfaces';

import BTC from '../assets/btc.png';
import ETH from '../assets/eth.png';
import XRP from '../assets/xrp.png';

const DataCrypto: CryptoProps[] = [
  {
    id: 1,
    name: 'Bitcoin',
    slug: 'BTC',
    icon: BTC,
    price: 7.21568,
    percentage_changed_last_24: 1.82,
  },
  {
    id: 2,
    name: 'Ethereum',
    slug: 'ETH',
    icon: ETH,
    price: 146.83,
    percentage_changed_last_24: 1.46,
  },
  {
    id: 3,
    name: 'XRP',
    slug: 'XRP',
    icon: XRP,
    price: 0.220568,
    percentage_changed_last_24: -2.47,
  },
];

export default DataCrypto;
