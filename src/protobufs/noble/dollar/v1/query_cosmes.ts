// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file noble/dollar/v1/query.proto (package noble.dollar.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryIndex, QueryIndexResponse, QueryPaused, QueryPausedResponse, QueryPrincipal, QueryPrincipalResponse, QueryStats, QueryStatsResponse, QueryYield, QueryYieldResponse } from "./query_pb.js";

const TYPE_NAME = "noble.dollar.v1.Query";

/**
 * @generated from rpc noble.dollar.v1.Query.Index
 */
export const QueryIndexService = {
  typeName: TYPE_NAME,
  method: "Index",
  Request: QueryIndex,
  Response: QueryIndexResponse,
} as const;

/**
 * @generated from rpc noble.dollar.v1.Query.Paused
 */
export const QueryPausedService = {
  typeName: TYPE_NAME,
  method: "Paused",
  Request: QueryPaused,
  Response: QueryPausedResponse,
} as const;

/**
 * @generated from rpc noble.dollar.v1.Query.Principal
 */
export const QueryPrincipalService = {
  typeName: TYPE_NAME,
  method: "Principal",
  Request: QueryPrincipal,
  Response: QueryPrincipalResponse,
} as const;

/**
 * @generated from rpc noble.dollar.v1.Query.Yield
 */
export const QueryYieldService = {
  typeName: TYPE_NAME,
  method: "Yield",
  Request: QueryYield,
  Response: QueryYieldResponse,
} as const;

/**
 * @generated from rpc noble.dollar.v1.Query.Stats
 */
export const QueryStatsService = {
  typeName: TYPE_NAME,
  method: "Stats",
  Request: QueryStats,
  Response: QueryStatsResponse,
} as const;

