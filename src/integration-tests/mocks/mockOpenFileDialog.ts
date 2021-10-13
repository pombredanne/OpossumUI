// SPDX-FileCopyrightText: Facebook, Inc. and its affiliates
// SPDX-FileCopyrightText: TNG Technology Consulting GmbH <https://www.tngtech.com>
//
// SPDX-License-Identifier: Apache-2.0

import path from 'path';

export function mockOpenFileDialog(): Array<string> {
  return [
    path.join(
      __dirname,
      '../../../src/integration-tests/test-resources/',
      'opossum_input_e2e.json'
    ),
  ];
}
