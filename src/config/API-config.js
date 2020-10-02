//请求地址
const BASE = process.env.API_ROOT, //process.env.API_ROOT, //process.env.API_ROOT"http://10.10.8.232:8888" 'https://scan.platon.network'
  // FILE_BASE = process.env.FILE_ROOT,//process.env.FILE_ROOT,//http://192.168.9.85:8888
  JSON_BASE = process.env.JSON_ROOT,
  TOTAL = `${BASE}/`,
  // FILES_PUBLIC_STORE = process.env.FILESTORE_PUBLIC_ROOT,//'http://192.168.9.86:8081',公有
  // FILES_PRIVITE_STORE = process.env.FILESTORE_PRIVITE_ROOT,//'http://192.168.9.85:8081',私有
  // FILES = `${FILES_STORE}/`,
  // FILES = `${FILES_PUBLIC_STORE}/`,//公有
  // FILES = `${FILES_PRIVITE_STORE}/`,//私有
  BLOCK_URL = `${TOTAL}browser-server/block/`,
  HOME_URL = `${TOTAL}browser-server/home/`,
  // HOME_URL = `http://10.10.8.8:8080/browser-server/home/`,
  TRADE_URL = `${TOTAL}browser-server/transaction/`,
  ACCOUNT_URL = `${TOTAL}browser-server/address/`,
  NODE_URL = `${TOTAL}browser-server/staking/`,
  TICKET_URL = `${TOTAL}browser-server/ticket/`,
  PROPOSAL_URL = `${TOTAL}browser-server/proposal/`,
  MORE_URL = `${TOTAL}browser-server/extra/`,
  TOKEN_URL = `${TOTAL}browser-server/token/`,
  //NODE
  NODE = {
    aliveStakingList: `${NODE_URL}aliveStakingList`,
    historyStakingList: `${NODE_URL}historyStakingList`,
    lockedStakingList: `${NODE_URL}lockedStakingList`,
    detail: `${NODE_URL}stakingDetails`,
    stakingOptRecordList: `${NODE_URL}stakingOptRecordList`,
    delegationListByStaking: `${NODE_URL}delegationListByStaking`,
    delegationListByAddress: `${NODE_URL}delegationListByAddress`,
    statistic: `${NODE_URL}statistic`,
    queryClaimByStaking: `${TRADE_URL}queryClaimByStaking`
  },
  // BLOCK
  BLOCK = {
    blockList: `${BLOCK_URL}blockList`,
    blockListByNodeId: `${BLOCK_URL}blockListByNodeId`,
    blockDetails: `${BLOCK_URL}blockDetails`,
    blockListByNodeIdDownload: `${BLOCK_URL}blockListByNodeIdDownload`,
    blockDetailNavigate: `${BLOCK_URL}blockDetailNavigate`
  },
  // SOUSUO
  SEARCH = {
    query: `${HOME_URL}queryNavigation`,
    stakingOnIndex: `${HOME_URL}stakingList`,
    blockOnIndex: `${HOME_URL}blockList`,
    blockStatistic: `${HOME_URL}blockStatistic`,
    chainStatistic: `${HOME_URL}chainStatistic`
  },
  // TRADE
  TRADE = {
    transactionList: `${TRADE_URL}transactionList`,
    transactionListByBlock: `${TRADE_URL}transactionListByBlock`,
    transactionListByAddress: `${TRADE_URL}transactionListByAddress`,
    addressTransactionDownload: `${TRADE_URL}addressTransactionDownload`,
    transactionDetails: `${TRADE_URL}transactionDetails`,
    transactionDetailNavigate: `${TRADE_URL}transactionDetailNavigate`,
    queryClaimByAddress: `${TRADE_URL}queryClaimByAddress`
  },
  PROPOSAL = {
    proposalList: `${PROPOSAL_URL}proposalList`,
    proposalDetails: `${PROPOSAL_URL}proposalDetails`,
    voteList: `${PROPOSAL_URL}voteList`
  },
  // TRADE
  ACCOUNT = {
    details: `${ACCOUNT_URL}details`,
    rpplanDetail: `${ACCOUNT_URL}rpplanDetail`
  },
  WS_CONFIG = {
    root: `${TOTAL}browser-server/platon-websocket`,
    blockStatistic: `/topic/block/statistic/new`,
    chainStatistic: `/topic/chain/statistic/new`,
    blockList: `/topic/block/list/new`,
    stakingList: `/topic/staking/list/new`,

    stakingStatistic: `/topic/staking/statistic/new`,
    stakingChange: `/topic/staking/change/new`,

    serverWebsocket: `/browser-server/websocket/`
  },
  TOKEN = {
    tokenDetail: `${TOKEN_URL}tokenDetail`,
    tokenList: `${TOKEN_URL}tokenList`,
    tokenTransferList: `${TOKEN_URL}tokenTransferList`
  },
  MORE = {
    queryConfig: `${MORE_URL}queryConfig`
  };
export default {
  TOTAL,
  BLOCK,
  SEARCH,
  TRADE,
  PROPOSAL,
  ACCOUNT,
  WS_CONFIG,
  JSON_BASE,
  NODE,
  BASE,
  MORE,
  TOKEN
};
