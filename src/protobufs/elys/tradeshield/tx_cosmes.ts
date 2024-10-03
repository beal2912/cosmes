// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/tradeshield/tx.proto (package elys.tradeshield, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgCreatePendingPerpetualOrder, MsgCreatePendingPerpetualOrderResponse, MsgCreatePendingSpotOrder, MsgCreatePendingSpotOrderResponse, MsgDeletePendingPerpetualOrder, MsgDeletePendingPerpetualOrderResponse, MsgDeletePendingSpotOrder, MsgDeletePendingSpotOrderResponse, MsgExecuteOrders, MsgExecuteOrdersResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePendingPerpetualOrder, MsgUpdatePendingPerpetualOrderResponse, MsgUpdatePendingSpotOrder, MsgUpdatePendingSpotOrderResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.tradeshield.Msg";

/**
 * @generated from rpc elys.tradeshield.Msg.CreatePendingSpotOrder
 */
export const MsgCreatePendingSpotOrderService = {
  typeName: TYPE_NAME,
  method: "CreatePendingSpotOrder",
  Request: MsgCreatePendingSpotOrder,
  Response: MsgCreatePendingSpotOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.UpdatePendingSpotOrder
 */
export const MsgUpdatePendingSpotOrderService = {
  typeName: TYPE_NAME,
  method: "UpdatePendingSpotOrder",
  Request: MsgUpdatePendingSpotOrder,
  Response: MsgUpdatePendingSpotOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.DeletePendingSpotOrder
 */
export const MsgDeletePendingSpotOrderService = {
  typeName: TYPE_NAME,
  method: "DeletePendingSpotOrder",
  Request: MsgDeletePendingSpotOrder,
  Response: MsgDeletePendingSpotOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.CreatePendingPerpetualOrder
 */
export const MsgCreatePendingPerpetualOrderService = {
  typeName: TYPE_NAME,
  method: "CreatePendingPerpetualOrder",
  Request: MsgCreatePendingPerpetualOrder,
  Response: MsgCreatePendingPerpetualOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.UpdatePendingPerpetualOrder
 */
export const MsgUpdatePendingPerpetualOrderService = {
  typeName: TYPE_NAME,
  method: "UpdatePendingPerpetualOrder",
  Request: MsgUpdatePendingPerpetualOrder,
  Response: MsgUpdatePendingPerpetualOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.DeletePendingPerpetualOrder
 */
export const MsgDeletePendingPerpetualOrderService = {
  typeName: TYPE_NAME,
  method: "DeletePendingPerpetualOrder",
  Request: MsgDeletePendingPerpetualOrder,
  Response: MsgDeletePendingPerpetualOrderResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc elys.tradeshield.Msg.ExecuteOrders
 */
export const MsgExecuteOrdersService = {
  typeName: TYPE_NAME,
  method: "ExecuteOrders",
  Request: MsgExecuteOrders,
  Response: MsgExecuteOrdersResponse,
} as const;
