// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file sunrise/da/tx.proto (package sunrise.da, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgChallengeForFraud, MsgChallengeForFraudResponse, MsgPublishData, MsgPublishDataResponse, MsgSubmitProof, MsgSubmitProofResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";

const TYPE_NAME = "sunrise.da.Msg";

/**
 * UpdateParams defines a (governance) operation for updating the module
 * parameters. The authority defaults to the x/gov module account.
 *
 * @generated from rpc sunrise.da.Msg.UpdateParams
 */
export const MsgUpdateParamsService = {
  typeName: TYPE_NAME,
  method: "UpdateParams",
  Request: MsgUpdateParams,
  Response: MsgUpdateParamsResponse,
} as const;

/**
 * @generated from rpc sunrise.da.Msg.PublishData
 */
export const MsgPublishDataService = {
  typeName: TYPE_NAME,
  method: "PublishData",
  Request: MsgPublishData,
  Response: MsgPublishDataResponse,
} as const;

/**
 * @generated from rpc sunrise.da.Msg.ChallengeForFraud
 */
export const MsgChallengeForFraudService = {
  typeName: TYPE_NAME,
  method: "ChallengeForFraud",
  Request: MsgChallengeForFraud,
  Response: MsgChallengeForFraudResponse,
} as const;

/**
 * @generated from rpc sunrise.da.Msg.SubmitProof
 */
export const MsgSubmitProofService = {
  typeName: TYPE_NAME,
  method: "SubmitProof",
  Request: MsgSubmitProof,
  Response: MsgSubmitProofResponse,
} as const;

