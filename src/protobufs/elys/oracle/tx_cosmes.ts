// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/oracle/tx.proto (package elys.oracle, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgAddPriceFeeders, MsgAddPriceFeedersResponse, MsgCreateAssetInfo, MsgCreateAssetInfoResponse, MsgDeletePriceFeeder, MsgDeletePriceFeederResponse, MsgFeedMultiplePrices, MsgFeedMultiplePricesResponse, MsgFeedPrice, MsgFeedPriceResponse, MsgRemoveAssetInfo, MsgRemoveAssetInfoResponse, MsgRemovePriceFeeders, MsgRemovePriceFeedersResponse, MsgSetPriceFeeder, MsgSetPriceFeederResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "elys.oracle.Msg";

/**
 * @generated from rpc elys.oracle.Msg.FeedPrice
 */
export const MsgFeedPriceService = {
  typeName: TYPE_NAME,
  method: "FeedPrice",
  Request: MsgFeedPrice,
  Response: MsgFeedPriceResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.FeedMultiplePrices
 */
export const MsgFeedMultiplePricesService = {
  typeName: TYPE_NAME,
  method: "FeedMultiplePrices",
  Request: MsgFeedMultiplePrices,
  Response: MsgFeedMultiplePricesResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.SetPriceFeeder
 */
export const MsgSetPriceFeederService = {
  typeName: TYPE_NAME,
  method: "SetPriceFeeder",
  Request: MsgSetPriceFeeder,
  Response: MsgSetPriceFeederResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.DeletePriceFeeder
 */
export const MsgDeletePriceFeederService = {
  typeName: TYPE_NAME,
  method: "DeletePriceFeeder",
  Request: MsgDeletePriceFeeder,
  Response: MsgDeletePriceFeederResponse,
} as const;

/**
 * proposals
 *
 * @generated from rpc elys.oracle.Msg.RemoveAssetInfo
 */
export const MsgRemoveAssetInfoService = {
  typeName: TYPE_NAME,
  method: "RemoveAssetInfo",
  Request: MsgRemoveAssetInfo,
  Response: MsgRemoveAssetInfoResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.AddPriceFeeders
 */
export const MsgAddPriceFeedersService = {
  typeName: TYPE_NAME,
  method: "AddPriceFeeders",
  Request: MsgAddPriceFeeders,
  Response: MsgAddPriceFeedersResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.RemovePriceFeeders
 */
export const MsgRemovePriceFeedersService = {
  typeName: TYPE_NAME,
  method: "RemovePriceFeeders",
  Request: MsgRemovePriceFeeders,
  Response: MsgRemovePriceFeedersResponse,
} as const;

/**
 * @generated from rpc elys.oracle.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * this line is used by starport scaffolding # proto/tx/rpc
 *
 * @generated from rpc elys.oracle.Msg.CreateAssetInfo
 */
export const MsgCreateAssetInfoService = {
  typeName: TYPE_NAME,
  method: "CreateAssetInfo",
  Request: MsgCreateAssetInfo,
  Response: MsgCreateAssetInfoResponse,
} as const;

