// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { setupBrowser } from '@testing-library/webdriverio';
import { getApp, INTEGRATION_TEST_TIMEOUT } from '../test-helpers/test-helpers';

jest.setTimeout(INTEGRATION_TEST_TIMEOUT);

describe('Initial tests', () => {
  const app = getApp(
    'src/integration-tests/test-resources/opossum_input_e2e.json'
  );

  beforeEach(async () => {
    await app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('should open file when provided as command line arg', async () => {
    const { getByText } = setupBrowser(app.client);

    // eslint-disable-next-line testing-library/no-await-sync-query
    await getByText('ElectronBackend');
  });
});
