// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file elys/assetprofile/tx.proto (package elys.assetprofile, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgDeleteEntry, MsgDeleteEntryResponse, MsgUpdateEntry, MsgUpdateEntryResponse } from "./tx_pb.js";
import { MsgAddEntry, MsgAddEntryResponse } from "./add_entry_pb.js";

const TYPE_NAME = "elys.assetprofile.Msg";

/**
 * @generated from rpc elys.assetprofile.Msg.UpdateEntry
 */
export const MsgUpdateEntryService = {
  typeName: TYPE_NAME,
  method: "UpdateEntry",
  Request: MsgUpdateEntry,
  Response: MsgUpdateEntryResponse,
} as const;

/**
 * @generated from rpc elys.assetprofile.Msg.DeleteEntry
 */
export const MsgDeleteEntryService = {
  typeName: TYPE_NAME,
  method: "DeleteEntry",
  Request: MsgDeleteEntry,
  Response: MsgDeleteEntryResponse,
} as const;

/**
 * @generated from rpc elys.assetprofile.Msg.AddEntry
 */
export const MsgAddEntryService = {
  typeName: TYPE_NAME,
  method: "AddEntry",
  Request: MsgAddEntry,
  Response: MsgAddEntryResponse,
} as const;

