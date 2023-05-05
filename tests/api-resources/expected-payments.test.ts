// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from '~/index';

const modernTreasury = new ModernTreasury({
  apiKey: 'something1234',
  baseURL: 'http://127.0.0.1:4010',
  organizationId: 'my-organization-ID',
});

describe('resource expectedPayments', () => {
  test('create: only required params', async () => {
    const response = await modernTreasury.expectedPayments.create({
      amount_lower_bound: 0,
      amount_upper_bound: 0,
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      date_lower_bound: '2019-12-27',
      date_upper_bound: '2019-12-27',
      description: 'string',
      direction: 'credit',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      line_items: [{ amount: 0 }, { amount: 0 }, { amount: 0 }],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      remittance_information: 'string',
      statement_descriptor: 'string',
      type: 'ach',
      'Idempotency-Key': 'string',
    });
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.expectedPayments.create({
      amount_lower_bound: 0,
      amount_upper_bound: 0,
      counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      currency: 'AED',
      date_lower_bound: '2019-12-27',
      date_upper_bound: '2019-12-27',
      description: 'string',
      direction: 'credit',
      internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      line_items: [
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
        {
          amount: 0,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          description: 'string',
          accounting_category_id: 'string',
        },
      ],
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      remittance_information: 'string',
      statement_descriptor: 'string',
      type: 'ach',
      'Idempotency-Key': 'string',
    });
  });

  test('retrieve', async () => {
    const response = await modernTreasury.expectedPayments.retrieve('string');
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const response = await modernTreasury.expectedPayments.update('string');
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.update(
        'string',
        {
          amount_lower_bound: 0,
          amount_upper_bound: 0,
          counterparty_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          currency: 'AED',
          date_lower_bound: '2019-12-27',
          date_upper_bound: '2019-12-27',
          description: 'string',
          direction: 'credit',
          internal_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          remittance_information: 'string',
          statement_descriptor: 'string',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const response = await modernTreasury.expectedPayments.list();
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(modernTreasury.expectedPayments.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.list(
        {
          after_cursor: 'string',
          counterparty_id: 'string',
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          direction: 'credit',
          internal_account_id: 'string',
          metadata: { foo: 'string' },
          per_page: 0,
          status: 'archived',
          type: 'ach',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const response = await modernTreasury.expectedPayments.del('string');
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.expectedPayments.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
