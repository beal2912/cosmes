// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/fee/query.proto (package sunrise.fee, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "sunrise.fee.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc sunrise.fee.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

