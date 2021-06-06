import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.epn,
    earningToken: tokens.epn,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xF5031f108A9835A736CA48d9b1e018D1d4307C82',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.epn,
    earningToken: tokens.wbnb,
    contractAddress: {
      97: '',
      56: '0x66e6754Db788c8a727Dd0DaAD6Fb4e3c14f003F1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.05787',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.epn,
    earningToken: tokens.uni,
    contractAddress: {
      97: '',
      56: '0x5cf524EE2EC259BDAA61a6f589B2301812400C74',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.001342',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.epn,
    earningToken: tokens.bch,
    contractAddress: {
      97: '',
      56: '0xD97A9AFBD38996346D26965d2ca160764dEca633',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01388',
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.epn,
    earningToken: tokens.usdc,
    contractAddress: {
      97: '',
      56: '0x4F1B739483Bb14Be009b8BfA07cdeFA5844d384D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01331',
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.epn,
    earningToken: tokens.ada,
    contractAddress: {
      97: '',
      56: '0x60418D298A8C910aA79eD72172481e3796B27526',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.03472',
    isFinished: false,
  },
]

export default pools
