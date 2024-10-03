// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/perpetual/tx.proto (package elys.perpetual, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddCollateral, MsgAddCollateralResponse, MsgBrokerAddCollateral, MsgBrokerClose, MsgBrokerOpen, MsgClose, MsgClosePositions, MsgClosePositionsResponse, MsgCloseResponse, MsgDewhitelist, MsgDewhitelistResponse, MsgOpen, MsgOpenResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdateStopLoss, MsgUpdateStopLossResponse, MsgUpdateTakeProfitPrice, MsgUpdateTakeProfitPriceResponse, MsgWhitelist, MsgWhitelistResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.perpetual.Msg";

/**
 * @generated from rpc elys.perpetual.Msg.Open
 */
export const MsgOpenService = {
  typeName: TYPE_NAME,
  method: "Open",
  Request: MsgOpen,
  Response: MsgOpenResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.BrokerOpen
 */
export const MsgBrokerOpenService = {
  typeName: TYPE_NAME,
  method: "BrokerOpen",
  Request: MsgBrokerOpen,
  Response: MsgOpenResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.Close
 */
export const MsgCloseService = {
  typeName: TYPE_NAME,
  method: "Close",
  Request: MsgClose,
  Response: MsgCloseResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.BrokerClose
 */
export const MsgBrokerCloseService = {
  typeName: TYPE_NAME,
  method: "BrokerClose",
  Request: MsgBrokerClose,
  Response: MsgCloseResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.Whitelist
 */
export const MsgWhitelistService = {
  typeName: TYPE_NAME,
  method: "Whitelist",
  Request: MsgWhitelist,
  Response: MsgWhitelistResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.Dewhitelist
 */
export const MsgDewhitelistService = {
  typeName: TYPE_NAME,
  method: "Dewhitelist",
  Request: MsgDewhitelist,
  Response: MsgDewhitelistResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.AddCollateral
 */
export const MsgAddCollateralService = {
  typeName: TYPE_NAME,
  method: "AddCollateral",
  Request: MsgAddCollateral,
  Response: MsgAddCollateralResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.BrokerAddCollateral
 */
export const MsgBrokerAddCollateralService = {
  typeName: TYPE_NAME,
  method: "BrokerAddCollateral",
  Request: MsgBrokerAddCollateral,
  Response: MsgAddCollateralResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.UpdateStopLoss
 */
export const MsgUpdateStopLossService = {
  typeName: TYPE_NAME,
  method: "UpdateStopLoss",
  Request: MsgUpdateStopLoss,
  Response: MsgUpdateStopLossResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.ClosePositions
 */
export const MsgClosePositionsService = {
  typeName: TYPE_NAME,
  method: "ClosePositions",
  Request: MsgClosePositions,
  Response: MsgClosePositionsResponse,
} as const;

/**
 * @generated from rpc elys.perpetual.Msg.UpdateTakeProfitPrice
 */
export const MsgUpdateTakeProfitPriceService = {
  typeName: TYPE_NAME,
  method: "UpdateTakeProfitPrice",
  Request: MsgUpdateTakeProfitPrice,
  Response: MsgUpdateTakeProfitPriceResponse,
} as const;
