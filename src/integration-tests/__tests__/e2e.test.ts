// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { setupBrowser } from '@testing-library/webdriverio';
import { getApp, INTEGRATION_TEST_TIMEOUT } from '../test-helpers/test-helpers';

jest.setTimeout(INTEGRATION_TEST_TIMEOUT);

describe('Initial tests', () => {
  const app = getApp();

  beforeEach(async () => {
    await app.start();
  });

  afterEach(() => {
    if (app && app.isRunning()) {
      return app.stop();
    }
  });

  it('should launch app', async () => {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    const isVisible = await app.browserWindow.isVisible();
    expect(isVisible).toBe(true);
  });

  it('displays a window', async () => {
    await app.client.waitUntilWindowLoaded();
    const windowCount = await app.client.getWindowCount();
    expect(windowCount).toBe(2);
  });

  it('should find view buttons', async () => {
    const { getByText } = setupBrowser(app.client);

    // eslint-disable-next-line testing-library/no-await-sync-query
    await getByText('Audit');
    // eslint-disable-next-line testing-library/no-await-sync-query
    await getByText('Attribution');
    // eslint-disable-next-line testing-library/no-await-sync-query
    await getByText('Report');
  });

  it('should open file', async () => {
    const { getByLabelText, getByText } = setupBrowser(app.client);

    // eslint-disable-next-line testing-library/no-await-sync-query
    const openFileButton = await getByLabelText('open file');
    await openFileButton.click();

    // eslint-disable-next-line testing-library/no-await-sync-query
    await getByText('ElectronBackend');
  });
});
