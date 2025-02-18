// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as BalanceReportsAPI from 'modern-treasury/resources/internal-accounts/balance-reports';
import * as Shared from 'modern-treasury/resources/shared';
import { Page, type PageParams } from 'modern-treasury/pagination';

export class BalanceReports extends APIResource {
  /**
   * Get a single balance report for a given internal account.
   */
  retrieve(
    internalAccountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BalanceReport> {
    return this._client.get(`/api/internal_accounts/${internalAccountId}/balance_reports/${id}`, options);
  }

  /**
   * Get all balance reports for a given internal account.
   */
  list(
    internalAccountId: string,
    query?: BalanceReportListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport>;
  list(
    internalAccountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport>;
  list(
    internalAccountId: string,
    query: BalanceReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<BalanceReportsPage, BalanceReport> {
    if (isRequestOptions(query)) {
      return this.list(internalAccountId, {}, query);
    }
    return this._client.getAPIList(
      `/api/internal_accounts/${internalAccountId}/balance_reports`,
      BalanceReportsPage,
      { query, ...options },
    );
  }
}

export class BalanceReportsPage extends Page<BalanceReport> {}

export interface BalanceReport {
  id: string;

  /**
   * The date of the balance report in local time.
   */
  as_of_date: string;

  /**
   * The time (24-hour clock) of the balance report in local time.
   */
  as_of_time: string | null;

  /**
   * The specific type of balance report. One of `intraday`, `previous_day`,
   * `real_time`, or `other`.
   */
  balance_report_type: 'intraday' | 'other' | 'previous_day' | 'real_time';

  /**
   * An array of `Balance` objects.
   */
  balances: Array<BalanceReport.Balance>;

  created_at: string;

  /**
   * The ID of one of your organization's Internal Accounts.
   */
  internal_account_id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

export namespace BalanceReport {
  export interface Balance {
    id: string;

    /**
     * The balance amount.
     */
    amount: number;

    /**
     * The specific type of balance reported. One of `opening_ledger`,
     * `closing_ledger`, `current_ledger`, `opening_available`,
     * `opening_available_next_business_day`, `closing_available`, `current_available`,
     * or `other`.
     */
    balance_type:
      | 'closing_available'
      | 'closing_ledger'
      | 'current_available'
      | 'current_ledger'
      | 'opening_available'
      | 'opening_available_next_business_day'
      | 'opening_ledger'
      | 'other';

    created_at: string;

    /**
     * The currency of the balance.
     */
    currency: Shared.Currency | null;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;

    /**
     * The code used by the bank when reporting this specific balance.
     */
    vendor_code: string;

    /**
     * The code used by the bank when reporting this specific balance.
     */
    vendor_code_type:
      | 'bai2'
      | 'bankprov'
      | 'bnk_dev'
      | 'cleartouch'
      | 'column'
      | 'cross_river'
      | 'currencycloud'
      | 'dc_bank'
      | 'dwolla'
      | 'evolve'
      | 'goldman_sachs'
      | 'iso20022'
      | 'jpmc'
      | 'mx'
      | 'plaid'
      | 'rspec_vendor'
      | 'signet'
      | 'silvergate'
      | 'swift'
      | 'us_bank'
      | null;
  }
}

export interface BalanceReportListParams extends PageParams {
  /**
   * The date of the balance report in local time.
   */
  as_of_date?: string;

  /**
   * The specific type of balance report. One of `intraday`, `previous_day`,
   * `real_time`, or `other`.
   */
  balance_report_type?: 'intraday' | 'other' | 'previous_day' | 'real_time';
}

export namespace BalanceReports {
  export import BalanceReport = BalanceReportsAPI.BalanceReport;
  export import BalanceReportsPage = BalanceReportsAPI.BalanceReportsPage;
  export import BalanceReportListParams = BalanceReportsAPI.BalanceReportListParams;
}
