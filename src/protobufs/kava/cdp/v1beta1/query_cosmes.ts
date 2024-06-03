// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file kava/cdp/v1beta1/query.proto (package kava.cdp.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAccountsRequest, QueryAccountsResponse, QueryCdpRequest, QueryCdpResponse, QueryCdpsRequest, QueryCdpsResponse, QueryDepositsRequest, QueryDepositsResponse, QueryParamsRequest, QueryParamsResponse, QueryTotalCollateralRequest, QueryTotalCollateralResponse, QueryTotalPrincipalRequest, QueryTotalPrincipalResponse } from "./query_pb.js";

const TYPE_NAME = "kava.cdp.v1beta1.Query";

/**
 * Params queries all parameters of the cdp module.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Accounts queries the CDP module accounts.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.Accounts
 */
export const QueryAccountsService = {
  typeName: TYPE_NAME,
  method: "Accounts",
  Request: QueryAccountsRequest,
  Response: QueryAccountsResponse,
} as const;

/**
 * TotalPrincipal queries the total principal of a given collateral type.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.TotalPrincipal
 */
export const QueryTotalPrincipalService = {
  typeName: TYPE_NAME,
  method: "TotalPrincipal",
  Request: QueryTotalPrincipalRequest,
  Response: QueryTotalPrincipalResponse,
} as const;

/**
 * TotalCollateral queries the total collateral of a given collateral type.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.TotalCollateral
 */
export const QueryTotalCollateralService = {
  typeName: TYPE_NAME,
  method: "TotalCollateral",
  Request: QueryTotalCollateralRequest,
  Response: QueryTotalCollateralResponse,
} as const;

/**
 * Cdps queries all active CDPs.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.Cdps
 */
export const QueryCdpsService = {
  typeName: TYPE_NAME,
  method: "Cdps",
  Request: QueryCdpsRequest,
  Response: QueryCdpsResponse,
} as const;

/**
 * Cdp queries a CDP with the input owner address and collateral type.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.Cdp
 */
export const QueryCdpService = {
  typeName: TYPE_NAME,
  method: "Cdp",
  Request: QueryCdpRequest,
  Response: QueryCdpResponse,
} as const;

/**
 * Deposits queries deposits associated with the CDP owned by an address for a collateral type.
 *
 * @generated from rpc kava.cdp.v1beta1.Query.Deposits
 */
export const QueryDepositsService = {
  typeName: TYPE_NAME,
  method: "Deposits",
  Request: QueryDepositsRequest,
  Response: QueryDepositsResponse,
} as const;
