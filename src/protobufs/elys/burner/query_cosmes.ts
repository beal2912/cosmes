// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/burner/query.proto (package elys.burner, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllHistoryRequest, QueryAllHistoryResponse, QueryGetHistoryRequest, QueryGetHistoryResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "elys.burner.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc elys.burner.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of History items.
 *
 * @generated from rpc elys.burner.Query.History
 */
export const QueryHistoryService = {
  typeName: TYPE_NAME,
  method: "History",
  Request: QueryGetHistoryRequest,
  Response: QueryGetHistoryResponse,
} as const;

/**
 * @generated from rpc elys.burner.Query.HistoryAll
 */
export const QueryHistoryAllService = {
  typeName: TYPE_NAME,
  method: "HistoryAll",
  Request: QueryAllHistoryRequest,
  Response: QueryAllHistoryResponse,
} as const;

