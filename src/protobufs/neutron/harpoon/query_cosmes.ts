// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file neutron/harpoon/query.proto (package neutron.harpoon, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QuerySubscribedContractsRequest, QuerySubscribedContractsResponse } from "./query_pb.js";

const TYPE_NAME = "neutron.harpoon.Query";

/**
 * Retrieves contracts subscribed to a specific hook type.
 *
 * @generated from rpc neutron.harpoon.Query.SubscribedContracts
 */
export const QuerySubscribedContractsService = {
  typeName: TYPE_NAME,
  method: "SubscribedContracts",
  Request: QuerySubscribedContractsRequest,
  Response: QuerySubscribedContractsResponse,
} as const;

