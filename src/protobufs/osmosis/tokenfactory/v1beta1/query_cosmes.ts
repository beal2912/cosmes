// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/tokenfactory/v1beta1/query.proto (package osmosis.tokenfactory.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryBeforeSendHookAddressRequest, QueryBeforeSendHookAddressResponse, QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryFullDenomRequest, QueryFullDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.tokenfactory.v1beta1.Query";

/**
 * Params defines a gRPC query method that returns the tokenfactory module's
 * parameters.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * DenomAuthorityMetadata defines a gRPC query method for fetching
 * DenomAuthorityMetadata for a particular denom.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.DenomAuthorityMetadata
 */
export const QueryDenomAuthorityMetadataService = {
  typeName: TYPE_NAME,
  method: "DenomAuthorityMetadata",
  Request: QueryDenomAuthorityMetadataRequest,
  Response: QueryDenomAuthorityMetadataResponse,
} as const;

/**
 * DenomsFromCreator defines a gRPC query method for fetching all
 * denominations created by a specific admin/creator.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.DenomsFromCreator
 */
export const QueryDenomsFromCreatorService = {
  typeName: TYPE_NAME,
  method: "DenomsFromCreator",
  Request: QueryDenomsFromCreatorRequest,
  Response: QueryDenomsFromCreatorResponse,
} as const;

/**
 * BeforeSendHookAddress defines a gRPC query method for
 * getting the address registered for the before send hook.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.BeforeSendHookAddress
 */
export const QueryBeforeSendHookAddressService = {
  typeName: TYPE_NAME,
  method: "BeforeSendHookAddress",
  Request: QueryBeforeSendHookAddressRequest,
  Response: QueryBeforeSendHookAddressResponse,
} as const;

/**
 * FullDenom defines a gRPC query method for getting full denom name
 * from the creator and subdenom strings.
 *
 * @generated from rpc osmosis.tokenfactory.v1beta1.Query.FullDenom
 */
export const QueryFullDenomService = {
  typeName: TYPE_NAME,
  method: "FullDenom",
  Request: QueryFullDenomRequest,
  Response: QueryFullDenomResponse,
} as const;

