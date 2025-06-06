// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/tier/query.proto (package elys.tier, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllPortfolioRequest, QueryAllPortfolioResponse, QueryCalculateDiscountRequest, QueryCalculateDiscountResponse, QueryGetAllPricesRequest, QueryGetAllPricesResponse, QueryGetAmmPriceRequest, QueryGetAmmPriceResponse, QueryGetConsolidatedPriceRequest, QueryGetConsolidatedPriceResponse, QueryGetOraclePricesRequest, QueryGetOraclePricesResponse, QueryGetPortfolioRequest, QueryGetPortfolioResponse, QueryGetUsersPoolDataRequest, QueryGetUsersPoolDataResponse, QueryLeverageLpTotalRequest, QueryLeverageLpTotalResponse, QueryLiquidTotalRequest, QueryLiquidTotalResponse, QueryLockedOrderRequest, QueryLockedOrderResponse, QueryParamsRequest, QueryParamsResponse, QueryPerpetualRequest, QueryPerpetualResponse, QueryRewardsTotalRequest, QueryRewardsTotalResponse, QueryStakedPoolRequest, QueryStakedPoolResponse, QueryStakedRequest, QueryStakedResponse } from "./query_pb.js";

const TYPE_NAME = "elys.tier.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.tier.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of Portfolio items.
 *
 * @generated from rpc elys.tier.Query.Portfolio
 */
export const QueryPortfolioService = {
  typeName: TYPE_NAME,
  method: "Portfolio",
  Request: QueryGetPortfolioRequest,
  Response: QueryGetPortfolioResponse,
} as const;

/**
 * @generated from rpc elys.tier.Query.PortfolioAll
 */
export const QueryPortfolioAllService = {
  typeName: TYPE_NAME,
  method: "PortfolioAll",
  Request: QueryAllPortfolioRequest,
  Response: QueryAllPortfolioResponse,
} as const;

/**
 * Queries a list of CalculateDiscount items.
 *
 * @generated from rpc elys.tier.Query.CalculateDiscount
 */
export const QueryCalculateDiscountService = {
  typeName: TYPE_NAME,
  method: "CalculateDiscount",
  Request: QueryCalculateDiscountRequest,
  Response: QueryCalculateDiscountResponse,
} as const;

/**
 * Queries a list of LeverageLpTotal items.
 *
 * @generated from rpc elys.tier.Query.LeverageLpTotal
 */
export const QueryLeverageLpTotalService = {
  typeName: TYPE_NAME,
  method: "LeverageLpTotal",
  Request: QueryLeverageLpTotalRequest,
  Response: QueryLeverageLpTotalResponse,
} as const;

/**
 * Queries a list of RewardsTotal items.
 *
 * @generated from rpc elys.tier.Query.RewardsTotal
 */
export const QueryRewardsTotalService = {
  typeName: TYPE_NAME,
  method: "RewardsTotal",
  Request: QueryRewardsTotalRequest,
  Response: QueryRewardsTotalResponse,
} as const;

/**
 * Queries a list of StakedPool items.
 *
 * @generated from rpc elys.tier.Query.StakedPool
 */
export const QueryStakedPoolService = {
  typeName: TYPE_NAME,
  method: "StakedPool",
  Request: QueryStakedPoolRequest,
  Response: QueryStakedPoolResponse,
} as const;

/**
 * Queries a list of Perpetual items.
 *
 * @generated from rpc elys.tier.Query.Perpetual
 */
export const QueryPerpetualService = {
  typeName: TYPE_NAME,
  method: "Perpetual",
  Request: QueryPerpetualRequest,
  Response: QueryPerpetualResponse,
} as const;

/**
 * Queries a list of LiquidTotal items.
 *
 * @generated from rpc elys.tier.Query.LiquidTotal
 */
export const QueryLiquidTotalService = {
  typeName: TYPE_NAME,
  method: "LiquidTotal",
  Request: QueryLiquidTotalRequest,
  Response: QueryLiquidTotalResponse,
} as const;

/**
 * Queries a list of LockedOrder items.
 *
 * @generated from rpc elys.tier.Query.LockedOrder
 */
export const QueryLockedOrderService = {
  typeName: TYPE_NAME,
  method: "LockedOrder",
  Request: QueryLockedOrderRequest,
  Response: QueryLockedOrderResponse,
} as const;

/**
 * Queries a list of GetAmmPrice items.
 *
 * @generated from rpc elys.tier.Query.GetAmmPrice
 */
export const QueryGetAmmPriceService = {
  typeName: TYPE_NAME,
  method: "GetAmmPrice",
  Request: QueryGetAmmPriceRequest,
  Response: QueryGetAmmPriceResponse,
} as const;

/**
 * Queries a list of GetConsolidatedPrice items.
 *
 * @generated from rpc elys.tier.Query.GetConsolidatedPrice
 */
export const QueryGetConsolidatedPriceService = {
  typeName: TYPE_NAME,
  method: "GetConsolidatedPrice",
  Request: QueryGetConsolidatedPriceRequest,
  Response: QueryGetConsolidatedPriceResponse,
} as const;

/**
 * Queries a list of Staked items.
 *
 * @generated from rpc elys.tier.Query.Staked
 */
export const QueryStakedService = {
  typeName: TYPE_NAME,
  method: "Staked",
  Request: QueryStakedRequest,
  Response: QueryStakedResponse,
} as const;

/**
 * Queries a list of GetUsersPoolData items.
 *
 * @generated from rpc elys.tier.Query.GetUsersPoolData
 */
export const QueryGetUsersPoolDataService = {
  typeName: TYPE_NAME,
  method: "GetUsersPoolData",
  Request: QueryGetUsersPoolDataRequest,
  Response: QueryGetUsersPoolDataResponse,
} as const;

/**
 * Queries a list of GetConsolidatedPrice items.
 *
 * @generated from rpc elys.tier.Query.GetAllPrices
 */
export const QueryGetAllPricesService = {
  typeName: TYPE_NAME,
  method: "GetAllPrices",
  Request: QueryGetAllPricesRequest,
  Response: QueryGetAllPricesResponse,
} as const;

/**
 * Queries a list of Oracle prices from denoms.
 *
 * @generated from rpc elys.tier.Query.GetOraclePrices
 */
export const QueryGetOraclePricesService = {
  typeName: TYPE_NAME,
  method: "GetOraclePrices",
  Request: QueryGetOraclePricesRequest,
  Response: QueryGetOraclePricesResponse,
} as const;

