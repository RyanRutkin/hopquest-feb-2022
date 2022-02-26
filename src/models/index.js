// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuestOrganizationStageRequirement, QuestOrganizationRequirement, UserCollectable, QuestStageTaskReward, QuestStageReward, QuestReward, UserQuestStageTaskRequirementSubmissionPicture, UserQuestStageTaskRequirementSubmission, QuestStageTaskPicture, QuestStagePicture, QuestPicture, OrganizationPicture, Picture, CollectablePicture, CollectableRedeemLocation, Collectable, OrganizationMember, OrganizationModerator, OrganizationAdmin, UserOrganizationWallet, OrganizationLocation, Organization, User, Quest, QuestStage, QuestStageTask, QuestStageTaskRequirement, QRCodeRequirement, PictureRequirement, Location } = initSchema(schema);

export {
  QuestOrganizationStageRequirement,
  QuestOrganizationRequirement,
  UserCollectable,
  QuestStageTaskReward,
  QuestStageReward,
  QuestReward,
  UserQuestStageTaskRequirementSubmissionPicture,
  UserQuestStageTaskRequirementSubmission,
  QuestStageTaskPicture,
  QuestStagePicture,
  QuestPicture,
  OrganizationPicture,
  Picture,
  CollectablePicture,
  CollectableRedeemLocation,
  Collectable,
  OrganizationMember,
  OrganizationModerator,
  OrganizationAdmin,
  UserOrganizationWallet,
  OrganizationLocation,
  Organization,
  User,
  Quest,
  QuestStage,
  QuestStageTask,
  QuestStageTaskRequirement,
  QRCodeRequirement,
  PictureRequirement,
  Location
};