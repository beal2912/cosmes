// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/amm/query.proto (package elys.amm, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllDenomLiquidityRequest, QueryAllDenomLiquidityResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryBalanceRequest, QueryBalanceResponse, QueryExitPoolEstimationRequest, QueryExitPoolEstimationResponse, QueryGetDenomLiquidityRequest, QueryGetDenomLiquidityResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryInRouteByDenomRequest, QueryInRouteByDenomResponse, QueryJoinPoolEstimationRequest, QueryJoinPoolEstimationResponse, QueryOutRouteByDenomRequest, QueryOutRouteByDenomResponse, QueryParamsRequest, QueryParamsResponse, QuerySlippageTrackAllRequest, QuerySlippageTrackAllResponse, QuerySlippageTrackRequest, QuerySlippageTrackResponse, QuerySwapEstimationByDenomRequest, QuerySwapEstimationByDenomResponse, QuerySwapEstimationExactAmountOutRequest, QuerySwapEstimationExactAmountOutResponse, QuerySwapEstimationRequest, QuerySwapEstimationResponse, QueryWeightAndSlippageFeeRequest, QueryWeightAndSlippageFeeResponse } from "./query_pb.js";

const TYPE_NAME = "elys.amm.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.amm.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of Pool items.
 *
 * @generated from rpc elys.amm.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryGetPoolRequest,
  Response: QueryGetPoolResponse,
} as const;

/**
 * @generated from rpc elys.amm.Query.PoolAll
 */
export const QueryPoolAllService = {
  typeName: TYPE_NAME,
  method: "PoolAll",
  Request: QueryAllPoolRequest,
  Response: QueryAllPoolResponse,
} as const;

/**
 * Queries a list of DenomLiquidity items.
 *
 * @generated from rpc elys.amm.Query.DenomLiquidity
 */
export const QueryDenomLiquidityService = {
  typeName: TYPE_NAME,
  method: "DenomLiquidity",
  Request: QueryGetDenomLiquidityRequest,
  Response: QueryGetDenomLiquidityResponse,
} as const;

/**
 * @generated from rpc elys.amm.Query.DenomLiquidityAll
 */
export const QueryDenomLiquidityAllService = {
  typeName: TYPE_NAME,
  method: "DenomLiquidityAll",
  Request: QueryAllDenomLiquidityRequest,
  Response: QueryAllDenomLiquidityResponse,
} as const;

/**
 * Queries a list of SwapEstimation items, uses swap exact amount in route.
 *
 * @generated from rpc elys.amm.Query.SwapEstimation
 */
export const QuerySwapEstimationService = {
  typeName: TYPE_NAME,
  method: "SwapEstimation",
  Request: QuerySwapEstimationRequest,
  Response: QuerySwapEstimationResponse,
} as const;

/**
 * Queries a list of SwapEstimation items, uses swap exact amount out route.
 *
 * @generated from rpc elys.amm.Query.SwapEstimationExactAmountOut
 */
export const QuerySwapEstimationExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "SwapEstimationExactAmountOut",
  Request: QuerySwapEstimationExactAmountOutRequest,
  Response: QuerySwapEstimationExactAmountOutResponse,
} as const;

/**
 * Queries JoinPool estimation
 *
 * @generated from rpc elys.amm.Query.JoinPoolEstimation
 */
export const QueryJoinPoolEstimationService = {
  typeName: TYPE_NAME,
  method: "JoinPoolEstimation",
  Request: QueryJoinPoolEstimationRequest,
  Response: QueryJoinPoolEstimationResponse,
} as const;

/**
 * Queries ExistPool estimation
 *
 * @generated from rpc elys.amm.Query.ExitPoolEstimation
 */
export const QueryExitPoolEstimationService = {
  typeName: TYPE_NAME,
  method: "ExitPoolEstimation",
  Request: QueryExitPoolEstimationRequest,
  Response: QueryExitPoolEstimationResponse,
} as const;

/**
 * Queries slippage track for a week.
 *
 * @generated from rpc elys.amm.Query.SlippageTrack
 */
export const QuerySlippageTrackService = {
  typeName: TYPE_NAME,
  method: "SlippageTrack",
  Request: QuerySlippageTrackRequest,
  Response: QuerySlippageTrackResponse,
} as const;

/**
 * Queries all slippage tracks for a week.
 *
 * @generated from rpc elys.amm.Query.SlippageTrackAll
 */
export const QuerySlippageTrackAllService = {
  typeName: TYPE_NAME,
  method: "SlippageTrackAll",
  Request: QuerySlippageTrackAllRequest,
  Response: QuerySlippageTrackAllResponse,
} as const;

/**
 * Queries a list of Balance items.
 *
 * @generated from rpc elys.amm.Query.Balance
 */
export const QueryBalanceService = {
  typeName: TYPE_NAME,
  method: "Balance",
  Request: QueryBalanceRequest,
  Response: QueryBalanceResponse,
} as const;

/**
 * Queries a list of InRouteByDenom items.
 *
 * @generated from rpc elys.amm.Query.InRouteByDenom
 */
export const QueryInRouteByDenomService = {
  typeName: TYPE_NAME,
  method: "InRouteByDenom",
  Request: QueryInRouteByDenomRequest,
  Response: QueryInRouteByDenomResponse,
} as const;

/**
 * Queries a list of OutRouteByDenom items.
 *
 * @generated from rpc elys.amm.Query.OutRouteByDenom
 */
export const QueryOutRouteByDenomService = {
  typeName: TYPE_NAME,
  method: "OutRouteByDenom",
  Request: QueryOutRouteByDenomRequest,
  Response: QueryOutRouteByDenomResponse,
} as const;

/**
 * Queries a list of SwapEstimationByDenom items.
 *
 * @generated from rpc elys.amm.Query.SwapEstimationByDenom
 */
export const QuerySwapEstimationByDenomService = {
  typeName: TYPE_NAME,
  method: "SwapEstimationByDenom",
  Request: QuerySwapEstimationByDenomRequest,
  Response: QuerySwapEstimationByDenomResponse,
} as const;

/**
 * Queries WeightAndSlippageFee for a pool and date
 *
 * @generated from rpc elys.amm.Query.WeightAndSlippageFee
 */
export const QueryWeightAndSlippageFeeService = {
  typeName: TYPE_NAME,
  method: "WeightAndSlippageFee",
  Request: QueryWeightAndSlippageFeeRequest,
  Response: QueryWeightAndSlippageFeeResponse,
} as const;

