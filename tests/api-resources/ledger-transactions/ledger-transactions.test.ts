// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledgerTransactions', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.ledgerTransactions.create({
      ledger_entries: [
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
        { amount: 0, direction: 'credit', ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
      ],
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
    const response = await modernTreasury.ledgerTransactions.create({
      ledger_entries: [
        {
          amount: 0,
          direction: 'credit',
          ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lock_version: 0,
          pending_balance_amount: { foo: 0 },
          posted_balance_amount: { foo: 0 },
          available_balance_amount: { foo: 0 },
          show_resulting_ledger_account_balances: true,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
        {
          amount: 0,
          direction: 'credit',
          ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lock_version: 0,
          pending_balance_amount: { foo: 0 },
          posted_balance_amount: { foo: 0 },
          available_balance_amount: { foo: 0 },
          show_resulting_ledger_account_balances: true,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
        {
          amount: 0,
          direction: 'credit',
          ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          lock_version: 0,
          pending_balance_amount: { foo: 0 },
          posted_balance_amount: { foo: 0 },
          available_balance_amount: { foo: 0 },
          show_resulting_ledger_account_balances: true,
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
        },
      ],
      description: 'string',
      effective_at: '2019-12-27T18:11:19.117Z',
      effective_date: '2019-12-27',
      external_id: 'string',
      ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      ledgerable_type: 'counterparty',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      status: 'archived',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.ledgerTransactions.retrieve('string');
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
      modernTreasury.ledgerTransactions.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.ledgerTransactions.update('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.update(
        'string',
        {
          description: 'string',
          effective_at: '2019-12-27T18:11:19.117Z',
          ledger_entries: [
            {
              amount: 0,
              direction: 'credit',
              ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              lock_version: 0,
              pending_balance_amount: { foo: 0 },
              posted_balance_amount: { foo: 0 },
              available_balance_amount: { foo: 0 },
              show_resulting_ledger_account_balances: true,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            },
            {
              amount: 0,
              direction: 'credit',
              ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              lock_version: 0,
              pending_balance_amount: { foo: 0 },
              posted_balance_amount: { foo: 0 },
              available_balance_amount: { foo: 0 },
              show_resulting_ledger_account_balances: true,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            },
            {
              amount: 0,
              direction: 'credit',
              ledger_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
              lock_version: 0,
              pending_balance_amount: { foo: 0 },
              posted_balance_amount: { foo: 0 },
              available_balance_amount: { foo: 0 },
              show_resulting_ledger_account_balances: true,
              metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
            },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.ledgerTransactions.list();
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
      modernTreasury.ledgerTransactions.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.list(
        {
          id: ['string', 'string', 'string'],
          after_cursor: 'string',
          effective_at: { foo: '2019-12-27T18:11:19.117Z' },
          effective_date: { foo: '2019-12-27T18:11:19.117Z' },
          external_id: 'string',
          ledger_account_category_id: 'string',
          ledger_account_id: 'string',
          ledger_account_payout_id: 'string',
          ledger_id: 'string',
          ledgerable_id: 'string',
          ledgerable_type: 'counterparty',
          metadata: { foo: 'string' },
          order_by: { created_at: 'asc', effective_at: 'asc' },
          per_page: 0,
          posted_at: { foo: '2019-12-27T18:11:19.117Z' },
          reverses_ledger_transaction_id: 'string',
          status: 'pending',
          updated_at: { foo: '2019-12-27T18:11:19.117Z' },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createReversal', async () => {
    const responsePromise = modernTreasury.ledgerTransactions.createReversal('string');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createReversal: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.createReversal('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('createReversal: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.ledgerTransactions.createReversal(
        'string',
        {
          description: 'string',
          effective_at: '2019-12-27T18:11:19.117Z',
          external_id: 'string',
          ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          ledgerable_type: 'counterparty',
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          status: 'archived',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });
});
