// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file injective/oracle/v1beta1/query.proto (package injective.oracle.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBandIBCPriceStatesRequest, QueryBandIBCPriceStatesResponse, QueryBandPriceStatesRequest, QueryBandPriceStatesResponse, QueryBandRelayersRequest, QueryBandRelayersResponse, QueryCoinbasePriceStatesRequest, QueryCoinbasePriceStatesResponse, QueryHistoricalPriceRecordsRequest, QueryHistoricalPriceRecordsResponse, QueryModuleStateRequest, QueryModuleStateResponse, QueryOraclePriceRequest, QueryOraclePriceResponse, QueryOracleProviderPricesRequest, QueryOracleProviderPricesResponse, QueryOracleProvidersInfoRequest, QueryOracleProvidersInfoResponse, QueryOracleVolatilityRequest, QueryOracleVolatilityResponse, QueryParamsRequest, QueryParamsResponse, QueryPriceFeedPriceStatesRequest, QueryPriceFeedPriceStatesResponse, QueryProviderPriceStateRequest, QueryProviderPriceStateResponse, QueryPythPriceRequest, QueryPythPriceResponse, QueryPythPriceStatesRequest, QueryPythPriceStatesResponse, QueryStorkPriceStatesRequest, QueryStorkPriceStatesResponse, QueryStorkPublishersRequest, QueryStorkPublishersResponse } from "./query_pb.js";

const TYPE_NAME = "injective.oracle.v1beta1.Query";

/**
 * Retrieves oracle params
 *
 * @generated from rpc injective.oracle.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Retrieves the band relayers
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandRelayers
 */
export const QueryBandRelayersService = {
  typeName: TYPE_NAME,
  method: "BandRelayers",
  Request: QueryBandRelayersRequest,
  Response: QueryBandRelayersResponse,
} as const;

/**
 * Retrieves the state for all band price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandPriceStates
 */
export const QueryBandPriceStatesService = {
  typeName: TYPE_NAME,
  method: "BandPriceStates",
  Request: QueryBandPriceStatesRequest,
  Response: QueryBandPriceStatesResponse,
} as const;

/**
 * Retrieves the state for all band ibc price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.BandIBCPriceStates
 */
export const QueryBandIBCPriceStatesService = {
  typeName: TYPE_NAME,
  method: "BandIBCPriceStates",
  Request: QueryBandIBCPriceStatesRequest,
  Response: QueryBandIBCPriceStatesResponse,
} as const;

/**
 * Retrieves the state for all price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.PriceFeedPriceStates
 */
export const QueryPriceFeedPriceStatesService = {
  typeName: TYPE_NAME,
  method: "PriceFeedPriceStates",
  Request: QueryPriceFeedPriceStatesRequest,
  Response: QueryPriceFeedPriceStatesResponse,
} as const;

/**
 * Retrieves the state for all coinbase price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.CoinbasePriceStates
 */
export const QueryCoinbasePriceStatesService = {
  typeName: TYPE_NAME,
  method: "CoinbasePriceStates",
  Request: QueryCoinbasePriceStatesRequest,
  Response: QueryCoinbasePriceStatesResponse,
} as const;

/**
 * Retrieves the state for all pyth price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.PythPriceStates
 */
export const QueryPythPriceStatesService = {
  typeName: TYPE_NAME,
  method: "PythPriceStates",
  Request: QueryPythPriceStatesRequest,
  Response: QueryPythPriceStatesResponse,
} as const;

/**
 * Retrieves the state for all stork price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.StorkPriceStates
 */
export const QueryStorkPriceStatesService = {
  typeName: TYPE_NAME,
  method: "StorkPriceStates",
  Request: QueryStorkPriceStatesRequest,
  Response: QueryStorkPriceStatesResponse,
} as const;

/**
 * Retrieves all stork publishers
 *
 * @generated from rpc injective.oracle.v1beta1.Query.StorkPublishers
 */
export const QueryStorkPublishersService = {
  typeName: TYPE_NAME,
  method: "StorkPublishers",
  Request: QueryStorkPublishersRequest,
  Response: QueryStorkPublishersResponse,
} as const;

/**
 * Retrieves the state for all provider price feeds
 *
 * @generated from rpc injective.oracle.v1beta1.Query.ProviderPriceState
 */
export const QueryProviderPriceStateService = {
  typeName: TYPE_NAME,
  method: "ProviderPriceState",
  Request: QueryProviderPriceStateRequest,
  Response: QueryProviderPriceStateResponse,
} as const;

/**
 * Retrieves the entire oracle module's state
 *
 * @generated from rpc injective.oracle.v1beta1.Query.OracleModuleState
 */
export const QueryOracleModuleStateService = {
  typeName: TYPE_NAME,
  method: "OracleModuleState",
  Request: QueryModuleStateRequest,
  Response: QueryModuleStateResponse,
} as const;

/**
 * Retrieves historical price records for a given OracleType and Symbol
 *
 * @generated from rpc injective.oracle.v1beta1.Query.HistoricalPriceRecords
 */
export const QueryHistoricalPriceRecordsService = {
  typeName: TYPE_NAME,
  method: "HistoricalPriceRecords",
  Request: QueryHistoricalPriceRecordsRequest,
  Response: QueryHistoricalPriceRecordsResponse,
} as const;

/**
 * Retrieves mixed volatility value for the specified pair of base/quote
 *
 * @generated from rpc injective.oracle.v1beta1.Query.OracleVolatility
 */
export const QueryOracleVolatilityService = {
  typeName: TYPE_NAME,
  method: "OracleVolatility",
  Request: QueryOracleVolatilityRequest,
  Response: QueryOracleVolatilityResponse,
} as const;

/**
 * @generated from rpc injective.oracle.v1beta1.Query.OracleProvidersInfo
 */
export const QueryOracleProvidersInfoService = {
  typeName: TYPE_NAME,
  method: "OracleProvidersInfo",
  Request: QueryOracleProvidersInfoRequest,
  Response: QueryOracleProvidersInfoResponse,
} as const;

/**
 * @generated from rpc injective.oracle.v1beta1.Query.OracleProviderPrices
 */
export const QueryOracleProviderPricesService = {
  typeName: TYPE_NAME,
  method: "OracleProviderPrices",
  Request: QueryOracleProviderPricesRequest,
  Response: QueryOracleProviderPricesResponse,
} as const;

/**
 * @generated from rpc injective.oracle.v1beta1.Query.OraclePrice
 */
export const QueryOraclePriceService = {
  typeName: TYPE_NAME,
  method: "OraclePrice",
  Request: QueryOraclePriceRequest,
  Response: QueryOraclePriceResponse,
} as const;

/**
 * @generated from rpc injective.oracle.v1beta1.Query.PythPrice
 */
export const QueryPythPriceService = {
  typeName: TYPE_NAME,
  method: "PythPrice",
  Request: QueryPythPriceRequest,
  Response: QueryPythPriceResponse,
} as const;

