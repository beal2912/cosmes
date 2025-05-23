// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/txfees/v1beta1/query.proto (package injective.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryEipBaseFeeRequest, QueryEipBaseFeeResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "injective.txfees.v1beta1.Query";

/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 *
 * @generated from rpc injective.txfees.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Returns the current fee market EIP fee.
 *
 * @generated from rpc injective.txfees.v1beta1.Query.GetEipBaseFee
 */
export const QueryGetEipBaseFeeService = {
  typeName: TYPE_NAME,
  method: "GetEipBaseFee",
  Request: QueryEipBaseFeeRequest,
  Response: QueryEipBaseFeeResponse,
} as const;

