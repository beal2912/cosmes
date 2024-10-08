// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/mint/v1/query.proto (package pryzm.mint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryMinterRequest, QueryMinterResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "pryzm.mint.v1.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc pryzm.mint.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of Minter items.
 *
 * @generated from rpc pryzm.mint.v1.Query.Minter
 */
export const QueryMinterService = {
  typeName: TYPE_NAME,
  method: "Minter",
  Request: QueryMinterRequest,
  Response: QueryMinterResponse,
} as const;

