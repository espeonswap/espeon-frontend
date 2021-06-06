import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PancakeSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | EspeonSwap',
  },
  '/competition': {
    title: 'Trading Battle | EspeonSwap',
  },
  '/prediction': {
    title: 'Prediction | EspeonSwap',
  },
  '/farms': {
    title: 'Farms | EspeonSwap',
  },
  '/pools': {
    title: 'Pools | EspeonSwap',
  },
  '/lottery': {
    title: 'Lottery | EspeonSwap',
  },
  '/collectibles': {
    title: 'Collectibles | EspeonSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | EspeonSwap',
  },
  '/teams': {
    title: 'Leaderboard | EspeonSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | EspeonSwap',
  },
  '/profile': {
    title: 'Your Profile | EspeonSwap',
  },
}
