// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/txfees/v1beta1/query.proto (package osmosis.txfees.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryEipBaseFeeRequest, QueryEipBaseFeeResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.txfees.v1beta1.Query";

/**
 * Returns the current fee market EIP fee.
 *
 * @generated from rpc osmosis.txfees.v1beta1.Query.GetEipBaseFee
 */
export const QueryGetEipBaseFeeService = {
  typeName: TYPE_NAME,
  method: "GetEipBaseFee",
  Request: QueryEipBaseFeeRequest,
  Response: QueryEipBaseFeeResponse,
} as const;

