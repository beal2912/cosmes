// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/amm/v1/query.proto (package pryzm.amm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllDisabledOrderPairRequest, QueryAllDisabledOrderPairResponse, QueryAllExecutableOrderRequest, QueryAllExecutableOrderResponse, QueryAllExpiringPoolTokenRequest, QueryAllExpiringPoolTokenResponse, QueryAllIntroducingPoolTokenRequest, QueryAllIntroducingPoolTokenResponse, QueryAllOraclePricePairRequest, QueryAllOraclePricePairResponse, QueryAllOrderRequest, QueryAllOrderResponse, QueryAllPendingTokenIntroductionRequest, QueryAllPendingTokenIntroductionResponse, QueryAllPermanentVirtualBalancePoolTokenRequest, QueryAllPermanentVirtualBalancePoolTokenResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryAllPoolTokenForPoolRequest, QueryAllPoolTokenForPoolResponse, QueryAllPoolTokenInfoRequest, QueryAllPoolTokenInfoResponse, QueryAllPoolTokenRequest, QueryAllPoolTokenResponse, QueryAllPoolTokenWeightRequest, QueryAllPoolTokenWeightResponse, QueryAllScheduleOrderRequest, QueryAllScheduleOrderResponse, QueryAllWeightedTokenRequest, QueryAllWeightedTokenResponse, QueryAllWeightUpdateTimingRequest, QueryAllWeightUpdateTimingResponse, QueryAllWhitelistedRouteRequest, QueryAllWhitelistedRouteResponse, QueryAllYammConfigurationRequest, QueryAllYammConfigurationResponse, QueryGetExecutableOrderRequest, QueryGetExecutableOrderResponse, QueryGetExpiringPoolTokenRequest, QueryGetExpiringPoolTokenResponse, QueryGetIntroducingPoolTokenRequest, QueryGetIntroducingPoolTokenResponse, QueryGetOraclePricePairRequest, QueryGetOraclePricePairResponse, QueryGetOrderRequest, QueryGetOrderResponse, QueryGetPendingTokenIntroductionRequest, QueryGetPendingTokenIntroductionResponse, QueryGetPermanentVirtualBalancePoolTokenRequest, QueryGetPermanentVirtualBalancePoolTokenResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryGetPoolTokenInfoRequest, QueryGetPoolTokenInfoResponse, QueryGetPoolTokenRequest, QueryGetPoolTokenResponse, QueryGetPoolTokenWeightRequest, QueryGetPoolTokenWeightResponse, QueryGetScheduleOrderRequest, QueryGetScheduleOrderResponse, QueryGetWeightedTokenRequest, QueryGetWeightedTokenResponse, QueryGetWeightUpdateTimingRequest, QueryGetWeightUpdateTimingResponse, QueryGetWhitelistedRouteRequest, QueryGetWhitelistedRouteResponse, QueryGetYammConfigurationRequest, QueryGetYammConfigurationResponse, QueryLpTokenRequest, QueryLpTokenResponse, QueryOrderPairDisabledRequest, QueryOrderPairDisabledResponse, QueryOrderStepBoundsRequest, QueryOrderStepBoundsResponse, QueryParamsRequest, QueryParamsResponse, QuerySimulateBatchSwapRequest, QuerySimulateBatchSwapResponse, QuerySimulateExitAllTokensExactLptRequest, QuerySimulateExitAllTokensExactLptResponse, QuerySimulateExitExactTokensRequest, QuerySimulateExitExactTokensResponse, QuerySimulateExitTokenExactLptRequest, QuerySimulateExitTokenExactLptResponse, QuerySimulateInitializePoolRequest, QuerySimulateInitializePoolResponse, QuerySimulateJoinAllTokensExactLptRequest, QuerySimulateJoinAllTokensExactLptResponse, QuerySimulateJoinExactTokensRequest, QuerySimulateJoinExactTokensResponse, QuerySimulateJoinTokenExactLptRequest, QuerySimulateJoinTokenExactLptResponse, QuerySimulateSingleSwapRequest, QuerySimulateSingleSwapResponse, QuerySimulateZeroImpactJoinYammRequest, QuerySimulateZeroImpactJoinYammResponse, QuerySpotPriceRequest, QuerySpotPriceResponse, QueryVaultPauseModeRequest, QueryVaultPauseModeResponse, QueryYammPoolIdRequest, QueryYammPoolIdResponse } from "./query_pb.js";

const TYPE_NAME = "pryzm.amm.v1.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc pryzm.amm.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a PoolToken by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolToken
 */
export const QueryPoolTokenService = {
  typeName: TYPE_NAME,
  method: "PoolToken",
  Request: QueryGetPoolTokenRequest,
  Response: QueryGetPoolTokenResponse,
} as const;

/**
 * Queries a list of PoolToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenAll
 */
export const QueryPoolTokenAllService = {
  typeName: TYPE_NAME,
  method: "PoolTokenAll",
  Request: QueryAllPoolTokenRequest,
  Response: QueryAllPoolTokenResponse,
} as const;

/**
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenAllForPool
 */
export const QueryPoolTokenAllForPoolService = {
  typeName: TYPE_NAME,
  method: "PoolTokenAllForPool",
  Request: QueryAllPoolTokenForPoolRequest,
  Response: QueryAllPoolTokenForPoolResponse,
} as const;

/**
 * Queries a list of TokenWeights
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them. And the number of tokens in a pool is not expected to
 * be high.
 * therefore, this query is not paginated
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenWeightAll
 */
export const QueryPoolTokenWeightAllService = {
  typeName: TYPE_NAME,
  method: "PoolTokenWeightAll",
  Request: QueryAllPoolTokenWeightRequest,
  Response: QueryAllPoolTokenWeightResponse,
} as const;

/**
 * Queries a TokenWeight
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenWeight
 */
export const QueryPoolTokenWeightService = {
  typeName: TYPE_NAME,
  method: "PoolTokenWeight",
  Request: QueryGetPoolTokenWeightRequest,
  Response: QueryGetPoolTokenWeightResponse,
} as const;

/**
 * Queries a list of TokenInfo
 * computing normalized weights requires reading all tokens from the context
 * and computing weight for all of them. And the number of tokens in a pool is not expected to
 * be high.
 * therefore, this query is not paginated
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenInfoAll
 */
export const QueryPoolTokenInfoAllService = {
  typeName: TYPE_NAME,
  method: "PoolTokenInfoAll",
  Request: QueryAllPoolTokenInfoRequest,
  Response: QueryAllPoolTokenInfoResponse,
} as const;

/**
 * Queries a TokenInfo
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolTokenInfo
 */
export const QueryPoolTokenInfoService = {
  typeName: TYPE_NAME,
  method: "PoolTokenInfo",
  Request: QueryGetPoolTokenInfoRequest,
  Response: QueryGetPoolTokenInfoResponse,
} as const;

/**
 * Queries a Pool by id.
 *
 * @generated from rpc pryzm.amm.v1.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryGetPoolRequest,
  Response: QueryGetPoolResponse,
} as const;

/**
 * Queries a list of Pool items.
 *
 * @generated from rpc pryzm.amm.v1.Query.PoolAll
 */
export const QueryPoolAllService = {
  typeName: TYPE_NAME,
  method: "PoolAll",
  Request: QueryAllPoolRequest,
  Response: QueryAllPoolResponse,
} as const;

/**
 * Queries a WeightedToken by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.WeightedToken
 */
export const QueryWeightedTokenService = {
  typeName: TYPE_NAME,
  method: "WeightedToken",
  Request: QueryGetWeightedTokenRequest,
  Response: QueryGetWeightedTokenResponse,
} as const;

/**
 * Queries a list of WeightedToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.WeightedTokenAll
 */
export const QueryWeightedTokenAllService = {
  typeName: TYPE_NAME,
  method: "WeightedTokenAll",
  Request: QueryAllWeightedTokenRequest,
  Response: QueryAllWeightedTokenResponse,
} as const;

/**
 * Queries a WeightUpdateTiming by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.WeightUpdateTiming
 */
export const QueryWeightUpdateTimingService = {
  typeName: TYPE_NAME,
  method: "WeightUpdateTiming",
  Request: QueryGetWeightUpdateTimingRequest,
  Response: QueryGetWeightUpdateTimingResponse,
} as const;

/**
 * Queries a list of WeightUpdateTiming items.
 *
 * @generated from rpc pryzm.amm.v1.Query.WeightUpdateTimingAll
 */
export const QueryWeightUpdateTimingAllService = {
  typeName: TYPE_NAME,
  method: "WeightUpdateTimingAll",
  Request: QueryAllWeightUpdateTimingRequest,
  Response: QueryAllWeightUpdateTimingResponse,
} as const;

/**
 * Simulates a single swap action and returns the result
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateSingleSwap
 */
export const QuerySimulateSingleSwapService = {
  typeName: TYPE_NAME,
  method: "SimulateSingleSwap",
  Request: QuerySimulateSingleSwapRequest,
  Response: QuerySimulateSingleSwapResponse,
} as const;

/**
 * Queries a list of SimulateInitializePool items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateInitializePool
 */
export const QuerySimulateInitializePoolService = {
  typeName: TYPE_NAME,
  method: "SimulateInitializePool",
  Request: QuerySimulateInitializePoolRequest,
  Response: QuerySimulateInitializePoolResponse,
} as const;

/**
 * Queries a list of SimulateJoinAllTokensExactLpt items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateJoinAllTokensExactLpt
 */
export const QuerySimulateJoinAllTokensExactLptService = {
  typeName: TYPE_NAME,
  method: "SimulateJoinAllTokensExactLpt",
  Request: QuerySimulateJoinAllTokensExactLptRequest,
  Response: QuerySimulateJoinAllTokensExactLptResponse,
} as const;

/**
 * Queries a list of SimulateJoinExactTokens items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateJoinExactTokens
 */
export const QuerySimulateJoinExactTokensService = {
  typeName: TYPE_NAME,
  method: "SimulateJoinExactTokens",
  Request: QuerySimulateJoinExactTokensRequest,
  Response: QuerySimulateJoinExactTokensResponse,
} as const;

/**
 * Queries a list of SimulateJoinExactTokens items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateZeroImpactJoinYamm
 */
export const QuerySimulateZeroImpactJoinYammService = {
  typeName: TYPE_NAME,
  method: "SimulateZeroImpactJoinYamm",
  Request: QuerySimulateZeroImpactJoinYammRequest,
  Response: QuerySimulateZeroImpactJoinYammResponse,
} as const;

/**
 * Queries a list of SimulateJoinTokenExactLpt items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateJoinTokenExactLpt
 */
export const QuerySimulateJoinTokenExactLptService = {
  typeName: TYPE_NAME,
  method: "SimulateJoinTokenExactLpt",
  Request: QuerySimulateJoinTokenExactLptRequest,
  Response: QuerySimulateJoinTokenExactLptResponse,
} as const;

/**
 * Queries a list of SimulateExitTokenExactLpt items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateExitTokenExactLpt
 */
export const QuerySimulateExitTokenExactLptService = {
  typeName: TYPE_NAME,
  method: "SimulateExitTokenExactLpt",
  Request: QuerySimulateExitTokenExactLptRequest,
  Response: QuerySimulateExitTokenExactLptResponse,
} as const;

/**
 * Queries a list of SimulateExitExactTokens items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateExitExactTokens
 */
export const QuerySimulateExitExactTokensService = {
  typeName: TYPE_NAME,
  method: "SimulateExitExactTokens",
  Request: QuerySimulateExitExactTokensRequest,
  Response: QuerySimulateExitExactTokensResponse,
} as const;

/**
 * Queries a list of SimulateExitAllTokensExactLpt items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateExitAllTokensExactLpt
 */
export const QuerySimulateExitAllTokensExactLptService = {
  typeName: TYPE_NAME,
  method: "SimulateExitAllTokensExactLpt",
  Request: QuerySimulateExitAllTokensExactLptRequest,
  Response: QuerySimulateExitAllTokensExactLptResponse,
} as const;

/**
 * Queries a list of SpotPrice items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SpotPrice
 */
export const QuerySpotPriceService = {
  typeName: TYPE_NAME,
  method: "SpotPrice",
  Request: QuerySpotPriceRequest,
  Response: QuerySpotPriceResponse,
} as const;

/**
 * Queries a PermanentVirtualBalancePoolToken by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.PermanentVirtualBalancePoolToken
 */
export const QueryPermanentVirtualBalancePoolTokenService = {
  typeName: TYPE_NAME,
  method: "PermanentVirtualBalancePoolToken",
  Request: QueryGetPermanentVirtualBalancePoolTokenRequest,
  Response: QueryGetPermanentVirtualBalancePoolTokenResponse,
} as const;

/**
 * Queries a list of PermanentVirtualBalancePoolToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.PermanentVirtualBalancePoolTokenAll
 */
export const QueryPermanentVirtualBalancePoolTokenAllService = {
  typeName: TYPE_NAME,
  method: "PermanentVirtualBalancePoolTokenAll",
  Request: QueryAllPermanentVirtualBalancePoolTokenRequest,
  Response: QueryAllPermanentVirtualBalancePoolTokenResponse,
} as const;

/**
 * Queries a IntroducingPoolToken by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.IntroducingPoolToken
 */
export const QueryIntroducingPoolTokenService = {
  typeName: TYPE_NAME,
  method: "IntroducingPoolToken",
  Request: QueryGetIntroducingPoolTokenRequest,
  Response: QueryGetIntroducingPoolTokenResponse,
} as const;

/**
 * Queries a list of IntroducingPoolToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.IntroducingPoolTokenAll
 */
export const QueryIntroducingPoolTokenAllService = {
  typeName: TYPE_NAME,
  method: "IntroducingPoolTokenAll",
  Request: QueryAllIntroducingPoolTokenRequest,
  Response: QueryAllIntroducingPoolTokenResponse,
} as const;

/**
 * Queries a ExpiringPoolToken by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.ExpiringPoolToken
 */
export const QueryExpiringPoolTokenService = {
  typeName: TYPE_NAME,
  method: "ExpiringPoolToken",
  Request: QueryGetExpiringPoolTokenRequest,
  Response: QueryGetExpiringPoolTokenResponse,
} as const;

/**
 * Queries a list of ExpiringPoolToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.ExpiringPoolTokenAll
 */
export const QueryExpiringPoolTokenAllService = {
  typeName: TYPE_NAME,
  method: "ExpiringPoolTokenAll",
  Request: QueryAllExpiringPoolTokenRequest,
  Response: QueryAllExpiringPoolTokenResponse,
} as const;

/**
 * Queries a list of LpToken items.
 *
 * @generated from rpc pryzm.amm.v1.Query.LpToken
 */
export const QueryLpTokenService = {
  typeName: TYPE_NAME,
  method: "LpToken",
  Request: QueryLpTokenRequest,
  Response: QueryLpTokenResponse,
} as const;

/**
 * Queries a list of SimulateBatchSwap items.
 *
 * @generated from rpc pryzm.amm.v1.Query.SimulateBatchSwap
 */
export const QuerySimulateBatchSwapService = {
  typeName: TYPE_NAME,
  method: "SimulateBatchSwap",
  Request: QuerySimulateBatchSwapRequest,
  Response: QuerySimulateBatchSwapResponse,
} as const;

/**
 * Queries a YammConfiguration by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.YammConfiguration
 */
export const QueryYammConfigurationService = {
  typeName: TYPE_NAME,
  method: "YammConfiguration",
  Request: QueryGetYammConfigurationRequest,
  Response: QueryGetYammConfigurationResponse,
} as const;

/**
 * Queries a list of YammConfiguration items.
 *
 * @generated from rpc pryzm.amm.v1.Query.YammConfigurationAll
 */
export const QueryYammConfigurationAllService = {
  typeName: TYPE_NAME,
  method: "YammConfigurationAll",
  Request: QueryAllYammConfigurationRequest,
  Response: QueryAllYammConfigurationResponse,
} as const;

/**
 * Queries a WhitelistedRoute by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.WhitelistedRoute
 */
export const QueryWhitelistedRouteService = {
  typeName: TYPE_NAME,
  method: "WhitelistedRoute",
  Request: QueryGetWhitelistedRouteRequest,
  Response: QueryGetWhitelistedRouteResponse,
} as const;

/**
 * Queries a list of WhitelistedRoute items.
 *
 * @generated from rpc pryzm.amm.v1.Query.WhitelistedRouteAll
 */
export const QueryWhitelistedRouteAllService = {
  typeName: TYPE_NAME,
  method: "WhitelistedRouteAll",
  Request: QueryAllWhitelistedRouteRequest,
  Response: QueryAllWhitelistedRouteResponse,
} as const;

/**
 * Queries a Order by id.
 *
 * @generated from rpc pryzm.amm.v1.Query.Order
 */
export const QueryOrderService = {
  typeName: TYPE_NAME,
  method: "Order",
  Request: QueryGetOrderRequest,
  Response: QueryGetOrderResponse,
} as const;

/**
 * Queries a list of Order items.
 *
 * @generated from rpc pryzm.amm.v1.Query.OrderAll
 */
export const QueryOrderAllService = {
  typeName: TYPE_NAME,
  method: "OrderAll",
  Request: QueryAllOrderRequest,
  Response: QueryAllOrderResponse,
} as const;

/**
 * Queries a ExecutableOrder by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.ExecutableOrder
 */
export const QueryExecutableOrderService = {
  typeName: TYPE_NAME,
  method: "ExecutableOrder",
  Request: QueryGetExecutableOrderRequest,
  Response: QueryGetExecutableOrderResponse,
} as const;

/**
 * Queries a list of ExecutableOrder items.
 *
 * @generated from rpc pryzm.amm.v1.Query.ExecutableOrderAll
 */
export const QueryExecutableOrderAllService = {
  typeName: TYPE_NAME,
  method: "ExecutableOrderAll",
  Request: QueryAllExecutableOrderRequest,
  Response: QueryAllExecutableOrderResponse,
} as const;

/**
 * Queries a ScheduleOrder by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.ScheduleOrder
 */
export const QueryScheduleOrderService = {
  typeName: TYPE_NAME,
  method: "ScheduleOrder",
  Request: QueryGetScheduleOrderRequest,
  Response: QueryGetScheduleOrderResponse,
} as const;

/**
 * Queries a list of ScheduleOrder items.
 *
 * @generated from rpc pryzm.amm.v1.Query.ScheduleOrderAll
 */
export const QueryScheduleOrderAllService = {
  typeName: TYPE_NAME,
  method: "ScheduleOrderAll",
  Request: QueryAllScheduleOrderRequest,
  Response: QueryAllScheduleOrderResponse,
} as const;

/**
 * Queries a OraclePricePair by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.OraclePricePair
 */
export const QueryOraclePricePairService = {
  typeName: TYPE_NAME,
  method: "OraclePricePair",
  Request: QueryGetOraclePricePairRequest,
  Response: QueryGetOraclePricePairResponse,
} as const;

/**
 * Queries a list of OraclePricePair items.
 *
 * @generated from rpc pryzm.amm.v1.Query.OraclePricePairAll
 */
export const QueryOraclePricePairAllService = {
  typeName: TYPE_NAME,
  method: "OraclePricePairAll",
  Request: QueryAllOraclePricePairRequest,
  Response: QueryAllOraclePricePairResponse,
} as const;

/**
 * Queries a list of VaultPauseMode items.
 *
 * @generated from rpc pryzm.amm.v1.Query.VaultPauseMode
 */
export const QueryVaultPauseModeService = {
  typeName: TYPE_NAME,
  method: "VaultPauseMode",
  Request: QueryVaultPauseModeRequest,
  Response: QueryVaultPauseModeResponse,
} as const;

/**
 * Queries a PendingTokenIntroduction by index.
 *
 * @generated from rpc pryzm.amm.v1.Query.PendingTokenIntroduction
 */
export const QueryPendingTokenIntroductionService = {
  typeName: TYPE_NAME,
  method: "PendingTokenIntroduction",
  Request: QueryGetPendingTokenIntroductionRequest,
  Response: QueryGetPendingTokenIntroductionResponse,
} as const;

/**
 * Queries a list of PendingTokenIntroduction items.
 *
 * @generated from rpc pryzm.amm.v1.Query.PendingTokenIntroductionAll
 */
export const QueryPendingTokenIntroductionAllService = {
  typeName: TYPE_NAME,
  method: "PendingTokenIntroductionAll",
  Request: QueryAllPendingTokenIntroductionRequest,
  Response: QueryAllPendingTokenIntroductionResponse,
} as const;

/**
 * Queries a YammPoolId item.
 *
 * @generated from rpc pryzm.amm.v1.Query.YammPoolId
 */
export const QueryYammPoolIdService = {
  typeName: TYPE_NAME,
  method: "YammPoolId",
  Request: QueryYammPoolIdRequest,
  Response: QueryYammPoolIdResponse,
} as const;

/**
 * @generated from rpc pryzm.amm.v1.Query.OrderStepBounds
 */
export const QueryOrderStepBoundsService = {
  typeName: TYPE_NAME,
  method: "OrderStepBounds",
  Request: QueryOrderStepBoundsRequest,
  Response: QueryOrderStepBoundsResponse,
} as const;

/**
 * Queries a list of all disabled order pairs
 *
 * @generated from rpc pryzm.amm.v1.Query.DisabledOrderPairAll
 */
export const QueryDisabledOrderPairAllService = {
  typeName: TYPE_NAME,
  method: "DisabledOrderPairAll",
  Request: QueryAllDisabledOrderPairRequest,
  Response: QueryAllDisabledOrderPairResponse,
} as const;

/**
 * Queries whether or not a pair is disabled
 *
 * @generated from rpc pryzm.amm.v1.Query.OrderPairDisabled
 */
export const QueryOrderPairDisabledService = {
  typeName: TYPE_NAME,
  method: "OrderPairDisabled",
  Request: QueryOrderPairDisabledRequest,
  Response: QueryOrderPairDisabledResponse,
} as const;

