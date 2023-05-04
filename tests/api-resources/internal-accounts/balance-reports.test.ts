// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource balanceReports', () => {
  test('retrieve', async () => {
    const response = await modernTreasury.internalAccounts.balanceReports.retrieve('string', 'string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.balanceReports.retrieve('string', 'string', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.internalAccounts.balanceReports.list('string');
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.balanceReports.list('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.internalAccounts.balanceReports.list(
        'string',
        { after_cursor: 'string', as_of_date: '2019-12-27', balance_report_type: 'intraday', per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
