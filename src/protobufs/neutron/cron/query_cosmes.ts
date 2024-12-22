// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file neutron/cron/query.proto (package neutron.cron, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryGetScheduleRequest, QueryGetScheduleResponse, QueryParamsRequest, QueryParamsResponse, QuerySchedulesRequest, QuerySchedulesResponse } from "./query_pb.js";

const TYPE_NAME = "neutron.cron.Query";

/**
 * Queries the parameters of the module.
 *
 * @generated from rpc neutron.cron.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Queries a Schedule by name.
 *
 * @generated from rpc neutron.cron.Query.Schedule
 */
export const QueryScheduleService = {
  typeName: TYPE_NAME,
  method: "Schedule",
  Request: QueryGetScheduleRequest,
  Response: QueryGetScheduleResponse,
} as const;

/**
 * Queries a list of Schedule items.
 *
 * @generated from rpc neutron.cron.Query.Schedules
 */
export const QuerySchedulesService = {
  typeName: TYPE_NAME,
  method: "Schedules",
  Request: QuerySchedulesRequest,
  Response: QuerySchedulesResponse,
} as const;

