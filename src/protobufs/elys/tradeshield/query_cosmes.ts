// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/tradeshield/query.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllPendingPerpetualOrderRequest, QueryAllPendingPerpetualOrderResponse, QueryAllPendingSpotOrderRequest, QueryAllPendingSpotOrderResponse, QueryGetPendingPerpetualOrderRequest, QueryGetPendingPerpetualOrderResponse, QueryGetPendingSpotOrderRequest, QueryGetPendingSpotOrderResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "elys.tradeshield.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.tradeshield.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of PendingSpotOrder items.
 *
 * @generated from rpc elys.tradeshield.Query.PendingSpotOrder
 */
export const QueryPendingSpotOrderService = {
  typeName: TYPE_NAME,
  method: "PendingSpotOrder",
  Request: QueryGetPendingSpotOrderRequest,
  Response: QueryGetPendingSpotOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Query.PendingSpotOrderAll
 */
export const QueryPendingSpotOrderAllService = {
  typeName: TYPE_NAME,
  method: "PendingSpotOrderAll",
  Request: QueryAllPendingSpotOrderRequest,
  Response: QueryAllPendingSpotOrderResponse,
} as const;

/**
 * Queries a list of PendingPerpetualOrder items.
 *
 * @generated from rpc elys.tradeshield.Query.PendingPerpetualOrder
 */
export const QueryPendingPerpetualOrderService = {
  typeName: TYPE_NAME,
  method: "PendingPerpetualOrder",
  Request: QueryGetPendingPerpetualOrderRequest,
  Response: QueryGetPendingPerpetualOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Query.PendingPerpetualOrderAll
 */
export const QueryPendingPerpetualOrderAllService = {
  typeName: TYPE_NAME,
  method: "PendingPerpetualOrderAll",
  Request: QueryAllPendingPerpetualOrderRequest,
  Response: QueryAllPendingPerpetualOrderResponse,
} as const;

