/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Attachments = "attachments",
	CaseActivityItem = "case_activity_item",
	Cases = "cases",
	Notifications = "notifications",
	Orders = "orders",
	Procedures = "procedures",
	ScheduleItems = "schedule_items",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AttachmentsTypeOptions {
	"procedure" = "procedure",
	"case" = "case",
	"surgery" = "surgery",
}
export type AttachmentsRecord = {
	attachment?: string
	case?: RecordIdString
	name?: string
	procedure?: RecordIdString
	surgery?: RecordIdString
	type?: AttachmentsTypeOptions
}

export enum CaseActivityItemTypeOptions {
	"note" = "note",
	"action" = "action",
}
export type CaseActivityItemRecord<Tmeta = unknown> = {
	assigned_to?: RecordIdString
	attachments?: string[]
	case?: RecordIdString
	created_by?: RecordIdString
	meta?: null | Tmeta
	type?: CaseActivityItemTypeOptions
}

export enum CasesStatusOptions {
	"new" = "new",
	"pending" = "pending",
	"scheduled" = "scheduled",
	"closed" = "closed",
}
export type CasesRecord<Tinsurance_details = unknown, Tsubscriber = unknown> = {
	activity_items?: RecordIdString[]
	dob?: IsoDateString
	email?: string
	first_name?: string
	initial_note?: string
	insurance_details?: null | Tinsurance_details
	last_name?: string
	phone_number?: string
	sex?: string
	ssn?: string
	status: CasesStatusOptions
	subscriber?: null | Tsubscriber
	user?: RecordIdString
}

export type NotificationsRecord = {
	message?: string
	userId?: RecordIdString
}

export type OrdersRecord = {
	orderDate?: IsoDateString
	orderDetails?: string
	userId?: RecordIdString
}

export type ProceduresRecord = {
	ICD10?: string
	RVU?: string
	cost?: number
	cpt_code?: string
	laterality?: string
	mins?: number
	name?: string
	site?: string
}

export enum ScheduleItemsTypeOptions {
	"surgery" = "surgery",
	"block" = "block",
	"consultation" = "consultation",
	"task" = "task",
}
export type ScheduleItemsRecord = {
	anesthesia_position?: string
	anesthesia_type?: string
	case?: RecordIdString
	end?: IsoDateString
	procedures?: RecordIdString[]
	specialty?: string
	start?: IsoDateString
	title?: string
	type?: ScheduleItemsTypeOptions
	user?: RecordIdString
}

export enum UsersRoleOptions {
	"Surgeon" = "Surgeon",
	"Admin" = "Admin",
	"Nurse" = "Nurse",
}
export type UsersRecord = {
	avatar?: string
	name?: string
	role?: UsersRoleOptions
}

// Response types include system fields and match responses from the PocketBase API
export type AttachmentsResponse<Texpand = unknown> = Required<AttachmentsRecord> & BaseSystemFields<Texpand>
export type CaseActivityItemResponse<Tmeta = unknown, Texpand = unknown> = Required<CaseActivityItemRecord<Tmeta>> & BaseSystemFields<Texpand>
export type CasesResponse<Tinsurance_details = unknown, Tsubscriber = unknown, Texpand = unknown> = Required<CasesRecord<Tinsurance_details, Tsubscriber>> & BaseSystemFields<Texpand>
export type NotificationsResponse<Texpand = unknown> = Required<NotificationsRecord> & BaseSystemFields<Texpand>
export type OrdersResponse<Texpand = unknown> = Required<OrdersRecord> & BaseSystemFields<Texpand>
export type ProceduresResponse<Texpand = unknown> = Required<ProceduresRecord> & BaseSystemFields<Texpand>
export type ScheduleItemsResponse<Texpand = unknown> = Required<ScheduleItemsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	attachments: AttachmentsRecord
	case_activity_item: CaseActivityItemRecord
	cases: CasesRecord
	notifications: NotificationsRecord
	orders: OrdersRecord
	procedures: ProceduresRecord
	schedule_items: ScheduleItemsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	attachments: AttachmentsResponse
	case_activity_item: CaseActivityItemResponse
	cases: CasesResponse
	notifications: NotificationsResponse
	orders: OrdersResponse
	procedures: ProceduresResponse
	schedule_items: ScheduleItemsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'attachments'): RecordService<AttachmentsResponse>
	collection(idOrName: 'case_activity_item'): RecordService<CaseActivityItemResponse>
	collection(idOrName: 'cases'): RecordService<CasesResponse>
	collection(idOrName: 'notifications'): RecordService<NotificationsResponse>
	collection(idOrName: 'orders'): RecordService<OrdersResponse>
	collection(idOrName: 'procedures'): RecordService<ProceduresResponse>
	collection(idOrName: 'schedule_items'): RecordService<ScheduleItemsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
