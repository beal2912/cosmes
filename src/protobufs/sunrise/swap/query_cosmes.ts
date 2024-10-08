// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/swap/query.proto (package sunrise.swap, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCalculationSwapExactAmountInRequest, QueryCalculationSwapExactAmountInResponse, QueryCalculationSwapExactAmountOutRequest, QueryCalculationSwapExactAmountOutResponse, QueryIncomingInFlightPacketRequest, QueryIncomingInFlightPacketResponse, QueryIncomingInFlightPacketsRequest, QueryIncomingInFlightPacketsResponse, QueryOutgoingInFlightPacketRequest, QueryOutgoingInFlightPacketResponse, QueryOutgoingInFlightPacketsRequest, QueryOutgoingInFlightPacketsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "sunrise.swap.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc sunrise.swap.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a list of IncomingInFlightPacket items.
 *
 * @generated from rpc sunrise.swap.Query.IncomingInFlightPacket
 */
export const QueryIncomingInFlightPacketService = {
  typeName: TYPE_NAME,
  method: "IncomingInFlightPacket",
  Request: QueryIncomingInFlightPacketRequest,
  Response: QueryIncomingInFlightPacketResponse,
} as const;

/**
 * @generated from rpc sunrise.swap.Query.IncomingInFlightPackets
 */
export const QueryIncomingInFlightPacketsService = {
  typeName: TYPE_NAME,
  method: "IncomingInFlightPackets",
  Request: QueryIncomingInFlightPacketsRequest,
  Response: QueryIncomingInFlightPacketsResponse,
} as const;

/**
 * Queries a list of OutgoingInFlightPacket items.
 *
 * @generated from rpc sunrise.swap.Query.OutgoingInFlightPacket
 */
export const QueryOutgoingInFlightPacketService = {
  typeName: TYPE_NAME,
  method: "OutgoingInFlightPacket",
  Request: QueryOutgoingInFlightPacketRequest,
  Response: QueryOutgoingInFlightPacketResponse,
} as const;

/**
 * @generated from rpc sunrise.swap.Query.OutgoingInFlightPackets
 */
export const QueryOutgoingInFlightPacketsService = {
  typeName: TYPE_NAME,
  method: "OutgoingInFlightPackets",
  Request: QueryOutgoingInFlightPacketsRequest,
  Response: QueryOutgoingInFlightPacketsResponse,
} as const;

/**
 * Queries a Calculation swap value.
 *
 * @generated from rpc sunrise.swap.Query.CalculationSwapExactAmountIn
 */
export const QueryCalculationSwapExactAmountInService = {
  typeName: TYPE_NAME,
  method: "CalculationSwapExactAmountIn",
  Request: QueryCalculationSwapExactAmountInRequest,
  Response: QueryCalculationSwapExactAmountInResponse,
} as const;

/**
 * @generated from rpc sunrise.swap.Query.CalculationSwapExactAmountOut
 */
export const QueryCalculationSwapExactAmountOutService = {
  typeName: TYPE_NAME,
  method: "CalculationSwapExactAmountOut",
  Request: QueryCalculationSwapExactAmountOutRequest,
  Response: QueryCalculationSwapExactAmountOutResponse,
} as const;

