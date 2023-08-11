// File generated from our OpenAPI spec by Stainless.

import * as Core from 'modern-treasury/core';
import { APIResource } from 'modern-treasury/resource';
import { isRequestOptions } from 'modern-treasury/core';
import * as API from './index';
import { Page, PageParams } from 'modern-treasury/pagination';

export class LineItems extends APIResource {
  /**
   * create invoice_line_item
   */
  create(
    invoiceId: string,
    params: LineItemCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post(`/api/invoices/${invoiceId}/invoice_line_items`, {
      body,
      ...options,
      headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
    });
  }

  /**
   * get invoice_line_item
   */
  retrieve(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem> {
    return this.get(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }

  /**
   * update invoice_line_item
   */
  update(
    invoiceId: string,
    id: string,
    body?: LineItemUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem>;
  update(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem>;
  update(
    invoiceId: string,
    id: string,
    body: LineItemUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceLineItem> {
    if (isRequestOptions(body)) {
      return this.update(invoiceId, id, {}, body);
    }
    return this.patch(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, { body, ...options });
  }

  /**
   * list invoice_line_items
   */
  list(
    invoiceId: string,
    query?: LineItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem>;
  list(
    invoiceId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem>;
  list(
    invoiceId: string,
    query: LineItemListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<InvoiceLineItemsPage, InvoiceLineItem> {
    if (isRequestOptions(query)) {
      return this.list(invoiceId, {}, query);
    }
    return this.getAPIList(`/api/invoices/${invoiceId}/invoice_line_items`, InvoiceLineItemsPage, {
      query,
      ...options,
    });
  }

  /**
   * delete invoice_line_item
   */
  del(invoiceId: string, id: string, options?: Core.RequestOptions): Core.APIPromise<InvoiceLineItem> {
    return this.delete(`/api/invoices/${invoiceId}/invoice_line_items/${id}`, options);
  }
}

export class InvoiceLineItemsPage extends Page<InvoiceLineItem> {}
// alias so we can export it in the namespace
type _InvoiceLineItemsPage = InvoiceLineItemsPage;

export interface InvoiceLineItem {
  id: string;

  /**
   * The total amount for this line item specified in the invoice currency's smallest
   * unit.
   */
  amount: number;

  created_at: string;

  /**
   * An optional free-form description of the line item.
   */
  description: string;

  /**
   * Either `debit` or `credit`. `debit` indicates that a client owes the business
   * money and increases the invoice's `total_amount` due. `credit` has the opposite
   * intention and effect.
   */
  direction: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  /**
   * The name of the line item, typically a product or SKU name.
   */
  name: string;

  object: string;

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

  updated_at: string;
}

export interface LineItemCreateParams {
  /**
   * Body param: The name of the line item, typically a product or SKU name.
   */
  name: string;

  /**
   * Body param: The cost per unit of the product or service that this line item is
   * for, specified in the invoice currency's smallest unit.
   */
  unit_amount: number;

  /**
   * Body param: An optional free-form description of the line item.
   */
  description?: string;

  /**
   * Body param: Either `debit` or `credit`. `debit` indicates that a client owes the
   * business money and increases the invoice's `total_amount` due. `credit` has the
   * opposite intention and effect.
   */
  direction?: string;

  /**
   * Body param: The number of units of a product or service that this line item is
   * for. Must be a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface LineItemUpdateParams {
  /**
   * An optional free-form description of the line item.
   */
  description?: string;

  /**
   * Either `debit` or `credit`. `debit` indicates that a client owes the business
   * money and increases the invoice's `total_amount` due. `credit` has the opposite
   * intention and effect.
   */
  direction?: string;

  /**
   * The name of the line item, typically a product or SKU name.
   */
  name?: string;

  /**
   * The number of units of a product or service that this line item is for. Must be
   * a whole number. Defaults to 1 if not provided.
   */
  quantity?: number;

  /**
   * The cost per unit of the product or service that this line item is for,
   * specified in the invoice currency's smallest unit.
   */
  unit_amount?: number;
}

export interface LineItemListParams extends PageParams {}

export namespace LineItems {
  export import InvoiceLineItem = API.InvoiceLineItem;
  export type InvoiceLineItemsPage = _InvoiceLineItemsPage;
  export import LineItemCreateParams = API.LineItemCreateParams;
  export import LineItemUpdateParams = API.LineItemUpdateParams;
  export import LineItemListParams = API.LineItemListParams;
}
