// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/kavadist/v1beta1/query.proto (package kava.kavadist.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBalanceRequest, QueryBalanceResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "kava.kavadist.v1beta1.Query";

/**
 * Params queries the parameters of x/kavadist module.
 *
 * @generated from rpc kava.kavadist.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Balance queries the balance of all coins of x/kavadist module.
 *
 * @generated from rpc kava.kavadist.v1beta1.Query.Balance
 */
export const QueryBalanceService = {
  typeName: TYPE_NAME,
  method: "Balance",
  Request: QueryBalanceRequest,
  Response: QueryBalanceResponse,
} as const;
