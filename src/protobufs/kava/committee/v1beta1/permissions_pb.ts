// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file kava/committee/v1beta1/permissions.proto (package kava.committee.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * GodPermission allows any governance proposal. It is used mainly for testing.
 *
 * @generated from message kava.committee.v1beta1.GodPermission
 */
export class GodPermission extends Message<GodPermission> {
  constructor(data?: PartialMessage<GodPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.GodPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GodPermission {
    return new GodPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GodPermission {
    return new GodPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GodPermission {
    return new GodPermission().fromJsonString(jsonString, options);
  }

  static equals(a: GodPermission | PlainMessage<GodPermission> | undefined, b: GodPermission | PlainMessage<GodPermission> | undefined): boolean {
    return proto3.util.equals(GodPermission, a, b);
  }
}

/**
 * SoftwareUpgradePermission permission type for software upgrade proposals
 *
 * @generated from message kava.committee.v1beta1.SoftwareUpgradePermission
 */
export class SoftwareUpgradePermission extends Message<SoftwareUpgradePermission> {
  constructor(data?: PartialMessage<SoftwareUpgradePermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.SoftwareUpgradePermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SoftwareUpgradePermission {
    return new SoftwareUpgradePermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SoftwareUpgradePermission {
    return new SoftwareUpgradePermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SoftwareUpgradePermission {
    return new SoftwareUpgradePermission().fromJsonString(jsonString, options);
  }

  static equals(a: SoftwareUpgradePermission | PlainMessage<SoftwareUpgradePermission> | undefined, b: SoftwareUpgradePermission | PlainMessage<SoftwareUpgradePermission> | undefined): boolean {
    return proto3.util.equals(SoftwareUpgradePermission, a, b);
  }
}

/**
 * TextPermission allows any text governance proposal.
 *
 * @generated from message kava.committee.v1beta1.TextPermission
 */
export class TextPermission extends Message<TextPermission> {
  constructor(data?: PartialMessage<TextPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.TextPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextPermission {
    return new TextPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextPermission {
    return new TextPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextPermission {
    return new TextPermission().fromJsonString(jsonString, options);
  }

  static equals(a: TextPermission | PlainMessage<TextPermission> | undefined, b: TextPermission | PlainMessage<TextPermission> | undefined): boolean {
    return proto3.util.equals(TextPermission, a, b);
  }
}

/**
 * CommunityCDPRepayDebtPermission allows submission of CommunityCDPRepayDebtProposal
 *
 * @generated from message kava.committee.v1beta1.CommunityCDPRepayDebtPermission
 */
export class CommunityCDPRepayDebtPermission extends Message<CommunityCDPRepayDebtPermission> {
  constructor(data?: PartialMessage<CommunityCDPRepayDebtPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.CommunityCDPRepayDebtPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityCDPRepayDebtPermission {
    return new CommunityCDPRepayDebtPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityCDPRepayDebtPermission {
    return new CommunityCDPRepayDebtPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityCDPRepayDebtPermission {
    return new CommunityCDPRepayDebtPermission().fromJsonString(jsonString, options);
  }

  static equals(a: CommunityCDPRepayDebtPermission | PlainMessage<CommunityCDPRepayDebtPermission> | undefined, b: CommunityCDPRepayDebtPermission | PlainMessage<CommunityCDPRepayDebtPermission> | undefined): boolean {
    return proto3.util.equals(CommunityCDPRepayDebtPermission, a, b);
  }
}

/**
 * CommunityCDPWithdrawCollateralPermission allows submission of CommunityCDPWithdrawCollateralProposal
 *
 * @generated from message kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission
 */
export class CommunityCDPWithdrawCollateralPermission extends Message<CommunityCDPWithdrawCollateralPermission> {
  constructor(data?: PartialMessage<CommunityCDPWithdrawCollateralPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityCDPWithdrawCollateralPermission {
    return new CommunityCDPWithdrawCollateralPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityCDPWithdrawCollateralPermission {
    return new CommunityCDPWithdrawCollateralPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityCDPWithdrawCollateralPermission {
    return new CommunityCDPWithdrawCollateralPermission().fromJsonString(jsonString, options);
  }

  static equals(a: CommunityCDPWithdrawCollateralPermission | PlainMessage<CommunityCDPWithdrawCollateralPermission> | undefined, b: CommunityCDPWithdrawCollateralPermission | PlainMessage<CommunityCDPWithdrawCollateralPermission> | undefined): boolean {
    return proto3.util.equals(CommunityCDPWithdrawCollateralPermission, a, b);
  }
}

/**
 * CommunityPoolLendWithdrawPermission allows submission of CommunityPoolLendWithdrawProposal
 *
 * @generated from message kava.committee.v1beta1.CommunityPoolLendWithdrawPermission
 */
export class CommunityPoolLendWithdrawPermission extends Message<CommunityPoolLendWithdrawPermission> {
  constructor(data?: PartialMessage<CommunityPoolLendWithdrawPermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.CommunityPoolLendWithdrawPermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommunityPoolLendWithdrawPermission {
    return new CommunityPoolLendWithdrawPermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommunityPoolLendWithdrawPermission {
    return new CommunityPoolLendWithdrawPermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommunityPoolLendWithdrawPermission {
    return new CommunityPoolLendWithdrawPermission().fromJsonString(jsonString, options);
  }

  static equals(a: CommunityPoolLendWithdrawPermission | PlainMessage<CommunityPoolLendWithdrawPermission> | undefined, b: CommunityPoolLendWithdrawPermission | PlainMessage<CommunityPoolLendWithdrawPermission> | undefined): boolean {
    return proto3.util.equals(CommunityPoolLendWithdrawPermission, a, b);
  }
}

/**
 * ParamsChangePermission allows any parameter or sub parameter change proposal.
 *
 * @generated from message kava.committee.v1beta1.ParamsChangePermission
 */
export class ParamsChangePermission extends Message<ParamsChangePermission> {
  /**
   * @generated from field: repeated kava.committee.v1beta1.AllowedParamsChange allowed_params_changes = 1;
   */
  allowedParamsChanges: AllowedParamsChange[] = [];

  constructor(data?: PartialMessage<ParamsChangePermission>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.ParamsChangePermission";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allowed_params_changes", kind: "message", T: AllowedParamsChange, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsChangePermission {
    return new ParamsChangePermission().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsChangePermission {
    return new ParamsChangePermission().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsChangePermission {
    return new ParamsChangePermission().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsChangePermission | PlainMessage<ParamsChangePermission> | undefined, b: ParamsChangePermission | PlainMessage<ParamsChangePermission> | undefined): boolean {
    return proto3.util.equals(ParamsChangePermission, a, b);
  }
}

/**
 * AllowedParamsChange contains data on the allowed parameter changes for subspace, key, and sub params requirements.
 *
 * @generated from message kava.committee.v1beta1.AllowedParamsChange
 */
export class AllowedParamsChange extends Message<AllowedParamsChange> {
  /**
   * @generated from field: string subspace = 1;
   */
  subspace = "";

  /**
   * @generated from field: string key = 2;
   */
  key = "";

  /**
   * Requirements for when the subparam value is a single record. This contains list of allowed attribute keys that can
   * be changed on the subparam record.
   *
   * @generated from field: repeated string single_subparam_allowed_attrs = 3;
   */
  singleSubparamAllowedAttrs: string[] = [];

  /**
   * Requirements for when the subparam value is a list of records. The requirements contains requirements for each
   * record in the list.
   *
   * @generated from field: repeated kava.committee.v1beta1.SubparamRequirement multi_subparams_requirements = 4;
   */
  multiSubparamsRequirements: SubparamRequirement[] = [];

  constructor(data?: PartialMessage<AllowedParamsChange>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.AllowedParamsChange";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "subspace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "single_subparam_allowed_attrs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "multi_subparams_requirements", kind: "message", T: SubparamRequirement, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllowedParamsChange {
    return new AllowedParamsChange().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllowedParamsChange {
    return new AllowedParamsChange().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllowedParamsChange {
    return new AllowedParamsChange().fromJsonString(jsonString, options);
  }

  static equals(a: AllowedParamsChange | PlainMessage<AllowedParamsChange> | undefined, b: AllowedParamsChange | PlainMessage<AllowedParamsChange> | undefined): boolean {
    return proto3.util.equals(AllowedParamsChange, a, b);
  }
}

/**
 * SubparamRequirement contains requirements for a single record in a subparam value list
 *
 * @generated from message kava.committee.v1beta1.SubparamRequirement
 */
export class SubparamRequirement extends Message<SubparamRequirement> {
  /**
   * The required attr key of the param record.
   *
   * @generated from field: string key = 1;
   */
  key = "";

  /**
   * The required param value for the param record key. The key and value is used to match to the target param record.
   *
   * @generated from field: string val = 2;
   */
  val = "";

  /**
   * The sub param attrs that are allowed to be changed.
   *
   * @generated from field: repeated string allowed_subparam_attr_changes = 3;
   */
  allowedSubparamAttrChanges: string[] = [];

  constructor(data?: PartialMessage<SubparamRequirement>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kava.committee.v1beta1.SubparamRequirement";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "val", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "allowed_subparam_attr_changes", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubparamRequirement {
    return new SubparamRequirement().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubparamRequirement {
    return new SubparamRequirement().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubparamRequirement {
    return new SubparamRequirement().fromJsonString(jsonString, options);
  }

  static equals(a: SubparamRequirement | PlainMessage<SubparamRequirement> | undefined, b: SubparamRequirement | PlainMessage<SubparamRequirement> | undefined): boolean {
    return proto3.util.equals(SubparamRequirement, a, b);
  }
}

