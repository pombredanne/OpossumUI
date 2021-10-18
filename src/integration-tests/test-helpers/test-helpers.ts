// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import { Application } from 'spectron';
import path from 'path';

export const INTEGRATION_TEST_TIMEOUT = 200000;

export function getApp(): Application {
  return new Application({
    args: ['build/ElectronBackend/app.js'],
    path: path.join(__dirname, '../../..', 'node_modules', '.bin', 'electron'),
    startTimeout: 30000,
    waitTimeout: 30000,
    env: {
      RUNNING_IN_SPECTRON: true,
    },
  });
}
