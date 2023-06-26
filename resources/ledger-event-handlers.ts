// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class LedgerEventHandlers extends APIResource {
  /**
   * create ledger_event_handler
   */
  create(
    params: LedgerEventHandlerCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerEventHandlerCreateResponse>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post('/api/ledger_event_handlers', {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * Get details on a single ledger event handler.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerEventHandlerRetrieveResponse>> {
    return this.get(`/api/ledger_event_handlers/${id}`, options);
  }

  /**
   * Get a list of ledger event handlers.
   */
  list(
    query?: LedgerEventHandlerListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEventHandlerListResponsesPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<LedgerEventHandlerListResponsesPage>;
  list(
    query: LedgerEventHandlerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<LedgerEventHandlerListResponsesPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/api/ledger_event_handlers', LedgerEventHandlerListResponsesPage, {
      query,
      ...options,
    });
  }

  /**
   * Archive a ledger event handler.
   */
  del(
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<LedgerEventHandlerDeleteResponse>> {
    return this.delete(`/api/ledger_event_handlers/${id}`, options);
  }
}

export class LedgerEventHandlerListResponsesPage extends Page<LedgerEventHandlerListResponse> {}

export interface LedgerEventHandlerCreateResponse {
  conditions: LedgerEventHandlerCreateResponse.Conditions | null;

  created_at: string;

  /**
   * An optional description.
   */
  description: string | null;

  discarded_at: string | null;

  id: string;

  ledger_transaction_template: LedgerEventHandlerCreateResponse.LedgerTransactionTemplate;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string> | null;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  object: string;

  updated_at: string;
}

export namespace LedgerEventHandlerCreateResponse {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata: Record<string, string> | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The field you're fetching from the `ledgerable_event`.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is. Currently only supports
       * `equals`.
       */
      direction: string;

      /**
       * What raw string you are comparing the `field` against.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The field you're fetching from the `ledgerable_event`.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is. Currently only supports
     * `equals`.
     */
    operator: string;

    /**
     * What raw string you are comparing the `field` against.
     */
    value: string;
  }
}

export interface LedgerEventHandlerRetrieveResponse {
  conditions: LedgerEventHandlerRetrieveResponse.Conditions | null;

  created_at: string;

  /**
   * An optional description.
   */
  description: string | null;

  discarded_at: string | null;

  id: string;

  ledger_transaction_template: LedgerEventHandlerRetrieveResponse.LedgerTransactionTemplate;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string> | null;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  object: string;

  updated_at: string;
}

export namespace LedgerEventHandlerRetrieveResponse {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata: Record<string, string> | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The field you're fetching from the `ledgerable_event`.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is. Currently only supports
       * `equals`.
       */
      direction: string;

      /**
       * What raw string you are comparing the `field` against.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The field you're fetching from the `ledgerable_event`.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is. Currently only supports
     * `equals`.
     */
    operator: string;

    /**
     * What raw string you are comparing the `field` against.
     */
    value: string;
  }
}

export interface LedgerEventHandlerListResponse {
  conditions: LedgerEventHandlerListResponse.Conditions | null;

  created_at: string;

  /**
   * An optional description.
   */
  description: string | null;

  discarded_at: string | null;

  id: string;

  ledger_transaction_template: LedgerEventHandlerListResponse.LedgerTransactionTemplate;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string> | null;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  object: string;

  updated_at: string;
}

export namespace LedgerEventHandlerListResponse {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata: Record<string, string> | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The field you're fetching from the `ledgerable_event`.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is. Currently only supports
       * `equals`.
       */
      direction: string;

      /**
       * What raw string you are comparing the `field` against.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The field you're fetching from the `ledgerable_event`.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is. Currently only supports
     * `equals`.
     */
    operator: string;

    /**
     * What raw string you are comparing the `field` against.
     */
    value: string;
  }
}

export interface LedgerEventHandlerDeleteResponse {
  conditions: LedgerEventHandlerDeleteResponse.Conditions | null;

  created_at: string;

  /**
   * An optional description.
   */
  description: string | null;

  discarded_at: string | null;

  id: string;

  ledger_transaction_template: LedgerEventHandlerDeleteResponse.LedgerTransactionTemplate;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * Additional data represented as key-value pairs. Both the key and value must be
   * strings.
   */
  metadata: Record<string, string> | null;

  /**
   * Name of the ledger event handler.
   */
  name: string;

  object: string;

  updated_at: string;
}

export namespace LedgerEventHandlerDeleteResponse {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata: Record<string, string> | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The field you're fetching from the `ledgerable_event`.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is. Currently only supports
       * `equals`.
       */
      direction: string;

      /**
       * What raw string you are comparing the `field` against.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The field you're fetching from the `ledgerable_event`.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is. Currently only supports
     * `equals`.
     */
    operator: string;

    /**
     * What raw string you are comparing the `field` against.
     */
    value: string;
  }
}

export interface LedgerEventHandlerCreateParams {
  /**
   * Body param:
   */
  ledger_transaction_template: LedgerEventHandlerCreateParams.LedgerTransactionTemplate;

  /**
   * Body param: Name of the ledger event handler.
   */
  name: string;

  /**
   * Body param:
   */
  conditions?: LedgerEventHandlerCreateParams.Conditions | null;

  /**
   * Body param: An optional description.
   */
  description?: string | null;

  /**
   * Body param: Additional data represented as key-value pairs. Both the key and
   * value must be strings.
   */
  metadata?: Record<string, string> | null;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export namespace LedgerEventHandlerCreateParams {
  export interface LedgerTransactionTemplate {
    /**
     * An optional description for internal use.
     */
    description: string | null;

    /**
     * The timestamp (ISO8601 format) at which the ledger transaction happened for
     * reporting purposes.
     */
    effective_at: string | null;

    /**
     * An array of ledger entry objects.
     */
    ledger_entries: Array<LedgerTransactionTemplate.LedgerEntry>;

    /**
     * Additional data represented as key-value pairs. Both the key and value must be
     * strings.
     */
    metadata: Record<string, string> | null;
  }

  export namespace LedgerTransactionTemplate {
    export interface LedgerEntry {
      /**
       * The field you're fetching from the `ledgerable_event`.
       */
      amount: string;

      /**
       * What the operator between the `field` and `value` is. Currently only supports
       * `equals`.
       */
      direction: string;

      /**
       * What raw string you are comparing the `field` against.
       */
      ledger_account_id: string;
    }
  }

  export interface Conditions {
    /**
     * The field you're fetching from the `ledgerable_event`.
     */
    field: string;

    /**
     * What the operator between the `field` and `value` is. Currently only supports
     * `equals`.
     */
    operator: string;

    /**
     * What raw string you are comparing the `field` against.
     */
    value: string;
  }
}

export interface LedgerEventHandlerListParams extends PageParams {
  /**
   * Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to filter by the
   * posted at timestamp. For example, for all times after Jan 1 2000 12:00 UTC, use
   * created_at%5Bgt%5D=2000-01-01T12:00:00Z.
   */
  created_at?: Record<string, string>;

  /**
   * For example, if you want to query for records with metadata key `Type` and value
   * `Loan`, the query would be `metadata%5BType%5D=Loan`. This encodes the query
   * parameters.
   */
  metadata?: Record<string, string>;

  name?: string;
}

export namespace LedgerEventHandlers {
  export import LedgerEventHandlerCreateResponse = API.LedgerEventHandlerCreateResponse;
  export import LedgerEventHandlerRetrieveResponse = API.LedgerEventHandlerRetrieveResponse;
  export import LedgerEventHandlerListResponse = API.LedgerEventHandlerListResponse;
  export import LedgerEventHandlerDeleteResponse = API.LedgerEventHandlerDeleteResponse;
  export import LedgerEventHandlerListResponsesPage = API.LedgerEventHandlerListResponsesPage;
  export import LedgerEventHandlerCreateParams = API.LedgerEventHandlerCreateParams;
  export import LedgerEventHandlerListParams = API.LedgerEventHandlerListParams;
}
