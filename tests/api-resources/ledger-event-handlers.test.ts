// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerEventHandlers', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'My Ledger Transaction Template Description',
        effective_at: '{{ledgerable_event.custom_data.effective_at}}',
        status: 'posted',
        ledger_entries: [
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
        ],
      },
      name: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.ledgerEventHandlers.create({
      ledger_transaction_template: {
        description: 'My Ledger Transaction Template Description',
        effective_at: '{{ledgerable_event.custom_data.effective_at}}',
        status: 'posted',
        ledger_entries: [
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
          { amount: 'string', direction: 'string', ledger_account_id: 'string' },
        ],
      },
      name: 'string',
      conditions: { field: 'ledgerable_event.name', operator: 'equals', value: 'credit_card_swipe' },
      description: 'string',
      ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      variables: {
        credit_account: {
          type: 'ledger_account',
          query: { field: 'name', operator: 'equals', value: 'my_credit_account' },
        },
      },
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.ledgerEventHandlers.retrieve('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.ledgerEventHandlers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.list(
        {
          after_cursor: 'string',
          created_at: { foo: '2019-12-27T18:11:19.117Z' },
          metadata: { foo: 'string' },
          name: 'string',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.ledgerEventHandlers.del('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('del: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerEventHandlers.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
