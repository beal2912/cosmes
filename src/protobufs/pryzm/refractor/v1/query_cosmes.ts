// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file pryzm/refractor/v1/query.proto (package pryzm.refractor.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryGetAssetStateRequest, QueryGetAssetStateResponse, QueryGetCPExchangeRateRequest, QueryGetCPExchangeRateResponse, QueryParamsRequest, QueryParamsResponse, QuerySimulateRedeemRequest, QuerySimulateRedeemResponse, QuerySimulateRefractRequest, QuerySimulateRefractResponse } from "./query_pb.js";

const TYPE_NAME = "pryzm.refractor.v1.Query";

/**
 * @generated from rpc pryzm.refractor.v1.Query.AssetState
 */
export const QueryAssetStateService = {
  typeName: TYPE_NAME,
  method: "AssetState",
  Request: QueryGetAssetStateRequest,
  Response: QueryGetAssetStateResponse,
} as const;

/**
 * @generated from rpc pryzm.refractor.v1.Query.CPExchangeRate
 */
export const QueryCPExchangeRateService = {
  typeName: TYPE_NAME,
  method: "CPExchangeRate",
  Request: QueryGetCPExchangeRateRequest,
  Response: QueryGetCPExchangeRateResponse,
} as const;

/**
 * @generated from rpc pryzm.refractor.v1.Query.SimulateRefract
 */
export const QuerySimulateRefractService = {
  typeName: TYPE_NAME,
  method: "SimulateRefract",
  Request: QuerySimulateRefractRequest,
  Response: QuerySimulateRefractResponse,
} as const;

/**
 * @generated from rpc pryzm.refractor.v1.Query.SimulateRedeem
 */
export const QuerySimulateRedeemService = {
  typeName: TYPE_NAME,
  method: "SimulateRedeem",
  Request: QuerySimulateRedeemRequest,
  Response: QuerySimulateRedeemResponse,
} as const;

/**
 * @generated from rpc pryzm.refractor.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

