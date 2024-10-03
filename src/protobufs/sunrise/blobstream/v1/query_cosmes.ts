// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/blobstream/v1/query.proto (package sunrise.blobstream.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAttestationRequestByNonceRequest, QueryAttestationRequestByNonceResponse, QueryDataCommitmentRangeForHeightRequest, QueryDataCommitmentRangeForHeightResponse, QueryEarliestAttestationNonceRequest, QueryEarliestAttestationNonceResponse, QueryEvmAddressRequest, QueryEvmAddressResponse, QueryLatestAttestationNonceRequest, QueryLatestAttestationNonceResponse, QueryLatestDataCommitmentRequest, QueryLatestDataCommitmentResponse, QueryLatestUnbondingHeightRequest, QueryLatestUnbondingHeightResponse, QueryLatestValsetRequestBeforeNonceRequest, QueryLatestValsetRequestBeforeNonceResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "sunrise.blobstream.v1.Query";

/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc sunrise.blobstream.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * AttestationRequestByNonce queries attestation request by nonce.
 * Returns nil if not found.
 *
 * @generated from rpc sunrise.blobstream.v1.Query.AttestationRequestByNonce
 */
export const QueryAttestationRequestByNonceService = {
  typeName: TYPE_NAME,
  method: "AttestationRequestByNonce",
  Request: QueryAttestationRequestByNonceRequest,
  Response: QueryAttestationRequestByNonceResponse,
} as const;

/**
 * LatestAttestationNonce queries latest attestation nonce.
 *
 * @generated from rpc sunrise.blobstream.v1.Query.LatestAttestationNonce
 */
export const QueryLatestAttestationNonceService = {
  typeName: TYPE_NAME,
  method: "LatestAttestationNonce",
  Request: QueryLatestAttestationNonceRequest,
  Response: QueryLatestAttestationNonceResponse,
} as const;

/**
 * EarliestAttestationNonce queries the earliest attestation nonce.
 *
 * @generated from rpc sunrise.blobstream.v1.Query.EarliestAttestationNonce
 */
export const QueryEarliestAttestationNonceService = {
  typeName: TYPE_NAME,
  method: "EarliestAttestationNonce",
  Request: QueryEarliestAttestationNonceRequest,
  Response: QueryEarliestAttestationNonceResponse,
} as const;

/**
 * LatestValsetRequestBeforeNonce Queries latest Valset request before nonce.
 * And, even if the current nonce is a valset, it will return the previous
 * one.
 * If the provided nonce is 1, it will return an error, because, there is
 * no valset before nonce 1.
 *
 * @generated from rpc sunrise.blobstream.v1.Query.LatestValsetRequestBeforeNonce
 */
export const QueryLatestValsetRequestBeforeNonceService = {
  typeName: TYPE_NAME,
  method: "LatestValsetRequestBeforeNonce",
  Request: QueryLatestValsetRequestBeforeNonceRequest,
  Response: QueryLatestValsetRequestBeforeNonceResponse,
} as const;

/**
 * LatestUnbondingHeight returns the latest unbonding height
 *
 * @generated from rpc sunrise.blobstream.v1.Query.LatestUnbondingHeight
 */
export const QueryLatestUnbondingHeightService = {
  typeName: TYPE_NAME,
  method: "LatestUnbondingHeight",
  Request: QueryLatestUnbondingHeightRequest,
  Response: QueryLatestUnbondingHeightResponse,
} as const;

/**
 * DataCommitmentRangeForHeight returns the data commitment window
 * that includes the provided height
 *
 * @generated from rpc sunrise.blobstream.v1.Query.DataCommitmentRangeForHeight
 */
export const QueryDataCommitmentRangeForHeightService = {
  typeName: TYPE_NAME,
  method: "DataCommitmentRangeForHeight",
  Request: QueryDataCommitmentRangeForHeightRequest,
  Response: QueryDataCommitmentRangeForHeightResponse,
} as const;

/**
 * LatestDataCommitment returns the latest data commitment in store
 *
 * @generated from rpc sunrise.blobstream.v1.Query.LatestDataCommitment
 */
export const QueryLatestDataCommitmentService = {
  typeName: TYPE_NAME,
  method: "LatestDataCommitment",
  Request: QueryLatestDataCommitmentRequest,
  Response: QueryLatestDataCommitmentResponse,
} as const;

/**
 * EvmAddress returns the evm address associated with a supplied
 * validator address
 *
 * @generated from rpc sunrise.blobstream.v1.Query.EvmAddress
 */
export const QueryEvmAddressService = {
  typeName: TYPE_NAME,
  method: "EvmAddress",
  Request: QueryEvmAddressRequest,
  Response: QueryEvmAddressResponse,
} as const;

