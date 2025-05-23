// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file neutron/harpoon/tx.proto (package neutron.harpoon, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgManageHookSubscription, MsgManageHookSubscriptionResponse } from "./tx_pb.js";

const TYPE_NAME = "neutron.harpoon.Msg";

/**
 * Updates hook subscriptions for a specific contract address.
 * To remove a subscription, pass an empty array to `hook_subscription.hooks`.
 * Can only be executed by the module's authority.
 *
 * @generated from rpc neutron.harpoon.Msg.ManageHookSubscription
 */
export const MsgManageHookSubscriptionService = {
  typeName: TYPE_NAME,
  method: "ManageHookSubscription",
  Request: MsgManageHookSubscription,
  Response: MsgManageHookSubscriptionResponse,
} as const;

