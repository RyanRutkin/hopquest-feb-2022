import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class QuestOrganizationStageRequirement {
  readonly id: string;
  readonly minReputation?: number;
  readonly queststageID: string;
  readonly organizationID: string;
  readonly createdDtm?: string;
  readonly approvedByID?: string;
  constructor(init: ModelInit<QuestOrganizationStageRequirement>);
  static copyOf(source: QuestOrganizationStageRequirement, mutator: (draft: MutableModel<QuestOrganizationStageRequirement>) => MutableModel<QuestOrganizationStageRequirement> | void): QuestOrganizationStageRequirement;
}

export declare class QuestOrganizationRequirement {
  readonly id: string;
  readonly minReputation?: number;
  readonly questID: string;
  readonly organizationID: string;
  readonly createdDtm?: string;
  readonly approvedByID?: string;
  constructor(init: ModelInit<QuestOrganizationRequirement>);
  static copyOf(source: QuestOrganizationRequirement, mutator: (draft: MutableModel<QuestOrganizationRequirement>) => MutableModel<QuestOrganizationRequirement> | void): QuestOrganizationRequirement;
}

export declare class UserCollectable {
  readonly id: string;
  readonly userID: string;
  readonly collectableID: string;
  readonly receivedDtm?: string;
  constructor(init: ModelInit<UserCollectable>);
  static copyOf(source: UserCollectable, mutator: (draft: MutableModel<UserCollectable>) => MutableModel<UserCollectable> | void): UserCollectable;
}

export declare class QuestStageTaskReward {
  readonly id: string;
  readonly reputation?: number;
  readonly coin?: number;
  readonly queststagetaskID: string;
  readonly organizationID: string;
  readonly collectableID?: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestStageTaskReward>);
  static copyOf(source: QuestStageTaskReward, mutator: (draft: MutableModel<QuestStageTaskReward>) => MutableModel<QuestStageTaskReward> | void): QuestStageTaskReward;
}

export declare class QuestStageReward {
  readonly id: string;
  readonly reputation?: number;
  readonly coin?: number;
  readonly queststageID: string;
  readonly organizationID: string;
  readonly collectableID?: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestStageReward>);
  static copyOf(source: QuestStageReward, mutator: (draft: MutableModel<QuestStageReward>) => MutableModel<QuestStageReward> | void): QuestStageReward;
}

export declare class QuestReward {
  readonly id: string;
  readonly reputation?: number;
  readonly coin?: number;
  readonly questID: string;
  readonly organizationID: string;
  readonly collectableID?: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestReward>);
  static copyOf(source: QuestReward, mutator: (draft: MutableModel<QuestReward>) => MutableModel<QuestReward> | void): QuestReward;
}

export declare class UserQuestStageTaskRequirementSubmissionPicture {
  readonly id: string;
  readonly userqueststagetaskrequirementsubmissionID: string;
  readonly pictureID: string;
  readonly approvedByID?: string;
  constructor(init: ModelInit<UserQuestStageTaskRequirementSubmissionPicture>);
  static copyOf(source: UserQuestStageTaskRequirementSubmissionPicture, mutator: (draft: MutableModel<UserQuestStageTaskRequirementSubmissionPicture>) => MutableModel<UserQuestStageTaskRequirementSubmissionPicture> | void): UserQuestStageTaskRequirementSubmissionPicture;
}

export declare class UserQuestStageTaskRequirementSubmission {
  readonly id: string;
  readonly userID: string;
  readonly createdDtm?: string;
  readonly queststagetaskrequirementID: string;
  constructor(init: ModelInit<UserQuestStageTaskRequirementSubmission>);
  static copyOf(source: UserQuestStageTaskRequirementSubmission, mutator: (draft: MutableModel<UserQuestStageTaskRequirementSubmission>) => MutableModel<UserQuestStageTaskRequirementSubmission> | void): UserQuestStageTaskRequirementSubmission;
}

export declare class QuestStageTaskPicture {
  readonly id: string;
  readonly pictureID: string;
  readonly queststagetaskID: string;
  constructor(init: ModelInit<QuestStageTaskPicture>);
  static copyOf(source: QuestStageTaskPicture, mutator: (draft: MutableModel<QuestStageTaskPicture>) => MutableModel<QuestStageTaskPicture> | void): QuestStageTaskPicture;
}

export declare class QuestStagePicture {
  readonly id: string;
  readonly pictureID: string;
  readonly queststageID: string;
  constructor(init: ModelInit<QuestStagePicture>);
  static copyOf(source: QuestStagePicture, mutator: (draft: MutableModel<QuestStagePicture>) => MutableModel<QuestStagePicture> | void): QuestStagePicture;
}

export declare class QuestPicture {
  readonly id: string;
  readonly pictureID: string;
  readonly questID: string;
  constructor(init: ModelInit<QuestPicture>);
  static copyOf(source: QuestPicture, mutator: (draft: MutableModel<QuestPicture>) => MutableModel<QuestPicture> | void): QuestPicture;
}

export declare class OrganizationPicture {
  readonly id: string;
  readonly pictureID: string;
  readonly organizationID: string;
  constructor(init: ModelInit<OrganizationPicture>);
  static copyOf(source: OrganizationPicture, mutator: (draft: MutableModel<OrganizationPicture>) => MutableModel<OrganizationPicture> | void): OrganizationPicture;
}

export declare class Picture {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly s3Url?: string;
  readonly uploadedDtm?: string;
  readonly uploadedByID: string;
  constructor(init: ModelInit<Picture>);
  static copyOf(source: Picture, mutator: (draft: MutableModel<Picture>) => MutableModel<Picture> | void): Picture;
}

export declare class CollectablePicture {
  readonly id: string;
  readonly collectableID: string;
  readonly pictureID: string;
  constructor(init: ModelInit<CollectablePicture>);
  static copyOf(source: CollectablePicture, mutator: (draft: MutableModel<CollectablePicture>) => MutableModel<CollectablePicture> | void): CollectablePicture;
}

export declare class CollectableRedeemLocation {
  readonly id: string;
  readonly collectableID: string;
  readonly locationID: string;
  constructor(init: ModelInit<CollectableRedeemLocation>);
  static copyOf(source: CollectableRedeemLocation, mutator: (draft: MutableModel<CollectableRedeemLocation>) => MutableModel<CollectableRedeemLocation> | void): CollectableRedeemLocation;
}

export declare class Collectable {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly minReputation?: number;
  readonly coin?: number;
  readonly realItem?: boolean;
  readonly organizationID: string;
  readonly createdByID: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<Collectable>);
  static copyOf(source: Collectable, mutator: (draft: MutableModel<Collectable>) => MutableModel<Collectable> | void): Collectable;
}

export declare class OrganizationMember {
  readonly id: string;
  readonly organizationID: string;
  readonly userID: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<OrganizationMember>);
  static copyOf(source: OrganizationMember, mutator: (draft: MutableModel<OrganizationMember>) => MutableModel<OrganizationMember> | void): OrganizationMember;
}

export declare class OrganizationModerator {
  readonly id: string;
  readonly organizationID: string;
  readonly userID: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<OrganizationModerator>);
  static copyOf(source: OrganizationModerator, mutator: (draft: MutableModel<OrganizationModerator>) => MutableModel<OrganizationModerator> | void): OrganizationModerator;
}

export declare class OrganizationAdmin {
  readonly id: string;
  readonly organizationID: string;
  readonly userID: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<OrganizationAdmin>);
  static copyOf(source: OrganizationAdmin, mutator: (draft: MutableModel<OrganizationAdmin>) => MutableModel<OrganizationAdmin> | void): OrganizationAdmin;
}

export declare class UserOrganizationWallet {
  readonly id: string;
  readonly coin?: number;
  readonly reputation?: number;
  readonly organizationID: string;
  readonly userID: string;
  constructor(init: ModelInit<UserOrganizationWallet>);
  static copyOf(source: UserOrganizationWallet, mutator: (draft: MutableModel<UserOrganizationWallet>) => MutableModel<UserOrganizationWallet> | void): UserOrganizationWallet;
}

export declare class OrganizationLocation {
  readonly id: string;
  readonly locationID: string;
  readonly createdByID: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<OrganizationLocation>);
  static copyOf(source: OrganizationLocation, mutator: (draft: MutableModel<OrganizationLocation>) => MutableModel<OrganizationLocation> | void): OrganizationLocation;
}

export declare class Organization {
  readonly id: string;
  readonly name?: string;
  readonly createdById: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<Organization>);
  static copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

export declare class User {
  readonly id: string;
  readonly email?: string;
  readonly username?: string;
  readonly coin?: number;
  readonly reputation?: number;
  readonly createdDtm?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Quest {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly minReputation?: number;
  readonly rewardReputation?: number;
  readonly createdDtm?: string;
  readonly createdById: string;
  constructor(init: ModelInit<Quest>);
  static copyOf(source: Quest, mutator: (draft: MutableModel<Quest>) => MutableModel<Quest> | void): Quest;
}

export declare class QuestStage {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly minReputation?: number;
  readonly rewardReputation?: number;
  readonly questID: string;
  readonly createdById: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestStage>);
  static copyOf(source: QuestStage, mutator: (draft: MutableModel<QuestStage>) => MutableModel<QuestStage> | void): QuestStage;
}

export declare class QuestStageTask {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly rewardReputation?: number;
  readonly queststageID: string;
  readonly createdById: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestStageTask>);
  static copyOf(source: QuestStageTask, mutator: (draft: MutableModel<QuestStageTask>) => MutableModel<QuestStageTask> | void): QuestStageTask;
}

export declare class QuestStageTaskRequirement {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly queststagetaskID: string;
  readonly locationID?: string;
  readonly createdById: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<QuestStageTaskRequirement>);
  static copyOf(source: QuestStageTaskRequirement, mutator: (draft: MutableModel<QuestStageTaskRequirement>) => MutableModel<QuestStageTaskRequirement> | void): QuestStageTaskRequirement;
}

export declare class QRCodeRequirement {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly qrcode?: string;
  constructor(init: ModelInit<QRCodeRequirement>);
  static copyOf(source: QRCodeRequirement, mutator: (draft: MutableModel<QRCodeRequirement>) => MutableModel<QRCodeRequirement> | void): QRCodeRequirement;
}

export declare class PictureRequirement {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  constructor(init: ModelInit<PictureRequirement>);
  static copyOf(source: PictureRequirement, mutator: (draft: MutableModel<PictureRequirement>) => MutableModel<PictureRequirement> | void): PictureRequirement;
}

export declare class Location {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly latitude?: number;
  readonly longitude?: number;
  readonly createdById: string;
  readonly createdDtm?: string;
  constructor(init: ModelInit<Location>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}