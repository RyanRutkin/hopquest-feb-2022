/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestOrganizationStageRequirement = /* GraphQL */ `
  mutation CreateQuestOrganizationStageRequirement(
    $input: CreateQuestOrganizationStageRequirementInput!
    $condition: ModelQuestOrganizationStageRequirementConditionInput
  ) {
    createQuestOrganizationStageRequirement(
      input: $input
      condition: $condition
    ) {
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
export const updateQuestOrganizationStageRequirement = /* GraphQL */ `
  mutation UpdateQuestOrganizationStageRequirement(
    $input: UpdateQuestOrganizationStageRequirementInput!
    $condition: ModelQuestOrganizationStageRequirementConditionInput
  ) {
    updateQuestOrganizationStageRequirement(
      input: $input
      condition: $condition
    ) {
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
export const deleteQuestOrganizationStageRequirement = /* GraphQL */ `
  mutation DeleteQuestOrganizationStageRequirement(
    $input: DeleteQuestOrganizationStageRequirementInput!
    $condition: ModelQuestOrganizationStageRequirementConditionInput
  ) {
    deleteQuestOrganizationStageRequirement(
      input: $input
      condition: $condition
    ) {
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
export const createQuestOrganizationRequirement = /* GraphQL */ `
  mutation CreateQuestOrganizationRequirement(
    $input: CreateQuestOrganizationRequirementInput!
    $condition: ModelQuestOrganizationRequirementConditionInput
  ) {
    createQuestOrganizationRequirement(input: $input, condition: $condition) {
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
export const updateQuestOrganizationRequirement = /* GraphQL */ `
  mutation UpdateQuestOrganizationRequirement(
    $input: UpdateQuestOrganizationRequirementInput!
    $condition: ModelQuestOrganizationRequirementConditionInput
  ) {
    updateQuestOrganizationRequirement(input: $input, condition: $condition) {
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
export const deleteQuestOrganizationRequirement = /* GraphQL */ `
  mutation DeleteQuestOrganizationRequirement(
    $input: DeleteQuestOrganizationRequirementInput!
    $condition: ModelQuestOrganizationRequirementConditionInput
  ) {
    deleteQuestOrganizationRequirement(input: $input, condition: $condition) {
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
export const createUserCollectable = /* GraphQL */ `
  mutation CreateUserCollectable(
    $input: CreateUserCollectableInput!
    $condition: ModelUserCollectableConditionInput
  ) {
    createUserCollectable(input: $input, condition: $condition) {
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
export const updateUserCollectable = /* GraphQL */ `
  mutation UpdateUserCollectable(
    $input: UpdateUserCollectableInput!
    $condition: ModelUserCollectableConditionInput
  ) {
    updateUserCollectable(input: $input, condition: $condition) {
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
export const deleteUserCollectable = /* GraphQL */ `
  mutation DeleteUserCollectable(
    $input: DeleteUserCollectableInput!
    $condition: ModelUserCollectableConditionInput
  ) {
    deleteUserCollectable(input: $input, condition: $condition) {
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
export const createQuestStageTaskReward = /* GraphQL */ `
  mutation CreateQuestStageTaskReward(
    $input: CreateQuestStageTaskRewardInput!
    $condition: ModelQuestStageTaskRewardConditionInput
  ) {
    createQuestStageTaskReward(input: $input, condition: $condition) {
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
export const updateQuestStageTaskReward = /* GraphQL */ `
  mutation UpdateQuestStageTaskReward(
    $input: UpdateQuestStageTaskRewardInput!
    $condition: ModelQuestStageTaskRewardConditionInput
  ) {
    updateQuestStageTaskReward(input: $input, condition: $condition) {
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
export const deleteQuestStageTaskReward = /* GraphQL */ `
  mutation DeleteQuestStageTaskReward(
    $input: DeleteQuestStageTaskRewardInput!
    $condition: ModelQuestStageTaskRewardConditionInput
  ) {
    deleteQuestStageTaskReward(input: $input, condition: $condition) {
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
export const createQuestStageReward = /* GraphQL */ `
  mutation CreateQuestStageReward(
    $input: CreateQuestStageRewardInput!
    $condition: ModelQuestStageRewardConditionInput
  ) {
    createQuestStageReward(input: $input, condition: $condition) {
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
export const updateQuestStageReward = /* GraphQL */ `
  mutation UpdateQuestStageReward(
    $input: UpdateQuestStageRewardInput!
    $condition: ModelQuestStageRewardConditionInput
  ) {
    updateQuestStageReward(input: $input, condition: $condition) {
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
export const deleteQuestStageReward = /* GraphQL */ `
  mutation DeleteQuestStageReward(
    $input: DeleteQuestStageRewardInput!
    $condition: ModelQuestStageRewardConditionInput
  ) {
    deleteQuestStageReward(input: $input, condition: $condition) {
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
export const createQuestReward = /* GraphQL */ `
  mutation CreateQuestReward(
    $input: CreateQuestRewardInput!
    $condition: ModelQuestRewardConditionInput
  ) {
    createQuestReward(input: $input, condition: $condition) {
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
export const updateQuestReward = /* GraphQL */ `
  mutation UpdateQuestReward(
    $input: UpdateQuestRewardInput!
    $condition: ModelQuestRewardConditionInput
  ) {
    updateQuestReward(input: $input, condition: $condition) {
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
export const deleteQuestReward = /* GraphQL */ `
  mutation DeleteQuestReward(
    $input: DeleteQuestRewardInput!
    $condition: ModelQuestRewardConditionInput
  ) {
    deleteQuestReward(input: $input, condition: $condition) {
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
export const createUserQuestStageTaskRequirementSubmissionPicture = /* GraphQL */ `
  mutation CreateUserQuestStageTaskRequirementSubmissionPicture(
    $input: CreateUserQuestStageTaskRequirementSubmissionPictureInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput
  ) {
    createUserQuestStageTaskRequirementSubmissionPicture(
      input: $input
      condition: $condition
    ) {
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
export const updateUserQuestStageTaskRequirementSubmissionPicture = /* GraphQL */ `
  mutation UpdateUserQuestStageTaskRequirementSubmissionPicture(
    $input: UpdateUserQuestStageTaskRequirementSubmissionPictureInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput
  ) {
    updateUserQuestStageTaskRequirementSubmissionPicture(
      input: $input
      condition: $condition
    ) {
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
export const deleteUserQuestStageTaskRequirementSubmissionPicture = /* GraphQL */ `
  mutation DeleteUserQuestStageTaskRequirementSubmissionPicture(
    $input: DeleteUserQuestStageTaskRequirementSubmissionPictureInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionPictureConditionInput
  ) {
    deleteUserQuestStageTaskRequirementSubmissionPicture(
      input: $input
      condition: $condition
    ) {
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
export const createUserQuestStageTaskRequirementSubmission = /* GraphQL */ `
  mutation CreateUserQuestStageTaskRequirementSubmission(
    $input: CreateUserQuestStageTaskRequirementSubmissionInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionConditionInput
  ) {
    createUserQuestStageTaskRequirementSubmission(
      input: $input
      condition: $condition
    ) {
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
export const updateUserQuestStageTaskRequirementSubmission = /* GraphQL */ `
  mutation UpdateUserQuestStageTaskRequirementSubmission(
    $input: UpdateUserQuestStageTaskRequirementSubmissionInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionConditionInput
  ) {
    updateUserQuestStageTaskRequirementSubmission(
      input: $input
      condition: $condition
    ) {
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
export const deleteUserQuestStageTaskRequirementSubmission = /* GraphQL */ `
  mutation DeleteUserQuestStageTaskRequirementSubmission(
    $input: DeleteUserQuestStageTaskRequirementSubmissionInput!
    $condition: ModelUserQuestStageTaskRequirementSubmissionConditionInput
  ) {
    deleteUserQuestStageTaskRequirementSubmission(
      input: $input
      condition: $condition
    ) {
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
export const createQuestStageTaskPicture = /* GraphQL */ `
  mutation CreateQuestStageTaskPicture(
    $input: CreateQuestStageTaskPictureInput!
    $condition: ModelQuestStageTaskPictureConditionInput
  ) {
    createQuestStageTaskPicture(input: $input, condition: $condition) {
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
export const updateQuestStageTaskPicture = /* GraphQL */ `
  mutation UpdateQuestStageTaskPicture(
    $input: UpdateQuestStageTaskPictureInput!
    $condition: ModelQuestStageTaskPictureConditionInput
  ) {
    updateQuestStageTaskPicture(input: $input, condition: $condition) {
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
export const deleteQuestStageTaskPicture = /* GraphQL */ `
  mutation DeleteQuestStageTaskPicture(
    $input: DeleteQuestStageTaskPictureInput!
    $condition: ModelQuestStageTaskPictureConditionInput
  ) {
    deleteQuestStageTaskPicture(input: $input, condition: $condition) {
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
export const createQuestStagePicture = /* GraphQL */ `
  mutation CreateQuestStagePicture(
    $input: CreateQuestStagePictureInput!
    $condition: ModelQuestStagePictureConditionInput
  ) {
    createQuestStagePicture(input: $input, condition: $condition) {
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
export const updateQuestStagePicture = /* GraphQL */ `
  mutation UpdateQuestStagePicture(
    $input: UpdateQuestStagePictureInput!
    $condition: ModelQuestStagePictureConditionInput
  ) {
    updateQuestStagePicture(input: $input, condition: $condition) {
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
export const deleteQuestStagePicture = /* GraphQL */ `
  mutation DeleteQuestStagePicture(
    $input: DeleteQuestStagePictureInput!
    $condition: ModelQuestStagePictureConditionInput
  ) {
    deleteQuestStagePicture(input: $input, condition: $condition) {
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
export const createQuestPicture = /* GraphQL */ `
  mutation CreateQuestPicture(
    $input: CreateQuestPictureInput!
    $condition: ModelQuestPictureConditionInput
  ) {
    createQuestPicture(input: $input, condition: $condition) {
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
export const updateQuestPicture = /* GraphQL */ `
  mutation UpdateQuestPicture(
    $input: UpdateQuestPictureInput!
    $condition: ModelQuestPictureConditionInput
  ) {
    updateQuestPicture(input: $input, condition: $condition) {
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
export const deleteQuestPicture = /* GraphQL */ `
  mutation DeleteQuestPicture(
    $input: DeleteQuestPictureInput!
    $condition: ModelQuestPictureConditionInput
  ) {
    deleteQuestPicture(input: $input, condition: $condition) {
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
export const createOrganizationPicture = /* GraphQL */ `
  mutation CreateOrganizationPicture(
    $input: CreateOrganizationPictureInput!
    $condition: ModelOrganizationPictureConditionInput
  ) {
    createOrganizationPicture(input: $input, condition: $condition) {
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
export const updateOrganizationPicture = /* GraphQL */ `
  mutation UpdateOrganizationPicture(
    $input: UpdateOrganizationPictureInput!
    $condition: ModelOrganizationPictureConditionInput
  ) {
    updateOrganizationPicture(input: $input, condition: $condition) {
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
export const deleteOrganizationPicture = /* GraphQL */ `
  mutation DeleteOrganizationPicture(
    $input: DeleteOrganizationPictureInput!
    $condition: ModelOrganizationPictureConditionInput
  ) {
    deleteOrganizationPicture(input: $input, condition: $condition) {
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
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
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
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
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
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
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
export const createCollectableRedeemLocation = /* GraphQL */ `
  mutation CreateCollectableRedeemLocation(
    $input: CreateCollectableRedeemLocationInput!
    $condition: ModelCollectableRedeemLocationConditionInput
  ) {
    createCollectableRedeemLocation(input: $input, condition: $condition) {
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
export const updateCollectableRedeemLocation = /* GraphQL */ `
  mutation UpdateCollectableRedeemLocation(
    $input: UpdateCollectableRedeemLocationInput!
    $condition: ModelCollectableRedeemLocationConditionInput
  ) {
    updateCollectableRedeemLocation(input: $input, condition: $condition) {
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
export const deleteCollectableRedeemLocation = /* GraphQL */ `
  mutation DeleteCollectableRedeemLocation(
    $input: DeleteCollectableRedeemLocationInput!
    $condition: ModelCollectableRedeemLocationConditionInput
  ) {
    deleteCollectableRedeemLocation(input: $input, condition: $condition) {
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
export const createCollectablePicture = /* GraphQL */ `
  mutation CreateCollectablePicture(
    $input: CreateCollectablePictureInput!
    $condition: ModelCollectablePictureConditionInput
  ) {
    createCollectablePicture(input: $input, condition: $condition) {
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
export const updateCollectablePicture = /* GraphQL */ `
  mutation UpdateCollectablePicture(
    $input: UpdateCollectablePictureInput!
    $condition: ModelCollectablePictureConditionInput
  ) {
    updateCollectablePicture(input: $input, condition: $condition) {
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
export const deleteCollectablePicture = /* GraphQL */ `
  mutation DeleteCollectablePicture(
    $input: DeleteCollectablePictureInput!
    $condition: ModelCollectablePictureConditionInput
  ) {
    deleteCollectablePicture(input: $input, condition: $condition) {
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
export const createCollectable = /* GraphQL */ `
  mutation CreateCollectable(
    $input: CreateCollectableInput!
    $condition: ModelCollectableConditionInput
  ) {
    createCollectable(input: $input, condition: $condition) {
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
export const updateCollectable = /* GraphQL */ `
  mutation UpdateCollectable(
    $input: UpdateCollectableInput!
    $condition: ModelCollectableConditionInput
  ) {
    updateCollectable(input: $input, condition: $condition) {
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
export const deleteCollectable = /* GraphQL */ `
  mutation DeleteCollectable(
    $input: DeleteCollectableInput!
    $condition: ModelCollectableConditionInput
  ) {
    deleteCollectable(input: $input, condition: $condition) {
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
export const createOrganizationMember = /* GraphQL */ `
  mutation CreateOrganizationMember(
    $input: CreateOrganizationMemberInput!
    $condition: ModelOrganizationMemberConditionInput
  ) {
    createOrganizationMember(input: $input, condition: $condition) {
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
export const updateOrganizationMember = /* GraphQL */ `
  mutation UpdateOrganizationMember(
    $input: UpdateOrganizationMemberInput!
    $condition: ModelOrganizationMemberConditionInput
  ) {
    updateOrganizationMember(input: $input, condition: $condition) {
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
export const deleteOrganizationMember = /* GraphQL */ `
  mutation DeleteOrganizationMember(
    $input: DeleteOrganizationMemberInput!
    $condition: ModelOrganizationMemberConditionInput
  ) {
    deleteOrganizationMember(input: $input, condition: $condition) {
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
export const createOrganizationModerator = /* GraphQL */ `
  mutation CreateOrganizationModerator(
    $input: CreateOrganizationModeratorInput!
    $condition: ModelOrganizationModeratorConditionInput
  ) {
    createOrganizationModerator(input: $input, condition: $condition) {
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
export const updateOrganizationModerator = /* GraphQL */ `
  mutation UpdateOrganizationModerator(
    $input: UpdateOrganizationModeratorInput!
    $condition: ModelOrganizationModeratorConditionInput
  ) {
    updateOrganizationModerator(input: $input, condition: $condition) {
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
export const deleteOrganizationModerator = /* GraphQL */ `
  mutation DeleteOrganizationModerator(
    $input: DeleteOrganizationModeratorInput!
    $condition: ModelOrganizationModeratorConditionInput
  ) {
    deleteOrganizationModerator(input: $input, condition: $condition) {
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
export const createOrganizationAdmin = /* GraphQL */ `
  mutation CreateOrganizationAdmin(
    $input: CreateOrganizationAdminInput!
    $condition: ModelOrganizationAdminConditionInput
  ) {
    createOrganizationAdmin(input: $input, condition: $condition) {
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
export const updateOrganizationAdmin = /* GraphQL */ `
  mutation UpdateOrganizationAdmin(
    $input: UpdateOrganizationAdminInput!
    $condition: ModelOrganizationAdminConditionInput
  ) {
    updateOrganizationAdmin(input: $input, condition: $condition) {
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
export const deleteOrganizationAdmin = /* GraphQL */ `
  mutation DeleteOrganizationAdmin(
    $input: DeleteOrganizationAdminInput!
    $condition: ModelOrganizationAdminConditionInput
  ) {
    deleteOrganizationAdmin(input: $input, condition: $condition) {
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
export const createUserOrganizationWallet = /* GraphQL */ `
  mutation CreateUserOrganizationWallet(
    $input: CreateUserOrganizationWalletInput!
    $condition: ModelUserOrganizationWalletConditionInput
  ) {
    createUserOrganizationWallet(input: $input, condition: $condition) {
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
export const updateUserOrganizationWallet = /* GraphQL */ `
  mutation UpdateUserOrganizationWallet(
    $input: UpdateUserOrganizationWalletInput!
    $condition: ModelUserOrganizationWalletConditionInput
  ) {
    updateUserOrganizationWallet(input: $input, condition: $condition) {
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
export const deleteUserOrganizationWallet = /* GraphQL */ `
  mutation DeleteUserOrganizationWallet(
    $input: DeleteUserOrganizationWalletInput!
    $condition: ModelUserOrganizationWalletConditionInput
  ) {
    deleteUserOrganizationWallet(input: $input, condition: $condition) {
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
export const createOrganizationLocation = /* GraphQL */ `
  mutation CreateOrganizationLocation(
    $input: CreateOrganizationLocationInput!
    $condition: ModelOrganizationLocationConditionInput
  ) {
    createOrganizationLocation(input: $input, condition: $condition) {
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
export const updateOrganizationLocation = /* GraphQL */ `
  mutation UpdateOrganizationLocation(
    $input: UpdateOrganizationLocationInput!
    $condition: ModelOrganizationLocationConditionInput
  ) {
    updateOrganizationLocation(input: $input, condition: $condition) {
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
export const deleteOrganizationLocation = /* GraphQL */ `
  mutation DeleteOrganizationLocation(
    $input: DeleteOrganizationLocationInput!
    $condition: ModelOrganizationLocationConditionInput
  ) {
    deleteOrganizationLocation(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPictureRequirement = /* GraphQL */ `
  mutation CreatePictureRequirement(
    $input: CreatePictureRequirementInput!
    $condition: ModelPictureRequirementConditionInput
  ) {
    createPictureRequirement(input: $input, condition: $condition) {
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
export const updatePictureRequirement = /* GraphQL */ `
  mutation UpdatePictureRequirement(
    $input: UpdatePictureRequirementInput!
    $condition: ModelPictureRequirementConditionInput
  ) {
    updatePictureRequirement(input: $input, condition: $condition) {
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
export const deletePictureRequirement = /* GraphQL */ `
  mutation DeletePictureRequirement(
    $input: DeletePictureRequirementInput!
    $condition: ModelPictureRequirementConditionInput
  ) {
    deletePictureRequirement(input: $input, condition: $condition) {
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
export const createQrCodeRequirement = /* GraphQL */ `
  mutation CreateQrCodeRequirement(
    $input: CreateQRCodeRequirementInput!
    $condition: ModelQRCodeRequirementConditionInput
  ) {
    createQRCodeRequirement(input: $input, condition: $condition) {
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
export const updateQrCodeRequirement = /* GraphQL */ `
  mutation UpdateQrCodeRequirement(
    $input: UpdateQRCodeRequirementInput!
    $condition: ModelQRCodeRequirementConditionInput
  ) {
    updateQRCodeRequirement(input: $input, condition: $condition) {
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
export const deleteQrCodeRequirement = /* GraphQL */ `
  mutation DeleteQrCodeRequirement(
    $input: DeleteQRCodeRequirementInput!
    $condition: ModelQRCodeRequirementConditionInput
  ) {
    deleteQRCodeRequirement(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createQuestStageTaskRequirement = /* GraphQL */ `
  mutation CreateQuestStageTaskRequirement(
    $input: CreateQuestStageTaskRequirementInput!
    $condition: ModelQuestStageTaskRequirementConditionInput
  ) {
    createQuestStageTaskRequirement(input: $input, condition: $condition) {
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
export const updateQuestStageTaskRequirement = /* GraphQL */ `
  mutation UpdateQuestStageTaskRequirement(
    $input: UpdateQuestStageTaskRequirementInput!
    $condition: ModelQuestStageTaskRequirementConditionInput
  ) {
    updateQuestStageTaskRequirement(input: $input, condition: $condition) {
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
export const deleteQuestStageTaskRequirement = /* GraphQL */ `
  mutation DeleteQuestStageTaskRequirement(
    $input: DeleteQuestStageTaskRequirementInput!
    $condition: ModelQuestStageTaskRequirementConditionInput
  ) {
    deleteQuestStageTaskRequirement(input: $input, condition: $condition) {
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
export const createQuestStageTask = /* GraphQL */ `
  mutation CreateQuestStageTask(
    $input: CreateQuestStageTaskInput!
    $condition: ModelQuestStageTaskConditionInput
  ) {
    createQuestStageTask(input: $input, condition: $condition) {
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
export const updateQuestStageTask = /* GraphQL */ `
  mutation UpdateQuestStageTask(
    $input: UpdateQuestStageTaskInput!
    $condition: ModelQuestStageTaskConditionInput
  ) {
    updateQuestStageTask(input: $input, condition: $condition) {
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
export const deleteQuestStageTask = /* GraphQL */ `
  mutation DeleteQuestStageTask(
    $input: DeleteQuestStageTaskInput!
    $condition: ModelQuestStageTaskConditionInput
  ) {
    deleteQuestStageTask(input: $input, condition: $condition) {
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
export const createQuestStage = /* GraphQL */ `
  mutation CreateQuestStage(
    $input: CreateQuestStageInput!
    $condition: ModelQuestStageConditionInput
  ) {
    createQuestStage(input: $input, condition: $condition) {
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
export const updateQuestStage = /* GraphQL */ `
  mutation UpdateQuestStage(
    $input: UpdateQuestStageInput!
    $condition: ModelQuestStageConditionInput
  ) {
    updateQuestStage(input: $input, condition: $condition) {
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
export const deleteQuestStage = /* GraphQL */ `
  mutation DeleteQuestStage(
    $input: DeleteQuestStageInput!
    $condition: ModelQuestStageConditionInput
  ) {
    deleteQuestStage(input: $input, condition: $condition) {
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
export const createQuest = /* GraphQL */ `
  mutation CreateQuest(
    $input: CreateQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    createQuest(input: $input, condition: $condition) {
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
export const updateQuest = /* GraphQL */ `
  mutation UpdateQuest(
    $input: UpdateQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    updateQuest(input: $input, condition: $condition) {
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
export const deleteQuest = /* GraphQL */ `
  mutation DeleteQuest(
    $input: DeleteQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    deleteQuest(input: $input, condition: $condition) {
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
