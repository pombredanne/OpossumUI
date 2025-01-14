// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import {
  AttributionData,
  FrequentLicences,
  ProjectMetadata,
} from '../shared/shared-types';

export const EMPTY_ATTRIBUTION_DATA: AttributionData = {
  attributions: {},
  resourcesToAttributions: {},
  attributionsToResources: {},
  resourcesWithAttributedChildren: {},
};

export const EMPTY_FREQUENT_LICENSES: FrequentLicences = {
  nameOrder: [],
  texts: {},
};

export const EMPTY_PROJECT_METADATA: ProjectMetadata = {
  projectId: '',
  fileCreationDate: '',
};
