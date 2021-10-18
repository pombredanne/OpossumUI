// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { WebdriverIOQueries } from '@testing-library/webdriverio';

declare global {
  namespace WebdriverIO {
    type Browser = WebdriverIOQueries;
    type Element = WebdriverIOQueries;
  }
}
