// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
export type ApiLockedObject = {
  id?: string;
  objectId: string;
  keyId: string;
  creator?: string;
  itemId: string;
  deleted: boolean;
};

export type ApiBookingNFTObject = {
  id: number;
  objectId: string;
  minter: string;
  room: string;
  nights: number;
  checkOutDate: string;
};

export type ApiEscrowObject = {
  id: string;
  objectId: string;
  sender: string;
  recipient: string;
  keyId: string;
  itemId: string;
  swapped: boolean;
  cancelled: boolean;
};

export type BookingNFTListingQuery = {
  recipient?: string;
};

export type EscrowListingQuery = {
  escrowId?: string;
  sender?: string;
  recipient?: string;
  cancelled?: string;
  swapped?: string;
  limit?: string;
};

export type LockedListingQuery = {
  deleted?: string;
  keyId?: string;
  limit?: string;
};
