// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource ledgerAccounts', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.ledgerAccounts.create({
      currency: 'string',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
      normal_balance: 'credit',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerAccounts.create({
      currency: 'string',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'string',
      normal_balance: 'credit',
      currency_exponent: 0,
      description: 'string',
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ledgerable_type: 'external_account',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.ledgerAccounts.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.retrieve(
        'string',
        {
          balances: {
            as_of_date: '2019-12-27',
            effective_at: '2019-12-27T18:11:19.117Z',
            effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
            effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
            as_of_lock_version: 0,
          },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.ledgerAccounts.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.update(
        'string',
        { description: 'string', metadata: { key: 'value', foo: 'bar', modern: 'treasury' }, name: 'string' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.ledgerAccounts.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.ledgerAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.list(
        {
          id: 'string',
          after_cursor: 'string',
          balances: {
            as_of_date: '2019-12-27',
            effective_at: '2019-12-27T18:11:19.117Z',
            effective_at_lower_bound: '2019-12-27T18:11:19.117Z',
            effective_at_upper_bound: '2019-12-27T18:11:19.117Z',
          },
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          currency: 'string',
          ledger_account_category_id: 'string',
          ledger_id: 'string',
          metadata: { foo: 'string' },
          name: 'string',
          per_page: 0,
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.ledgerAccounts.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerAccounts.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
