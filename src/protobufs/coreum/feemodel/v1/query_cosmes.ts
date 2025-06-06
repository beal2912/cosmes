// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file coreum/feemodel/v1/query.proto (package coreum.feemodel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryMinGasPriceRequest, QueryMinGasPriceResponse, QueryParamsRequest, QueryParamsResponse, QueryRecommendedGasPriceRequest, QueryRecommendedGasPriceResponse } from "./query_pb.js";

const TYPE_NAME = "coreum.feemodel.v1.Query";

/**
 * MinGasPrice queries the current minimum gas price required by the network.
 *
 * @generated from rpc coreum.feemodel.v1.Query.MinGasPrice
 */
export const QueryMinGasPriceService = {
  typeName: TYPE_NAME,
  method: "MinGasPrice",
  Request: QueryMinGasPriceRequest,
  Response: QueryMinGasPriceResponse,
} as const;

/**
 * RecommendedGasPrice queries the recommended gas price for the next n blocks.
 *
 * @generated from rpc coreum.feemodel.v1.Query.RecommendedGasPrice
 */
export const QueryRecommendedGasPriceService = {
  typeName: TYPE_NAME,
  method: "RecommendedGasPrice",
  Request: QueryRecommendedGasPriceRequest,
  Response: QueryRecommendedGasPriceResponse,
} as const;

/**
 * Params queries the parameters of x/feemodel module.
 *
 * @generated from rpc coreum.feemodel.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

