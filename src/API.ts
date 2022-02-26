/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateQuestOrganizationStageRequirementInput = {
  id?: string | null,
  minReputation?: number | null,
  queststageID: string,
  organizationID: string,
  createdDtm?: string | null,
  approvedByID?: string | null,
  _version?: number | null,
};

export type ModelQuestOrganizationStageRequirementConditionInput = {
  minReputation?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelQuestOrganizationStageRequirementConditionInput | null > | null,
  or?: Array< ModelQuestOrganizationStageRequirementConditionInput | null > | null,
  not?: ModelQuestOrganizationStageRequirementConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type QuestOrganizationStageRequirement = {
  __typename: "QuestOrganizationStageRequirement",
  id?: string,
  minReputation?: number | null,
  queststageID?: string,
  organizationID?: string,
  createdDtm?: string | null,
  approvedByID?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestOrganizationStageRequirementInput = {
  id: string,
  minReputation?: number | null,
  queststageID?: string | null,
  organizationID?: string | null,
  createdDtm?: string | null,
  approvedByID?: string | null,
  _version?: number | null,
};

export type DeleteQuestOrganizationStageRequirementInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestOrganizationRequirementInput = {
  id?: string | null,
  minReputation?: number | null,
  questID: string,
  organizationID: string,
  createdDtm?: string | null,
  approvedByID?: string | null,
  _version?: number | null,
};

export type ModelQuestOrganizationRequirementConditionInput = {
  minReputation?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelQuestOrganizationRequirementConditionInput | null > | null,
  or?: Array< ModelQuestOrganizationRequirementConditionInput | null > | null,
  not?: ModelQuestOrganizationRequirementConditionInput | null,
};

export type QuestOrganizationRequirement = {
  __typename: "QuestOrganizationRequirement",
  id?: string,
  minReputation?: number | null,
  questID?: string,
  organizationID?: string,
  createdDtm?: string | null,
  approvedByID?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestOrganizationRequirementInput = {
  id: string,
  minReputation?: number | null,
  questID?: string | null,
  organizationID?: string | null,
  createdDtm?: string | null,
  approvedByID?: string | null,
  _version?: number | null,
};

export type DeleteQuestOrganizationRequirementInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserCollectableInput = {
  id?: string | null,
  userID: string,
  collectableID: string,
  receivedDtm?: string | null,
  _version?: number | null,
};

export type ModelUserCollectableConditionInput = {
  userID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  receivedDtm?: ModelStringInput | null,
  and?: Array< ModelUserCollectableConditionInput | null > | null,
  or?: Array< ModelUserCollectableConditionInput | null > | null,
  not?: ModelUserCollectableConditionInput | null,
};

export type UserCollectable = {
  __typename: "UserCollectable",
  id?: string,
  userID?: string,
  collectableID?: string,
  receivedDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateUserCollectableInput = {
  id: string,
  userID?: string | null,
  collectableID?: string | null,
  receivedDtm?: string | null,
  _version?: number | null,
};

export type DeleteUserCollectableInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageTaskRewardInput = {
  id?: string | null,
  reputation?: number | null,
  coin?: number | null,
  queststagetaskID: string,
  organizationID: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelQuestStageTaskRewardConditionInput = {
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  queststagetaskID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskRewardConditionInput | null > | null,
  or?: Array< ModelQuestStageTaskRewardConditionInput | null > | null,
  not?: ModelQuestStageTaskRewardConditionInput | null,
};

export type QuestStageTaskReward = {
  __typename: "QuestStageTaskReward",
  id?: string,
  reputation?: number | null,
  coin?: number | null,
  queststagetaskID?: string,
  organizationID?: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestStageTaskRewardInput = {
  id: string,
  reputation?: number | null,
  coin?: number | null,
  queststagetaskID?: string | null,
  organizationID?: string | null,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteQuestStageTaskRewardInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageRewardInput = {
  id?: string | null,
  reputation?: number | null,
  coin?: number | null,
  queststageID: string,
  organizationID: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelQuestStageRewardConditionInput = {
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageRewardConditionInput | null > | null,
  or?: Array< ModelQuestStageRewardConditionInput | null > | null,
  not?: ModelQuestStageRewardConditionInput | null,
};

export type QuestStageReward = {
  __typename: "QuestStageReward",
  id?: string,
  reputation?: number | null,
  coin?: number | null,
  queststageID?: string,
  organizationID?: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestStageRewardInput = {
  id: string,
  reputation?: number | null,
  coin?: number | null,
  queststageID?: string | null,
  organizationID?: string | null,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteQuestStageRewardInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestRewardInput = {
  id?: string | null,
  reputation?: number | null,
  coin?: number | null,
  questID: string,
  organizationID: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelQuestRewardConditionInput = {
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestRewardConditionInput | null > | null,
  or?: Array< ModelQuestRewardConditionInput | null > | null,
  not?: ModelQuestRewardConditionInput | null,
};

export type QuestReward = {
  __typename: "QuestReward",
  id?: string,
  reputation?: number | null,
  coin?: number | null,
  questID?: string,
  organizationID?: string,
  collectableID?: string | null,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestRewardInput = {
  id: string,
  reputation?: number | null,
  coin?: number | null,
  questID?: string | null,
  organizationID?: string | null,
  collectableID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteQuestRewardInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionPictureInput = {
  id?: string | null,
  userqueststagetaskrequirementsubmissionID: string,
  pictureID: string,
  approvedByID?: string | null,
  _version?: number | null,
};

export type ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput = {
  userqueststagetaskrequirementsubmissionID?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null > | null,
  or?: Array< ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null > | null,
  not?: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null,
};

export type UserQuestStageTaskRequirementSubmissionPicture = {
  __typename: "UserQuestStageTaskRequirementSubmissionPicture",
  id?: string,
  userqueststagetaskrequirementsubmissionID?: string,
  pictureID?: string,
  approvedByID?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateUserQuestStageTaskRequirementSubmissionPictureInput = {
  id: string,
  userqueststagetaskrequirementsubmissionID?: string | null,
  pictureID?: string | null,
  approvedByID?: string | null,
  _version?: number | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionPictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionInput = {
  id?: string | null,
  userID: string,
  createdDtm?: string | null,
  queststagetaskrequirementID: string,
  _version?: number | null,
};

export type ModelUserQuestStageTaskRequirementSubmissionConditionInput = {
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  queststagetaskrequirementID?: ModelIDInput | null,
  and?: Array< ModelUserQuestStageTaskRequirementSubmissionConditionInput | null > | null,
  or?: Array< ModelUserQuestStageTaskRequirementSubmissionConditionInput | null > | null,
  not?: ModelUserQuestStageTaskRequirementSubmissionConditionInput | null,
};

export type UserQuestStageTaskRequirementSubmission = {
  __typename: "UserQuestStageTaskRequirementSubmission",
  id?: string,
  userID?: string,
  createdDtm?: string | null,
  queststagetaskrequirementID?: string,
  UserQuestStageTaskRequirementSubmissionPictures?: ModelUserQuestStageTaskRequirementSubmissionPictureConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelUserQuestStageTaskRequirementSubmissionPictureConnection = {
  __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
  items?:  Array<UserQuestStageTaskRequirementSubmissionPicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserQuestStageTaskRequirementSubmissionInput = {
  id: string,
  userID?: string | null,
  createdDtm?: string | null,
  queststagetaskrequirementID?: string | null,
  _version?: number | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageTaskPictureInput = {
  id?: string | null,
  pictureID: string,
  queststagetaskID: string,
  _version?: number | null,
};

export type ModelQuestStageTaskPictureConditionInput = {
  pictureID?: ModelIDInput | null,
  queststagetaskID?: ModelIDInput | null,
  and?: Array< ModelQuestStageTaskPictureConditionInput | null > | null,
  or?: Array< ModelQuestStageTaskPictureConditionInput | null > | null,
  not?: ModelQuestStageTaskPictureConditionInput | null,
};

export type QuestStageTaskPicture = {
  __typename: "QuestStageTaskPicture",
  id?: string,
  pictureID?: string,
  queststagetaskID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestStageTaskPictureInput = {
  id: string,
  pictureID?: string | null,
  queststagetaskID?: string | null,
  _version?: number | null,
};

export type DeleteQuestStageTaskPictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStagePictureInput = {
  id?: string | null,
  pictureID: string,
  queststageID: string,
  _version?: number | null,
};

export type ModelQuestStagePictureConditionInput = {
  pictureID?: ModelIDInput | null,
  queststageID?: ModelIDInput | null,
  and?: Array< ModelQuestStagePictureConditionInput | null > | null,
  or?: Array< ModelQuestStagePictureConditionInput | null > | null,
  not?: ModelQuestStagePictureConditionInput | null,
};

export type QuestStagePicture = {
  __typename: "QuestStagePicture",
  id?: string,
  pictureID?: string,
  queststageID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestStagePictureInput = {
  id: string,
  pictureID?: string | null,
  queststageID?: string | null,
  _version?: number | null,
};

export type DeleteQuestStagePictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestPictureInput = {
  id?: string | null,
  pictureID: string,
  questID: string,
  _version?: number | null,
};

export type ModelQuestPictureConditionInput = {
  pictureID?: ModelIDInput | null,
  questID?: ModelIDInput | null,
  and?: Array< ModelQuestPictureConditionInput | null > | null,
  or?: Array< ModelQuestPictureConditionInput | null > | null,
  not?: ModelQuestPictureConditionInput | null,
};

export type QuestPicture = {
  __typename: "QuestPicture",
  id?: string,
  pictureID?: string,
  questID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateQuestPictureInput = {
  id: string,
  pictureID?: string | null,
  questID?: string | null,
  _version?: number | null,
};

export type DeleteQuestPictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationPictureInput = {
  id?: string | null,
  pictureID: string,
  organizationID: string,
  _version?: number | null,
};

export type ModelOrganizationPictureConditionInput = {
  pictureID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  and?: Array< ModelOrganizationPictureConditionInput | null > | null,
  or?: Array< ModelOrganizationPictureConditionInput | null > | null,
  not?: ModelOrganizationPictureConditionInput | null,
};

export type OrganizationPicture = {
  __typename: "OrganizationPicture",
  id?: string,
  pictureID?: string,
  organizationID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateOrganizationPictureInput = {
  id: string,
  pictureID?: string | null,
  organizationID?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationPictureInput = {
  id: string,
  _version?: number | null,
};

export type CreatePictureInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  s3Url?: string | null,
  uploadedDtm?: string | null,
  uploadedByID: string,
  _version?: number | null,
};

export type ModelPictureConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  s3Url?: ModelStringInput | null,
  uploadedDtm?: ModelStringInput | null,
  uploadedByID?: ModelIDInput | null,
  and?: Array< ModelPictureConditionInput | null > | null,
  or?: Array< ModelPictureConditionInput | null > | null,
  not?: ModelPictureConditionInput | null,
};

export type Picture = {
  __typename: "Picture",
  id?: string,
  name?: string | null,
  description?: string | null,
  s3Url?: string | null,
  uploadedDtm?: string | null,
  uploadedByID?: string,
  CollectablePictures?: ModelCollectablePictureConnection,
  OrganizationPictures?: ModelOrganizationPictureConnection,
  QuestPictures?: ModelQuestPictureConnection,
  QuestStagePictures?: ModelQuestStagePictureConnection,
  QuestStageTaskPictures?: ModelQuestStageTaskPictureConnection,
  UserQuestStageTaskRequirementSubmissionPictures?: ModelUserQuestStageTaskRequirementSubmissionPictureConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelCollectablePictureConnection = {
  __typename: "ModelCollectablePictureConnection",
  items?:  Array<CollectablePicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CollectablePicture = {
  __typename: "CollectablePicture",
  id?: string,
  collectableID?: string,
  pictureID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelOrganizationPictureConnection = {
  __typename: "ModelOrganizationPictureConnection",
  items?:  Array<OrganizationPicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestPictureConnection = {
  __typename: "ModelQuestPictureConnection",
  items?:  Array<QuestPicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestStagePictureConnection = {
  __typename: "ModelQuestStagePictureConnection",
  items?:  Array<QuestStagePicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestStageTaskPictureConnection = {
  __typename: "ModelQuestStageTaskPictureConnection",
  items?:  Array<QuestStageTaskPicture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdatePictureInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  s3Url?: string | null,
  uploadedDtm?: string | null,
  uploadedByID?: string | null,
  _version?: number | null,
};

export type DeletePictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateCollectableRedeemLocationInput = {
  id?: string | null,
  collectableID: string,
  locationID: string,
  _version?: number | null,
};

export type ModelCollectableRedeemLocationConditionInput = {
  collectableID?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  and?: Array< ModelCollectableRedeemLocationConditionInput | null > | null,
  or?: Array< ModelCollectableRedeemLocationConditionInput | null > | null,
  not?: ModelCollectableRedeemLocationConditionInput | null,
};

export type CollectableRedeemLocation = {
  __typename: "CollectableRedeemLocation",
  id?: string,
  collectableID?: string,
  locationID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateCollectableRedeemLocationInput = {
  id: string,
  collectableID?: string | null,
  locationID?: string | null,
  _version?: number | null,
};

export type DeleteCollectableRedeemLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateCollectablePictureInput = {
  id?: string | null,
  collectableID: string,
  pictureID: string,
  _version?: number | null,
};

export type ModelCollectablePictureConditionInput = {
  collectableID?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  and?: Array< ModelCollectablePictureConditionInput | null > | null,
  or?: Array< ModelCollectablePictureConditionInput | null > | null,
  not?: ModelCollectablePictureConditionInput | null,
};

export type UpdateCollectablePictureInput = {
  id: string,
  collectableID?: string | null,
  pictureID?: string | null,
  _version?: number | null,
};

export type DeleteCollectablePictureInput = {
  id: string,
  _version?: number | null,
};

export type CreateCollectableInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  coin?: number | null,
  realItem?: boolean | null,
  organizationID: string,
  createdByID: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelCollectableConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  realItem?: ModelBooleanInput | null,
  organizationID?: ModelIDInput | null,
  createdByID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelCollectableConditionInput | null > | null,
  or?: Array< ModelCollectableConditionInput | null > | null,
  not?: ModelCollectableConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Collectable = {
  __typename: "Collectable",
  id?: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  coin?: number | null,
  realItem?: boolean | null,
  organizationID?: string,
  createdByID?: string,
  createdDtm?: string | null,
  CollectablePictures?: ModelCollectablePictureConnection,
  CollectableRedeemLocations?: ModelCollectableRedeemLocationConnection,
  QuestRewards?: ModelQuestRewardConnection,
  QuestStageRewards?: ModelQuestStageRewardConnection,
  QuestStageTaskRewards?: ModelQuestStageTaskRewardConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelCollectableRedeemLocationConnection = {
  __typename: "ModelCollectableRedeemLocationConnection",
  items?:  Array<CollectableRedeemLocation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestRewardConnection = {
  __typename: "ModelQuestRewardConnection",
  items?:  Array<QuestReward | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestStageRewardConnection = {
  __typename: "ModelQuestStageRewardConnection",
  items?:  Array<QuestStageReward | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestStageTaskRewardConnection = {
  __typename: "ModelQuestStageTaskRewardConnection",
  items?:  Array<QuestStageTaskReward | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCollectableInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  coin?: number | null,
  realItem?: boolean | null,
  organizationID?: string | null,
  createdByID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteCollectableInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationMemberInput = {
  id?: string | null,
  organizationID: string,
  userID: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelOrganizationMemberConditionInput = {
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationMemberConditionInput | null > | null,
  or?: Array< ModelOrganizationMemberConditionInput | null > | null,
  not?: ModelOrganizationMemberConditionInput | null,
};

export type OrganizationMember = {
  __typename: "OrganizationMember",
  id?: string,
  organizationID?: string,
  userID?: string,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateOrganizationMemberInput = {
  id: string,
  organizationID?: string | null,
  userID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationMemberInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationModeratorInput = {
  id?: string | null,
  organizationID: string,
  userID: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelOrganizationModeratorConditionInput = {
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationModeratorConditionInput | null > | null,
  or?: Array< ModelOrganizationModeratorConditionInput | null > | null,
  not?: ModelOrganizationModeratorConditionInput | null,
};

export type OrganizationModerator = {
  __typename: "OrganizationModerator",
  id?: string,
  organizationID?: string,
  userID?: string,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateOrganizationModeratorInput = {
  id: string,
  organizationID?: string | null,
  userID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationModeratorInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationAdminInput = {
  id?: string | null,
  organizationID: string,
  userID: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelOrganizationAdminConditionInput = {
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationAdminConditionInput | null > | null,
  or?: Array< ModelOrganizationAdminConditionInput | null > | null,
  not?: ModelOrganizationAdminConditionInput | null,
};

export type OrganizationAdmin = {
  __typename: "OrganizationAdmin",
  id?: string,
  organizationID?: string,
  userID?: string,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateOrganizationAdminInput = {
  id: string,
  organizationID?: string | null,
  userID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationAdminInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserOrganizationWalletInput = {
  id?: string | null,
  coin?: number | null,
  reputation?: number | null,
  organizationID: string,
  userID: string,
  _version?: number | null,
};

export type ModelUserOrganizationWalletConditionInput = {
  coin?: ModelIntInput | null,
  reputation?: ModelIntInput | null,
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserOrganizationWalletConditionInput | null > | null,
  or?: Array< ModelUserOrganizationWalletConditionInput | null > | null,
  not?: ModelUserOrganizationWalletConditionInput | null,
};

export type UserOrganizationWallet = {
  __typename: "UserOrganizationWallet",
  id?: string,
  coin?: number | null,
  reputation?: number | null,
  organizationID?: string,
  userID?: string,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateUserOrganizationWalletInput = {
  id: string,
  coin?: number | null,
  reputation?: number | null,
  organizationID?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeleteUserOrganizationWalletInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationLocationInput = {
  id?: string | null,
  locationID: string,
  createdByID: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelOrganizationLocationConditionInput = {
  locationID?: ModelIDInput | null,
  createdByID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationLocationConditionInput | null > | null,
  or?: Array< ModelOrganizationLocationConditionInput | null > | null,
  not?: ModelOrganizationLocationConditionInput | null,
};

export type OrganizationLocation = {
  __typename: "OrganizationLocation",
  id?: string,
  locationID?: string,
  createdByID?: string,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type UpdateOrganizationLocationInput = {
  id: string,
  locationID?: string | null,
  createdByID?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrganizationInput = {
  id?: string | null,
  name?: string | null,
  createdById: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type Organization = {
  __typename: "Organization",
  id?: string,
  name?: string | null,
  createdById?: string,
  createdDtm?: string | null,
  UserOrganizationWallets?: ModelUserOrganizationWalletConnection,
  OrganizationAdmins?: ModelOrganizationAdminConnection,
  OrganizationModerators?: ModelOrganizationModeratorConnection,
  OrganizationMembers?: ModelOrganizationMemberConnection,
  Collectables?: ModelCollectableConnection,
  OrganizationPictures?: ModelOrganizationPictureConnection,
  QuestRewards?: ModelQuestRewardConnection,
  QuestStageRewards?: ModelQuestStageRewardConnection,
  QuestStageTaskRewards?: ModelQuestStageTaskRewardConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelUserOrganizationWalletConnection = {
  __typename: "ModelUserOrganizationWalletConnection",
  items?:  Array<UserOrganizationWallet | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationAdminConnection = {
  __typename: "ModelOrganizationAdminConnection",
  items?:  Array<OrganizationAdmin | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationModeratorConnection = {
  __typename: "ModelOrganizationModeratorConnection",
  items?:  Array<OrganizationModerator | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationMemberConnection = {
  __typename: "ModelOrganizationMemberConnection",
  items?:  Array<OrganizationMember | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCollectableConnection = {
  __typename: "ModelCollectableConnection",
  items?:  Array<Collectable | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  createdById?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteOrganizationInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  email?: string | null,
  username?: string | null,
  coin?: number | null,
  reputation?: number | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coin?: ModelIntInput | null,
  reputation?: ModelIntInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id?: string,
  email?: string | null,
  username?: string | null,
  coin?: number | null,
  reputation?: number | null,
  CreatedQuests?: ModelQuestConnection,
  CreatedQuestStages?: ModelQuestStageConnection,
  CreatedQuestStageTasks?: ModelQuestStageTaskConnection,
  CreatedQuestStageTaskRequirements?: ModelQuestStageTaskRequirementConnection,
  CreatedLocations?: ModelLocationConnection,
  CreatedOrganizations?: ModelOrganizationConnection,
  CreatedOrganizationLocations?: ModelOrganizationLocationConnection,
  UserOrganizationWallets?: ModelUserOrganizationWalletConnection,
  OrganizationAdmins?: ModelOrganizationAdminConnection,
  OrganizationModerators?: ModelOrganizationModeratorConnection,
  OrganizationMembers?: ModelOrganizationMemberConnection,
  CreatedCollectables?: ModelCollectableConnection,
  CreatedPictures?: ModelPictureConnection,
  UserQuestStageTaskRequirementSubmissions?: ModelUserQuestStageTaskRequirementSubmissionConnection,
  UserQuestStageTaskRequirementSubmissionPictureApprovals?: ModelUserQuestStageTaskRequirementSubmissionPictureConnection,
  UserCollectables?: ModelUserCollectableConnection,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelQuestConnection = {
  __typename: "ModelQuestConnection",
  items?:  Array<Quest | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Quest = {
  __typename: "Quest",
  id?: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  QuestStages?: ModelQuestStageConnection,
  createdDtm?: string | null,
  createdById?: string,
  QuestPictures?: ModelQuestPictureConnection,
  QuestRewards?: ModelQuestRewardConnection,
  QuestOrganizationRequirements?: ModelQuestOrganizationRequirementConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelQuestStageConnection = {
  __typename: "ModelQuestStageConnection",
  items?:  Array<QuestStage | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type QuestStage = {
  __typename: "QuestStage",
  id?: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  QuestStageTasks?: ModelQuestStageTaskConnection,
  questID?: string,
  createdById?: string,
  QuestStagePictures?: ModelQuestStagePictureConnection,
  QuestStageRewards?: ModelQuestStageRewardConnection,
  QuestOrganizationStageRequirements?: ModelQuestOrganizationStageRequirementConnection,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelQuestStageTaskConnection = {
  __typename: "ModelQuestStageTaskConnection",
  items?:  Array<QuestStageTask | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type QuestStageTask = {
  __typename: "QuestStageTask",
  id?: string,
  name?: string | null,
  description?: string | null,
  rewardReputation?: number | null,
  queststageID?: string,
  QuestStageTaskRequirements?: ModelQuestStageTaskRequirementConnection,
  createdById?: string,
  createdDtm?: string | null,
  QuestStageTaskPictures?: ModelQuestStageTaskPictureConnection,
  QuestStageTaskRewards?: ModelQuestStageTaskRewardConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelQuestStageTaskRequirementConnection = {
  __typename: "ModelQuestStageTaskRequirementConnection",
  items?:  Array<QuestStageTaskRequirement | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type QuestStageTaskRequirement = {
  __typename: "QuestStageTaskRequirement",
  id?: string,
  name?: string | null,
  description?: string | null,
  queststagetaskID?: string,
  QRCodeRequirement?: QRCodeRequirement,
  PictureRequirement?: PictureRequirement,
  locationID?: string | null,
  createdById?: string,
  createdDtm?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  questStageTaskRequirementQRCodeRequirementId?: string | null,
  questStageTaskRequirementPictureRequirementId?: string | null,
};

export type QRCodeRequirement = {
  __typename: "QRCodeRequirement",
  id?: string,
  name?: string | null,
  description?: string | null,
  qrcode?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type PictureRequirement = {
  __typename: "PictureRequirement",
  id?: string,
  name?: string | null,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelQuestOrganizationStageRequirementConnection = {
  __typename: "ModelQuestOrganizationStageRequirementConnection",
  items?:  Array<QuestOrganizationStageRequirement | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQuestOrganizationRequirementConnection = {
  __typename: "ModelQuestOrganizationRequirementConnection",
  items?:  Array<QuestOrganizationRequirement | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items?:  Array<Location | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Location = {
  __typename: "Location",
  id?: string,
  name?: string | null,
  description?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  QuestStageTaskRequirements?: ModelQuestStageTaskRequirementConnection,
  createdById?: string,
  createdDtm?: string | null,
  OrganizationLocations?: ModelOrganizationLocationConnection,
  createdAt?: string,
  updatedAt?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
};

export type ModelOrganizationLocationConnection = {
  __typename: "ModelOrganizationLocationConnection",
  items?:  Array<OrganizationLocation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items?:  Array<Organization | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection",
  items?:  Array<Picture | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserQuestStageTaskRequirementSubmissionConnection = {
  __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
  items?:  Array<UserQuestStageTaskRequirementSubmission | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserCollectableConnection = {
  __typename: "ModelUserCollectableConnection",
  items?:  Array<UserCollectable | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  username?: string | null,
  coin?: number | null,
  reputation?: number | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreatePictureRequirementInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type ModelPictureRequirementConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPictureRequirementConditionInput | null > | null,
  or?: Array< ModelPictureRequirementConditionInput | null > | null,
  not?: ModelPictureRequirementConditionInput | null,
};

export type UpdatePictureRequirementInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  _version?: number | null,
};

export type DeletePictureRequirementInput = {
  id: string,
  _version?: number | null,
};

export type CreateQRCodeRequirementInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  qrcode?: string | null,
  _version?: number | null,
};

export type ModelQRCodeRequirementConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  qrcode?: ModelStringInput | null,
  and?: Array< ModelQRCodeRequirementConditionInput | null > | null,
  or?: Array< ModelQRCodeRequirementConditionInput | null > | null,
  not?: ModelQRCodeRequirementConditionInput | null,
};

export type UpdateQRCodeRequirementInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  qrcode?: string | null,
  _version?: number | null,
};

export type DeleteQRCodeRequirementInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  createdById: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelLocationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateLocationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  createdById?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageTaskRequirementInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  queststagetaskID: string,
  locationID?: string | null,
  createdById: string,
  createdDtm?: string | null,
  _version?: number | null,
  questStageTaskRequirementQRCodeRequirementId?: string | null,
  questStageTaskRequirementPictureRequirementId?: string | null,
};

export type ModelQuestStageTaskRequirementConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  queststagetaskID?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskRequirementConditionInput | null > | null,
  or?: Array< ModelQuestStageTaskRequirementConditionInput | null > | null,
  not?: ModelQuestStageTaskRequirementConditionInput | null,
  questStageTaskRequirementQRCodeRequirementId?: ModelIDInput | null,
  questStageTaskRequirementPictureRequirementId?: ModelIDInput | null,
};

export type UpdateQuestStageTaskRequirementInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  queststagetaskID?: string | null,
  locationID?: string | null,
  createdById?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
  questStageTaskRequirementQRCodeRequirementId?: string | null,
  questStageTaskRequirementPictureRequirementId?: string | null,
};

export type DeleteQuestStageTaskRequirementInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageTaskInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  rewardReputation?: number | null,
  queststageID: string,
  createdById: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelQuestStageTaskConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rewardReputation?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskConditionInput | null > | null,
  or?: Array< ModelQuestStageTaskConditionInput | null > | null,
  not?: ModelQuestStageTaskConditionInput | null,
};

export type UpdateQuestStageTaskInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  rewardReputation?: number | null,
  queststageID?: string | null,
  createdById?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteQuestStageTaskInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestStageInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  questID: string,
  createdById: string,
  createdDtm?: string | null,
  _version?: number | null,
};

export type ModelQuestStageConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  rewardReputation?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageConditionInput | null > | null,
  or?: Array< ModelQuestStageConditionInput | null > | null,
  not?: ModelQuestStageConditionInput | null,
};

export type UpdateQuestStageInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  questID?: string | null,
  createdById?: string | null,
  createdDtm?: string | null,
  _version?: number | null,
};

export type DeleteQuestStageInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  createdDtm?: string | null,
  createdById: string,
  _version?: number | null,
};

export type ModelQuestConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  rewardReputation?: ModelIntInput | null,
  createdDtm?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  and?: Array< ModelQuestConditionInput | null > | null,
  or?: Array< ModelQuestConditionInput | null > | null,
  not?: ModelQuestConditionInput | null,
};

export type UpdateQuestInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  minReputation?: number | null,
  rewardReputation?: number | null,
  createdDtm?: string | null,
  createdById?: string | null,
  _version?: number | null,
};

export type DeleteQuestInput = {
  id: string,
  _version?: number | null,
};

export type ModelQuestOrganizationStageRequirementFilterInput = {
  id?: ModelIDInput | null,
  minReputation?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelQuestOrganizationStageRequirementFilterInput | null > | null,
  or?: Array< ModelQuestOrganizationStageRequirementFilterInput | null > | null,
  not?: ModelQuestOrganizationStageRequirementFilterInput | null,
};

export type ModelQuestOrganizationRequirementFilterInput = {
  id?: ModelIDInput | null,
  minReputation?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelQuestOrganizationRequirementFilterInput | null > | null,
  or?: Array< ModelQuestOrganizationRequirementFilterInput | null > | null,
  not?: ModelQuestOrganizationRequirementFilterInput | null,
};

export type ModelUserCollectableFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  receivedDtm?: ModelStringInput | null,
  and?: Array< ModelUserCollectableFilterInput | null > | null,
  or?: Array< ModelUserCollectableFilterInput | null > | null,
  not?: ModelUserCollectableFilterInput | null,
};

export type ModelQuestStageTaskRewardFilterInput = {
  id?: ModelIDInput | null,
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  queststagetaskID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskRewardFilterInput | null > | null,
  or?: Array< ModelQuestStageTaskRewardFilterInput | null > | null,
  not?: ModelQuestStageTaskRewardFilterInput | null,
};

export type ModelQuestStageRewardFilterInput = {
  id?: ModelIDInput | null,
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageRewardFilterInput | null > | null,
  or?: Array< ModelQuestStageRewardFilterInput | null > | null,
  not?: ModelQuestStageRewardFilterInput | null,
};

export type ModelQuestRewardFilterInput = {
  id?: ModelIDInput | null,
  reputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestRewardFilterInput | null > | null,
  or?: Array< ModelQuestRewardFilterInput | null > | null,
  not?: ModelQuestRewardFilterInput | null,
};

export type ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput = {
  id?: ModelIDInput | null,
  userqueststagetaskrequirementsubmissionID?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  approvedByID?: ModelIDInput | null,
  and?: Array< ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput | null > | null,
  or?: Array< ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput | null > | null,
  not?: ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput | null,
};

export type ModelUserQuestStageTaskRequirementSubmissionFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  queststagetaskrequirementID?: ModelIDInput | null,
  and?: Array< ModelUserQuestStageTaskRequirementSubmissionFilterInput | null > | null,
  or?: Array< ModelUserQuestStageTaskRequirementSubmissionFilterInput | null > | null,
  not?: ModelUserQuestStageTaskRequirementSubmissionFilterInput | null,
};

export type ModelQuestStageTaskPictureFilterInput = {
  id?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  queststagetaskID?: ModelIDInput | null,
  and?: Array< ModelQuestStageTaskPictureFilterInput | null > | null,
  or?: Array< ModelQuestStageTaskPictureFilterInput | null > | null,
  not?: ModelQuestStageTaskPictureFilterInput | null,
};

export type ModelQuestStagePictureFilterInput = {
  id?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  queststageID?: ModelIDInput | null,
  and?: Array< ModelQuestStagePictureFilterInput | null > | null,
  or?: Array< ModelQuestStagePictureFilterInput | null > | null,
  not?: ModelQuestStagePictureFilterInput | null,
};

export type ModelQuestPictureFilterInput = {
  id?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  questID?: ModelIDInput | null,
  and?: Array< ModelQuestPictureFilterInput | null > | null,
  or?: Array< ModelQuestPictureFilterInput | null > | null,
  not?: ModelQuestPictureFilterInput | null,
};

export type ModelOrganizationPictureFilterInput = {
  id?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  and?: Array< ModelOrganizationPictureFilterInput | null > | null,
  or?: Array< ModelOrganizationPictureFilterInput | null > | null,
  not?: ModelOrganizationPictureFilterInput | null,
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  s3Url?: ModelStringInput | null,
  uploadedDtm?: ModelStringInput | null,
  uploadedByID?: ModelIDInput | null,
  and?: Array< ModelPictureFilterInput | null > | null,
  or?: Array< ModelPictureFilterInput | null > | null,
  not?: ModelPictureFilterInput | null,
};

export type ModelCollectableRedeemLocationFilterInput = {
  id?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  and?: Array< ModelCollectableRedeemLocationFilterInput | null > | null,
  or?: Array< ModelCollectableRedeemLocationFilterInput | null > | null,
  not?: ModelCollectableRedeemLocationFilterInput | null,
};

export type ModelCollectablePictureFilterInput = {
  id?: ModelIDInput | null,
  collectableID?: ModelIDInput | null,
  pictureID?: ModelIDInput | null,
  and?: Array< ModelCollectablePictureFilterInput | null > | null,
  or?: Array< ModelCollectablePictureFilterInput | null > | null,
  not?: ModelCollectablePictureFilterInput | null,
};

export type ModelCollectableFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  coin?: ModelIntInput | null,
  realItem?: ModelBooleanInput | null,
  organizationID?: ModelIDInput | null,
  createdByID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelCollectableFilterInput | null > | null,
  or?: Array< ModelCollectableFilterInput | null > | null,
  not?: ModelCollectableFilterInput | null,
};

export type ModelOrganizationMemberFilterInput = {
  id?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationMemberFilterInput | null > | null,
  or?: Array< ModelOrganizationMemberFilterInput | null > | null,
  not?: ModelOrganizationMemberFilterInput | null,
};

export type ModelOrganizationModeratorFilterInput = {
  id?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationModeratorFilterInput | null > | null,
  or?: Array< ModelOrganizationModeratorFilterInput | null > | null,
  not?: ModelOrganizationModeratorFilterInput | null,
};

export type ModelOrganizationAdminFilterInput = {
  id?: ModelIDInput | null,
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationAdminFilterInput | null > | null,
  or?: Array< ModelOrganizationAdminFilterInput | null > | null,
  not?: ModelOrganizationAdminFilterInput | null,
};

export type ModelUserOrganizationWalletFilterInput = {
  id?: ModelIDInput | null,
  coin?: ModelIntInput | null,
  reputation?: ModelIntInput | null,
  organizationID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelUserOrganizationWalletFilterInput | null > | null,
  or?: Array< ModelUserOrganizationWalletFilterInput | null > | null,
  not?: ModelUserOrganizationWalletFilterInput | null,
};

export type ModelOrganizationLocationFilterInput = {
  id?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  createdByID?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationLocationFilterInput | null > | null,
  or?: Array< ModelOrganizationLocationFilterInput | null > | null,
  not?: ModelOrganizationLocationFilterInput | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  coin?: ModelIntInput | null,
  reputation?: ModelIntInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPictureRequirementFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelPictureRequirementFilterInput | null > | null,
  or?: Array< ModelPictureRequirementFilterInput | null > | null,
  not?: ModelPictureRequirementFilterInput | null,
};

export type ModelPictureRequirementConnection = {
  __typename: "ModelPictureRequirementConnection",
  items?:  Array<PictureRequirement | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelQRCodeRequirementFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  qrcode?: ModelStringInput | null,
  and?: Array< ModelQRCodeRequirementFilterInput | null > | null,
  or?: Array< ModelQRCodeRequirementFilterInput | null > | null,
  not?: ModelQRCodeRequirementFilterInput | null,
};

export type ModelQRCodeRequirementConnection = {
  __typename: "ModelQRCodeRequirementConnection",
  items?:  Array<QRCodeRequirement | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
};

export type ModelQuestStageTaskRequirementFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  queststagetaskID?: ModelIDInput | null,
  locationID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskRequirementFilterInput | null > | null,
  or?: Array< ModelQuestStageTaskRequirementFilterInput | null > | null,
  not?: ModelQuestStageTaskRequirementFilterInput | null,
  questStageTaskRequirementQRCodeRequirementId?: ModelIDInput | null,
  questStageTaskRequirementPictureRequirementId?: ModelIDInput | null,
};

export type ModelQuestStageTaskFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  rewardReputation?: ModelIntInput | null,
  queststageID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageTaskFilterInput | null > | null,
  or?: Array< ModelQuestStageTaskFilterInput | null > | null,
  not?: ModelQuestStageTaskFilterInput | null,
};

export type ModelQuestStageFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  rewardReputation?: ModelIntInput | null,
  questID?: ModelIDInput | null,
  createdById?: ModelIDInput | null,
  createdDtm?: ModelStringInput | null,
  and?: Array< ModelQuestStageFilterInput | null > | null,
  or?: Array< ModelQuestStageFilterInput | null > | null,
  not?: ModelQuestStageFilterInput | null,
};

export type ModelQuestFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  minReputation?: ModelIntInput | null,
  rewardReputation?: ModelIntInput | null,
  createdDtm?: ModelStringInput | null,
  createdById?: ModelIDInput | null,
  and?: Array< ModelQuestFilterInput | null > | null,
  or?: Array< ModelQuestFilterInput | null > | null,
  not?: ModelQuestFilterInput | null,
};

export type CreateQuestOrganizationStageRequirementMutationVariables = {
  input?: CreateQuestOrganizationStageRequirementInput,
  condition?: ModelQuestOrganizationStageRequirementConditionInput | null,
};

export type CreateQuestOrganizationStageRequirementMutation = {
  createQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestOrganizationStageRequirementMutationVariables = {
  input?: UpdateQuestOrganizationStageRequirementInput,
  condition?: ModelQuestOrganizationStageRequirementConditionInput | null,
};

export type UpdateQuestOrganizationStageRequirementMutation = {
  updateQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestOrganizationStageRequirementMutationVariables = {
  input?: DeleteQuestOrganizationStageRequirementInput,
  condition?: ModelQuestOrganizationStageRequirementConditionInput | null,
};

export type DeleteQuestOrganizationStageRequirementMutation = {
  deleteQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestOrganizationRequirementMutationVariables = {
  input?: CreateQuestOrganizationRequirementInput,
  condition?: ModelQuestOrganizationRequirementConditionInput | null,
};

export type CreateQuestOrganizationRequirementMutation = {
  createQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestOrganizationRequirementMutationVariables = {
  input?: UpdateQuestOrganizationRequirementInput,
  condition?: ModelQuestOrganizationRequirementConditionInput | null,
};

export type UpdateQuestOrganizationRequirementMutation = {
  updateQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestOrganizationRequirementMutationVariables = {
  input?: DeleteQuestOrganizationRequirementInput,
  condition?: ModelQuestOrganizationRequirementConditionInput | null,
};

export type DeleteQuestOrganizationRequirementMutation = {
  deleteQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserCollectableMutationVariables = {
  input?: CreateUserCollectableInput,
  condition?: ModelUserCollectableConditionInput | null,
};

export type CreateUserCollectableMutation = {
  createUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserCollectableMutationVariables = {
  input?: UpdateUserCollectableInput,
  condition?: ModelUserCollectableConditionInput | null,
};

export type UpdateUserCollectableMutation = {
  updateUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserCollectableMutationVariables = {
  input?: DeleteUserCollectableInput,
  condition?: ModelUserCollectableConditionInput | null,
};

export type DeleteUserCollectableMutation = {
  deleteUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStageTaskRewardMutationVariables = {
  input?: CreateQuestStageTaskRewardInput,
  condition?: ModelQuestStageTaskRewardConditionInput | null,
};

export type CreateQuestStageTaskRewardMutation = {
  createQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStageTaskRewardMutationVariables = {
  input?: UpdateQuestStageTaskRewardInput,
  condition?: ModelQuestStageTaskRewardConditionInput | null,
};

export type UpdateQuestStageTaskRewardMutation = {
  updateQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStageTaskRewardMutationVariables = {
  input?: DeleteQuestStageTaskRewardInput,
  condition?: ModelQuestStageTaskRewardConditionInput | null,
};

export type DeleteQuestStageTaskRewardMutation = {
  deleteQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStageRewardMutationVariables = {
  input?: CreateQuestStageRewardInput,
  condition?: ModelQuestStageRewardConditionInput | null,
};

export type CreateQuestStageRewardMutation = {
  createQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStageRewardMutationVariables = {
  input?: UpdateQuestStageRewardInput,
  condition?: ModelQuestStageRewardConditionInput | null,
};

export type UpdateQuestStageRewardMutation = {
  updateQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStageRewardMutationVariables = {
  input?: DeleteQuestStageRewardInput,
  condition?: ModelQuestStageRewardConditionInput | null,
};

export type DeleteQuestStageRewardMutation = {
  deleteQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestRewardMutationVariables = {
  input?: CreateQuestRewardInput,
  condition?: ModelQuestRewardConditionInput | null,
};

export type CreateQuestRewardMutation = {
  createQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestRewardMutationVariables = {
  input?: UpdateQuestRewardInput,
  condition?: ModelQuestRewardConditionInput | null,
};

export type UpdateQuestRewardMutation = {
  updateQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestRewardMutationVariables = {
  input?: DeleteQuestRewardInput,
  condition?: ModelQuestRewardConditionInput | null,
};

export type DeleteQuestRewardMutation = {
  deleteQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionPictureMutationVariables = {
  input?: CreateUserQuestStageTaskRequirementSubmissionPictureInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionPictureMutation = {
  createUserQuestStageTaskRequirementSubmissionPicture?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserQuestStageTaskRequirementSubmissionPictureMutationVariables = {
  input?: UpdateUserQuestStageTaskRequirementSubmissionPictureInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null,
};

export type UpdateUserQuestStageTaskRequirementSubmissionPictureMutation = {
  updateUserQuestStageTaskRequirementSubmissionPicture?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionPictureMutationVariables = {
  input?: DeleteUserQuestStageTaskRequirementSubmissionPictureInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionPictureMutation = {
  deleteUserQuestStageTaskRequirementSubmissionPicture?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionMutationVariables = {
  input?: CreateUserQuestStageTaskRequirementSubmissionInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionConditionInput | null,
};

export type CreateUserQuestStageTaskRequirementSubmissionMutation = {
  createUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserQuestStageTaskRequirementSubmissionMutationVariables = {
  input?: UpdateUserQuestStageTaskRequirementSubmissionInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionConditionInput | null,
};

export type UpdateUserQuestStageTaskRequirementSubmissionMutation = {
  updateUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionMutationVariables = {
  input?: DeleteUserQuestStageTaskRequirementSubmissionInput,
  condition?: ModelUserQuestStageTaskRequirementSubmissionConditionInput | null,
};

export type DeleteUserQuestStageTaskRequirementSubmissionMutation = {
  deleteUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStageTaskPictureMutationVariables = {
  input?: CreateQuestStageTaskPictureInput,
  condition?: ModelQuestStageTaskPictureConditionInput | null,
};

export type CreateQuestStageTaskPictureMutation = {
  createQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStageTaskPictureMutationVariables = {
  input?: UpdateQuestStageTaskPictureInput,
  condition?: ModelQuestStageTaskPictureConditionInput | null,
};

export type UpdateQuestStageTaskPictureMutation = {
  updateQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStageTaskPictureMutationVariables = {
  input?: DeleteQuestStageTaskPictureInput,
  condition?: ModelQuestStageTaskPictureConditionInput | null,
};

export type DeleteQuestStageTaskPictureMutation = {
  deleteQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStagePictureMutationVariables = {
  input?: CreateQuestStagePictureInput,
  condition?: ModelQuestStagePictureConditionInput | null,
};

export type CreateQuestStagePictureMutation = {
  createQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStagePictureMutationVariables = {
  input?: UpdateQuestStagePictureInput,
  condition?: ModelQuestStagePictureConditionInput | null,
};

export type UpdateQuestStagePictureMutation = {
  updateQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStagePictureMutationVariables = {
  input?: DeleteQuestStagePictureInput,
  condition?: ModelQuestStagePictureConditionInput | null,
};

export type DeleteQuestStagePictureMutation = {
  deleteQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestPictureMutationVariables = {
  input?: CreateQuestPictureInput,
  condition?: ModelQuestPictureConditionInput | null,
};

export type CreateQuestPictureMutation = {
  createQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestPictureMutationVariables = {
  input?: UpdateQuestPictureInput,
  condition?: ModelQuestPictureConditionInput | null,
};

export type UpdateQuestPictureMutation = {
  updateQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestPictureMutationVariables = {
  input?: DeleteQuestPictureInput,
  condition?: ModelQuestPictureConditionInput | null,
};

export type DeleteQuestPictureMutation = {
  deleteQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationPictureMutationVariables = {
  input?: CreateOrganizationPictureInput,
  condition?: ModelOrganizationPictureConditionInput | null,
};

export type CreateOrganizationPictureMutation = {
  createOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationPictureMutationVariables = {
  input?: UpdateOrganizationPictureInput,
  condition?: ModelOrganizationPictureConditionInput | null,
};

export type UpdateOrganizationPictureMutation = {
  updateOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationPictureMutationVariables = {
  input?: DeleteOrganizationPictureInput,
  condition?: ModelOrganizationPictureConditionInput | null,
};

export type DeleteOrganizationPictureMutation = {
  deleteOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePictureMutationVariables = {
  input?: CreatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type CreatePictureMutation = {
  createPicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePictureMutationVariables = {
  input?: UpdatePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type UpdatePictureMutation = {
  updatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePictureMutationVariables = {
  input?: DeletePictureInput,
  condition?: ModelPictureConditionInput | null,
};

export type DeletePictureMutation = {
  deletePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCollectableRedeemLocationMutationVariables = {
  input?: CreateCollectableRedeemLocationInput,
  condition?: ModelCollectableRedeemLocationConditionInput | null,
};

export type CreateCollectableRedeemLocationMutation = {
  createCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCollectableRedeemLocationMutationVariables = {
  input?: UpdateCollectableRedeemLocationInput,
  condition?: ModelCollectableRedeemLocationConditionInput | null,
};

export type UpdateCollectableRedeemLocationMutation = {
  updateCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCollectableRedeemLocationMutationVariables = {
  input?: DeleteCollectableRedeemLocationInput,
  condition?: ModelCollectableRedeemLocationConditionInput | null,
};

export type DeleteCollectableRedeemLocationMutation = {
  deleteCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCollectablePictureMutationVariables = {
  input?: CreateCollectablePictureInput,
  condition?: ModelCollectablePictureConditionInput | null,
};

export type CreateCollectablePictureMutation = {
  createCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCollectablePictureMutationVariables = {
  input?: UpdateCollectablePictureInput,
  condition?: ModelCollectablePictureConditionInput | null,
};

export type UpdateCollectablePictureMutation = {
  updateCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCollectablePictureMutationVariables = {
  input?: DeleteCollectablePictureInput,
  condition?: ModelCollectablePictureConditionInput | null,
};

export type DeleteCollectablePictureMutation = {
  deleteCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCollectableMutationVariables = {
  input?: CreateCollectableInput,
  condition?: ModelCollectableConditionInput | null,
};

export type CreateCollectableMutation = {
  createCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCollectableMutationVariables = {
  input?: UpdateCollectableInput,
  condition?: ModelCollectableConditionInput | null,
};

export type UpdateCollectableMutation = {
  updateCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCollectableMutationVariables = {
  input?: DeleteCollectableInput,
  condition?: ModelCollectableConditionInput | null,
};

export type DeleteCollectableMutation = {
  deleteCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationMemberMutationVariables = {
  input?: CreateOrganizationMemberInput,
  condition?: ModelOrganizationMemberConditionInput | null,
};

export type CreateOrganizationMemberMutation = {
  createOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationMemberMutationVariables = {
  input?: UpdateOrganizationMemberInput,
  condition?: ModelOrganizationMemberConditionInput | null,
};

export type UpdateOrganizationMemberMutation = {
  updateOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationMemberMutationVariables = {
  input?: DeleteOrganizationMemberInput,
  condition?: ModelOrganizationMemberConditionInput | null,
};

export type DeleteOrganizationMemberMutation = {
  deleteOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationModeratorMutationVariables = {
  input?: CreateOrganizationModeratorInput,
  condition?: ModelOrganizationModeratorConditionInput | null,
};

export type CreateOrganizationModeratorMutation = {
  createOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationModeratorMutationVariables = {
  input?: UpdateOrganizationModeratorInput,
  condition?: ModelOrganizationModeratorConditionInput | null,
};

export type UpdateOrganizationModeratorMutation = {
  updateOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationModeratorMutationVariables = {
  input?: DeleteOrganizationModeratorInput,
  condition?: ModelOrganizationModeratorConditionInput | null,
};

export type DeleteOrganizationModeratorMutation = {
  deleteOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationAdminMutationVariables = {
  input?: CreateOrganizationAdminInput,
  condition?: ModelOrganizationAdminConditionInput | null,
};

export type CreateOrganizationAdminMutation = {
  createOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationAdminMutationVariables = {
  input?: UpdateOrganizationAdminInput,
  condition?: ModelOrganizationAdminConditionInput | null,
};

export type UpdateOrganizationAdminMutation = {
  updateOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationAdminMutationVariables = {
  input?: DeleteOrganizationAdminInput,
  condition?: ModelOrganizationAdminConditionInput | null,
};

export type DeleteOrganizationAdminMutation = {
  deleteOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserOrganizationWalletMutationVariables = {
  input?: CreateUserOrganizationWalletInput,
  condition?: ModelUserOrganizationWalletConditionInput | null,
};

export type CreateUserOrganizationWalletMutation = {
  createUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserOrganizationWalletMutationVariables = {
  input?: UpdateUserOrganizationWalletInput,
  condition?: ModelUserOrganizationWalletConditionInput | null,
};

export type UpdateUserOrganizationWalletMutation = {
  updateUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserOrganizationWalletMutationVariables = {
  input?: DeleteUserOrganizationWalletInput,
  condition?: ModelUserOrganizationWalletConditionInput | null,
};

export type DeleteUserOrganizationWalletMutation = {
  deleteUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationLocationMutationVariables = {
  input?: CreateOrganizationLocationInput,
  condition?: ModelOrganizationLocationConditionInput | null,
};

export type CreateOrganizationLocationMutation = {
  createOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationLocationMutationVariables = {
  input?: UpdateOrganizationLocationInput,
  condition?: ModelOrganizationLocationConditionInput | null,
};

export type UpdateOrganizationLocationMutation = {
  updateOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationLocationMutationVariables = {
  input?: DeleteOrganizationLocationInput,
  condition?: ModelOrganizationLocationConditionInput | null,
};

export type DeleteOrganizationLocationMutation = {
  deleteOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrganizationMutationVariables = {
  input?: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input?: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input?: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePictureRequirementMutationVariables = {
  input?: CreatePictureRequirementInput,
  condition?: ModelPictureRequirementConditionInput | null,
};

export type CreatePictureRequirementMutation = {
  createPictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePictureRequirementMutationVariables = {
  input?: UpdatePictureRequirementInput,
  condition?: ModelPictureRequirementConditionInput | null,
};

export type UpdatePictureRequirementMutation = {
  updatePictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePictureRequirementMutationVariables = {
  input?: DeletePictureRequirementInput,
  condition?: ModelPictureRequirementConditionInput | null,
};

export type DeletePictureRequirementMutation = {
  deletePictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQrCodeRequirementMutationVariables = {
  input?: CreateQRCodeRequirementInput,
  condition?: ModelQRCodeRequirementConditionInput | null,
};

export type CreateQrCodeRequirementMutation = {
  createQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQrCodeRequirementMutationVariables = {
  input?: UpdateQRCodeRequirementInput,
  condition?: ModelQRCodeRequirementConditionInput | null,
};

export type UpdateQrCodeRequirementMutation = {
  updateQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQrCodeRequirementMutationVariables = {
  input?: DeleteQRCodeRequirementInput,
  condition?: ModelQRCodeRequirementConditionInput | null,
};

export type DeleteQrCodeRequirementMutation = {
  deleteQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLocationMutationVariables = {
  input?: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input?: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input?: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStageTaskRequirementMutationVariables = {
  input?: CreateQuestStageTaskRequirementInput,
  condition?: ModelQuestStageTaskRequirementConditionInput | null,
};

export type CreateQuestStageTaskRequirementMutation = {
  createQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type UpdateQuestStageTaskRequirementMutationVariables = {
  input?: UpdateQuestStageTaskRequirementInput,
  condition?: ModelQuestStageTaskRequirementConditionInput | null,
};

export type UpdateQuestStageTaskRequirementMutation = {
  updateQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type DeleteQuestStageTaskRequirementMutationVariables = {
  input?: DeleteQuestStageTaskRequirementInput,
  condition?: ModelQuestStageTaskRequirementConditionInput | null,
};

export type DeleteQuestStageTaskRequirementMutation = {
  deleteQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type CreateQuestStageTaskMutationVariables = {
  input?: CreateQuestStageTaskInput,
  condition?: ModelQuestStageTaskConditionInput | null,
};

export type CreateQuestStageTaskMutation = {
  createQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStageTaskMutationVariables = {
  input?: UpdateQuestStageTaskInput,
  condition?: ModelQuestStageTaskConditionInput | null,
};

export type UpdateQuestStageTaskMutation = {
  updateQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStageTaskMutationVariables = {
  input?: DeleteQuestStageTaskInput,
  condition?: ModelQuestStageTaskConditionInput | null,
};

export type DeleteQuestStageTaskMutation = {
  deleteQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestStageMutationVariables = {
  input?: CreateQuestStageInput,
  condition?: ModelQuestStageConditionInput | null,
};

export type CreateQuestStageMutation = {
  createQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestStageMutationVariables = {
  input?: UpdateQuestStageInput,
  condition?: ModelQuestStageConditionInput | null,
};

export type UpdateQuestStageMutation = {
  updateQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestStageMutationVariables = {
  input?: DeleteQuestStageInput,
  condition?: ModelQuestStageConditionInput | null,
};

export type DeleteQuestStageMutation = {
  deleteQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateQuestMutationVariables = {
  input?: CreateQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type CreateQuestMutation = {
  createQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateQuestMutationVariables = {
  input?: UpdateQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type UpdateQuestMutation = {
  updateQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteQuestMutationVariables = {
  input?: DeleteQuestInput,
  condition?: ModelQuestConditionInput | null,
};

export type DeleteQuestMutation = {
  deleteQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetQuestOrganizationStageRequirementQueryVariables = {
  id?: string,
};

export type GetQuestOrganizationStageRequirementQuery = {
  getQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestOrganizationStageRequirementsQueryVariables = {
  filter?: ModelQuestOrganizationStageRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestOrganizationStageRequirementsQuery = {
  listQuestOrganizationStageRequirements?:  {
    __typename: "ModelQuestOrganizationStageRequirementConnection",
    items:  Array< {
      __typename: "QuestOrganizationStageRequirement",
      id: string,
      minReputation?: number | null,
      queststageID: string,
      organizationID: string,
      createdDtm?: string | null,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestOrganizationStageRequirementsQueryVariables = {
  filter?: ModelQuestOrganizationStageRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestOrganizationStageRequirementsQuery = {
  syncQuestOrganizationStageRequirements?:  {
    __typename: "ModelQuestOrganizationStageRequirementConnection",
    items:  Array< {
      __typename: "QuestOrganizationStageRequirement",
      id: string,
      minReputation?: number | null,
      queststageID: string,
      organizationID: string,
      createdDtm?: string | null,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestOrganizationRequirementQueryVariables = {
  id?: string,
};

export type GetQuestOrganizationRequirementQuery = {
  getQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestOrganizationRequirementsQueryVariables = {
  filter?: ModelQuestOrganizationRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestOrganizationRequirementsQuery = {
  listQuestOrganizationRequirements?:  {
    __typename: "ModelQuestOrganizationRequirementConnection",
    items:  Array< {
      __typename: "QuestOrganizationRequirement",
      id: string,
      minReputation?: number | null,
      questID: string,
      organizationID: string,
      createdDtm?: string | null,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestOrganizationRequirementsQueryVariables = {
  filter?: ModelQuestOrganizationRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestOrganizationRequirementsQuery = {
  syncQuestOrganizationRequirements?:  {
    __typename: "ModelQuestOrganizationRequirementConnection",
    items:  Array< {
      __typename: "QuestOrganizationRequirement",
      id: string,
      minReputation?: number | null,
      questID: string,
      organizationID: string,
      createdDtm?: string | null,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserCollectableQueryVariables = {
  id?: string,
};

export type GetUserCollectableQuery = {
  getUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserCollectablesQueryVariables = {
  filter?: ModelUserCollectableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserCollectablesQuery = {
  listUserCollectables?:  {
    __typename: "ModelUserCollectableConnection",
    items:  Array< {
      __typename: "UserCollectable",
      id: string,
      userID: string,
      collectableID: string,
      receivedDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserCollectablesQueryVariables = {
  filter?: ModelUserCollectableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserCollectablesQuery = {
  syncUserCollectables?:  {
    __typename: "ModelUserCollectableConnection",
    items:  Array< {
      __typename: "UserCollectable",
      id: string,
      userID: string,
      collectableID: string,
      receivedDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageTaskRewardQueryVariables = {
  id?: string,
};

export type GetQuestStageTaskRewardQuery = {
  getQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStageTaskRewardsQueryVariables = {
  filter?: ModelQuestStageTaskRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStageTaskRewardsQuery = {
  listQuestStageTaskRewards?:  {
    __typename: "ModelQuestStageTaskRewardConnection",
    items:  Array< {
      __typename: "QuestStageTaskReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      queststagetaskID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStageTaskRewardsQueryVariables = {
  filter?: ModelQuestStageTaskRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStageTaskRewardsQuery = {
  syncQuestStageTaskRewards?:  {
    __typename: "ModelQuestStageTaskRewardConnection",
    items:  Array< {
      __typename: "QuestStageTaskReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      queststagetaskID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageRewardQueryVariables = {
  id?: string,
};

export type GetQuestStageRewardQuery = {
  getQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStageRewardsQueryVariables = {
  filter?: ModelQuestStageRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStageRewardsQuery = {
  listQuestStageRewards?:  {
    __typename: "ModelQuestStageRewardConnection",
    items:  Array< {
      __typename: "QuestStageReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      queststageID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStageRewardsQueryVariables = {
  filter?: ModelQuestStageRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStageRewardsQuery = {
  syncQuestStageRewards?:  {
    __typename: "ModelQuestStageRewardConnection",
    items:  Array< {
      __typename: "QuestStageReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      queststageID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestRewardQueryVariables = {
  id?: string,
};

export type GetQuestRewardQuery = {
  getQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestRewardsQueryVariables = {
  filter?: ModelQuestRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestRewardsQuery = {
  listQuestRewards?:  {
    __typename: "ModelQuestRewardConnection",
    items:  Array< {
      __typename: "QuestReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      questID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestRewardsQueryVariables = {
  filter?: ModelQuestRewardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestRewardsQuery = {
  syncQuestRewards?:  {
    __typename: "ModelQuestRewardConnection",
    items:  Array< {
      __typename: "QuestReward",
      id: string,
      reputation?: number | null,
      coin?: number | null,
      questID: string,
      organizationID: string,
      collectableID?: string | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQuestStageTaskRequirementSubmissionPictureQueryVariables = {
  id?: string,
};

export type GetUserQuestStageTaskRequirementSubmissionPictureQuery = {
  getUserQuestStageTaskRequirementSubmissionPicture?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserQuestStageTaskRequirementSubmissionPicturesQueryVariables = {
  filter?: ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserQuestStageTaskRequirementSubmissionPicturesQuery = {
  listUserQuestStageTaskRequirementSubmissionPictures?:  {
    __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
    items:  Array< {
      __typename: "UserQuestStageTaskRequirementSubmissionPicture",
      id: string,
      userqueststagetaskrequirementsubmissionID: string,
      pictureID: string,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserQuestStageTaskRequirementSubmissionPicturesQueryVariables = {
  filter?: ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserQuestStageTaskRequirementSubmissionPicturesQuery = {
  syncUserQuestStageTaskRequirementSubmissionPictures?:  {
    __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
    items:  Array< {
      __typename: "UserQuestStageTaskRequirementSubmissionPicture",
      id: string,
      userqueststagetaskrequirementsubmissionID: string,
      pictureID: string,
      approvedByID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQuestStageTaskRequirementSubmissionQueryVariables = {
  id?: string,
};

export type GetUserQuestStageTaskRequirementSubmissionQuery = {
  getUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserQuestStageTaskRequirementSubmissionsQueryVariables = {
  filter?: ModelUserQuestStageTaskRequirementSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserQuestStageTaskRequirementSubmissionsQuery = {
  listUserQuestStageTaskRequirementSubmissions?:  {
    __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
    items:  Array< {
      __typename: "UserQuestStageTaskRequirementSubmission",
      id: string,
      userID: string,
      createdDtm?: string | null,
      queststagetaskrequirementID: string,
      UserQuestStageTaskRequirementSubmissionPictures?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserQuestStageTaskRequirementSubmissionsQueryVariables = {
  filter?: ModelUserQuestStageTaskRequirementSubmissionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserQuestStageTaskRequirementSubmissionsQuery = {
  syncUserQuestStageTaskRequirementSubmissions?:  {
    __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
    items:  Array< {
      __typename: "UserQuestStageTaskRequirementSubmission",
      id: string,
      userID: string,
      createdDtm?: string | null,
      queststagetaskrequirementID: string,
      UserQuestStageTaskRequirementSubmissionPictures?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageTaskPictureQueryVariables = {
  id?: string,
};

export type GetQuestStageTaskPictureQuery = {
  getQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStageTaskPicturesQueryVariables = {
  filter?: ModelQuestStageTaskPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStageTaskPicturesQuery = {
  listQuestStageTaskPictures?:  {
    __typename: "ModelQuestStageTaskPictureConnection",
    items:  Array< {
      __typename: "QuestStageTaskPicture",
      id: string,
      pictureID: string,
      queststagetaskID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStageTaskPicturesQueryVariables = {
  filter?: ModelQuestStageTaskPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStageTaskPicturesQuery = {
  syncQuestStageTaskPictures?:  {
    __typename: "ModelQuestStageTaskPictureConnection",
    items:  Array< {
      __typename: "QuestStageTaskPicture",
      id: string,
      pictureID: string,
      queststagetaskID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStagePictureQueryVariables = {
  id?: string,
};

export type GetQuestStagePictureQuery = {
  getQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStagePicturesQueryVariables = {
  filter?: ModelQuestStagePictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStagePicturesQuery = {
  listQuestStagePictures?:  {
    __typename: "ModelQuestStagePictureConnection",
    items:  Array< {
      __typename: "QuestStagePicture",
      id: string,
      pictureID: string,
      queststageID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStagePicturesQueryVariables = {
  filter?: ModelQuestStagePictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStagePicturesQuery = {
  syncQuestStagePictures?:  {
    __typename: "ModelQuestStagePictureConnection",
    items:  Array< {
      __typename: "QuestStagePicture",
      id: string,
      pictureID: string,
      queststageID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestPictureQueryVariables = {
  id?: string,
};

export type GetQuestPictureQuery = {
  getQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestPicturesQueryVariables = {
  filter?: ModelQuestPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestPicturesQuery = {
  listQuestPictures?:  {
    __typename: "ModelQuestPictureConnection",
    items:  Array< {
      __typename: "QuestPicture",
      id: string,
      pictureID: string,
      questID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestPicturesQueryVariables = {
  filter?: ModelQuestPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestPicturesQuery = {
  syncQuestPictures?:  {
    __typename: "ModelQuestPictureConnection",
    items:  Array< {
      __typename: "QuestPicture",
      id: string,
      pictureID: string,
      questID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationPictureQueryVariables = {
  id?: string,
};

export type GetOrganizationPictureQuery = {
  getOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationPicturesQueryVariables = {
  filter?: ModelOrganizationPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationPicturesQuery = {
  listOrganizationPictures?:  {
    __typename: "ModelOrganizationPictureConnection",
    items:  Array< {
      __typename: "OrganizationPicture",
      id: string,
      pictureID: string,
      organizationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationPicturesQueryVariables = {
  filter?: ModelOrganizationPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationPicturesQuery = {
  syncOrganizationPictures?:  {
    __typename: "ModelOrganizationPictureConnection",
    items:  Array< {
      __typename: "OrganizationPicture",
      id: string,
      pictureID: string,
      organizationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPictureQueryVariables = {
  id?: string,
};

export type GetPictureQuery = {
  getPicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPicturesQuery = {
  listPictures?:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name?: string | null,
      description?: string | null,
      s3Url?: string | null,
      uploadedDtm?: string | null,
      uploadedByID: string,
      CollectablePictures?:  {
        __typename: "ModelCollectablePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationPictures?:  {
        __typename: "ModelOrganizationPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestPictures?:  {
        __typename: "ModelQuestPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStagePictures?:  {
        __typename: "ModelQuestStagePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskPictures?:  {
        __typename: "ModelQuestStageTaskPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissionPictures?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPicturesQueryVariables = {
  filter?: ModelPictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPicturesQuery = {
  syncPictures?:  {
    __typename: "ModelPictureConnection",
    items:  Array< {
      __typename: "Picture",
      id: string,
      name?: string | null,
      description?: string | null,
      s3Url?: string | null,
      uploadedDtm?: string | null,
      uploadedByID: string,
      CollectablePictures?:  {
        __typename: "ModelCollectablePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationPictures?:  {
        __typename: "ModelOrganizationPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestPictures?:  {
        __typename: "ModelQuestPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStagePictures?:  {
        __typename: "ModelQuestStagePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskPictures?:  {
        __typename: "ModelQuestStageTaskPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissionPictures?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCollectableRedeemLocationQueryVariables = {
  id?: string,
};

export type GetCollectableRedeemLocationQuery = {
  getCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCollectableRedeemLocationsQueryVariables = {
  filter?: ModelCollectableRedeemLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectableRedeemLocationsQuery = {
  listCollectableRedeemLocations?:  {
    __typename: "ModelCollectableRedeemLocationConnection",
    items:  Array< {
      __typename: "CollectableRedeemLocation",
      id: string,
      collectableID: string,
      locationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCollectableRedeemLocationsQueryVariables = {
  filter?: ModelCollectableRedeemLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCollectableRedeemLocationsQuery = {
  syncCollectableRedeemLocations?:  {
    __typename: "ModelCollectableRedeemLocationConnection",
    items:  Array< {
      __typename: "CollectableRedeemLocation",
      id: string,
      collectableID: string,
      locationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCollectablePictureQueryVariables = {
  id?: string,
};

export type GetCollectablePictureQuery = {
  getCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCollectablePicturesQueryVariables = {
  filter?: ModelCollectablePictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectablePicturesQuery = {
  listCollectablePictures?:  {
    __typename: "ModelCollectablePictureConnection",
    items:  Array< {
      __typename: "CollectablePicture",
      id: string,
      collectableID: string,
      pictureID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCollectablePicturesQueryVariables = {
  filter?: ModelCollectablePictureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCollectablePicturesQuery = {
  syncCollectablePictures?:  {
    __typename: "ModelCollectablePictureConnection",
    items:  Array< {
      __typename: "CollectablePicture",
      id: string,
      collectableID: string,
      pictureID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCollectableQueryVariables = {
  id?: string,
};

export type GetCollectableQuery = {
  getCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCollectablesQueryVariables = {
  filter?: ModelCollectableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollectablesQuery = {
  listCollectables?:  {
    __typename: "ModelCollectableConnection",
    items:  Array< {
      __typename: "Collectable",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      coin?: number | null,
      realItem?: boolean | null,
      organizationID: string,
      createdByID: string,
      createdDtm?: string | null,
      CollectablePictures?:  {
        __typename: "ModelCollectablePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CollectableRedeemLocations?:  {
        __typename: "ModelCollectableRedeemLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCollectablesQueryVariables = {
  filter?: ModelCollectableFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCollectablesQuery = {
  syncCollectables?:  {
    __typename: "ModelCollectableConnection",
    items:  Array< {
      __typename: "Collectable",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      coin?: number | null,
      realItem?: boolean | null,
      organizationID: string,
      createdByID: string,
      createdDtm?: string | null,
      CollectablePictures?:  {
        __typename: "ModelCollectablePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CollectableRedeemLocations?:  {
        __typename: "ModelCollectableRedeemLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationMemberQueryVariables = {
  id?: string,
};

export type GetOrganizationMemberQuery = {
  getOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationMembersQueryVariables = {
  filter?: ModelOrganizationMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationMembersQuery = {
  listOrganizationMembers?:  {
    __typename: "ModelOrganizationMemberConnection",
    items:  Array< {
      __typename: "OrganizationMember",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationMembersQueryVariables = {
  filter?: ModelOrganizationMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationMembersQuery = {
  syncOrganizationMembers?:  {
    __typename: "ModelOrganizationMemberConnection",
    items:  Array< {
      __typename: "OrganizationMember",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationModeratorQueryVariables = {
  id?: string,
};

export type GetOrganizationModeratorQuery = {
  getOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationModeratorsQueryVariables = {
  filter?: ModelOrganizationModeratorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationModeratorsQuery = {
  listOrganizationModerators?:  {
    __typename: "ModelOrganizationModeratorConnection",
    items:  Array< {
      __typename: "OrganizationModerator",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationModeratorsQueryVariables = {
  filter?: ModelOrganizationModeratorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationModeratorsQuery = {
  syncOrganizationModerators?:  {
    __typename: "ModelOrganizationModeratorConnection",
    items:  Array< {
      __typename: "OrganizationModerator",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationAdminQueryVariables = {
  id?: string,
};

export type GetOrganizationAdminQuery = {
  getOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationAdminsQueryVariables = {
  filter?: ModelOrganizationAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationAdminsQuery = {
  listOrganizationAdmins?:  {
    __typename: "ModelOrganizationAdminConnection",
    items:  Array< {
      __typename: "OrganizationAdmin",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationAdminsQueryVariables = {
  filter?: ModelOrganizationAdminFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationAdminsQuery = {
  syncOrganizationAdmins?:  {
    __typename: "ModelOrganizationAdminConnection",
    items:  Array< {
      __typename: "OrganizationAdmin",
      id: string,
      organizationID: string,
      userID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserOrganizationWalletQueryVariables = {
  id?: string,
};

export type GetUserOrganizationWalletQuery = {
  getUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUserOrganizationWalletsQueryVariables = {
  filter?: ModelUserOrganizationWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserOrganizationWalletsQuery = {
  listUserOrganizationWallets?:  {
    __typename: "ModelUserOrganizationWalletConnection",
    items:  Array< {
      __typename: "UserOrganizationWallet",
      id: string,
      coin?: number | null,
      reputation?: number | null,
      organizationID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUserOrganizationWalletsQueryVariables = {
  filter?: ModelUserOrganizationWalletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUserOrganizationWalletsQuery = {
  syncUserOrganizationWallets?:  {
    __typename: "ModelUserOrganizationWalletConnection",
    items:  Array< {
      __typename: "UserOrganizationWallet",
      id: string,
      coin?: number | null,
      reputation?: number | null,
      organizationID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationLocationQueryVariables = {
  id?: string,
};

export type GetOrganizationLocationQuery = {
  getOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationLocationsQueryVariables = {
  filter?: ModelOrganizationLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationLocationsQuery = {
  listOrganizationLocations?:  {
    __typename: "ModelOrganizationLocationConnection",
    items:  Array< {
      __typename: "OrganizationLocation",
      id: string,
      locationID: string,
      createdByID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationLocationsQueryVariables = {
  filter?: ModelOrganizationLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationLocationsQuery = {
  syncOrganizationLocations?:  {
    __typename: "ModelOrganizationLocationConnection",
    items:  Array< {
      __typename: "OrganizationLocation",
      id: string,
      locationID: string,
      createdByID: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id?: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdById: string,
      createdDtm?: string | null,
      UserOrganizationWallets?:  {
        __typename: "ModelUserOrganizationWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationAdmins?:  {
        __typename: "ModelOrganizationAdminConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationModerators?:  {
        __typename: "ModelOrganizationModeratorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationMembers?:  {
        __typename: "ModelOrganizationMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Collectables?:  {
        __typename: "ModelCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationPictures?:  {
        __typename: "ModelOrganizationPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationsQuery = {
  syncOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name?: string | null,
      createdById: string,
      createdDtm?: string | null,
      UserOrganizationWallets?:  {
        __typename: "ModelUserOrganizationWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationAdmins?:  {
        __typename: "ModelOrganizationAdminConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationModerators?:  {
        __typename: "ModelOrganizationModeratorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationMembers?:  {
        __typename: "ModelOrganizationMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      Collectables?:  {
        __typename: "ModelCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationPictures?:  {
        __typename: "ModelOrganizationPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email?: string | null,
      username?: string | null,
      coin?: number | null,
      reputation?: number | null,
      CreatedQuests?:  {
        __typename: "ModelQuestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStages?:  {
        __typename: "ModelQuestStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStageTasks?:  {
        __typename: "ModelQuestStageTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedLocations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedOrganizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedOrganizationLocations?:  {
        __typename: "ModelOrganizationLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserOrganizationWallets?:  {
        __typename: "ModelUserOrganizationWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationAdmins?:  {
        __typename: "ModelOrganizationAdminConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationModerators?:  {
        __typename: "ModelOrganizationModeratorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationMembers?:  {
        __typename: "ModelOrganizationMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedCollectables?:  {
        __typename: "ModelCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedPictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissions?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserCollectables?:  {
        __typename: "ModelUserCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email?: string | null,
      username?: string | null,
      coin?: number | null,
      reputation?: number | null,
      CreatedQuests?:  {
        __typename: "ModelQuestConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStages?:  {
        __typename: "ModelQuestStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStageTasks?:  {
        __typename: "ModelQuestStageTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedQuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedLocations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedOrganizations?:  {
        __typename: "ModelOrganizationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedOrganizationLocations?:  {
        __typename: "ModelOrganizationLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserOrganizationWallets?:  {
        __typename: "ModelUserOrganizationWalletConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationAdmins?:  {
        __typename: "ModelOrganizationAdminConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationModerators?:  {
        __typename: "ModelOrganizationModeratorConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      OrganizationMembers?:  {
        __typename: "ModelOrganizationMemberConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedCollectables?:  {
        __typename: "ModelCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      CreatedPictures?:  {
        __typename: "ModelPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissions?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
        __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      UserCollectables?:  {
        __typename: "ModelUserCollectableConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPictureRequirementQueryVariables = {
  id?: string,
};

export type GetPictureRequirementQuery = {
  getPictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPictureRequirementsQueryVariables = {
  filter?: ModelPictureRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPictureRequirementsQuery = {
  listPictureRequirements?:  {
    __typename: "ModelPictureRequirementConnection",
    items:  Array< {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPictureRequirementsQueryVariables = {
  filter?: ModelPictureRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPictureRequirementsQuery = {
  syncPictureRequirements?:  {
    __typename: "ModelPictureRequirementConnection",
    items:  Array< {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQrCodeRequirementQueryVariables = {
  id?: string,
};

export type GetQrCodeRequirementQuery = {
  getQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQrCodeRequirementsQueryVariables = {
  filter?: ModelQRCodeRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQrCodeRequirementsQuery = {
  listQRCodeRequirements?:  {
    __typename: "ModelQRCodeRequirementConnection",
    items:  Array< {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQrCodeRequirementsQueryVariables = {
  filter?: ModelQRCodeRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQrCodeRequirementsQuery = {
  syncQRCodeRequirements?:  {
    __typename: "ModelQRCodeRequirementConnection",
    items:  Array< {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id?: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      name?: string | null,
      description?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      QuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdById: string,
      createdDtm?: string | null,
      OrganizationLocations?:  {
        __typename: "ModelOrganizationLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationsQuery = {
  syncLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      name?: string | null,
      description?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      QuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdById: string,
      createdDtm?: string | null,
      OrganizationLocations?:  {
        __typename: "ModelOrganizationLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageTaskRequirementQueryVariables = {
  id?: string,
};

export type GetQuestStageTaskRequirementQuery = {
  getQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type ListQuestStageTaskRequirementsQueryVariables = {
  filter?: ModelQuestStageTaskRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStageTaskRequirementsQuery = {
  listQuestStageTaskRequirements?:  {
    __typename: "ModelQuestStageTaskRequirementConnection",
    items:  Array< {
      __typename: "QuestStageTaskRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      queststagetaskID: string,
      QRCodeRequirement?:  {
        __typename: "QRCodeRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        qrcode?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      PictureRequirement?:  {
        __typename: "PictureRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      locationID?: string | null,
      createdById: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questStageTaskRequirementQRCodeRequirementId?: string | null,
      questStageTaskRequirementPictureRequirementId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStageTaskRequirementsQueryVariables = {
  filter?: ModelQuestStageTaskRequirementFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStageTaskRequirementsQuery = {
  syncQuestStageTaskRequirements?:  {
    __typename: "ModelQuestStageTaskRequirementConnection",
    items:  Array< {
      __typename: "QuestStageTaskRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      queststagetaskID: string,
      QRCodeRequirement?:  {
        __typename: "QRCodeRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        qrcode?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      PictureRequirement?:  {
        __typename: "PictureRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      locationID?: string | null,
      createdById: string,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      questStageTaskRequirementQRCodeRequirementId?: string | null,
      questStageTaskRequirementPictureRequirementId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageTaskQueryVariables = {
  id?: string,
};

export type GetQuestStageTaskQuery = {
  getQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStageTasksQueryVariables = {
  filter?: ModelQuestStageTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStageTasksQuery = {
  listQuestStageTasks?:  {
    __typename: "ModelQuestStageTaskConnection",
    items:  Array< {
      __typename: "QuestStageTask",
      id: string,
      name?: string | null,
      description?: string | null,
      rewardReputation?: number | null,
      queststageID: string,
      QuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdById: string,
      createdDtm?: string | null,
      QuestStageTaskPictures?:  {
        __typename: "ModelQuestStageTaskPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStageTasksQueryVariables = {
  filter?: ModelQuestStageTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStageTasksQuery = {
  syncQuestStageTasks?:  {
    __typename: "ModelQuestStageTaskConnection",
    items:  Array< {
      __typename: "QuestStageTask",
      id: string,
      name?: string | null,
      description?: string | null,
      rewardReputation?: number | null,
      queststageID: string,
      QuestStageTaskRequirements?:  {
        __typename: "ModelQuestStageTaskRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdById: string,
      createdDtm?: string | null,
      QuestStageTaskPictures?:  {
        __typename: "ModelQuestStageTaskPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageTaskRewards?:  {
        __typename: "ModelQuestStageTaskRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestStageQueryVariables = {
  id?: string,
};

export type GetQuestStageQuery = {
  getQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestStagesQueryVariables = {
  filter?: ModelQuestStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestStagesQuery = {
  listQuestStages?:  {
    __typename: "ModelQuestStageConnection",
    items:  Array< {
      __typename: "QuestStage",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      rewardReputation?: number | null,
      QuestStageTasks?:  {
        __typename: "ModelQuestStageTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      questID: string,
      createdById: string,
      QuestStagePictures?:  {
        __typename: "ModelQuestStagePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestOrganizationStageRequirements?:  {
        __typename: "ModelQuestOrganizationStageRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestStagesQueryVariables = {
  filter?: ModelQuestStageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestStagesQuery = {
  syncQuestStages?:  {
    __typename: "ModelQuestStageConnection",
    items:  Array< {
      __typename: "QuestStage",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      rewardReputation?: number | null,
      QuestStageTasks?:  {
        __typename: "ModelQuestStageTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      questID: string,
      createdById: string,
      QuestStagePictures?:  {
        __typename: "ModelQuestStagePictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestStageRewards?:  {
        __typename: "ModelQuestStageRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestOrganizationStageRequirements?:  {
        __typename: "ModelQuestOrganizationStageRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetQuestQueryVariables = {
  id?: string,
};

export type GetQuestQuery = {
  getQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListQuestsQueryVariables = {
  filter?: ModelQuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestsQuery = {
  listQuests?:  {
    __typename: "ModelQuestConnection",
    items:  Array< {
      __typename: "Quest",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      rewardReputation?: number | null,
      QuestStages?:  {
        __typename: "ModelQuestStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdById: string,
      QuestPictures?:  {
        __typename: "ModelQuestPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestOrganizationRequirements?:  {
        __typename: "ModelQuestOrganizationRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestsQueryVariables = {
  filter?: ModelQuestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestsQuery = {
  syncQuests?:  {
    __typename: "ModelQuestConnection",
    items:  Array< {
      __typename: "Quest",
      id: string,
      name?: string | null,
      description?: string | null,
      minReputation?: number | null,
      rewardReputation?: number | null,
      QuestStages?:  {
        __typename: "ModelQuestStageConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdDtm?: string | null,
      createdById: string,
      QuestPictures?:  {
        __typename: "ModelQuestPictureConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestRewards?:  {
        __typename: "ModelQuestRewardConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      QuestOrganizationRequirements?:  {
        __typename: "ModelQuestOrganizationRequirementConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateQuestOrganizationStageRequirementSubscription = {
  onCreateQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestOrganizationStageRequirementSubscription = {
  onUpdateQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestOrganizationStageRequirementSubscription = {
  onDeleteQuestOrganizationStageRequirement?:  {
    __typename: "QuestOrganizationStageRequirement",
    id: string,
    minReputation?: number | null,
    queststageID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestOrganizationRequirementSubscription = {
  onCreateQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestOrganizationRequirementSubscription = {
  onUpdateQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestOrganizationRequirementSubscription = {
  onDeleteQuestOrganizationRequirement?:  {
    __typename: "QuestOrganizationRequirement",
    id: string,
    minReputation?: number | null,
    questID: string,
    organizationID: string,
    createdDtm?: string | null,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserCollectableSubscription = {
  onCreateUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserCollectableSubscription = {
  onUpdateUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserCollectableSubscription = {
  onDeleteUserCollectable?:  {
    __typename: "UserCollectable",
    id: string,
    userID: string,
    collectableID: string,
    receivedDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStageTaskRewardSubscription = {
  onCreateQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStageTaskRewardSubscription = {
  onUpdateQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStageTaskRewardSubscription = {
  onDeleteQuestStageTaskReward?:  {
    __typename: "QuestStageTaskReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststagetaskID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStageRewardSubscription = {
  onCreateQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStageRewardSubscription = {
  onUpdateQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStageRewardSubscription = {
  onDeleteQuestStageReward?:  {
    __typename: "QuestStageReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    queststageID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestRewardSubscription = {
  onCreateQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestRewardSubscription = {
  onUpdateQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestRewardSubscription = {
  onDeleteQuestReward?:  {
    __typename: "QuestReward",
    id: string,
    reputation?: number | null,
    coin?: number | null,
    questID: string,
    organizationID: string,
    collectableID?: string | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserQuestStageTaskRequirementSubmissi1d59cSubscription = {
  onCreateUserQuestStageTaskRequirementSubmissi1d59c?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserQuestStageTaskRequirementSubmissicdcf2Subscription = {
  onUpdateUserQuestStageTaskRequirementSubmissicdcf2?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserQuestStageTaskRequirementSubmissicc70aSubscription = {
  onDeleteUserQuestStageTaskRequirementSubmissicc70a?:  {
    __typename: "UserQuestStageTaskRequirementSubmissionPicture",
    id: string,
    userqueststagetaskrequirementsubmissionID: string,
    pictureID: string,
    approvedByID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserQuestStageTaskRequirementSubmissionSubscription = {
  onCreateUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserQuestStageTaskRequirementSubmissionSubscription = {
  onUpdateUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserQuestStageTaskRequirementSubmissionSubscription = {
  onDeleteUserQuestStageTaskRequirementSubmission?:  {
    __typename: "UserQuestStageTaskRequirementSubmission",
    id: string,
    userID: string,
    createdDtm?: string | null,
    queststagetaskrequirementID: string,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStageTaskPictureSubscription = {
  onCreateQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStageTaskPictureSubscription = {
  onUpdateQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStageTaskPictureSubscription = {
  onDeleteQuestStageTaskPicture?:  {
    __typename: "QuestStageTaskPicture",
    id: string,
    pictureID: string,
    queststagetaskID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStagePictureSubscription = {
  onCreateQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStagePictureSubscription = {
  onUpdateQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStagePictureSubscription = {
  onDeleteQuestStagePicture?:  {
    __typename: "QuestStagePicture",
    id: string,
    pictureID: string,
    queststageID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestPictureSubscription = {
  onCreateQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestPictureSubscription = {
  onUpdateQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestPictureSubscription = {
  onDeleteQuestPicture?:  {
    __typename: "QuestPicture",
    id: string,
    pictureID: string,
    questID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationPictureSubscription = {
  onCreateOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationPictureSubscription = {
  onUpdateOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationPictureSubscription = {
  onDeleteOrganizationPicture?:  {
    __typename: "OrganizationPicture",
    id: string,
    pictureID: string,
    organizationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePictureSubscription = {
  onCreatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePictureSubscription = {
  onUpdatePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePictureSubscription = {
  onDeletePicture?:  {
    __typename: "Picture",
    id: string,
    name?: string | null,
    description?: string | null,
    s3Url?: string | null,
    uploadedDtm?: string | null,
    uploadedByID: string,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictures?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCollectableRedeemLocationSubscription = {
  onCreateCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCollectableRedeemLocationSubscription = {
  onUpdateCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCollectableRedeemLocationSubscription = {
  onDeleteCollectableRedeemLocation?:  {
    __typename: "CollectableRedeemLocation",
    id: string,
    collectableID: string,
    locationID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCollectablePictureSubscription = {
  onCreateCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCollectablePictureSubscription = {
  onUpdateCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCollectablePictureSubscription = {
  onDeleteCollectablePicture?:  {
    __typename: "CollectablePicture",
    id: string,
    collectableID: string,
    pictureID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCollectableSubscription = {
  onCreateCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCollectableSubscription = {
  onUpdateCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCollectableSubscription = {
  onDeleteCollectable?:  {
    __typename: "Collectable",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    coin?: number | null,
    realItem?: boolean | null,
    organizationID: string,
    createdByID: string,
    createdDtm?: string | null,
    CollectablePictures?:  {
      __typename: "ModelCollectablePictureConnection",
      items:  Array< {
        __typename: "CollectablePicture",
        id: string,
        collectableID: string,
        pictureID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CollectableRedeemLocations?:  {
      __typename: "ModelCollectableRedeemLocationConnection",
      items:  Array< {
        __typename: "CollectableRedeemLocation",
        id: string,
        collectableID: string,
        locationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationMemberSubscription = {
  onCreateOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationMemberSubscription = {
  onUpdateOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationMemberSubscription = {
  onDeleteOrganizationMember?:  {
    __typename: "OrganizationMember",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationModeratorSubscription = {
  onCreateOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationModeratorSubscription = {
  onUpdateOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationModeratorSubscription = {
  onDeleteOrganizationModerator?:  {
    __typename: "OrganizationModerator",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationAdminSubscription = {
  onCreateOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationAdminSubscription = {
  onUpdateOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationAdminSubscription = {
  onDeleteOrganizationAdmin?:  {
    __typename: "OrganizationAdmin",
    id: string,
    organizationID: string,
    userID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserOrganizationWalletSubscription = {
  onCreateUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserOrganizationWalletSubscription = {
  onUpdateUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserOrganizationWalletSubscription = {
  onDeleteUserOrganizationWallet?:  {
    __typename: "UserOrganizationWallet",
    id: string,
    coin?: number | null,
    reputation?: number | null,
    organizationID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationLocationSubscription = {
  onCreateOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationLocationSubscription = {
  onUpdateOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationLocationSubscription = {
  onDeleteOrganizationLocation?:  {
    __typename: "OrganizationLocation",
    id: string,
    locationID: string,
    createdByID: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name?: string | null,
    createdById: string,
    createdDtm?: string | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Collectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationPictures?:  {
      __typename: "ModelOrganizationPictureConnection",
      items:  Array< {
        __typename: "OrganizationPicture",
        id: string,
        pictureID: string,
        organizationID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email?: string | null,
    username?: string | null,
    coin?: number | null,
    reputation?: number | null,
    CreatedQuests?:  {
      __typename: "ModelQuestConnection",
      items:  Array< {
        __typename: "Quest",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        createdDtm?: string | null,
        createdById: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedQuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedLocations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        name?: string | null,
        description?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizations?:  {
      __typename: "ModelOrganizationConnection",
      items:  Array< {
        __typename: "Organization",
        id: string,
        name?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedOrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserOrganizationWallets?:  {
      __typename: "ModelUserOrganizationWalletConnection",
      items:  Array< {
        __typename: "UserOrganizationWallet",
        id: string,
        coin?: number | null,
        reputation?: number | null,
        organizationID: string,
        userID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationAdmins?:  {
      __typename: "ModelOrganizationAdminConnection",
      items:  Array< {
        __typename: "OrganizationAdmin",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationModerators?:  {
      __typename: "ModelOrganizationModeratorConnection",
      items:  Array< {
        __typename: "OrganizationModerator",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    OrganizationMembers?:  {
      __typename: "ModelOrganizationMemberConnection",
      items:  Array< {
        __typename: "OrganizationMember",
        id: string,
        organizationID: string,
        userID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedCollectables?:  {
      __typename: "ModelCollectableConnection",
      items:  Array< {
        __typename: "Collectable",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        coin?: number | null,
        realItem?: boolean | null,
        organizationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    CreatedPictures?:  {
      __typename: "ModelPictureConnection",
      items:  Array< {
        __typename: "Picture",
        id: string,
        name?: string | null,
        description?: string | null,
        s3Url?: string | null,
        uploadedDtm?: string | null,
        uploadedByID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissions?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmission",
        id: string,
        userID: string,
        createdDtm?: string | null,
        queststagetaskrequirementID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserQuestStageTaskRequirementSubmissionPictureApprovals?:  {
      __typename: "ModelUserQuestStageTaskRequirementSubmissionPictureConnection",
      items:  Array< {
        __typename: "UserQuestStageTaskRequirementSubmissionPicture",
        id: string,
        userqueststagetaskrequirementsubmissionID: string,
        pictureID: string,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    UserCollectables?:  {
      __typename: "ModelUserCollectableConnection",
      items:  Array< {
        __typename: "UserCollectable",
        id: string,
        userID: string,
        collectableID: string,
        receivedDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePictureRequirementSubscription = {
  onCreatePictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePictureRequirementSubscription = {
  onUpdatePictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePictureRequirementSubscription = {
  onDeletePictureRequirement?:  {
    __typename: "PictureRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQrCodeRequirementSubscription = {
  onCreateQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQrCodeRequirementSubscription = {
  onUpdateQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQrCodeRequirementSubscription = {
  onDeleteQRCodeRequirement?:  {
    __typename: "QRCodeRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    qrcode?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    name?: string | null,
    description?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    OrganizationLocations?:  {
      __typename: "ModelOrganizationLocationConnection",
      items:  Array< {
        __typename: "OrganizationLocation",
        id: string,
        locationID: string,
        createdByID: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStageTaskRequirementSubscription = {
  onCreateQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type OnUpdateQuestStageTaskRequirementSubscription = {
  onUpdateQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type OnDeleteQuestStageTaskRequirementSubscription = {
  onDeleteQuestStageTaskRequirement?:  {
    __typename: "QuestStageTaskRequirement",
    id: string,
    name?: string | null,
    description?: string | null,
    queststagetaskID: string,
    QRCodeRequirement?:  {
      __typename: "QRCodeRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      qrcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    PictureRequirement?:  {
      __typename: "PictureRequirement",
      id: string,
      name?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    locationID?: string | null,
    createdById: string,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    questStageTaskRequirementQRCodeRequirementId?: string | null,
    questStageTaskRequirementPictureRequirementId?: string | null,
  } | null,
};

export type OnCreateQuestStageTaskSubscription = {
  onCreateQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStageTaskSubscription = {
  onUpdateQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStageTaskSubscription = {
  onDeleteQuestStageTask?:  {
    __typename: "QuestStageTask",
    id: string,
    name?: string | null,
    description?: string | null,
    rewardReputation?: number | null,
    queststageID: string,
    QuestStageTaskRequirements?:  {
      __typename: "ModelQuestStageTaskRequirementConnection",
      items:  Array< {
        __typename: "QuestStageTaskRequirement",
        id: string,
        name?: string | null,
        description?: string | null,
        queststagetaskID: string,
        locationID?: string | null,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        questStageTaskRequirementQRCodeRequirementId?: string | null,
        questStageTaskRequirementPictureRequirementId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdById: string,
    createdDtm?: string | null,
    QuestStageTaskPictures?:  {
      __typename: "ModelQuestStageTaskPictureConnection",
      items:  Array< {
        __typename: "QuestStageTaskPicture",
        id: string,
        pictureID: string,
        queststagetaskID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageTaskRewards?:  {
      __typename: "ModelQuestStageTaskRewardConnection",
      items:  Array< {
        __typename: "QuestStageTaskReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststagetaskID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestStageSubscription = {
  onCreateQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestStageSubscription = {
  onUpdateQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestStageSubscription = {
  onDeleteQuestStage?:  {
    __typename: "QuestStage",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStageTasks?:  {
      __typename: "ModelQuestStageTaskConnection",
      items:  Array< {
        __typename: "QuestStageTask",
        id: string,
        name?: string | null,
        description?: string | null,
        rewardReputation?: number | null,
        queststageID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    questID: string,
    createdById: string,
    QuestStagePictures?:  {
      __typename: "ModelQuestStagePictureConnection",
      items:  Array< {
        __typename: "QuestStagePicture",
        id: string,
        pictureID: string,
        queststageID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestStageRewards?:  {
      __typename: "ModelQuestStageRewardConnection",
      items:  Array< {
        __typename: "QuestStageReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        queststageID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationStageRequirements?:  {
      __typename: "ModelQuestOrganizationStageRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationStageRequirement",
        id: string,
        minReputation?: number | null,
        queststageID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateQuestSubscription = {
  onCreateQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateQuestSubscription = {
  onUpdateQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteQuestSubscription = {
  onDeleteQuest?:  {
    __typename: "Quest",
    id: string,
    name?: string | null,
    description?: string | null,
    minReputation?: number | null,
    rewardReputation?: number | null,
    QuestStages?:  {
      __typename: "ModelQuestStageConnection",
      items:  Array< {
        __typename: "QuestStage",
        id: string,
        name?: string | null,
        description?: string | null,
        minReputation?: number | null,
        rewardReputation?: number | null,
        questID: string,
        createdById: string,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdDtm?: string | null,
    createdById: string,
    QuestPictures?:  {
      __typename: "ModelQuestPictureConnection",
      items:  Array< {
        __typename: "QuestPicture",
        id: string,
        pictureID: string,
        questID: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestRewards?:  {
      __typename: "ModelQuestRewardConnection",
      items:  Array< {
        __typename: "QuestReward",
        id: string,
        reputation?: number | null,
        coin?: number | null,
        questID: string,
        organizationID: string,
        collectableID?: string | null,
        createdDtm?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    QuestOrganizationRequirements?:  {
      __typename: "ModelQuestOrganizationRequirementConnection",
      items:  Array< {
        __typename: "QuestOrganizationRequirement",
        id: string,
        minReputation?: number | null,
        questID: string,
        organizationID: string,
        createdDtm?: string | null,
        approvedByID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
