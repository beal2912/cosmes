// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/accountedpool/query.proto (package elys.accountedpool, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllAccountedPoolRequest, QueryAllAccountedPoolResponse, QueryGetAccountedPoolRequest, QueryGetAccountedPoolResponse } from "./query_pb.js";

const TYPE_NAME = "elys.accountedpool.Query";

/**
 * Queries a list of AccountedPool items.
 *
 * @generated from rpc elys.accountedpool.Query.AccountedPool
 */
export const QueryAccountedPoolService = {
  typeName: TYPE_NAME,
  method: "AccountedPool",
  Request: QueryGetAccountedPoolRequest,
  Response: QueryGetAccountedPoolResponse,
} as const;

/**
 * @generated from rpc elys.accountedpool.Query.AccountedPoolAll
 */
export const QueryAccountedPoolAllService = {
  typeName: TYPE_NAME,
  method: "AccountedPoolAll",
  Request: QueryAllAccountedPoolRequest,
  Response: QueryAllAccountedPoolResponse,
} as const;

