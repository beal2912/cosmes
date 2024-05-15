// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/validatorvesting/v1beta1/query.proto (package kava.validatorvesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCirculatingSupplyHARDRequest, QueryCirculatingSupplyHARDResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryCirculatingSupplySWPRequest, QueryCirculatingSupplySWPResponse, QueryCirculatingSupplyUSDXRequest, QueryCirculatingSupplyUSDXResponse, QueryTotalSupplyHARDRequest, QueryTotalSupplyHARDResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QueryTotalSupplyUSDXRequest, QueryTotalSupplyUSDXResponse } from "./query_pb.js";

const TYPE_NAME = "kava.validatorvesting.v1beta1.Query";

/**
 * CirculatingSupply returns the total amount of kava tokens in circulation
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.CirculatingSupply
 */
export const QueryCirculatingSupplyService = {
  typeName: TYPE_NAME,
  method: "CirculatingSupply",
  Request: QueryCirculatingSupplyRequest,
  Response: QueryCirculatingSupplyResponse,
} as const;

/**
 * TotalSupply returns the total amount of kava tokens
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.TotalSupply
 */
export const QueryTotalSupplyService = {
  typeName: TYPE_NAME,
  method: "TotalSupply",
  Request: QueryTotalSupplyRequest,
  Response: QueryTotalSupplyResponse,
} as const;

/**
 * CirculatingSupplyHARD returns the total amount of hard tokens in circulation
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.CirculatingSupplyHARD
 */
export const QueryCirculatingSupplyHARDService = {
  typeName: TYPE_NAME,
  method: "CirculatingSupplyHARD",
  Request: QueryCirculatingSupplyHARDRequest,
  Response: QueryCirculatingSupplyHARDResponse,
} as const;

/**
 * CirculatingSupplyUSDX returns the total amount of usdx tokens in circulation
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.CirculatingSupplyUSDX
 */
export const QueryCirculatingSupplyUSDXService = {
  typeName: TYPE_NAME,
  method: "CirculatingSupplyUSDX",
  Request: QueryCirculatingSupplyUSDXRequest,
  Response: QueryCirculatingSupplyUSDXResponse,
} as const;

/**
 * CirculatingSupplySWP returns the total amount of swp tokens in circulation
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.CirculatingSupplySWP
 */
export const QueryCirculatingSupplySWPService = {
  typeName: TYPE_NAME,
  method: "CirculatingSupplySWP",
  Request: QueryCirculatingSupplySWPRequest,
  Response: QueryCirculatingSupplySWPResponse,
} as const;

/**
 * TotalSupplyHARD returns the total amount of hard tokens
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.TotalSupplyHARD
 */
export const QueryTotalSupplyHARDService = {
  typeName: TYPE_NAME,
  method: "TotalSupplyHARD",
  Request: QueryTotalSupplyHARDRequest,
  Response: QueryTotalSupplyHARDResponse,
} as const;

/**
 * TotalSupplyUSDX returns the total amount of usdx tokens
 *
 * @generated from rpc kava.validatorvesting.v1beta1.Query.TotalSupplyUSDX
 */
export const QueryTotalSupplyUSDXService = {
  typeName: TYPE_NAME,
  method: "TotalSupplyUSDX",
  Request: QueryTotalSupplyUSDXRequest,
  Response: QueryTotalSupplyUSDXResponse,
} as const;

