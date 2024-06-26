// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/liquid/v1beta1/query.proto (package kava.liquid.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryDelegatedBalanceRequest, QueryDelegatedBalanceResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query_pb.js";

const TYPE_NAME = "kava.liquid.v1beta1.Query";

/**
 * DelegatedBalance returns an account's vesting and vested coins currently delegated to validators.
 * It ignores coins in unbonding delegations.
 *
 * @generated from rpc kava.liquid.v1beta1.Query.DelegatedBalance
 */
export const QueryDelegatedBalanceService = {
  typeName: TYPE_NAME,
  method: "DelegatedBalance",
  Request: QueryDelegatedBalanceRequest,
  Response: QueryDelegatedBalanceResponse,
} as const;

/**
 * TotalSupply returns the total sum of all coins currently locked into the liquid module.
 *
 * @generated from rpc kava.liquid.v1beta1.Query.TotalSupply
 */
export const QueryTotalSupplyService = {
  typeName: TYPE_NAME,
  method: "TotalSupply",
  Request: QueryTotalSupplyRequest,
  Response: QueryTotalSupplyResponse,
} as const;

