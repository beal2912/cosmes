// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/evmos/blob/main/LICENSE)

// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file evmos/inflation/v1/query.proto (package evmos.inflation.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse, QueryPeriodRequest, QueryPeriodResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse } from "./query_pb.js";

const TYPE_NAME = "evmos.inflation.v1.Query";

/**
 * Period retrieves current period.
 *
 * @generated from rpc evmos.inflation.v1.Query.Period
 */
export const QueryPeriodService = {
  typeName: TYPE_NAME,
  method: "Period",
  Request: QueryPeriodRequest,
  Response: QueryPeriodResponse,
} as const;

/**
 * EpochMintProvision retrieves current minting epoch provision value.
 *
 * @generated from rpc evmos.inflation.v1.Query.EpochMintProvision
 */
export const QueryEpochMintProvisionService = {
  typeName: TYPE_NAME,
  method: "EpochMintProvision",
  Request: QueryEpochMintProvisionRequest,
  Response: QueryEpochMintProvisionResponse,
} as const;

/**
 * SkippedEpochs retrieves the total number of skipped epochs.
 *
 * @generated from rpc evmos.inflation.v1.Query.SkippedEpochs
 */
export const QuerySkippedEpochsService = {
  typeName: TYPE_NAME,
  method: "SkippedEpochs",
  Request: QuerySkippedEpochsRequest,
  Response: QuerySkippedEpochsResponse,
} as const;

/**
 * CirculatingSupply retrieves the total number of tokens that are in
 * circulation (i.e. excluding unvested tokens).
 *
 * @generated from rpc evmos.inflation.v1.Query.CirculatingSupply
 */
export const QueryCirculatingSupplyService = {
  typeName: TYPE_NAME,
  method: "CirculatingSupply",
  Request: QueryCirculatingSupplyRequest,
  Response: QueryCirculatingSupplyResponse,
} as const;

/**
 * InflationRate retrieves the inflation rate of the current period.
 *
 * @generated from rpc evmos.inflation.v1.Query.InflationRate
 */
export const QueryInflationRateService = {
  typeName: TYPE_NAME,
  method: "InflationRate",
  Request: QueryInflationRateRequest,
  Response: QueryInflationRateResponse,
} as const;

/**
 * Params retrieves the total set of minting parameters.
 *
 * @generated from rpc evmos.inflation.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

