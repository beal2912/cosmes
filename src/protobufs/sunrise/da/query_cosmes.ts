// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/da/query.proto (package sunrise.da, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllPublishedDataRequest, QueryAllPublishedDataResponse, QueryParamsRequest, QueryParamsResponse, QueryPublishedDataRequest, QueryPublishedDataResponse, QueryZkpProofThresholdRequest, QueryZkpProofThresholdResponse } from "./query_pb.js";

const TYPE_NAME = "sunrise.da.Query";

/**
 * Params queries the parameters of the module.
 *
 * @generated from rpc sunrise.da.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * PublishedData queries published data
 *
 * @generated from rpc sunrise.da.Query.PublishedData
 */
export const QueryPublishedDataService = {
  typeName: TYPE_NAME,
  method: "PublishedData",
  Request: QueryPublishedDataRequest,
  Response: QueryPublishedDataResponse,
} as const;

/**
 * AllPublishedData queries published data
 *
 * @generated from rpc sunrise.da.Query.AllPublishedData
 */
export const QueryAllPublishedDataService = {
  typeName: TYPE_NAME,
  method: "AllPublishedData",
  Request: QueryAllPublishedDataRequest,
  Response: QueryAllPublishedDataResponse,
} as const;

/**
 * ZkpProofThreshold
 *
 * @generated from rpc sunrise.da.Query.ZkpProofThreshold
 */
export const QueryZkpProofThresholdService = {
  typeName: TYPE_NAME,
  method: "ZkpProofThreshold",
  Request: QueryZkpProofThresholdRequest,
  Response: QueryZkpProofThresholdResponse,
} as const;

