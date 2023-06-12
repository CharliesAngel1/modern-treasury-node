// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import type * as FormData from 'formdata-node';
import { Page, PageParams } from '~/pagination';
import { multipartFormRequestOptions } from '~/core';

export class Documents extends APIResource {
  /**
   * Create a document.
   */
  create(
    documentableType:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions',
    documentableId: string,
    params: DocumentCreateParams,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Document>> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this.post(
      `/api/${documentableType}/${documentableId}/documents`,
      multipartFormRequestOptions({
        body,
        ...options,
        headers: { 'Idempotency-Key': idempotencyKey || '', ...options?.headers },
      }),
    );
  }

  /**
   * Get an existing document.
   */
  retrieve(
    documentableType:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions',
    documentableId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Promise<Core.APIResponse<Document>> {
    return this.get(`/api/${documentableType}/${documentableId}/documents/${id}`, options);
  }

  /**
   * Get a list of documents.
   */
  list(
    documentableType:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions',
    documentableId: string,
    query?: DocumentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage>;
  list(
    documentableType:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions',
    documentableId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage>;
  list(
    documentableType:
      | 'cases'
      | 'counterparties'
      | 'expected_payments'
      | 'external_accounts'
      | 'internal_accounts'
      | 'organizations'
      | 'paper_items'
      | 'payment_orders'
      | 'transactions'
      | 'decisions',
    documentableId: string,
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage> {
    if (isRequestOptions(query)) {
      return this.list(documentableType, documentableId, {}, query);
    }
    return this.getAPIList(`/api/${documentableType}/${documentableId}/documents`, DocumentsPage, {
      query,
      ...options,
    });
  }
}

export class DocumentsPage extends Page<Document> {}

export interface Document {
  created_at: string;

  discarded_at: string | null;

  document_details: Array<Document.DocumentDetails>;

  /**
   * A category given to the document, can be `null`.
   */
  document_type: string | null;

  /**
   * The unique identifier for the associated object.
   */
  documentable_id: string;

  /**
   * The type of the associated object. Currently can be one of `payment_order`,
   * `transaction`, `paper_item`, `expected_payment`, `counterparty`, `organization`,
   * `case`, `internal_account`, `decision`, or `external_account`.
   */
  documentable_type:
    | 'case'
    | 'counterparty'
    | 'expected_payment'
    | 'external_account'
    | 'internal_account'
    | 'organization'
    | 'paper_item'
    | 'payment_order'
    | 'transaction'
    | 'decision';

  file: Document.File;

  id: string;

  /**
   * This field will be true if this object exists in the live environment or false
   * if it exists in the test environment.
   */
  live_mode: boolean;

  object: string;

  updated_at: string;
}

export namespace Document {
  export interface DocumentDetails {
    created_at: string;

    discarded_at: string | null;

    document_identifier: string;

    document_identifier_type: string;

    id: string;

    /**
     * This field will be true if this object exists in the live environment or false
     * if it exists in the test environment.
     */
    live_mode: boolean;

    object: string;

    updated_at: string;
  }

  export interface File {
    /**
     * The MIME content type of the document.
     */
    content_type?: string;

    /**
     * The original filename of the document.
     */
    filename?: string;

    /**
     * The size of the document in bytes.
     */
    size?: number;
  }
}

export interface DocumentCreateParams {
  /**
   * Body param:
   */
  file: FormData.Blob | FormData.File;

  /**
   * Body param: A category given to the document, can be `null`.
   */
  document_type?: string;

  /**
   * Header param: This key should be something unique, preferably something like an
   * UUID.
   */
  'Idempotency-Key'?: string;
}

export interface DocumentListParams extends PageParams {}
