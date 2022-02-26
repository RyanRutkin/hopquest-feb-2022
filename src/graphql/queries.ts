/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestOrganizationStageRequirement = /* GraphQL */ `
  query GetQuestOrganizationStageRequirement($id: ID!) {
    getQuestOrganizationStageRequirement(id: $id) {
      id
      minReputation
      queststageID
      organizationID
      createdDtm
      approvedByID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestOrganizationStageRequirements = /* GraphQL */ `
  query ListQuestOrganizationStageRequirements(
    $filter: ModelQuestOrganizationStageRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestOrganizationStageRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        minReputation
        queststageID
        organizationID
        createdDtm
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestOrganizationStageRequirements = /* GraphQL */ `
  query SyncQuestOrganizationStageRequirements(
    $filter: ModelQuestOrganizationStageRequirementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestOrganizationStageRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        minReputation
        queststageID
        organizationID
        createdDtm
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestOrganizationRequirement = /* GraphQL */ `
  query GetQuestOrganizationRequirement($id: ID!) {
    getQuestOrganizationRequirement(id: $id) {
      id
      minReputation
      questID
      organizationID
      createdDtm
      approvedByID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestOrganizationRequirements = /* GraphQL */ `
  query ListQuestOrganizationRequirements(
    $filter: ModelQuestOrganizationRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestOrganizationRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        minReputation
        questID
        organizationID
        createdDtm
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestOrganizationRequirements = /* GraphQL */ `
  query SyncQuestOrganizationRequirements(
    $filter: ModelQuestOrganizationRequirementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestOrganizationRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        minReputation
        questID
        organizationID
        createdDtm
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserCollectable = /* GraphQL */ `
  query GetUserCollectable($id: ID!) {
    getUserCollectable(id: $id) {
      id
      userID
      collectableID
      receivedDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserCollectables = /* GraphQL */ `
  query ListUserCollectables(
    $filter: ModelUserCollectableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCollectables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        collectableID
        receivedDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserCollectables = /* GraphQL */ `
  query SyncUserCollectables(
    $filter: ModelUserCollectableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserCollectables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        collectableID
        receivedDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStageTaskReward = /* GraphQL */ `
  query GetQuestStageTaskReward($id: ID!) {
    getQuestStageTaskReward(id: $id) {
      id
      reputation
      coin
      queststagetaskID
      organizationID
      collectableID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStageTaskRewards = /* GraphQL */ `
  query ListQuestStageTaskRewards(
    $filter: ModelQuestStageTaskRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStageTaskRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reputation
        coin
        queststagetaskID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStageTaskRewards = /* GraphQL */ `
  query SyncQuestStageTaskRewards(
    $filter: ModelQuestStageTaskRewardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStageTaskRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reputation
        coin
        queststagetaskID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStageReward = /* GraphQL */ `
  query GetQuestStageReward($id: ID!) {
    getQuestStageReward(id: $id) {
      id
      reputation
      coin
      queststageID
      organizationID
      collectableID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStageRewards = /* GraphQL */ `
  query ListQuestStageRewards(
    $filter: ModelQuestStageRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStageRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reputation
        coin
        queststageID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStageRewards = /* GraphQL */ `
  query SyncQuestStageRewards(
    $filter: ModelQuestStageRewardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStageRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reputation
        coin
        queststageID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestReward = /* GraphQL */ `
  query GetQuestReward($id: ID!) {
    getQuestReward(id: $id) {
      id
      reputation
      coin
      questID
      organizationID
      collectableID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestRewards = /* GraphQL */ `
  query ListQuestRewards(
    $filter: ModelQuestRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reputation
        coin
        questID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestRewards = /* GraphQL */ `
  query SyncQuestRewards(
    $filter: ModelQuestRewardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        reputation
        coin
        questID
        organizationID
        collectableID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserQuestStageTaskRequirementSubmissionPicture = /* GraphQL */ `
  query GetUserQuestStageTaskRequirementSubmissionPicture($id: ID!) {
    getUserQuestStageTaskRequirementSubmissionPicture(id: $id) {
      id
      userqueststagetaskrequirementsubmissionID
      pictureID
      approvedByID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserQuestStageTaskRequirementSubmissionPictures = /* GraphQL */ `
  query ListUserQuestStageTaskRequirementSubmissionPictures(
    $filter: ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuestStageTaskRequirementSubmissionPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userqueststagetaskrequirementsubmissionID
        pictureID
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserQuestStageTaskRequirementSubmissionPictures = /* GraphQL */ `
  query SyncUserQuestStageTaskRequirementSubmissionPictures(
    $filter: ModelUserQuestStageTaskRequirementSubmissionPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserQuestStageTaskRequirementSubmissionPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userqueststagetaskrequirementsubmissionID
        pictureID
        approvedByID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserQuestStageTaskRequirementSubmission = /* GraphQL */ `
  query GetUserQuestStageTaskRequirementSubmission($id: ID!) {
    getUserQuestStageTaskRequirementSubmission(id: $id) {
      id
      userID
      createdDtm
      queststagetaskrequirementID
      UserQuestStageTaskRequirementSubmissionPictures {
        items {
          id
          userqueststagetaskrequirementsubmissionID
          pictureID
          approvedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserQuestStageTaskRequirementSubmissions = /* GraphQL */ `
  query ListUserQuestStageTaskRequirementSubmissions(
    $filter: ModelUserQuestStageTaskRequirementSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserQuestStageTaskRequirementSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        createdDtm
        queststagetaskrequirementID
        UserQuestStageTaskRequirementSubmissionPictures {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserQuestStageTaskRequirementSubmissions = /* GraphQL */ `
  query SyncUserQuestStageTaskRequirementSubmissions(
    $filter: ModelUserQuestStageTaskRequirementSubmissionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserQuestStageTaskRequirementSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        createdDtm
        queststagetaskrequirementID
        UserQuestStageTaskRequirementSubmissionPictures {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStageTaskPicture = /* GraphQL */ `
  query GetQuestStageTaskPicture($id: ID!) {
    getQuestStageTaskPicture(id: $id) {
      id
      pictureID
      queststagetaskID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStageTaskPictures = /* GraphQL */ `
  query ListQuestStageTaskPictures(
    $filter: ModelQuestStageTaskPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStageTaskPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pictureID
        queststagetaskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStageTaskPictures = /* GraphQL */ `
  query SyncQuestStageTaskPictures(
    $filter: ModelQuestStageTaskPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStageTaskPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pictureID
        queststagetaskID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStagePicture = /* GraphQL */ `
  query GetQuestStagePicture($id: ID!) {
    getQuestStagePicture(id: $id) {
      id
      pictureID
      queststageID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStagePictures = /* GraphQL */ `
  query ListQuestStagePictures(
    $filter: ModelQuestStagePictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStagePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pictureID
        queststageID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStagePictures = /* GraphQL */ `
  query SyncQuestStagePictures(
    $filter: ModelQuestStagePictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStagePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pictureID
        queststageID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestPicture = /* GraphQL */ `
  query GetQuestPicture($id: ID!) {
    getQuestPicture(id: $id) {
      id
      pictureID
      questID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestPictures = /* GraphQL */ `
  query ListQuestPictures(
    $filter: ModelQuestPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pictureID
        questID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestPictures = /* GraphQL */ `
  query SyncQuestPictures(
    $filter: ModelQuestPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pictureID
        questID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationPicture = /* GraphQL */ `
  query GetOrganizationPicture($id: ID!) {
    getOrganizationPicture(id: $id) {
      id
      pictureID
      organizationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizationPictures = /* GraphQL */ `
  query ListOrganizationPictures(
    $filter: ModelOrganizationPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pictureID
        organizationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationPictures = /* GraphQL */ `
  query SyncOrganizationPictures(
    $filter: ModelOrganizationPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pictureID
        organizationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      name
      description
      s3Url
      uploadedDtm
      uploadedByID
      CollectablePictures {
        items {
          id
          collectableID
          pictureID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationPictures {
        items {
          id
          pictureID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestPictures {
        items {
          id
          pictureID
          questID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStagePictures {
        items {
          id
          pictureID
          queststageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageTaskPictures {
        items {
          id
          pictureID
          queststagetaskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserQuestStageTaskRequirementSubmissionPictures {
        items {
          id
          userqueststagetaskrequirementsubmissionID
          pictureID
          approvedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        s3Url
        uploadedDtm
        uploadedByID
        CollectablePictures {
          nextToken
          startedAt
        }
        OrganizationPictures {
          nextToken
          startedAt
        }
        QuestPictures {
          nextToken
          startedAt
        }
        QuestStagePictures {
          nextToken
          startedAt
        }
        QuestStageTaskPictures {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissionPictures {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPictures = /* GraphQL */ `
  query SyncPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        s3Url
        uploadedDtm
        uploadedByID
        CollectablePictures {
          nextToken
          startedAt
        }
        OrganizationPictures {
          nextToken
          startedAt
        }
        QuestPictures {
          nextToken
          startedAt
        }
        QuestStagePictures {
          nextToken
          startedAt
        }
        QuestStageTaskPictures {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissionPictures {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCollectableRedeemLocation = /* GraphQL */ `
  query GetCollectableRedeemLocation($id: ID!) {
    getCollectableRedeemLocation(id: $id) {
      id
      collectableID
      locationID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCollectableRedeemLocations = /* GraphQL */ `
  query ListCollectableRedeemLocations(
    $filter: ModelCollectableRedeemLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectableRedeemLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collectableID
        locationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCollectableRedeemLocations = /* GraphQL */ `
  query SyncCollectableRedeemLocations(
    $filter: ModelCollectableRedeemLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollectableRedeemLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        collectableID
        locationID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCollectablePicture = /* GraphQL */ `
  query GetCollectablePicture($id: ID!) {
    getCollectablePicture(id: $id) {
      id
      collectableID
      pictureID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCollectablePictures = /* GraphQL */ `
  query ListCollectablePictures(
    $filter: ModelCollectablePictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectablePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        collectableID
        pictureID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCollectablePictures = /* GraphQL */ `
  query SyncCollectablePictures(
    $filter: ModelCollectablePictureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollectablePictures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        collectableID
        pictureID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCollectable = /* GraphQL */ `
  query GetCollectable($id: ID!) {
    getCollectable(id: $id) {
      id
      name
      description
      minReputation
      coin
      realItem
      organizationID
      createdByID
      createdDtm
      CollectablePictures {
        items {
          id
          collectableID
          pictureID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CollectableRedeemLocations {
        items {
          id
          collectableID
          locationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestRewards {
        items {
          id
          reputation
          coin
          questID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageRewards {
        items {
          id
          reputation
          coin
          queststageID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageTaskRewards {
        items {
          id
          reputation
          coin
          queststagetaskID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCollectables = /* GraphQL */ `
  query ListCollectables(
    $filter: ModelCollectableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        minReputation
        coin
        realItem
        organizationID
        createdByID
        createdDtm
        CollectablePictures {
          nextToken
          startedAt
        }
        CollectableRedeemLocations {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCollectables = /* GraphQL */ `
  query SyncCollectables(
    $filter: ModelCollectableFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollectables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        minReputation
        coin
        realItem
        organizationID
        createdByID
        createdDtm
        CollectablePictures {
          nextToken
          startedAt
        }
        CollectableRedeemLocations {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationMember = /* GraphQL */ `
  query GetOrganizationMember($id: ID!) {
    getOrganizationMember(id: $id) {
      id
      organizationID
      userID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizationMembers = /* GraphQL */ `
  query ListOrganizationMembers(
    $filter: ModelOrganizationMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationMembers = /* GraphQL */ `
  query SyncOrganizationMembers(
    $filter: ModelOrganizationMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationModerator = /* GraphQL */ `
  query GetOrganizationModerator($id: ID!) {
    getOrganizationModerator(id: $id) {
      id
      organizationID
      userID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizationModerators = /* GraphQL */ `
  query ListOrganizationModerators(
    $filter: ModelOrganizationModeratorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationModerators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationModerators = /* GraphQL */ `
  query SyncOrganizationModerators(
    $filter: ModelOrganizationModeratorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationModerators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationAdmin = /* GraphQL */ `
  query GetOrganizationAdmin($id: ID!) {
    getOrganizationAdmin(id: $id) {
      id
      organizationID
      userID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizationAdmins = /* GraphQL */ `
  query ListOrganizationAdmins(
    $filter: ModelOrganizationAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationAdmins = /* GraphQL */ `
  query SyncOrganizationAdmins(
    $filter: ModelOrganizationAdminFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationAdmins(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        organizationID
        userID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserOrganizationWallet = /* GraphQL */ `
  query GetUserOrganizationWallet($id: ID!) {
    getUserOrganizationWallet(id: $id) {
      id
      coin
      reputation
      organizationID
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserOrganizationWallets = /* GraphQL */ `
  query ListUserOrganizationWallets(
    $filter: ModelUserOrganizationWalletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrganizationWallets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        coin
        reputation
        organizationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserOrganizationWallets = /* GraphQL */ `
  query SyncUserOrganizationWallets(
    $filter: ModelUserOrganizationWalletFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserOrganizationWallets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        coin
        reputation
        organizationID
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganizationLocation = /* GraphQL */ `
  query GetOrganizationLocation($id: ID!) {
    getOrganizationLocation(id: $id) {
      id
      locationID
      createdByID
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizationLocations = /* GraphQL */ `
  query ListOrganizationLocations(
    $filter: ModelOrganizationLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizationLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        locationID
        createdByID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizationLocations = /* GraphQL */ `
  query SyncOrganizationLocations(
    $filter: ModelOrganizationLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizationLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        locationID
        createdByID
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      createdById
      createdDtm
      UserOrganizationWallets {
        items {
          id
          coin
          reputation
          organizationID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationAdmins {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationModerators {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationMembers {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Collectables {
        items {
          id
          name
          description
          minReputation
          coin
          realItem
          organizationID
          createdByID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationPictures {
        items {
          id
          pictureID
          organizationID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestRewards {
        items {
          id
          reputation
          coin
          questID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageRewards {
        items {
          id
          reputation
          coin
          queststageID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageTaskRewards {
        items {
          id
          reputation
          coin
          queststagetaskID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdById
        createdDtm
        UserOrganizationWallets {
          nextToken
          startedAt
        }
        OrganizationAdmins {
          nextToken
          startedAt
        }
        OrganizationModerators {
          nextToken
          startedAt
        }
        OrganizationMembers {
          nextToken
          startedAt
        }
        Collectables {
          nextToken
          startedAt
        }
        OrganizationPictures {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdById
        createdDtm
        UserOrganizationWallets {
          nextToken
          startedAt
        }
        OrganizationAdmins {
          nextToken
          startedAt
        }
        OrganizationModerators {
          nextToken
          startedAt
        }
        OrganizationMembers {
          nextToken
          startedAt
        }
        Collectables {
          nextToken
          startedAt
        }
        OrganizationPictures {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      username
      coin
      reputation
      CreatedQuests {
        items {
          id
          name
          description
          minReputation
          rewardReputation
          createdDtm
          createdById
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedQuestStages {
        items {
          id
          name
          description
          minReputation
          rewardReputation
          questID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedQuestStageTasks {
        items {
          id
          name
          description
          rewardReputation
          queststageID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedQuestStageTaskRequirements {
        items {
          id
          name
          description
          queststagetaskID
          locationID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questStageTaskRequirementQRCodeRequirementId
          questStageTaskRequirementPictureRequirementId
        }
        nextToken
        startedAt
      }
      CreatedLocations {
        items {
          id
          name
          description
          latitude
          longitude
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedOrganizations {
        items {
          id
          name
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedOrganizationLocations {
        items {
          id
          locationID
          createdByID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserOrganizationWallets {
        items {
          id
          coin
          reputation
          organizationID
          userID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationAdmins {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationModerators {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      OrganizationMembers {
        items {
          id
          organizationID
          userID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedCollectables {
        items {
          id
          name
          description
          minReputation
          coin
          realItem
          organizationID
          createdByID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      CreatedPictures {
        items {
          id
          name
          description
          s3Url
          uploadedDtm
          uploadedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserQuestStageTaskRequirementSubmissions {
        items {
          id
          userID
          createdDtm
          queststagetaskrequirementID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserQuestStageTaskRequirementSubmissionPictureApprovals {
        items {
          id
          userqueststagetaskrequirementsubmissionID
          pictureID
          approvedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      UserCollectables {
        items {
          id
          userID
          collectableID
          receivedDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        username
        coin
        reputation
        CreatedQuests {
          nextToken
          startedAt
        }
        CreatedQuestStages {
          nextToken
          startedAt
        }
        CreatedQuestStageTasks {
          nextToken
          startedAt
        }
        CreatedQuestStageTaskRequirements {
          nextToken
          startedAt
        }
        CreatedLocations {
          nextToken
          startedAt
        }
        CreatedOrganizations {
          nextToken
          startedAt
        }
        CreatedOrganizationLocations {
          nextToken
          startedAt
        }
        UserOrganizationWallets {
          nextToken
          startedAt
        }
        OrganizationAdmins {
          nextToken
          startedAt
        }
        OrganizationModerators {
          nextToken
          startedAt
        }
        OrganizationMembers {
          nextToken
          startedAt
        }
        CreatedCollectables {
          nextToken
          startedAt
        }
        CreatedPictures {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissions {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissionPictureApprovals {
          nextToken
          startedAt
        }
        UserCollectables {
          nextToken
          startedAt
        }
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        username
        coin
        reputation
        CreatedQuests {
          nextToken
          startedAt
        }
        CreatedQuestStages {
          nextToken
          startedAt
        }
        CreatedQuestStageTasks {
          nextToken
          startedAt
        }
        CreatedQuestStageTaskRequirements {
          nextToken
          startedAt
        }
        CreatedLocations {
          nextToken
          startedAt
        }
        CreatedOrganizations {
          nextToken
          startedAt
        }
        CreatedOrganizationLocations {
          nextToken
          startedAt
        }
        UserOrganizationWallets {
          nextToken
          startedAt
        }
        OrganizationAdmins {
          nextToken
          startedAt
        }
        OrganizationModerators {
          nextToken
          startedAt
        }
        OrganizationMembers {
          nextToken
          startedAt
        }
        CreatedCollectables {
          nextToken
          startedAt
        }
        CreatedPictures {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissions {
          nextToken
          startedAt
        }
        UserQuestStageTaskRequirementSubmissionPictureApprovals {
          nextToken
          startedAt
        }
        UserCollectables {
          nextToken
          startedAt
        }
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPictureRequirement = /* GraphQL */ `
  query GetPictureRequirement($id: ID!) {
    getPictureRequirement(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPictureRequirements = /* GraphQL */ `
  query ListPictureRequirements(
    $filter: ModelPictureRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictureRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPictureRequirements = /* GraphQL */ `
  query SyncPictureRequirements(
    $filter: ModelPictureRequirementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPictureRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQrCodeRequirement = /* GraphQL */ `
  query GetQrCodeRequirement($id: ID!) {
    getQRCodeRequirement(id: $id) {
      id
      name
      description
      qrcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQrCodeRequirements = /* GraphQL */ `
  query ListQrCodeRequirements(
    $filter: ModelQRCodeRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQRCodeRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        qrcode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQrCodeRequirements = /* GraphQL */ `
  query SyncQrCodeRequirements(
    $filter: ModelQRCodeRequirementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQRCodeRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        qrcode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      description
      latitude
      longitude
      QuestStageTaskRequirements {
        items {
          id
          name
          description
          queststagetaskID
          locationID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questStageTaskRequirementQRCodeRequirementId
          questStageTaskRequirementPictureRequirementId
        }
        nextToken
        startedAt
      }
      createdById
      createdDtm
      OrganizationLocations {
        items {
          id
          locationID
          createdByID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        latitude
        longitude
        QuestStageTaskRequirements {
          nextToken
          startedAt
        }
        createdById
        createdDtm
        OrganizationLocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        latitude
        longitude
        QuestStageTaskRequirements {
          nextToken
          startedAt
        }
        createdById
        createdDtm
        OrganizationLocations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStageTaskRequirement = /* GraphQL */ `
  query GetQuestStageTaskRequirement($id: ID!) {
    getQuestStageTaskRequirement(id: $id) {
      id
      name
      description
      queststagetaskID
      QRCodeRequirement {
        id
        name
        description
        qrcode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      PictureRequirement {
        id
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      locationID
      createdById
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questStageTaskRequirementQRCodeRequirementId
      questStageTaskRequirementPictureRequirementId
    }
  }
`;
export const listQuestStageTaskRequirements = /* GraphQL */ `
  query ListQuestStageTaskRequirements(
    $filter: ModelQuestStageTaskRequirementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStageTaskRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        queststagetaskID
        QRCodeRequirement {
          id
          name
          description
          qrcode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        PictureRequirement {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        locationID
        createdById
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questStageTaskRequirementQRCodeRequirementId
        questStageTaskRequirementPictureRequirementId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStageTaskRequirements = /* GraphQL */ `
  query SyncQuestStageTaskRequirements(
    $filter: ModelQuestStageTaskRequirementFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStageTaskRequirements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        queststagetaskID
        QRCodeRequirement {
          id
          name
          description
          qrcode
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        PictureRequirement {
          id
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        locationID
        createdById
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questStageTaskRequirementQRCodeRequirementId
        questStageTaskRequirementPictureRequirementId
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStageTask = /* GraphQL */ `
  query GetQuestStageTask($id: ID!) {
    getQuestStageTask(id: $id) {
      id
      name
      description
      rewardReputation
      queststageID
      QuestStageTaskRequirements {
        items {
          id
          name
          description
          queststagetaskID
          locationID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questStageTaskRequirementQRCodeRequirementId
          questStageTaskRequirementPictureRequirementId
        }
        nextToken
        startedAt
      }
      createdById
      createdDtm
      QuestStageTaskPictures {
        items {
          id
          pictureID
          queststagetaskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageTaskRewards {
        items {
          id
          reputation
          coin
          queststagetaskID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStageTasks = /* GraphQL */ `
  query ListQuestStageTasks(
    $filter: ModelQuestStageTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStageTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        rewardReputation
        queststageID
        QuestStageTaskRequirements {
          nextToken
          startedAt
        }
        createdById
        createdDtm
        QuestStageTaskPictures {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStageTasks = /* GraphQL */ `
  query SyncQuestStageTasks(
    $filter: ModelQuestStageTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStageTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        rewardReputation
        queststageID
        QuestStageTaskRequirements {
          nextToken
          startedAt
        }
        createdById
        createdDtm
        QuestStageTaskPictures {
          nextToken
          startedAt
        }
        QuestStageTaskRewards {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuestStage = /* GraphQL */ `
  query GetQuestStage($id: ID!) {
    getQuestStage(id: $id) {
      id
      name
      description
      minReputation
      rewardReputation
      QuestStageTasks {
        items {
          id
          name
          description
          rewardReputation
          queststageID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      questID
      createdById
      QuestStagePictures {
        items {
          id
          pictureID
          queststageID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestStageRewards {
        items {
          id
          reputation
          coin
          queststageID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestOrganizationStageRequirements {
        items {
          id
          minReputation
          queststageID
          organizationID
          createdDtm
          approvedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdDtm
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuestStages = /* GraphQL */ `
  query ListQuestStages(
    $filter: ModelQuestStageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestStages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        minReputation
        rewardReputation
        QuestStageTasks {
          nextToken
          startedAt
        }
        questID
        createdById
        QuestStagePictures {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestOrganizationStageRequirements {
          nextToken
          startedAt
        }
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestStages = /* GraphQL */ `
  query SyncQuestStages(
    $filter: ModelQuestStageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestStages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        minReputation
        rewardReputation
        QuestStageTasks {
          nextToken
          startedAt
        }
        questID
        createdById
        QuestStagePictures {
          nextToken
          startedAt
        }
        QuestStageRewards {
          nextToken
          startedAt
        }
        QuestOrganizationStageRequirements {
          nextToken
          startedAt
        }
        createdDtm
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuest = /* GraphQL */ `
  query GetQuest($id: ID!) {
    getQuest(id: $id) {
      id
      name
      description
      minReputation
      rewardReputation
      QuestStages {
        items {
          id
          name
          description
          minReputation
          rewardReputation
          questID
          createdById
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdDtm
      createdById
      QuestPictures {
        items {
          id
          pictureID
          questID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestRewards {
        items {
          id
          reputation
          coin
          questID
          organizationID
          collectableID
          createdDtm
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      QuestOrganizationRequirements {
        items {
          id
          minReputation
          questID
          organizationID
          createdDtm
          approvedByID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listQuests = /* GraphQL */ `
  query ListQuests(
    $filter: ModelQuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        minReputation
        rewardReputation
        QuestStages {
          nextToken
          startedAt
        }
        createdDtm
        createdById
        QuestPictures {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestOrganizationRequirements {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuests = /* GraphQL */ `
  query SyncQuests(
    $filter: ModelQuestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        minReputation
        rewardReputation
        QuestStages {
          nextToken
          startedAt
        }
        createdDtm
        createdById
        QuestPictures {
          nextToken
          startedAt
        }
        QuestRewards {
          nextToken
          startedAt
        }
        QuestOrganizationRequirements {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
