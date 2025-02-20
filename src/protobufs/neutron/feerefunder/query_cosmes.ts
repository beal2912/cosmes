// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file neutron/feerefunder/query.proto (package neutron.feerefunder, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FeeInfoRequest, FeeInfoResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "neutron.feerefunder.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc neutron.feerefunder.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * @generated from rpc neutron.feerefunder.Query.FeeInfo
 */
export const QueryFeeInfoService = {
  typeName: TYPE_NAME,
  method: "FeeInfo",
  Request: FeeInfoRequest,
  Response: FeeInfoResponse,
} as const;

