// File generated from our OpenAPI spec by Stainless.

import ModernTreasury from 'modern-treasury';
import { Response } from 'node-fetch';

const modernTreasury = new ModernTreasury({
  apiKey: 'My API Key',
  organizationId: 'my-organization-ID',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource counterparties', () => {
  test('create: only required params', async () => {
    const responsePromise = modernTreasury.counterparties.create({ name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await modernTreasury.counterparties.create({
      name: 'string',
      accounting: { type: 'customer' },
      accounts: [
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          name: 'string',
          account_details: [
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
          ],
          routing_details: [
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'string',
          party_identifier: 'string',
          ledger_account: {
            name: 'string',
            description: 'string',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'string',
            currency_exponent: 0,
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'external_account',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'string',
          contact_details: [
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
          ],
        },
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          name: 'string',
          account_details: [
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
          ],
          routing_details: [
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'string',
          party_identifier: 'string',
          ledger_account: {
            name: 'string',
            description: 'string',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'string',
            currency_exponent: 0,
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'external_account',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'string',
          contact_details: [
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
          ],
        },
        {
          account_type: 'cash',
          party_type: 'business',
          party_address: {
            line1: 'string',
            line2: 'string',
            locality: 'string',
            region: 'string',
            postal_code: 'string',
            country: 'string',
          },
          name: 'string',
          account_details: [
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
            { account_number: 'string', account_number_type: 'iban' },
          ],
          routing_details: [
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
            { routing_number: 'string', routing_number_type: 'aba', payment_type: 'ach' },
          ],
          metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          party_name: 'string',
          party_identifier: 'string',
          ledger_account: {
            name: 'string',
            description: 'string',
            normal_balance: 'credit',
            ledger_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            currency: 'string',
            currency_exponent: 0,
            ledgerable_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
            ledgerable_type: 'external_account',
            metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
          },
          plaid_processor_token: 'string',
          contact_details: [
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
            { contact_identifier: 'string', contact_identifier_type: 'email' },
          ],
        },
      ],
      email: 'dev@stainlessapi.com',
      ledger_type: 'customer',
      metadata: { key: 'value', foo: 'bar', modern: 'treasury' },
      send_remittance_advice: true,
      taxpayer_identifier: 'string',
      verification_status: 'denied',
    });
  });

  test('retrieve', async () => {
    const responsePromise = modernTreasury.counterparties.retrieve('string');
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
      modernTreasury.counterparties.retrieve('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update', async () => {
    const responsePromise = modernTreasury.counterparties.update('string');
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
      modernTreasury.counterparties.update('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.update(
        'string',
        {
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          name: 'string',
          send_remittance_advice: true,
          taxpayer_identifier: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = modernTreasury.counterparties.list();
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
    await expect(modernTreasury.counterparties.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      ModernTreasury.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      modernTreasury.counterparties.list(
        {
          after_cursor: 'string',
          created_at_lower_bound: '2019-12-27T18:11:19.117Z',
          created_at_upper_bound: '2019-12-27T18:11:19.117Z',
          email: 'dev@stainlessapi.com',
          metadata: { foo: 'string' },
          name: 'string',
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('del', async () => {
    const responsePromise = modernTreasury.counterparties.del('string');
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
      modernTreasury.counterparties.del('string', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(ModernTreasury.NotFoundError);
  });

  test('collectAccount: only required params', async () => {
    const responsePromise = modernTreasury.counterparties.collectAccount('string', { direction: 'credit' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('collectAccount: required and optional params', async () => {
    const response = await modernTreasury.counterparties.collectAccount('string', {
      direction: 'credit',
      custom_redirect: 'https://example.com',
      fields: ['name', 'nameOnAccount', 'taxpayerIdentifier'],
      send_email: true,
    });
  });
});
