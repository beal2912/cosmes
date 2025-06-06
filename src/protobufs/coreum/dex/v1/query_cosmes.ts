// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file coreum/dex/v1/query.proto (package coreum.dex.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAccountDenomOrdersCountRequest, QueryAccountDenomOrdersCountResponse, QueryOrderBookOrdersRequest, QueryOrderBookOrdersResponse, QueryOrderBookParamsRequest, QueryOrderBookParamsResponse, QueryOrderBooksRequest, QueryOrderBooksResponse, QueryOrderRequest, QueryOrderResponse, QueryOrdersRequest, QueryOrdersResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";

const TYPE_NAME = "coreum.dex.v1.Query";

/**
 * Params queries the parameters of x/dex module.
 *
 * @generated from rpc coreum.dex.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * Order queries order by creator and ID.
 *
 * @generated from rpc coreum.dex.v1.Query.Order
 */
export const QueryOrderService = {
  typeName: TYPE_NAME,
  method: "Order",
  Request: QueryOrderRequest,
  Response: QueryOrderResponse,
} as const;

/**
 * Orders queries creator orders.
 *
 * @generated from rpc coreum.dex.v1.Query.Orders
 */
export const QueryOrdersService = {
  typeName: TYPE_NAME,
  method: "Orders",
  Request: QueryOrdersRequest,
  Response: QueryOrdersResponse,
} as const;

/**
 * OrderBooks queries order books.
 *
 * @generated from rpc coreum.dex.v1.Query.OrderBooks
 */
export const QueryOrderBooksService = {
  typeName: TYPE_NAME,
  method: "OrderBooks",
  Request: QueryOrderBooksRequest,
  Response: QueryOrderBooksResponse,
} as const;

/**
 * OrderBookParams queries order book params.
 *
 * @generated from rpc coreum.dex.v1.Query.OrderBookParams
 */
export const QueryOrderBookParamsService = {
  typeName: TYPE_NAME,
  method: "OrderBookParams",
  Request: QueryOrderBookParamsRequest,
  Response: QueryOrderBookParamsResponse,
} as const;

/**
 * OrderBookOrders queries order book orders.
 *
 * @generated from rpc coreum.dex.v1.Query.OrderBookOrders
 */
export const QueryOrderBookOrdersService = {
  typeName: TYPE_NAME,
  method: "OrderBookOrders",
  Request: QueryOrderBookOrdersRequest,
  Response: QueryOrderBookOrdersResponse,
} as const;

/**
 * AccountDenomOrdersCount queries account denom orders count.
 *
 * @generated from rpc coreum.dex.v1.Query.AccountDenomOrdersCount
 */
export const QueryAccountDenomOrdersCountService = {
  typeName: TYPE_NAME,
  method: "AccountDenomOrdersCount",
  Request: QueryAccountDenomOrdersCountRequest,
  Response: QueryAccountDenomOrdersCountResponse,
} as const;

