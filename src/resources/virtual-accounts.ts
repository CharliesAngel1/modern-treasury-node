// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as VirtualAccountsAPI from 'modern-treasury/resources/virtual-accounts';
import * as AccountDetailsAPI from 'modern-treasury/resources/account-details';
import * as RoutingDetailsAPI from 'modern-treasury/resources/routing-details';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class VirtualAccounts extends APIResource {
  /**
   * create virtual_account
   */
  create(params: VirtualAccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<VirtualAccount> {
    // @ts-expect-error idempotency key header isn't defined anymore but is included here for back-compat
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    if (idempotencyKey) {
      console.warn(
        "The Idempotency-Key request param is deprecated, the 'idempotencyToken' option should be set instead",
      );
    }
    return this._client.post('/api/virtual_accounts', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey, ...options?.headers },
    });
  }

  /**
   * get virtual_account
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<VirtualAccount> {
    return this._client.get(`/api/virtual_accounts/${id}`, options);
  }

  /**
   * update virtual_account
   */
  update(
    id: string,
    body?: VirtualAccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualAccount>;
  update(id: string, options?: Core.RequestOptions): Core.APIPromise<VirtualAccount>;
  update(
    id: string,
    body: VirtualAccountUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VirtualAccount> {
    if (isRequestOptions(body)) {
      return this.update(id, {}, body);
    }
    return this._client.patch(`/api/virtual_accounts/${id}`, { body, ...options });
  }

  /**
   * Get a list of virtual accounts.
   */
  list(
    query?: VirtualAccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<VirtualAccountsPage, VirtualAccount>;
  list(options?: Core.RequestOptions): Core.PagePromise<VirtualAccountsPage, VirtualAccount>;
  list(
    query: VirtualAccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<VirtualAccountsPage, VirtualAccount> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/virtual_accounts', VirtualAccountsPage, { query, ...options });
  }

  /**
   * delete virtual_account
   */
  del(id: string, options?: Core.RequestOptions): Core.APIPromise<VirtualAccount> {
    return this._client.delete(`/api/virtual_accounts/${id}`, options);
  }
}

export class VirtualAccountsPage extends Page<VirtualAccount> {}

export interface VirtualAccount {
  id: string;

  /**
   * An array of account detail objects.
   */
  account_details: Array<AccountDetailsAPI.AccountDetail>;

  /**
   * The ID of a counterparty that the virtual account belongs to. Optional.
   */
  counterparty_id: string | null;

  created_at: string;

  /**
   * The ID of a credit normal ledger account. When money enters the virtual account,
   * this ledger account will be credited. Must be accompanied by a
   * debit_ledger_account_id if present.
   */
  credit_ledger_account_id: string | null;

  /**
   * The ID of a debit normal ledger account. When money enters the virtual account,
   * this ledger account will be debited. Must be accompanied by a
   * credit_ledger_account_id if present.
   */
  debit_ledger_account_id: string | null;

  /**
   * An optional free-form description for internal use.
   */
  description: string | null;

  discarded_at: string | null;

  /**
   * The ID of the internal account that the virtual account is in.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string>;

  /**
   * The name of the virtual account.
   */
  name: string;

  object: string;

  /**
   * An array of routing detail objects. These will be the routing details of the
   * internal account.
   */
  routing_details: Array<RoutingDetailsAPI.RoutingDetail>;

  updated_at: string;
}

export interface VirtualAccountCreateParams {
  /**
   * The ID of the internal account that this virtual account is associated with.
   */
  internal_account_id: string;

  /**
   * The name of the virtual account.
   */
  name: string;

  /**
   * An array of account detail objects.
   */
  account_details?: Array<VirtualAccountCreateParams.AccountDetail>;

  /**
   * The ID of the counterparty that the virtual account belongs to.
   */
  counterparty_id?: string;

  /**
   * The ID of a credit normal ledger account. When money leaves the virtual account,
   * this ledger account will be credited. Must be accompanied by a
   * debit_ledger_account_id if present.
   */
  credit_ledger_account_id?: string;

  /**
   * The ID of a debit normal ledger account. When money enters the virtual account,
   * this ledger account will be debited. Must be accompanied by a
   * credit_ledger_account_id if present.
   */
  debit_ledger_account_id?: string;

  /**
   * An optional description for internal use.
   */
  description?: string;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata?: Record<string, string>;

  /**
   * An array of routing detail objects.
   */
  routing_details?: Array<VirtualAccountCreateParams.RoutingDetail>;
}

export namespace VirtualAccountCreateParams {
  export interface AccountDetail {
    /**
     * The account number for the bank account.
     */
    account_number: string;

    /**
     * One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank
     * account number is in a generic format.
     */
    account_number_type?: 'clabe' | 'iban' | 'other' | 'pan' | 'wallet_address';
  }

  export interface RoutingDetail {
    /**
     * The routing number of the bank.
     */
    routing_number: string;

    /**
     * The type of routing number. See
     * https://docs.moderntreasury.com/platform/reference/routing-detail-object for
     * more details.
     */
    routing_number_type:
      | 'aba'
      | 'au_bsb'
      | 'br_codigo'
      | 'ca_cpa'
      | 'chips'
      | 'cnaps'
      | 'dk_interbank_clearing_code'
      | 'gb_sort_code'
      | 'hk_interbank_clearing_code'
      | 'hu_interbank_clearing_code'
      | 'in_ifsc'
      | 'jp_zengin_code'
      | 'my_branch_code'
      | 'nz_national_clearing_code'
      | 'se_bankgiro_clearing_code'
      | 'swift';

    /**
     * If the routing detail is to be used for a specific payment type this field will
     * be populated, otherwise null.
     */
    payment_type?:
      | 'ach'
      | 'au_becs'
      | 'bacs'
      | 'book'
      | 'card'
      | 'chats'
      | 'check'
      | 'cross_border'
      | 'dk_nets'
      | 'eft'
      | 'hu_ics'
      | 'interac'
      | 'masav'
      | 'neft'
      | 'nics'
      | 'nz_becs'
      | 'provxchange'
      | 'ro_sent'
      | 'rtp'
      | 'se_bankgirot'
      | 'sen'
      | 'sepa'
      | 'sg_giro'
      | 'sic'
      | 'signet'
      | 'wire'
      | 'zengin'
      | null;
  }
}

export interface VirtualAccountUpdateParams {
  counterparty_id?: string;

  metadata?: Record<string, string>;

  name?: string | null;
}

export interface VirtualAccountListParams extends PageParams {
  counterparty_id?: string;

  internal_account_id?: string;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;
}

export namespace VirtualAccounts {
  export import VirtualAccount = VirtualAccountsAPI.VirtualAccount;
  export import VirtualAccountsPage = VirtualAccountsAPI.VirtualAccountsPage;
  export import VirtualAccountCreateParams = VirtualAccountsAPI.VirtualAccountCreateParams;
  export import VirtualAccountUpdateParams = VirtualAccountsAPI.VirtualAccountUpdateParams;
  export import VirtualAccountListParams = VirtualAccountsAPI.VirtualAccountListParams;
}
