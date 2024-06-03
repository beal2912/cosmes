// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/leveragelp/query.proto (package elys.leveragelp, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { IsWhitelistedRequest, IsWhitelistedResponse, ParamsRequest, ParamsResponse, PositionRequest, PositionResponse, PositionsByPoolRequest, PositionsByPoolResponse, PositionsForAddressRequest, PositionsForAddressResponse, PositionsRequest, PositionsResponse, QueryAllPoolRequest, QueryAllPoolResponse, QueryGetPoolRequest, QueryGetPoolResponse, StatusRequest, StatusResponse, WhitelistRequest, WhitelistResponse } from "./query_pb.js";

const TYPE_NAME = "elys.leveragelp.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.leveragelp.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * Queries a list of GetPositions items.
 *
 * @generated from rpc elys.leveragelp.Query.QueryPositions
 */
export const QueryQueryPositionsService = {
  typeName: TYPE_NAME,
  method: "QueryPositions",
  Request: PositionsRequest,
  Response: PositionsResponse,
} as const;

/**
 * Queries a list of GetPositionsByPool items.
 *
 * @generated from rpc elys.leveragelp.Query.QueryPositionsByPool
 */
export const QueryQueryPositionsByPoolService = {
  typeName: TYPE_NAME,
  method: "QueryPositionsByPool",
  Request: PositionsByPoolRequest,
  Response: PositionsByPoolResponse,
} as const;

/**
 * Queries a list of GetStatus items.
 *
 * @generated from rpc elys.leveragelp.Query.GetStatus
 */
export const QueryGetStatusService = {
  typeName: TYPE_NAME,
  method: "GetStatus",
  Request: StatusRequest,
  Response: StatusResponse,
} as const;

/**
 * Queries a list of GetPositionsForAddress items.
 *
 * @generated from rpc elys.leveragelp.Query.QueryPositionsForAddress
 */
export const QueryQueryPositionsForAddressService = {
  typeName: TYPE_NAME,
  method: "QueryPositionsForAddress",
  Request: PositionsForAddressRequest,
  Response: PositionsForAddressResponse,
} as const;

/**
 * Queries a list of GetWhitelist items.
 *
 * @generated from rpc elys.leveragelp.Query.GetWhitelist
 */
export const QueryGetWhitelistService = {
  typeName: TYPE_NAME,
  method: "GetWhitelist",
  Request: WhitelistRequest,
  Response: WhitelistResponse,
} as const;

/**
 * Queries a list of IsWhitelisted items.
 *
 * @generated from rpc elys.leveragelp.Query.IsWhitelisted
 */
export const QueryIsWhitelistedService = {
  typeName: TYPE_NAME,
  method: "IsWhitelisted",
  Request: IsWhitelistedRequest,
  Response: IsWhitelistedResponse,
} as const;

/**
 * Queries a list of Pool items.
 *
 * @generated from rpc elys.leveragelp.Query.Pool
 */
export const QueryPoolService = {
  typeName: TYPE_NAME,
  method: "Pool",
  Request: QueryGetPoolRequest,
  Response: QueryGetPoolResponse,
} as const;

/**
 * @generated from rpc elys.leveragelp.Query.Pools
 */
export const QueryPoolsService = {
  typeName: TYPE_NAME,
  method: "Pools",
  Request: QueryAllPoolRequest,
  Response: QueryAllPoolResponse,
} as const;

/**
 * Queries a list of Position items.
 *
 * @generated from rpc elys.leveragelp.Query.Position
 */
export const QueryPositionService = {
  typeName: TYPE_NAME,
  method: "Position",
  Request: PositionRequest,
  Response: PositionResponse,
} as const;
