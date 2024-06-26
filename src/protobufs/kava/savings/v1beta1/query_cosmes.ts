// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/savings/v1beta1/query.proto (package kava.savings.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryDepositsRequest, QueryDepositsResponse, QueryParamsRequest, QueryParamsResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query_pb.js";

const TYPE_NAME = "kava.savings.v1beta1.Query";

/**
 * Params queries all parameters of the savings module.
 *
 * @generated from rpc kava.savings.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Deposits queries savings deposits.
 *
 * @generated from rpc kava.savings.v1beta1.Query.Deposits
 */
export const QueryDepositsService = {
  typeName: TYPE_NAME,
  method: "Deposits",
  Request: QueryDepositsRequest,
  Response: QueryDepositsResponse,
} as const;

/**
 * TotalSupply returns the total sum of all coins currently locked into the savings module.
 *
 * @generated from rpc kava.savings.v1beta1.Query.TotalSupply
 */
export const QueryTotalSupplyService = {
  typeName: TYPE_NAME,
  method: "TotalSupply",
  Request: QueryTotalSupplyRequest,
  Response: QueryTotalSupplyResponse,
} as const;

