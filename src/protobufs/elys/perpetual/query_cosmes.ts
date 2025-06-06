// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/perpetual/query.proto (package elys.perpetual, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { IsWhitelistedRequest, IsWhitelistedResponse, MTPRequest, MTPResponse, ParamsRequest, ParamsResponse, PerpetualCounterRequest, PerpetualCounterResponse, PositionsByPoolRequest, PositionsByPoolResponse, PositionsForAddressRequest, PositionsForAddressResponse, PositionsRequest, PositionsResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryCloseEstimationRequest, QueryCloseEstimationResponse, QueryGetPoolRequest, QueryGetPoolResponse, QueryOpenEstimationRequest, QueryOpenEstimationResponse, WhitelistRequest, WhitelistResponse } from "./query_pb.js";

const TYPE_NAME = "elys.perpetual.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.perpetual.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * Queries a list of positions.
 *
 * @generated from rpc elys.perpetual.Query.GetPositions
 */
export const QueryGetPositionsService = {
  typeName: TYPE_NAME,
  method: "GetPositions",
  Request: PositionsRequest,
  Response: PositionsResponse,
} as const;

/**
 * Queries a list of mtp positions by pool.
 *
 * @generated from rpc elys.perpetual.Query.GetPositionsByPool
 */
export const QueryGetPositionsByPoolService = {
  typeName: TYPE_NAME,
  method: "GetPositionsByPool",
  Request: PositionsByPoolRequest,
  Response: PositionsByPoolResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Query.PerpetualCounter
 */
export const QueryPerpetualCounterService = {
  typeName: TYPE_NAME,
  method: "PerpetualCounter",
  Request: PerpetualCounterRequest,
  Response: PerpetualCounterResponse,
} as const;

/**
 * Queries a list of mtp positions for a given address.
 *
 * @generated from rpc elys.perpetual.Query.GetPositionsForAddress
 */
export const QueryGetPositionsForAddressService = {
  typeName: TYPE_NAME,
  method: "GetPositionsForAddress",
  Request: PositionsForAddressRequest,
  Response: PositionsForAddressResponse,
} as const;

/**
 * Queries a list of whitelisted addresses.
 *
 * @generated from rpc elys.perpetual.Query.GetWhitelist
 */
export const QueryGetWhitelistService = {
  typeName: TYPE_NAME,
  method: "GetWhitelist",
  Request: WhitelistRequest,
  Response: WhitelistResponse,
} as const;

/**
 * Is an address whitelisted?
 *
 * @generated from rpc elys.perpetual.Query.IsWhitelisted
 */
export const QueryIsWhitelistedService = {
  typeName: TYPE_NAME,
  method: "IsWhitelisted",
  Request: IsWhitelistedRequest,
  Response: IsWhitelistedResponse,
} as const;

/**
 * Queries a single pool given its index.
 *
 * @generated from rpc elys.perpetual.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryGetPoolRequest,
  Response: QueryGetPoolResponse,
} as const;

/**
 * Queries a list of all pools.
 *
 * @generated from rpc elys.perpetual.Query.Pools
 */
export const QueryPoolsService = {
  typeName: TYPE_NAME,
  method: "Pools",
  Request: QueryAllPoolRequest,
  Response: QueryAllPoolResponse,
} as const;

/**
 * Queries a single mtp position given its address and id.
 *
 * @generated from rpc elys.perpetual.Query.MTP
 */
export const QueryMTPService = {
  typeName: TYPE_NAME,
  method: "MTP",
  Request: MTPRequest,
  Response: MTPResponse,
} as const;

/**
 * Queries an estimation of a new open position details.
 *
 * @generated from rpc elys.perpetual.Query.OpenEstimation
 */
export const QueryOpenEstimationService = {
  typeName: TYPE_NAME,
  method: "OpenEstimation",
  Request: QueryOpenEstimationRequest,
  Response: QueryOpenEstimationResponse,
} as const;

/**
 * Queries a list of CloseEstimation items.
 *
 * @generated from rpc elys.perpetual.Query.CloseEstimation
 */
export const QueryCloseEstimationService = {
  typeName: TYPE_NAME,
  method: "CloseEstimation",
  Request: QueryCloseEstimationRequest,
  Response: QueryCloseEstimationResponse,
} as const;

