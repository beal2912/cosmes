// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/liquiditypool/query.proto (package sunrise.liquiditypool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAddressPositionsRequest, QueryAddressPositionsResponse, QueryCalculationCreatePositionRequest, QueryCalculationCreatePositionResponse, QueryCalculationIncreaseLiquidityRequest, QueryCalculationIncreaseLiquidityResponse, QueryParamsRequest, QueryParamsResponse, QueryPoolPositionsRequest, QueryPoolPositionsResponse, QueryPoolRequest, QueryPoolResponse, QueryPoolsRequest, QueryPoolsResponse, QueryPositionFeesRequest, QueryPositionFeesResponse, QueryPositionRequest, QueryPositionResponse, QueryPositionsRequest, QueryPositionsResponse } from "./query_pb.js";

const TYPE_NAME = "sunrise.liquiditypool.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc sunrise.liquiditypool.Query.Params
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
 * @generated from rpc sunrise.liquiditypool.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryPoolRequest,
  Response: QueryPoolResponse,
} as const;

/**
 * @generated from rpc sunrise.liquiditypool.Query.Pools
 */
export const QueryPoolsService = {
  typeName: TYPE_NAME,
  method: "Pools",
  Request: QueryPoolsRequest,
  Response: QueryPoolsResponse,
} as const;

/**
 * Queries a list of Position items.
 *
 * @generated from rpc sunrise.liquiditypool.Query.Position
 */
export const QueryPositionService = {
  typeName: TYPE_NAME,
  method: "Position",
  Request: QueryPositionRequest,
  Response: QueryPositionResponse,
} as const;

/**
 * @generated from rpc sunrise.liquiditypool.Query.Positions
 */
export const QueryPositionsService = {
  typeName: TYPE_NAME,
  method: "Positions",
  Request: QueryPositionsRequest,
  Response: QueryPositionsResponse,
} as const;

/**
 * @generated from rpc sunrise.liquiditypool.Query.PoolPositions
 */
export const QueryPoolPositionsService = {
  typeName: TYPE_NAME,
  method: "PoolPositions",
  Request: QueryPoolPositionsRequest,
  Response: QueryPoolPositionsResponse,
} as const;

/**
 * @generated from rpc sunrise.liquiditypool.Query.AddressPositions
 */
export const QueryAddressPositionsService = {
  typeName: TYPE_NAME,
  method: "AddressPositions",
  Request: QueryAddressPositionsRequest,
  Response: QueryAddressPositionsResponse,
} as const;

/**
 * Query fees by position id
 *
 * @generated from rpc sunrise.liquiditypool.Query.PositionFees
 */
export const QueryPositionFeesService = {
  typeName: TYPE_NAME,
  method: "PositionFees",
  Request: QueryPositionFeesRequest,
  Response: QueryPositionFeesResponse,
} as const;

/**
 * Query calculation another amount of create position
 *
 * @generated from rpc sunrise.liquiditypool.Query.CalculationCreatePosition
 */
export const QueryCalculationCreatePositionService = {
  typeName: TYPE_NAME,
  method: "CalculationCreatePosition",
  Request: QueryCalculationCreatePositionRequest,
  Response: QueryCalculationCreatePositionResponse,
} as const;

/**
 * Query calculation another amount of increase liquidity
 *
 * @generated from rpc sunrise.liquiditypool.Query.CalculationIncreaseLiquidity
 */
export const QueryCalculationIncreaseLiquidityService = {
  typeName: TYPE_NAME,
  method: "CalculationIncreaseLiquidity",
  Request: QueryCalculationIncreaseLiquidityRequest,
  Response: QueryCalculationIncreaseLiquidityResponse,
} as const;
