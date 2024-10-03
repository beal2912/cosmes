// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file sunrise/da/vote_extension.proto (package sunrise.da, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PublishedData } from "./published_data_pb.js";

/**
 * @generated from message sunrise.da.VoteExtension
 */
export class VoteExtension extends Message<VoteExtension> {
  /**
   * @generated from field: repeated sunrise.da.PublishedData data = 1;
   */
  data: PublishedData[] = [];

  constructor(data?: PartialMessage<VoteExtension>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "sunrise.da.VoteExtension";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "message", T: PublishedData, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VoteExtension {
    return new VoteExtension().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VoteExtension {
    return new VoteExtension().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VoteExtension {
    return new VoteExtension().fromJsonString(jsonString, options);
  }

  static equals(a: VoteExtension | PlainMessage<VoteExtension> | undefined, b: VoteExtension | PlainMessage<VoteExtension> | undefined): boolean {
    return proto3.util.equals(VoteExtension, a, b);
  }
}

