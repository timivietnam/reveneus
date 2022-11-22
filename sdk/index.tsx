import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "Budget" */
export type Budget = {
  /** An object relationship */
  Project: Project;
  /** An object relationship */
  User: User;
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  project_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "Budget" */
export type Budget_Aggregate = {
  aggregate?: Maybe<Budget_Aggregate_Fields>;
  nodes: Array<Budget>;
};

export type Budget_Aggregate_Bool_Exp = {
  count?: InputMaybe<Budget_Aggregate_Bool_Exp_Count>;
};

export type Budget_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Budget_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Budget_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Budget" */
export type Budget_Aggregate_Fields = {
  avg?: Maybe<Budget_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Budget_Max_Fields>;
  min?: Maybe<Budget_Min_Fields>;
  stddev?: Maybe<Budget_Stddev_Fields>;
  stddev_pop?: Maybe<Budget_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Budget_Stddev_Samp_Fields>;
  sum?: Maybe<Budget_Sum_Fields>;
  var_pop?: Maybe<Budget_Var_Pop_Fields>;
  var_samp?: Maybe<Budget_Var_Samp_Fields>;
  variance?: Maybe<Budget_Variance_Fields>;
};


/** aggregate fields of "Budget" */
export type Budget_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Budget_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Budget" */
export type Budget_Aggregate_Order_By = {
  avg?: InputMaybe<Budget_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Budget_Max_Order_By>;
  min?: InputMaybe<Budget_Min_Order_By>;
  stddev?: InputMaybe<Budget_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Budget_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Budget_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Budget_Sum_Order_By>;
  var_pop?: InputMaybe<Budget_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Budget_Var_Samp_Order_By>;
  variance?: InputMaybe<Budget_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Budget" */
export type Budget_Arr_Rel_Insert_Input = {
  data: Array<Budget_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Budget_On_Conflict>;
};

/** aggregate avg on columns */
export type Budget_Avg_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Budget" */
export type Budget_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Budget". All fields are combined with a logical 'AND'. */
export type Budget_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Budget_Bool_Exp>>;
  _not?: InputMaybe<Budget_Bool_Exp>;
  _or?: InputMaybe<Array<Budget_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Budget" */
export enum Budget_Constraint {
  /** unique or primary key constraint on columns "id" */
  BudgetPkey = 'Budget_pkey'
}

/** input type for incrementing numeric columns in table "Budget" */
export type Budget_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Budget" */
export type Budget_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Budget_Max_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Budget" */
export type Budget_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Budget_Min_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Budget" */
export type Budget_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Budget" */
export type Budget_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Budget>;
};

/** on_conflict condition type for table "Budget" */
export type Budget_On_Conflict = {
  constraint: Budget_Constraint;
  update_columns?: Array<Budget_Update_Column>;
  where?: InputMaybe<Budget_Bool_Exp>;
};

/** Ordering options when selecting data from "Budget". */
export type Budget_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  User?: InputMaybe<User_Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Budget */
export type Budget_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Budget" */
export enum Budget_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Budget" */
export type Budget_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Budget_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Budget" */
export type Budget_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Budget_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Budget" */
export type Budget_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Budget_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Budget" */
export type Budget_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Budget" */
export type Budget_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Budget_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Budget_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Budget_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Budget" */
export type Budget_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "Budget" */
export enum Budget_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Budget_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Budget_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Budget_Set_Input>;
  where: Budget_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Budget_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Budget" */
export type Budget_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Budget_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Budget" */
export type Budget_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Budget_Variance_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Budget" */
export type Budget_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** columns and relationships of "Calendar" */
export type Calendar = {
  /** An object relationship */
  Project: Project;
  /** An object relationship */
  User: User;
  all_day: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  end_date: Scalars['date'];
  id: Scalars['uuid'];
  project_id: Scalars['uuid'];
  start_date: Scalars['date'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "Calendar" */
export type Calendar_Aggregate = {
  aggregate?: Maybe<Calendar_Aggregate_Fields>;
  nodes: Array<Calendar>;
};

export type Calendar_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Calendar_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Calendar_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Calendar_Aggregate_Bool_Exp_Count>;
};

export type Calendar_Aggregate_Bool_Exp_Bool_And = {
  arguments: Calendar_Select_Column_Calendar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Calendar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Calendar_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Calendar_Select_Column_Calendar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Calendar_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Calendar_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Calendar_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Calendar" */
export type Calendar_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<Calendar_Max_Fields>;
  min?: Maybe<Calendar_Min_Fields>;
};


/** aggregate fields of "Calendar" */
export type Calendar_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Calendar_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Calendar" */
export type Calendar_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Calendar_Max_Order_By>;
  min?: InputMaybe<Calendar_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Calendar" */
export type Calendar_Arr_Rel_Insert_Input = {
  data: Array<Calendar_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Calendar_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Calendar". All fields are combined with a logical 'AND'. */
export type Calendar_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Calendar_Bool_Exp>>;
  _not?: InputMaybe<Calendar_Bool_Exp>;
  _or?: InputMaybe<Array<Calendar_Bool_Exp>>;
  all_day?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Calendar" */
export enum Calendar_Constraint {
  /** unique or primary key constraint on columns "id" */
  CalendarPkey = 'Calendar_pkey'
}

/** input type for inserting data into table "Calendar" */
export type Calendar_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  all_day?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Calendar_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Calendar" */
export type Calendar_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Calendar_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Calendar" */
export type Calendar_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Calendar" */
export type Calendar_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Calendar>;
};

/** on_conflict condition type for table "Calendar" */
export type Calendar_On_Conflict = {
  constraint: Calendar_Constraint;
  update_columns?: Array<Calendar_Update_Column>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};

/** Ordering options when selecting data from "Calendar". */
export type Calendar_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  User?: InputMaybe<User_Order_By>;
  all_day?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Calendar */
export type Calendar_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Calendar" */
export enum Calendar_Select_Column {
  /** column name */
  AllDay = 'all_day',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "Calendar_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Calendar" */
export enum Calendar_Select_Column_Calendar_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  AllDay = 'all_day'
}

/** select "Calendar_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Calendar" */
export enum Calendar_Select_Column_Calendar_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  AllDay = 'all_day'
}

/** input type for updating data in table "Calendar" */
export type Calendar_Set_Input = {
  all_day?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "Calendar" */
export type Calendar_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Calendar_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Calendar_Stream_Cursor_Value_Input = {
  all_day?: InputMaybe<Scalars['Boolean']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  start_date?: InputMaybe<Scalars['date']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "Calendar" */
export enum Calendar_Update_Column {
  /** column name */
  AllDay = 'all_day',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Calendar_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Calendar_Set_Input>;
  where: Calendar_Bool_Exp;
};

/** columns and relationships of "Cost" */
export type Cost = {
  /** An object relationship */
  Project: Project;
  /** An object relationship */
  User: User;
  amount: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  project_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "Cost" */
export type Cost_Aggregate = {
  aggregate?: Maybe<Cost_Aggregate_Fields>;
  nodes: Array<Cost>;
};

export type Cost_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cost_Aggregate_Bool_Exp_Count>;
};

export type Cost_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cost_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Cost_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Cost" */
export type Cost_Aggregate_Fields = {
  avg?: Maybe<Cost_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cost_Max_Fields>;
  min?: Maybe<Cost_Min_Fields>;
  stddev?: Maybe<Cost_Stddev_Fields>;
  stddev_pop?: Maybe<Cost_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cost_Stddev_Samp_Fields>;
  sum?: Maybe<Cost_Sum_Fields>;
  var_pop?: Maybe<Cost_Var_Pop_Fields>;
  var_samp?: Maybe<Cost_Var_Samp_Fields>;
  variance?: Maybe<Cost_Variance_Fields>;
};


/** aggregate fields of "Cost" */
export type Cost_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cost_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Cost" */
export type Cost_Aggregate_Order_By = {
  avg?: InputMaybe<Cost_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cost_Max_Order_By>;
  min?: InputMaybe<Cost_Min_Order_By>;
  stddev?: InputMaybe<Cost_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cost_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cost_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cost_Sum_Order_By>;
  var_pop?: InputMaybe<Cost_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cost_Var_Samp_Order_By>;
  variance?: InputMaybe<Cost_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Cost" */
export type Cost_Arr_Rel_Insert_Input = {
  data: Array<Cost_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cost_On_Conflict>;
};

/** aggregate avg on columns */
export type Cost_Avg_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Cost" */
export type Cost_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Cost". All fields are combined with a logical 'AND'. */
export type Cost_Bool_Exp = {
  Project?: InputMaybe<Project_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Cost_Bool_Exp>>;
  _not?: InputMaybe<Cost_Bool_Exp>;
  _or?: InputMaybe<Array<Cost_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Cost" */
export enum Cost_Constraint {
  /** unique or primary key constraint on columns "id" */
  CostPkey = 'Cost_pkey'
}

/** input type for incrementing numeric columns in table "Cost" */
export type Cost_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Cost" */
export type Cost_Insert_Input = {
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cost_Max_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Cost" */
export type Cost_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cost_Min_Fields = {
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Cost" */
export type Cost_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Cost" */
export type Cost_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cost>;
};

/** on_conflict condition type for table "Cost" */
export type Cost_On_Conflict = {
  constraint: Cost_Constraint;
  update_columns?: Array<Cost_Update_Column>;
  where?: InputMaybe<Cost_Bool_Exp>;
};

/** Ordering options when selecting data from "Cost". */
export type Cost_Order_By = {
  Project?: InputMaybe<Project_Order_By>;
  User?: InputMaybe<User_Order_By>;
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Cost */
export type Cost_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Cost" */
export enum Cost_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Cost" */
export type Cost_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Cost_Stddev_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Cost" */
export type Cost_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cost_Stddev_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Cost" */
export type Cost_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cost_Stddev_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Cost" */
export type Cost_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Cost" */
export type Cost_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cost_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cost_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Cost_Sum_Fields = {
  amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Cost" */
export type Cost_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** update columns of table "Cost" */
export enum Cost_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Cost_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cost_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cost_Set_Input>;
  where: Cost_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cost_Var_Pop_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Cost" */
export type Cost_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cost_Var_Samp_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Cost" */
export type Cost_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cost_Variance_Fields = {
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Cost" */
export type Cost_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Member" */
export type Member = {
  /** An array relationship */
  ProjectMembers: Array<ProjectMember>;
  /** An aggregate relationship */
  ProjectMembers_aggregate: ProjectMember_Aggregate;
  /** An object relationship */
  User: User;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  full_name: Scalars['String'];
  hour_rate: Scalars['numeric'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  role: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "Member" */
export type MemberProjectMembersArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


/** columns and relationships of "Member" */
export type MemberProjectMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};

/** aggregated selection of "Member" */
export type Member_Aggregate = {
  aggregate?: Maybe<Member_Aggregate_Fields>;
  nodes: Array<Member>;
};

export type Member_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Member_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Member_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Member_Aggregate_Bool_Exp_Count>;
};

export type Member_Aggregate_Bool_Exp_Bool_And = {
  arguments: Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Member_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Member" */
export type Member_Aggregate_Fields = {
  avg?: Maybe<Member_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Member_Max_Fields>;
  min?: Maybe<Member_Min_Fields>;
  stddev?: Maybe<Member_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Sum_Fields>;
  var_pop?: Maybe<Member_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Var_Samp_Fields>;
  variance?: Maybe<Member_Variance_Fields>;
};


/** aggregate fields of "Member" */
export type Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Member" */
export type Member_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Max_Order_By>;
  min?: InputMaybe<Member_Min_Order_By>;
  stddev?: InputMaybe<Member_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Member" */
export type Member_Arr_Rel_Insert_Input = {
  data: Array<Member_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Avg_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Member" */
export type Member_Avg_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Member". All fields are combined with a logical 'AND'. */
export type Member_Bool_Exp = {
  ProjectMembers?: InputMaybe<ProjectMember_Bool_Exp>;
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Member_Bool_Exp>>;
  _not?: InputMaybe<Member_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  hour_rate?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Member" */
export enum Member_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberPkey = 'Member_pkey'
}

/** input type for incrementing numeric columns in table "Member" */
export type Member_Inc_Input = {
  hour_rate?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Member" */
export type Member_Insert_Input = {
  ProjectMembers?: InputMaybe<ProjectMember_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  full_name?: InputMaybe<Scalars['String']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Member_Max_Fields = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  full_name?: Maybe<Scalars['String']>;
  hour_rate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Member" */
export type Member_Max_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Min_Fields = {
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  full_name?: Maybe<Scalars['String']>;
  hour_rate?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Member" */
export type Member_Min_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Member" */
export type Member_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Member>;
};

/** input type for inserting object relation for remote table "Member" */
export type Member_Obj_Rel_Insert_Input = {
  data: Member_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_On_Conflict>;
};

/** on_conflict condition type for table "Member" */
export type Member_On_Conflict = {
  constraint: Member_Constraint;
  update_columns?: Array<Member_Update_Column>;
  where?: InputMaybe<Member_Bool_Exp>;
};

/** Ordering options when selecting data from "Member". */
export type Member_Order_By = {
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Order_By>;
  User?: InputMaybe<User_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Member */
export type Member_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Member" */
export enum Member_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  HourRate = 'hour_rate',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "Member_aggregate_bool_exp_bool_and_arguments_columns" columns of table "Member" */
export enum Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** select "Member_aggregate_bool_exp_bool_or_arguments_columns" columns of table "Member" */
export enum Member_Select_Column_Member_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActive = 'is_active'
}

/** input type for updating data in table "Member" */
export type Member_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  full_name?: InputMaybe<Scalars['String']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Member_Stddev_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Member" */
export type Member_Stddev_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Stddev_Pop_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Member" */
export type Member_Stddev_Pop_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Stddev_Samp_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Member" */
export type Member_Stddev_Samp_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Member" */
export type Member_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  full_name?: InputMaybe<Scalars['String']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Member_Sum_Fields = {
  hour_rate?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Member" */
export type Member_Sum_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** update columns of table "Member" */
export enum Member_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FullName = 'full_name',
  /** column name */
  HourRate = 'hour_rate',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Member_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Var_Pop_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Member" */
export type Member_Var_Pop_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Var_Samp_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Member" */
export type Member_Var_Samp_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Variance_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Member" */
export type Member_Variance_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
};

/** columns and relationships of "Project" */
export type Project = {
  /** An array relationship */
  Budgets: Array<Budget>;
  /** An aggregate relationship */
  Budgets_aggregate: Budget_Aggregate;
  /** An array relationship */
  Calendars: Array<Calendar>;
  /** An aggregate relationship */
  Calendars_aggregate: Calendar_Aggregate;
  /** An array relationship */
  Costs: Array<Cost>;
  /** An aggregate relationship */
  Costs_aggregate: Cost_Aggregate;
  /** An array relationship */
  ProjectMembers: Array<ProjectMember>;
  /** An aggregate relationship */
  ProjectMembers_aggregate: ProjectMember_Aggregate;
  /** An object relationship */
  StatusProject?: Maybe<StatusProject>;
  /** An object relationship */
  User: User;
  budget: Scalars['numeric'];
  cost: Scalars['numeric'];
  created_at: Scalars['timestamptz'];
  end_date: Scalars['date'];
  id: Scalars['uuid'];
  image_url?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  start_date: Scalars['date'];
  status_id?: Maybe<StatusProject_Enum>;
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};


/** columns and relationships of "Project" */
export type ProjectBudgetsArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectBudgets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectCalendarsArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectCalendars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectCostsArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectCosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectProjectMembersArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


/** columns and relationships of "Project" */
export type ProjectProjectMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};

/** columns and relationships of "ProjectMember" */
export type ProjectMember = {
  /** An object relationship */
  Member: Member;
  /** An object relationship */
  Project: Project;
  /** An object relationship */
  User: User;
  created_at: Scalars['timestamptz'];
  hour_rate: Scalars['numeric'];
  hour_working: Scalars['numeric'];
  id: Scalars['uuid'];
  member_id: Scalars['uuid'];
  project_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user_id: Scalars['uuid'];
};

/** aggregated selection of "ProjectMember" */
export type ProjectMember_Aggregate = {
  aggregate?: Maybe<ProjectMember_Aggregate_Fields>;
  nodes: Array<ProjectMember>;
};

export type ProjectMember_Aggregate_Bool_Exp = {
  count?: InputMaybe<ProjectMember_Aggregate_Bool_Exp_Count>;
};

export type ProjectMember_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<ProjectMember_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<ProjectMember_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ProjectMember" */
export type ProjectMember_Aggregate_Fields = {
  avg?: Maybe<ProjectMember_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<ProjectMember_Max_Fields>;
  min?: Maybe<ProjectMember_Min_Fields>;
  stddev?: Maybe<ProjectMember_Stddev_Fields>;
  stddev_pop?: Maybe<ProjectMember_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ProjectMember_Stddev_Samp_Fields>;
  sum?: Maybe<ProjectMember_Sum_Fields>;
  var_pop?: Maybe<ProjectMember_Var_Pop_Fields>;
  var_samp?: Maybe<ProjectMember_Var_Samp_Fields>;
  variance?: Maybe<ProjectMember_Variance_Fields>;
};


/** aggregate fields of "ProjectMember" */
export type ProjectMember_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectMember_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ProjectMember" */
export type ProjectMember_Aggregate_Order_By = {
  avg?: InputMaybe<ProjectMember_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<ProjectMember_Max_Order_By>;
  min?: InputMaybe<ProjectMember_Min_Order_By>;
  stddev?: InputMaybe<ProjectMember_Stddev_Order_By>;
  stddev_pop?: InputMaybe<ProjectMember_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<ProjectMember_Stddev_Samp_Order_By>;
  sum?: InputMaybe<ProjectMember_Sum_Order_By>;
  var_pop?: InputMaybe<ProjectMember_Var_Pop_Order_By>;
  var_samp?: InputMaybe<ProjectMember_Var_Samp_Order_By>;
  variance?: InputMaybe<ProjectMember_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ProjectMember" */
export type ProjectMember_Arr_Rel_Insert_Input = {
  data: Array<ProjectMember_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<ProjectMember_On_Conflict>;
};

/** aggregate avg on columns */
export type ProjectMember_Avg_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ProjectMember" */
export type ProjectMember_Avg_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ProjectMember". All fields are combined with a logical 'AND'. */
export type ProjectMember_Bool_Exp = {
  Member?: InputMaybe<Member_Bool_Exp>;
  Project?: InputMaybe<Project_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<ProjectMember_Bool_Exp>>;
  _not?: InputMaybe<ProjectMember_Bool_Exp>;
  _or?: InputMaybe<Array<ProjectMember_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  hour_rate?: InputMaybe<Numeric_Comparison_Exp>;
  hour_working?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  member_id?: InputMaybe<Uuid_Comparison_Exp>;
  project_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "ProjectMember" */
export enum ProjectMember_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectMemberPkey = 'ProjectMember_pkey'
}

/** input type for incrementing numeric columns in table "ProjectMember" */
export type ProjectMember_Inc_Input = {
  hour_rate?: InputMaybe<Scalars['numeric']>;
  hour_working?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "ProjectMember" */
export type ProjectMember_Insert_Input = {
  Member?: InputMaybe<Member_Obj_Rel_Insert_Input>;
  Project?: InputMaybe<Project_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  hour_working?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ProjectMember_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hour_rate?: Maybe<Scalars['numeric']>;
  hour_working?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ProjectMember" */
export type ProjectMember_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type ProjectMember_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  hour_rate?: Maybe<Scalars['numeric']>;
  hour_working?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['uuid']>;
  member_id?: Maybe<Scalars['uuid']>;
  project_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ProjectMember" */
export type ProjectMember_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ProjectMember" */
export type ProjectMember_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ProjectMember>;
};

/** on_conflict condition type for table "ProjectMember" */
export type ProjectMember_On_Conflict = {
  constraint: ProjectMember_Constraint;
  update_columns?: Array<ProjectMember_Update_Column>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};

/** Ordering options when selecting data from "ProjectMember". */
export type ProjectMember_Order_By = {
  Member?: InputMaybe<Member_Order_By>;
  Project?: InputMaybe<Project_Order_By>;
  User?: InputMaybe<User_Order_By>;
  created_at?: InputMaybe<Order_By>;
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ProjectMember */
export type ProjectMember_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ProjectMember" */
export enum ProjectMember_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HourRate = 'hour_rate',
  /** column name */
  HourWorking = 'hour_working',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "ProjectMember" */
export type ProjectMember_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  hour_working?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type ProjectMember_Stddev_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ProjectMember" */
export type ProjectMember_Stddev_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ProjectMember_Stddev_Pop_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ProjectMember" */
export type ProjectMember_Stddev_Pop_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ProjectMember_Stddev_Samp_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ProjectMember" */
export type ProjectMember_Stddev_Samp_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ProjectMember" */
export type ProjectMember_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ProjectMember_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectMember_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  hour_rate?: InputMaybe<Scalars['numeric']>;
  hour_working?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['uuid']>;
  member_id?: InputMaybe<Scalars['uuid']>;
  project_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type ProjectMember_Sum_Fields = {
  hour_rate?: Maybe<Scalars['numeric']>;
  hour_working?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "ProjectMember" */
export type ProjectMember_Sum_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** update columns of table "ProjectMember" */
export enum ProjectMember_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HourRate = 'hour_rate',
  /** column name */
  HourWorking = 'hour_working',
  /** column name */
  Id = 'id',
  /** column name */
  MemberId = 'member_id',
  /** column name */
  ProjectId = 'project_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type ProjectMember_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProjectMember_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProjectMember_Set_Input>;
  where: ProjectMember_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ProjectMember_Var_Pop_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ProjectMember" */
export type ProjectMember_Var_Pop_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ProjectMember_Var_Samp_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ProjectMember" */
export type ProjectMember_Var_Samp_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type ProjectMember_Variance_Fields = {
  hour_rate?: Maybe<Scalars['Float']>;
  hour_working?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ProjectMember" */
export type ProjectMember_Variance_Order_By = {
  hour_rate?: InputMaybe<Order_By>;
  hour_working?: InputMaybe<Order_By>;
};

/** aggregated selection of "Project" */
export type Project_Aggregate = {
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

export type Project_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Aggregate_Bool_Exp_Count>;
};

export type Project_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Project_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Project" */
export type Project_Aggregate_Fields = {
  avg?: Maybe<Project_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};


/** aggregate fields of "Project" */
export type Project_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Project" */
export type Project_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Max_Order_By>;
  min?: InputMaybe<Project_Min_Order_By>;
  stddev?: InputMaybe<Project_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Project" */
export type Project_Arr_Rel_Insert_Input = {
  data: Array<Project_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Avg_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Project" */
export type Project_Avg_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Project". All fields are combined with a logical 'AND'. */
export type Project_Bool_Exp = {
  Budgets?: InputMaybe<Budget_Bool_Exp>;
  Budgets_aggregate?: InputMaybe<Budget_Aggregate_Bool_Exp>;
  Calendars?: InputMaybe<Calendar_Bool_Exp>;
  Calendars_aggregate?: InputMaybe<Calendar_Aggregate_Bool_Exp>;
  Costs?: InputMaybe<Cost_Bool_Exp>;
  Costs_aggregate?: InputMaybe<Cost_Aggregate_Bool_Exp>;
  ProjectMembers?: InputMaybe<ProjectMember_Bool_Exp>;
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Bool_Exp>;
  StatusProject?: InputMaybe<StatusProject_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<Project_Bool_Exp>>;
  _not?: InputMaybe<Project_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Bool_Exp>>;
  budget?: InputMaybe<Numeric_Comparison_Exp>;
  cost?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  status_id?: InputMaybe<StatusProject_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "Project" */
export enum Project_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectPkey = 'Project_pkey'
}

/** input type for incrementing numeric columns in table "Project" */
export type Project_Inc_Input = {
  budget?: InputMaybe<Scalars['numeric']>;
  cost?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "Project" */
export type Project_Insert_Input = {
  Budgets?: InputMaybe<Budget_Arr_Rel_Insert_Input>;
  Calendars?: InputMaybe<Calendar_Arr_Rel_Insert_Input>;
  Costs?: InputMaybe<Cost_Arr_Rel_Insert_Input>;
  ProjectMembers?: InputMaybe<ProjectMember_Arr_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
  budget?: InputMaybe<Scalars['numeric']>;
  cost?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
  status_id?: InputMaybe<StatusProject_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Project_Max_Fields = {
  budget?: Maybe<Scalars['numeric']>;
  cost?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "Project" */
export type Project_Max_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Min_Fields = {
  budget?: Maybe<Scalars['numeric']>;
  cost?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  end_date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['date']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "Project" */
export type Project_Min_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Project" */
export type Project_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Project>;
};

/** input type for inserting object relation for remote table "Project" */
export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_On_Conflict>;
};

/** on_conflict condition type for table "Project" */
export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns?: Array<Project_Update_Column>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** Ordering options when selecting data from "Project". */
export type Project_Order_By = {
  Budgets_aggregate?: InputMaybe<Budget_Aggregate_Order_By>;
  Calendars_aggregate?: InputMaybe<Calendar_Aggregate_Order_By>;
  Costs_aggregate?: InputMaybe<Cost_Aggregate_Order_By>;
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Order_By>;
  StatusProject?: InputMaybe<StatusProject_Order_By>;
  User?: InputMaybe<User_Order_By>;
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Project */
export type Project_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Project" */
export enum Project_Select_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "Project" */
export type Project_Set_Input = {
  budget?: InputMaybe<Scalars['numeric']>;
  cost?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
  status_id?: InputMaybe<StatusProject_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Project_Stddev_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Project" */
export type Project_Stddev_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Stddev_Pop_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Project" */
export type Project_Stddev_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Stddev_Samp_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Project" */
export type Project_Stddev_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Project" */
export type Project_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Stream_Cursor_Value_Input = {
  budget?: InputMaybe<Scalars['numeric']>;
  cost?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  end_date?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_url?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['date']>;
  status_id?: InputMaybe<StatusProject_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Project_Sum_Fields = {
  budget?: Maybe<Scalars['numeric']>;
  cost?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "Project" */
export type Project_Sum_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** update columns of table "Project" */
export enum Project_Update_Column {
  /** column name */
  Budget = 'budget',
  /** column name */
  Cost = 'cost',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Project_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Project_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Var_Pop_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Project" */
export type Project_Var_Pop_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Var_Samp_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Project" */
export type Project_Var_Samp_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Variance_Fields = {
  budget?: Maybe<Scalars['Float']>;
  cost?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Project" */
export type Project_Variance_Order_By = {
  budget?: InputMaybe<Order_By>;
  cost?: InputMaybe<Order_By>;
};

/** columns and relationships of "StatusProject" */
export type StatusProject = {
  /** An array relationship */
  Projects: Array<Project>;
  /** An aggregate relationship */
  Projects_aggregate: Project_Aggregate;
  id: Scalars['String'];
};


/** columns and relationships of "StatusProject" */
export type StatusProjectProjectsArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


/** columns and relationships of "StatusProject" */
export type StatusProjectProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** aggregated selection of "StatusProject" */
export type StatusProject_Aggregate = {
  aggregate?: Maybe<StatusProject_Aggregate_Fields>;
  nodes: Array<StatusProject>;
};

/** aggregate fields of "StatusProject" */
export type StatusProject_Aggregate_Fields = {
  count: Scalars['Int'];
  max?: Maybe<StatusProject_Max_Fields>;
  min?: Maybe<StatusProject_Min_Fields>;
};


/** aggregate fields of "StatusProject" */
export type StatusProject_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<StatusProject_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "StatusProject". All fields are combined with a logical 'AND'. */
export type StatusProject_Bool_Exp = {
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<StatusProject_Bool_Exp>>;
  _not?: InputMaybe<StatusProject_Bool_Exp>;
  _or?: InputMaybe<Array<StatusProject_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

export enum StatusProject_Enum {
  Bidding = 'Bidding',
  Done = 'Done',
  Failed = 'Failed',
  InProgress = 'In_Progress'
}

/** Boolean expression to compare columns of type "StatusProject_enum". All fields are combined with logical 'AND'. */
export type StatusProject_Enum_Comparison_Exp = {
  _eq?: InputMaybe<StatusProject_Enum>;
  _in?: InputMaybe<Array<StatusProject_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<StatusProject_Enum>;
  _nin?: InputMaybe<Array<StatusProject_Enum>>;
};

/** aggregate max on columns */
export type StatusProject_Max_Fields = {
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type StatusProject_Min_Fields = {
  id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "StatusProject". */
export type StatusProject_Order_By = {
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
};

/** select columns of table "StatusProject" */
export enum StatusProject_Select_Column {
  /** column name */
  Id = 'id'
}

/** Streaming cursor of the table "StatusProject" */
export type StatusProject_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: StatusProject_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type StatusProject_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  /** An array relationship */
  Budgets: Array<Budget>;
  /** An aggregate relationship */
  Budgets_aggregate: Budget_Aggregate;
  /** An array relationship */
  Calendars: Array<Calendar>;
  /** An aggregate relationship */
  Calendars_aggregate: Calendar_Aggregate;
  /** An array relationship */
  Costs: Array<Cost>;
  /** An aggregate relationship */
  Costs_aggregate: Cost_Aggregate;
  /** An array relationship */
  Members: Array<Member>;
  /** An aggregate relationship */
  Members_aggregate: Member_Aggregate;
  /** An array relationship */
  ProjectMembers: Array<ProjectMember>;
  /** An aggregate relationship */
  ProjectMembers_aggregate: ProjectMember_Aggregate;
  /** An array relationship */
  Projects: Array<Project>;
  /** An aggregate relationship */
  Projects_aggregate: Project_Aggregate;
  amount_premium?: Maybe<Scalars['numeric']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  is_admin: Scalars['Boolean'];
  is_premium: Scalars['Boolean'];
  uid: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "User" */
export type UserBudgetsArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserBudgets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCalendarsArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCalendars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCostsArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserCosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMembersArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserProjectMembersArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserProjectMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserProjectsArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


/** columns and relationships of "User" */
export type UserProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};

/** aggregated selection of "User" */
export type User_Aggregate = {
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Budgets?: InputMaybe<Budget_Bool_Exp>;
  Budgets_aggregate?: InputMaybe<Budget_Aggregate_Bool_Exp>;
  Calendars?: InputMaybe<Calendar_Bool_Exp>;
  Calendars_aggregate?: InputMaybe<Calendar_Aggregate_Bool_Exp>;
  Costs?: InputMaybe<Cost_Bool_Exp>;
  Costs_aggregate?: InputMaybe<Cost_Aggregate_Bool_Exp>;
  Members?: InputMaybe<Member_Bool_Exp>;
  Members_aggregate?: InputMaybe<Member_Aggregate_Bool_Exp>;
  ProjectMembers?: InputMaybe<ProjectMember_Bool_Exp>;
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Bool_Exp>;
  Projects?: InputMaybe<Project_Bool_Exp>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  amount_premium?: InputMaybe<Numeric_Comparison_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  full_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_premium?: InputMaybe<Boolean_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey',
  /** unique or primary key constraint on columns "uid" */
  UserUidKey = 'User_uid_key'
}

/** input type for incrementing numeric columns in table "User" */
export type User_Inc_Input = {
  amount_premium?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Budgets?: InputMaybe<Budget_Arr_Rel_Insert_Input>;
  Calendars?: InputMaybe<Calendar_Arr_Rel_Insert_Input>;
  Costs?: InputMaybe<Cost_Arr_Rel_Insert_Input>;
  Members?: InputMaybe<Member_Arr_Rel_Insert_Input>;
  ProjectMembers?: InputMaybe<ProjectMember_Arr_Rel_Insert_Input>;
  Projects?: InputMaybe<Project_Arr_Rel_Insert_Input>;
  amount_premium?: InputMaybe<Scalars['numeric']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_premium?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  amount_premium?: Maybe<Scalars['numeric']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  amount_premium?: Maybe<Scalars['numeric']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Budgets_aggregate?: InputMaybe<Budget_Aggregate_Order_By>;
  Calendars_aggregate?: InputMaybe<Calendar_Aggregate_Order_By>;
  Costs_aggregate?: InputMaybe<Cost_Aggregate_Order_By>;
  Members_aggregate?: InputMaybe<Member_Aggregate_Order_By>;
  ProjectMembers_aggregate?: InputMaybe<ProjectMember_Aggregate_Order_By>;
  Projects_aggregate?: InputMaybe<Project_Aggregate_Order_By>;
  amount_premium?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  full_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  is_premium?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  AmountPremium = 'amount_premium',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsPremium = 'is_premium',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "User" */
export type User_Set_Input = {
  amount_premium?: InputMaybe<Scalars['numeric']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_premium?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  amount_premium?: InputMaybe<Scalars['numeric']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  full_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_premium?: InputMaybe<Scalars['Boolean']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  amount_premium?: Maybe<Scalars['numeric']>;
};

/** update columns of table "User" */
export enum User_Update_Column {
  /** column name */
  AmountPremium = 'amount_premium',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Email = 'email',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsPremium = 'is_premium',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  amount_premium?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "Budget" */
  delete_Budget?: Maybe<Budget_Mutation_Response>;
  /** delete single row from the table: "Budget" */
  delete_Budget_by_pk?: Maybe<Budget>;
  /** delete data from the table: "Calendar" */
  delete_Calendar?: Maybe<Calendar_Mutation_Response>;
  /** delete single row from the table: "Calendar" */
  delete_Calendar_by_pk?: Maybe<Calendar>;
  /** delete data from the table: "Cost" */
  delete_Cost?: Maybe<Cost_Mutation_Response>;
  /** delete single row from the table: "Cost" */
  delete_Cost_by_pk?: Maybe<Cost>;
  /** delete data from the table: "Member" */
  delete_Member?: Maybe<Member_Mutation_Response>;
  /** delete single row from the table: "Member" */
  delete_Member_by_pk?: Maybe<Member>;
  /** delete data from the table: "Project" */
  delete_Project?: Maybe<Project_Mutation_Response>;
  /** delete data from the table: "ProjectMember" */
  delete_ProjectMember?: Maybe<ProjectMember_Mutation_Response>;
  /** delete single row from the table: "ProjectMember" */
  delete_ProjectMember_by_pk?: Maybe<ProjectMember>;
  /** delete single row from the table: "Project" */
  delete_Project_by_pk?: Maybe<Project>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** insert data into the table: "Budget" */
  insert_Budget?: Maybe<Budget_Mutation_Response>;
  /** insert a single row into the table: "Budget" */
  insert_Budget_one?: Maybe<Budget>;
  /** insert data into the table: "Calendar" */
  insert_Calendar?: Maybe<Calendar_Mutation_Response>;
  /** insert a single row into the table: "Calendar" */
  insert_Calendar_one?: Maybe<Calendar>;
  /** insert data into the table: "Cost" */
  insert_Cost?: Maybe<Cost_Mutation_Response>;
  /** insert a single row into the table: "Cost" */
  insert_Cost_one?: Maybe<Cost>;
  /** insert data into the table: "Member" */
  insert_Member?: Maybe<Member_Mutation_Response>;
  /** insert a single row into the table: "Member" */
  insert_Member_one?: Maybe<Member>;
  /** insert data into the table: "Project" */
  insert_Project?: Maybe<Project_Mutation_Response>;
  /** insert data into the table: "ProjectMember" */
  insert_ProjectMember?: Maybe<ProjectMember_Mutation_Response>;
  /** insert a single row into the table: "ProjectMember" */
  insert_ProjectMember_one?: Maybe<ProjectMember>;
  /** insert a single row into the table: "Project" */
  insert_Project_one?: Maybe<Project>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** update data of the table: "Budget" */
  update_Budget?: Maybe<Budget_Mutation_Response>;
  /** update single row of the table: "Budget" */
  update_Budget_by_pk?: Maybe<Budget>;
  /** update multiples rows of table: "Budget" */
  update_Budget_many?: Maybe<Array<Maybe<Budget_Mutation_Response>>>;
  /** update data of the table: "Calendar" */
  update_Calendar?: Maybe<Calendar_Mutation_Response>;
  /** update single row of the table: "Calendar" */
  update_Calendar_by_pk?: Maybe<Calendar>;
  /** update multiples rows of table: "Calendar" */
  update_Calendar_many?: Maybe<Array<Maybe<Calendar_Mutation_Response>>>;
  /** update data of the table: "Cost" */
  update_Cost?: Maybe<Cost_Mutation_Response>;
  /** update single row of the table: "Cost" */
  update_Cost_by_pk?: Maybe<Cost>;
  /** update multiples rows of table: "Cost" */
  update_Cost_many?: Maybe<Array<Maybe<Cost_Mutation_Response>>>;
  /** update data of the table: "Member" */
  update_Member?: Maybe<Member_Mutation_Response>;
  /** update single row of the table: "Member" */
  update_Member_by_pk?: Maybe<Member>;
  /** update multiples rows of table: "Member" */
  update_Member_many?: Maybe<Array<Maybe<Member_Mutation_Response>>>;
  /** update data of the table: "Project" */
  update_Project?: Maybe<Project_Mutation_Response>;
  /** update data of the table: "ProjectMember" */
  update_ProjectMember?: Maybe<ProjectMember_Mutation_Response>;
  /** update single row of the table: "ProjectMember" */
  update_ProjectMember_by_pk?: Maybe<ProjectMember>;
  /** update multiples rows of table: "ProjectMember" */
  update_ProjectMember_many?: Maybe<Array<Maybe<ProjectMember_Mutation_Response>>>;
  /** update single row of the table: "Project" */
  update_Project_by_pk?: Maybe<Project>;
  /** update multiples rows of table: "Project" */
  update_Project_many?: Maybe<Array<Maybe<Project_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BudgetArgs = {
  where: Budget_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Budget_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CalendarArgs = {
  where: Calendar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Calendar_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CostArgs = {
  where: Cost_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cost_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MemberArgs = {
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProjectMemberArgs = {
  where: ProjectMember_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ProjectMember_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Project_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_BudgetArgs = {
  objects: Array<Budget_Insert_Input>;
  on_conflict?: InputMaybe<Budget_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Budget_OneArgs = {
  object: Budget_Insert_Input;
  on_conflict?: InputMaybe<Budget_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CalendarArgs = {
  objects: Array<Calendar_Insert_Input>;
  on_conflict?: InputMaybe<Calendar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Calendar_OneArgs = {
  object: Calendar_Insert_Input;
  on_conflict?: InputMaybe<Calendar_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CostArgs = {
  objects: Array<Cost_Insert_Input>;
  on_conflict?: InputMaybe<Cost_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cost_OneArgs = {
  object: Cost_Insert_Input;
  on_conflict?: InputMaybe<Cost_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MemberArgs = {
  objects: Array<Member_Insert_Input>;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OneArgs = {
  object: Member_Insert_Input;
  on_conflict?: InputMaybe<Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectMemberArgs = {
  objects: Array<ProjectMember_Insert_Input>;
  on_conflict?: InputMaybe<ProjectMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectMember_OneArgs = {
  object: ProjectMember_Insert_Input;
  on_conflict?: InputMaybe<ProjectMember_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_OneArgs = {
  object: Project_Insert_Input;
  on_conflict?: InputMaybe<Project_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BudgetArgs = {
  _inc?: InputMaybe<Budget_Inc_Input>;
  _set?: InputMaybe<Budget_Set_Input>;
  where: Budget_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Budget_By_PkArgs = {
  _inc?: InputMaybe<Budget_Inc_Input>;
  _set?: InputMaybe<Budget_Set_Input>;
  pk_columns: Budget_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Budget_ManyArgs = {
  updates: Array<Budget_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CalendarArgs = {
  _set?: InputMaybe<Calendar_Set_Input>;
  where: Calendar_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Calendar_By_PkArgs = {
  _set?: InputMaybe<Calendar_Set_Input>;
  pk_columns: Calendar_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Calendar_ManyArgs = {
  updates: Array<Calendar_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CostArgs = {
  _inc?: InputMaybe<Cost_Inc_Input>;
  _set?: InputMaybe<Cost_Set_Input>;
  where: Cost_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cost_By_PkArgs = {
  _inc?: InputMaybe<Cost_Inc_Input>;
  _set?: InputMaybe<Cost_Set_Input>;
  pk_columns: Cost_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cost_ManyArgs = {
  updates: Array<Cost_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MemberArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  where: Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_By_PkArgs = {
  _inc?: InputMaybe<Member_Inc_Input>;
  _set?: InputMaybe<Member_Set_Input>;
  pk_columns: Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_ManyArgs = {
  updates: Array<Member_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectMemberArgs = {
  _inc?: InputMaybe<ProjectMember_Inc_Input>;
  _set?: InputMaybe<ProjectMember_Set_Input>;
  where: ProjectMember_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectMember_By_PkArgs = {
  _inc?: InputMaybe<ProjectMember_Inc_Input>;
  _set?: InputMaybe<ProjectMember_Set_Input>;
  pk_columns: ProjectMember_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectMember_ManyArgs = {
  updates: Array<ProjectMember_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_By_PkArgs = {
  _inc?: InputMaybe<Project_Inc_Input>;
  _set?: InputMaybe<Project_Set_Input>;
  pk_columns: Project_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_ManyArgs = {
  updates: Array<Project_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  /** fetch data from the table: "Budget" */
  Budget: Array<Budget>;
  /** fetch aggregated fields from the table: "Budget" */
  Budget_aggregate: Budget_Aggregate;
  /** fetch data from the table: "Budget" using primary key columns */
  Budget_by_pk?: Maybe<Budget>;
  /** fetch data from the table: "Calendar" */
  Calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "Calendar" */
  Calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "Calendar" using primary key columns */
  Calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table: "Cost" */
  Cost: Array<Cost>;
  /** fetch aggregated fields from the table: "Cost" */
  Cost_aggregate: Cost_Aggregate;
  /** fetch data from the table: "Cost" using primary key columns */
  Cost_by_pk?: Maybe<Cost>;
  /** fetch data from the table: "Member" */
  Member: Array<Member>;
  /** fetch aggregated fields from the table: "Member" */
  Member_aggregate: Member_Aggregate;
  /** fetch data from the table: "Member" using primary key columns */
  Member_by_pk?: Maybe<Member>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectMember" */
  ProjectMember: Array<ProjectMember>;
  /** fetch aggregated fields from the table: "ProjectMember" */
  ProjectMember_aggregate: ProjectMember_Aggregate;
  /** fetch data from the table: "ProjectMember" using primary key columns */
  ProjectMember_by_pk?: Maybe<ProjectMember>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table: "StatusProject" */
  StatusProject: Array<StatusProject>;
  /** fetch aggregated fields from the table: "StatusProject" */
  StatusProject_aggregate: StatusProject_Aggregate;
  /** fetch data from the table: "StatusProject" using primary key columns */
  StatusProject_by_pk?: Maybe<StatusProject>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
};


export type Query_RootBudgetArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


export type Query_RootBudget_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


export type Query_RootBudget_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCalendarArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Query_RootCalendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Query_RootCalendar_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCostArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


export type Query_RootCost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


export type Query_RootCost_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Query_RootMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProjectMemberArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


export type Query_RootProjectMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


export type Query_RootProjectMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootStatusProjectArgs = {
  distinct_on?: InputMaybe<Array<StatusProject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StatusProject_Order_By>>;
  where?: InputMaybe<StatusProject_Bool_Exp>;
};


export type Query_RootStatusProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StatusProject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StatusProject_Order_By>>;
  where?: InputMaybe<StatusProject_Bool_Exp>;
};


export type Query_RootStatusProject_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  /** fetch data from the table: "Budget" */
  Budget: Array<Budget>;
  /** fetch aggregated fields from the table: "Budget" */
  Budget_aggregate: Budget_Aggregate;
  /** fetch data from the table: "Budget" using primary key columns */
  Budget_by_pk?: Maybe<Budget>;
  /** fetch data from the table in a streaming manner: "Budget" */
  Budget_stream: Array<Budget>;
  /** fetch data from the table: "Calendar" */
  Calendar: Array<Calendar>;
  /** fetch aggregated fields from the table: "Calendar" */
  Calendar_aggregate: Calendar_Aggregate;
  /** fetch data from the table: "Calendar" using primary key columns */
  Calendar_by_pk?: Maybe<Calendar>;
  /** fetch data from the table in a streaming manner: "Calendar" */
  Calendar_stream: Array<Calendar>;
  /** fetch data from the table: "Cost" */
  Cost: Array<Cost>;
  /** fetch aggregated fields from the table: "Cost" */
  Cost_aggregate: Cost_Aggregate;
  /** fetch data from the table: "Cost" using primary key columns */
  Cost_by_pk?: Maybe<Cost>;
  /** fetch data from the table in a streaming manner: "Cost" */
  Cost_stream: Array<Cost>;
  /** fetch data from the table: "Member" */
  Member: Array<Member>;
  /** fetch aggregated fields from the table: "Member" */
  Member_aggregate: Member_Aggregate;
  /** fetch data from the table: "Member" using primary key columns */
  Member_by_pk?: Maybe<Member>;
  /** fetch data from the table in a streaming manner: "Member" */
  Member_stream: Array<Member>;
  /** fetch data from the table: "Project" */
  Project: Array<Project>;
  /** fetch data from the table: "ProjectMember" */
  ProjectMember: Array<ProjectMember>;
  /** fetch aggregated fields from the table: "ProjectMember" */
  ProjectMember_aggregate: ProjectMember_Aggregate;
  /** fetch data from the table: "ProjectMember" using primary key columns */
  ProjectMember_by_pk?: Maybe<ProjectMember>;
  /** fetch data from the table in a streaming manner: "ProjectMember" */
  ProjectMember_stream: Array<ProjectMember>;
  /** fetch aggregated fields from the table: "Project" */
  Project_aggregate: Project_Aggregate;
  /** fetch data from the table: "Project" using primary key columns */
  Project_by_pk?: Maybe<Project>;
  /** fetch data from the table in a streaming manner: "Project" */
  Project_stream: Array<Project>;
  /** fetch data from the table: "StatusProject" */
  StatusProject: Array<StatusProject>;
  /** fetch aggregated fields from the table: "StatusProject" */
  StatusProject_aggregate: StatusProject_Aggregate;
  /** fetch data from the table: "StatusProject" using primary key columns */
  StatusProject_by_pk?: Maybe<StatusProject>;
  /** fetch data from the table in a streaming manner: "StatusProject" */
  StatusProject_stream: Array<StatusProject>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
};


export type Subscription_RootBudgetArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


export type Subscription_RootBudget_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Budget_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Budget_Order_By>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


export type Subscription_RootBudget_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootBudget_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Budget_Stream_Cursor_Input>>;
  where?: InputMaybe<Budget_Bool_Exp>;
};


export type Subscription_RootCalendarArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCalendar_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Calendar_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Calendar_Order_By>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCalendar_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCalendar_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Calendar_Stream_Cursor_Input>>;
  where?: InputMaybe<Calendar_Bool_Exp>;
};


export type Subscription_RootCostArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


export type Subscription_RootCost_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cost_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cost_Order_By>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


export type Subscription_RootCost_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCost_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cost_Stream_Cursor_Input>>;
  where?: InputMaybe<Cost_Bool_Exp>;
};


export type Subscription_RootMemberArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Member_Order_By>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMember_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Member_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Bool_Exp>;
};


export type Subscription_RootProjectArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProjectMemberArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


export type Subscription_RootProjectMember_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ProjectMember_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<ProjectMember_Order_By>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


export type Subscription_RootProjectMember_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProjectMember_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<ProjectMember_Stream_Cursor_Input>>;
  where?: InputMaybe<ProjectMember_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Project_Order_By>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProject_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Project_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Bool_Exp>;
};


export type Subscription_RootStatusProjectArgs = {
  distinct_on?: InputMaybe<Array<StatusProject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StatusProject_Order_By>>;
  where?: InputMaybe<StatusProject_Bool_Exp>;
};


export type Subscription_RootStatusProject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<StatusProject_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<StatusProject_Order_By>>;
  where?: InputMaybe<StatusProject_Bool_Exp>;
};


export type Subscription_RootStatusProject_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootStatusProject_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<StatusProject_Stream_Cursor_Input>>;
  where?: InputMaybe<StatusProject_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddBudgetProjectMutationVariables = Exact<{
  input: Budget_Insert_Input;
}>;


export type AddBudgetProjectMutation = { insert_Budget_one?: { name: string, Project: { name: string } } | null };

export type AddCalendarOneMutationVariables = Exact<{
  input: Calendar_Insert_Input;
}>;


export type AddCalendarOneMutation = { insert_Calendar_one?: { id: any } | null };

export type AddCostMutationVariables = Exact<{
  input: Cost_Insert_Input;
}>;


export type AddCostMutation = { insert_Cost_one?: { id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any } | null };

export type AddMemberMutationVariables = Exact<{
  input: Member_Insert_Input;
}>;


export type AddMemberMutation = { insert_Member_one?: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } | null };

export type AddProjectMutationVariables = Exact<{
  input: Project_Insert_Input;
}>;


export type AddProjectMutation = { insert_Project_one?: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> } | null };

export type AddProjectMemberMutationVariables = Exact<{
  project_id: Scalars['uuid'];
  member_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
  hour_working: Scalars['numeric'];
  hour_rate: Scalars['numeric'];
}>;


export type AddProjectMemberMutation = { insert_ProjectMember_one?: { created_at: any, hour_rate: any, hour_working: any, id: any, member_id: any, project_id: any, updated_at: any, user_id: any, Project: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }, User: { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean } } | null };

export type DeleteAccountMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteAccountMutation = { delete_User_by_pk?: { id: any } | null };

export type GetListProjectMemberQueryVariables = Exact<{
  project_id: Scalars['uuid'];
}>;


export type GetListProjectMemberQuery = { ProjectMember: Array<{ created_at: any, hour_rate: any, hour_working: any, id: any, member_id: any, project_id: any, updated_at: any, user_id: any, Project: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }, User: { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean } }> };

export type GetMeQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetMeQuery = { User: Array<{ id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean }> };

export type GetProjectQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  user_id: Scalars['uuid'];
  _ilike?: InputMaybe<Scalars['String']>;
}>;


export type GetProjectQuery = { projects: Array<{ id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }>, all_projects: Array<{ id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }> };

export type GetProjectByUserIdQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  userId: Scalars['uuid'];
}>;


export type GetProjectByUserIdQuery = { Project: Array<{ id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }> };

export type GetProjectDetailsByIdQueryVariables = Exact<{
  uuid: Scalars['uuid'];
  user_id: Scalars['uuid'];
}>;


export type GetProjectDetailsByIdQuery = { Project: Array<{ id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }>, all_members: Array<{ id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }> };

export type GetTeamMemberQueryVariables = Exact<{
  user_id: Scalars['uuid'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  _ilike: Scalars['String'];
}>;


export type GetTeamMemberQuery = { members: Array<{ id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }>, all_members: Array<{ id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }> };

export type GetUserGeneralQueryVariables = Exact<{
  _ilike: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  user_id: Scalars['uuid'];
}>;


export type GetUserGeneralQuery = { in_progress_projects: Array<{ id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }>, all_in_progress_project: { aggregate?: { count: number } | null }, calendars: Array<{ id: any, project_id: any, description: string, all_day: boolean, start_date: any, end_date: any }>, all_project: { aggregate?: { count: number } | null }, total_budget: { aggregate?: { sum?: { amount?: any | null } | null } | null }, total_cost: { aggregate?: { sum?: { amount?: any | null } | null } | null }, project_members: Array<{ created_at: any, hour_rate: any, hour_working: any, id: any, member_id: any, project_id: any, updated_at: any, user_id: any, Project: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }, User: { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean } }> };

export type RemoveBudgetMutationVariables = Exact<{
  _id: Scalars['uuid'];
}>;


export type RemoveBudgetMutation = { delete_Budget_by_pk?: { id: any } | null };

export type RemoveCostMutationVariables = Exact<{
  _id: Scalars['uuid'];
}>;


export type RemoveCostMutation = { delete_Cost_by_pk?: { id: any } | null };

export type RemoveProjectMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type RemoveProjectMutation = { delete_Project_by_pk?: { name: string } | null };

export type RemoveProjectMemberMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type RemoveProjectMemberMutation = { delete_ProjectMember_by_pk?: { id: any } | null };

export type UpdateBudgetListMutationVariables = Exact<{
  updates: Array<Budget_Updates> | Budget_Updates;
}>;


export type UpdateBudgetListMutation = { update_Budget_many?: Array<{ affected_rows: number, returning: Array<{ name: string }> } | null> | null };

export type UpdateMemberMutationVariables = Exact<{
  id: Scalars['uuid'];
  input: Member_Set_Input;
}>;


export type UpdateMemberMutation = { update_Member_by_pk?: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } | null };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['uuid'];
  _set: Project_Set_Input;
}>;


export type UpdateProjectMutation = { update_Project_by_pk?: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> } | null };

export type UpdateProjectMemberListMutationVariables = Exact<{
  updates: Array<ProjectMember_Updates> | ProjectMember_Updates;
}>;


export type UpdateProjectMemberListMutation = { update_ProjectMember_many?: Array<{ affected_rows: number, returning: Array<{ project_id: any }> } | null> | null };

export type UpdateUserMutationVariables = Exact<{
  full_name?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  amount_premium?: InputMaybe<Scalars['numeric']>;
  id: Scalars['uuid'];
}>;


export type UpdateUserMutation = { update_User_by_pk?: { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean } | null };

export type BudgetFragment = { id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any };

export type CalendarFragment = { id: any, project_id: any, description: string, all_day: boolean, start_date: any, end_date: any };

export type CostFragment = { id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any };

export type MemberFragment = { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> };

export type ProjectFragment = { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> };

export type ProjectMemberFragment = { created_at: any, hour_rate: any, hour_working: any, id: any, member_id: any, project_id: any, updated_at: any, user_id: any, Project: { id: any, name: string, budget: any, cost: any, start_date: any, end_date: any, image_url?: string | null, status_id?: StatusProject_Enum | null, user_id: any, Costs: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, Budgets: Array<{ id: any, name: string, amount: any, project_id: any, created_at: any, updated_at: any }>, ProjectMembers: Array<{ hour_working: any, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> } }> }, Member: { id: any, avatar_url?: string | null, full_name: string, hour_rate: any, role: string, is_active: boolean, user_id: any, ProjectMembers: Array<{ user_id: any, updated_at: any, project_id: any, member_id: any, hour_rate: any, created_at: any, id: any, hour_working: any }> }, User: { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean } };

export type StatusProjectFragment = { id: string };

export type UserFragment = { id: any, uid: string, full_name?: string | null, email: string, description?: string | null, avatar_url?: string | null, amount_premium?: any | null, is_active: boolean, is_admin: boolean, is_premium: boolean };

export type UpdateCostByIdMutationVariables = Exact<{
  id: Scalars['uuid'];
  amount: Scalars['numeric'];
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateCostByIdMutation = { update_Cost_by_pk?: { name: string, amount: any } | null };

export const CalendarFragmentDoc = gql`
    fragment Calendar on Calendar {
  id
  project_id
  description
  all_day
  start_date
  end_date
}
    `;
export const CostFragmentDoc = gql`
    fragment Cost on Cost {
  id
  name
  amount
  project_id
  created_at
  updated_at
}
    `;
export const BudgetFragmentDoc = gql`
    fragment Budget on Budget {
  id
  name
  amount
  project_id
  created_at
  updated_at
}
    `;
export const MemberFragmentDoc = gql`
    fragment Member on Member {
  id
  avatar_url
  full_name
  hour_rate
  role
  is_active
  user_id
  ProjectMembers {
    user_id
    updated_at
    project_id
    member_id
    hour_rate
    created_at
    id
    hour_working
  }
}
    `;
export const ProjectFragmentDoc = gql`
    fragment Project on Project {
  id
  name
  budget
  cost
  start_date
  end_date
  image_url
  status_id
  user_id
  Costs {
    ...Cost
  }
  Budgets {
    ...Budget
  }
  ProjectMembers {
    hour_working
    Member {
      ...Member
    }
  }
}
    ${CostFragmentDoc}
${BudgetFragmentDoc}
${MemberFragmentDoc}`;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  uid
  full_name
  email
  description
  avatar_url
  amount_premium
  is_active
  is_admin
  is_premium
}
    `;
export const ProjectMemberFragmentDoc = gql`
    fragment ProjectMember on ProjectMember {
  created_at
  hour_rate
  hour_working
  id
  member_id
  project_id
  updated_at
  user_id
  Project {
    ...Project
  }
  Member {
    ...Member
  }
  User {
    ...User
  }
}
    ${ProjectFragmentDoc}
${MemberFragmentDoc}
${UserFragmentDoc}`;
export const StatusProjectFragmentDoc = gql`
    fragment StatusProject on StatusProject {
  id
}
    `;
export const AddBudgetProjectDocument = gql`
    mutation AddBudgetProject($input: Budget_insert_input!) {
  insert_Budget_one(object: $input) {
    name
    Project {
      name
    }
  }
}
    `;
export type AddBudgetProjectMutationFn = Apollo.MutationFunction<AddBudgetProjectMutation, AddBudgetProjectMutationVariables>;

/**
 * __useAddBudgetProjectMutation__
 *
 * To run a mutation, you first call `useAddBudgetProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBudgetProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBudgetProjectMutation, { data, loading, error }] = useAddBudgetProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddBudgetProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddBudgetProjectMutation, AddBudgetProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBudgetProjectMutation, AddBudgetProjectMutationVariables>(AddBudgetProjectDocument, options);
      }
export type AddBudgetProjectMutationHookResult = ReturnType<typeof useAddBudgetProjectMutation>;
export type AddBudgetProjectMutationResult = Apollo.MutationResult<AddBudgetProjectMutation>;
export type AddBudgetProjectMutationOptions = Apollo.BaseMutationOptions<AddBudgetProjectMutation, AddBudgetProjectMutationVariables>;
export const AddCalendarOneDocument = gql`
    mutation addCalendarOne($input: Calendar_insert_input!) {
  insert_Calendar_one(object: $input) {
    id
  }
}
    `;
export type AddCalendarOneMutationFn = Apollo.MutationFunction<AddCalendarOneMutation, AddCalendarOneMutationVariables>;

/**
 * __useAddCalendarOneMutation__
 *
 * To run a mutation, you first call `useAddCalendarOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCalendarOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCalendarOneMutation, { data, loading, error }] = useAddCalendarOneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCalendarOneMutation(baseOptions?: Apollo.MutationHookOptions<AddCalendarOneMutation, AddCalendarOneMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCalendarOneMutation, AddCalendarOneMutationVariables>(AddCalendarOneDocument, options);
      }
export type AddCalendarOneMutationHookResult = ReturnType<typeof useAddCalendarOneMutation>;
export type AddCalendarOneMutationResult = Apollo.MutationResult<AddCalendarOneMutation>;
export type AddCalendarOneMutationOptions = Apollo.BaseMutationOptions<AddCalendarOneMutation, AddCalendarOneMutationVariables>;
export const AddCostDocument = gql`
    mutation AddCost($input: Cost_insert_input!) {
  insert_Cost_one(object: $input) {
    ...Cost
  }
}
    ${CostFragmentDoc}`;
export type AddCostMutationFn = Apollo.MutationFunction<AddCostMutation, AddCostMutationVariables>;

/**
 * __useAddCostMutation__
 *
 * To run a mutation, you first call `useAddCostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCostMutation, { data, loading, error }] = useAddCostMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCostMutation(baseOptions?: Apollo.MutationHookOptions<AddCostMutation, AddCostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCostMutation, AddCostMutationVariables>(AddCostDocument, options);
      }
export type AddCostMutationHookResult = ReturnType<typeof useAddCostMutation>;
export type AddCostMutationResult = Apollo.MutationResult<AddCostMutation>;
export type AddCostMutationOptions = Apollo.BaseMutationOptions<AddCostMutation, AddCostMutationVariables>;
export const AddMemberDocument = gql`
    mutation AddMember($input: Member_insert_input!) {
  insert_Member_one(object: $input) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export type AddMemberMutationFn = Apollo.MutationFunction<AddMemberMutation, AddMemberMutationVariables>;

/**
 * __useAddMemberMutation__
 *
 * To run a mutation, you first call `useAddMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMemberMutation, { data, loading, error }] = useAddMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddMemberMutation(baseOptions?: Apollo.MutationHookOptions<AddMemberMutation, AddMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMemberMutation, AddMemberMutationVariables>(AddMemberDocument, options);
      }
export type AddMemberMutationHookResult = ReturnType<typeof useAddMemberMutation>;
export type AddMemberMutationResult = Apollo.MutationResult<AddMemberMutation>;
export type AddMemberMutationOptions = Apollo.BaseMutationOptions<AddMemberMutation, AddMemberMutationVariables>;
export const AddProjectDocument = gql`
    mutation AddProject($input: Project_insert_input!) {
  insert_Project_one(object: $input) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export type AddProjectMutationFn = Apollo.MutationFunction<AddProjectMutation, AddProjectMutationVariables>;

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMutation, AddProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMutation, AddProjectMutationVariables>(AddProjectDocument, options);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = Apollo.MutationResult<AddProjectMutation>;
export type AddProjectMutationOptions = Apollo.BaseMutationOptions<AddProjectMutation, AddProjectMutationVariables>;
export const AddProjectMemberDocument = gql`
    mutation AddProjectMember($project_id: uuid!, $member_id: uuid!, $user_id: uuid!, $hour_working: numeric!, $hour_rate: numeric!) {
  insert_ProjectMember_one(
    object: {user_id: $user_id, member_id: $member_id, project_id: $project_id, hour_working: $hour_working, hour_rate: $hour_rate}
  ) {
    ...ProjectMember
  }
}
    ${ProjectMemberFragmentDoc}`;
export type AddProjectMemberMutationFn = Apollo.MutationFunction<AddProjectMemberMutation, AddProjectMemberMutationVariables>;

/**
 * __useAddProjectMemberMutation__
 *
 * To run a mutation, you first call `useAddProjectMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMemberMutation, { data, loading, error }] = useAddProjectMemberMutation({
 *   variables: {
 *      project_id: // value for 'project_id'
 *      member_id: // value for 'member_id'
 *      user_id: // value for 'user_id'
 *      hour_working: // value for 'hour_working'
 *      hour_rate: // value for 'hour_rate'
 *   },
 * });
 */
export function useAddProjectMemberMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectMemberMutation, AddProjectMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectMemberMutation, AddProjectMemberMutationVariables>(AddProjectMemberDocument, options);
      }
export type AddProjectMemberMutationHookResult = ReturnType<typeof useAddProjectMemberMutation>;
export type AddProjectMemberMutationResult = Apollo.MutationResult<AddProjectMemberMutation>;
export type AddProjectMemberMutationOptions = Apollo.BaseMutationOptions<AddProjectMemberMutation, AddProjectMemberMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation DeleteAccount($id: uuid!) {
  delete_User_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }
export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const GetListProjectMemberDocument = gql`
    query getListProjectMember($project_id: uuid!) {
  ProjectMember(where: {project_id: {_eq: $project_id}}) {
    ...ProjectMember
  }
}
    ${ProjectMemberFragmentDoc}`;

/**
 * __useGetListProjectMemberQuery__
 *
 * To run a query within a React component, call `useGetListProjectMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListProjectMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListProjectMemberQuery({
 *   variables: {
 *      project_id: // value for 'project_id'
 *   },
 * });
 */
export function useGetListProjectMemberQuery(baseOptions: Apollo.QueryHookOptions<GetListProjectMemberQuery, GetListProjectMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListProjectMemberQuery, GetListProjectMemberQueryVariables>(GetListProjectMemberDocument, options);
      }
export function useGetListProjectMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListProjectMemberQuery, GetListProjectMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListProjectMemberQuery, GetListProjectMemberQueryVariables>(GetListProjectMemberDocument, options);
        }
export type GetListProjectMemberQueryHookResult = ReturnType<typeof useGetListProjectMemberQuery>;
export type GetListProjectMemberLazyQueryHookResult = ReturnType<typeof useGetListProjectMemberLazyQuery>;
export type GetListProjectMemberQueryResult = Apollo.QueryResult<GetListProjectMemberQuery, GetListProjectMemberQueryVariables>;
export function refetchGetListProjectMemberQuery(variables: GetListProjectMemberQueryVariables) {
      return { query: GetListProjectMemberDocument, variables: variables }
    }
export const GetMeDocument = gql`
    query GetMe($uid: String!) {
  User(where: {uid: {_eq: $uid}}) {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetMeQuery(baseOptions: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export function refetchGetMeQuery(variables: GetMeQueryVariables) {
      return { query: GetMeDocument, variables: variables }
    }
export const GetProjectDocument = gql`
    query GetProject($offset: Int = 20, $limit: Int = 20, $user_id: uuid!, $_ilike: String = "%%") {
  projects: Project(
    limit: $limit
    offset: $offset
    order_by: {start_date: desc, created_at: asc}
    where: {user_id: {_eq: $user_id}, name: {_ilike: $_ilike}}
  ) {
    ...Project
  }
  all_projects: Project(where: {user_id: {_eq: $user_id}}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;

/**
 * __useGetProjectQuery__
 *
 * To run a query within a React component, call `useGetProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      user_id: // value for 'user_id'
 *      _ilike: // value for '_ilike'
 *   },
 * });
 */
export function useGetProjectQuery(baseOptions: Apollo.QueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
      }
export function useGetProjectLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectQuery, GetProjectQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectQuery, GetProjectQueryVariables>(GetProjectDocument, options);
        }
export type GetProjectQueryHookResult = ReturnType<typeof useGetProjectQuery>;
export type GetProjectLazyQueryHookResult = ReturnType<typeof useGetProjectLazyQuery>;
export type GetProjectQueryResult = Apollo.QueryResult<GetProjectQuery, GetProjectQueryVariables>;
export function refetchGetProjectQuery(variables: GetProjectQueryVariables) {
      return { query: GetProjectDocument, variables: variables }
    }
export const GetProjectByUserIdDocument = gql`
    query GetProjectByUserId($name: String, $userId: uuid!) {
  Project(where: {name: {_ilike: $name}, user_id: {_eq: $userId}}) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;

/**
 * __useGetProjectByUserIdQuery__
 *
 * To run a query within a React component, call `useGetProjectByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByUserIdQuery({
 *   variables: {
 *      name: // value for 'name'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetProjectByUserIdQuery(baseOptions: Apollo.QueryHookOptions<GetProjectByUserIdQuery, GetProjectByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectByUserIdQuery, GetProjectByUserIdQueryVariables>(GetProjectByUserIdDocument, options);
      }
export function useGetProjectByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectByUserIdQuery, GetProjectByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectByUserIdQuery, GetProjectByUserIdQueryVariables>(GetProjectByUserIdDocument, options);
        }
export type GetProjectByUserIdQueryHookResult = ReturnType<typeof useGetProjectByUserIdQuery>;
export type GetProjectByUserIdLazyQueryHookResult = ReturnType<typeof useGetProjectByUserIdLazyQuery>;
export type GetProjectByUserIdQueryResult = Apollo.QueryResult<GetProjectByUserIdQuery, GetProjectByUserIdQueryVariables>;
export function refetchGetProjectByUserIdQuery(variables: GetProjectByUserIdQueryVariables) {
      return { query: GetProjectByUserIdDocument, variables: variables }
    }
export const GetProjectDetailsByIdDocument = gql`
    query GetProjectDetailsById($uuid: uuid!, $user_id: uuid!) {
  Project(where: {id: {_eq: $uuid}}) {
    ...Project
  }
  all_members: Member(where: {user_id: {_eq: $user_id}}) {
    ...Member
  }
}
    ${ProjectFragmentDoc}
${MemberFragmentDoc}`;

/**
 * __useGetProjectDetailsByIdQuery__
 *
 * To run a query within a React component, call `useGetProjectDetailsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectDetailsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectDetailsByIdQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProjectDetailsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProjectDetailsByIdQuery, GetProjectDetailsByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProjectDetailsByIdQuery, GetProjectDetailsByIdQueryVariables>(GetProjectDetailsByIdDocument, options);
      }
export function useGetProjectDetailsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProjectDetailsByIdQuery, GetProjectDetailsByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProjectDetailsByIdQuery, GetProjectDetailsByIdQueryVariables>(GetProjectDetailsByIdDocument, options);
        }
export type GetProjectDetailsByIdQueryHookResult = ReturnType<typeof useGetProjectDetailsByIdQuery>;
export type GetProjectDetailsByIdLazyQueryHookResult = ReturnType<typeof useGetProjectDetailsByIdLazyQuery>;
export type GetProjectDetailsByIdQueryResult = Apollo.QueryResult<GetProjectDetailsByIdQuery, GetProjectDetailsByIdQueryVariables>;
export function refetchGetProjectDetailsByIdQuery(variables: GetProjectDetailsByIdQueryVariables) {
      return { query: GetProjectDetailsByIdDocument, variables: variables }
    }
export const GetTeamMemberDocument = gql`
    query GetTeamMember($user_id: uuid!, $limit: Int = 10, $offset: Int = 10, $_ilike: String!) {
  members: Member(
    where: {user_id: {_eq: $user_id}, full_name: {_ilike: $_ilike}}
    limit: $limit
    offset: $offset
    order_by: {full_name: asc}
  ) {
    ...Member
  }
  all_members: Member(where: {user_id: {_eq: $user_id}}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;

/**
 * __useGetTeamMemberQuery__
 *
 * To run a query within a React component, call `useGetTeamMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamMemberQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      _ilike: // value for '_ilike'
 *   },
 * });
 */
export function useGetTeamMemberQuery(baseOptions: Apollo.QueryHookOptions<GetTeamMemberQuery, GetTeamMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamMemberQuery, GetTeamMemberQueryVariables>(GetTeamMemberDocument, options);
      }
export function useGetTeamMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamMemberQuery, GetTeamMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamMemberQuery, GetTeamMemberQueryVariables>(GetTeamMemberDocument, options);
        }
export type GetTeamMemberQueryHookResult = ReturnType<typeof useGetTeamMemberQuery>;
export type GetTeamMemberLazyQueryHookResult = ReturnType<typeof useGetTeamMemberLazyQuery>;
export type GetTeamMemberQueryResult = Apollo.QueryResult<GetTeamMemberQuery, GetTeamMemberQueryVariables>;
export function refetchGetTeamMemberQuery(variables: GetTeamMemberQueryVariables) {
      return { query: GetTeamMemberDocument, variables: variables }
    }
export const GetUserGeneralDocument = gql`
    query GetUserGeneral($_ilike: String!, $limit: Int = 10, $offset: Int = 10, $user_id: uuid!) {
  in_progress_projects: Project(
    where: {user_id: {_eq: $user_id}, name: {_ilike: $_ilike}, status_id: {_eq: In_Progress}}
    order_by: {start_date: desc}
    limit: $limit
    offset: $offset
  ) {
    ...Project
  }
  all_in_progress_project: Project_aggregate(
    where: {status_id: {_eq: In_Progress}, user_id: {_eq: $user_id}}
  ) {
    aggregate {
      count
    }
  }
  calendars: Calendar(limit: 5, order_by: {start_date: asc}) {
    ...Calendar
  }
  all_project: Project_aggregate(where: {user_id: {_eq: $user_id}}) {
    aggregate {
      count
    }
  }
  total_budget: Budget_aggregate(where: {user_id: {_eq: $user_id}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
  total_cost: Cost_aggregate(where: {user_id: {_eq: $user_id}}) {
    aggregate {
      sum {
        amount
      }
    }
  }
  project_members: ProjectMember(where: {user_id: {_eq: $user_id}}) {
    ...ProjectMember
  }
}
    ${ProjectFragmentDoc}
${CalendarFragmentDoc}
${ProjectMemberFragmentDoc}`;

/**
 * __useGetUserGeneralQuery__
 *
 * To run a query within a React component, call `useGetUserGeneralQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserGeneralQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserGeneralQuery({
 *   variables: {
 *      _ilike: // value for '_ilike'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserGeneralQuery(baseOptions: Apollo.QueryHookOptions<GetUserGeneralQuery, GetUserGeneralQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserGeneralQuery, GetUserGeneralQueryVariables>(GetUserGeneralDocument, options);
      }
export function useGetUserGeneralLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserGeneralQuery, GetUserGeneralQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserGeneralQuery, GetUserGeneralQueryVariables>(GetUserGeneralDocument, options);
        }
export type GetUserGeneralQueryHookResult = ReturnType<typeof useGetUserGeneralQuery>;
export type GetUserGeneralLazyQueryHookResult = ReturnType<typeof useGetUserGeneralLazyQuery>;
export type GetUserGeneralQueryResult = Apollo.QueryResult<GetUserGeneralQuery, GetUserGeneralQueryVariables>;
export function refetchGetUserGeneralQuery(variables: GetUserGeneralQueryVariables) {
      return { query: GetUserGeneralDocument, variables: variables }
    }
export const RemoveBudgetDocument = gql`
    mutation RemoveBudget($_id: uuid!) {
  delete_Budget_by_pk(id: $_id) {
    id
  }
}
    `;
export type RemoveBudgetMutationFn = Apollo.MutationFunction<RemoveBudgetMutation, RemoveBudgetMutationVariables>;

/**
 * __useRemoveBudgetMutation__
 *
 * To run a mutation, you first call `useRemoveBudgetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveBudgetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeBudgetMutation, { data, loading, error }] = useRemoveBudgetMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveBudgetMutation(baseOptions?: Apollo.MutationHookOptions<RemoveBudgetMutation, RemoveBudgetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveBudgetMutation, RemoveBudgetMutationVariables>(RemoveBudgetDocument, options);
      }
export type RemoveBudgetMutationHookResult = ReturnType<typeof useRemoveBudgetMutation>;
export type RemoveBudgetMutationResult = Apollo.MutationResult<RemoveBudgetMutation>;
export type RemoveBudgetMutationOptions = Apollo.BaseMutationOptions<RemoveBudgetMutation, RemoveBudgetMutationVariables>;
export const RemoveCostDocument = gql`
    mutation RemoveCost($_id: uuid!) {
  delete_Cost_by_pk(id: $_id) {
    id
  }
}
    `;
export type RemoveCostMutationFn = Apollo.MutationFunction<RemoveCostMutation, RemoveCostMutationVariables>;

/**
 * __useRemoveCostMutation__
 *
 * To run a mutation, you first call `useRemoveCostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCostMutation, { data, loading, error }] = useRemoveCostMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveCostMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCostMutation, RemoveCostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCostMutation, RemoveCostMutationVariables>(RemoveCostDocument, options);
      }
export type RemoveCostMutationHookResult = ReturnType<typeof useRemoveCostMutation>;
export type RemoveCostMutationResult = Apollo.MutationResult<RemoveCostMutation>;
export type RemoveCostMutationOptions = Apollo.BaseMutationOptions<RemoveCostMutation, RemoveCostMutationVariables>;
export const RemoveProjectDocument = gql`
    mutation RemoveProject($id: uuid!) {
  delete_Project_by_pk(id: $id) {
    name
  }
}
    `;
export type RemoveProjectMutationFn = Apollo.MutationFunction<RemoveProjectMutation, RemoveProjectMutationVariables>;

/**
 * __useRemoveProjectMutation__
 *
 * To run a mutation, you first call `useRemoveProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProjectMutation, { data, loading, error }] = useRemoveProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProjectMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProjectMutation, RemoveProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProjectMutation, RemoveProjectMutationVariables>(RemoveProjectDocument, options);
      }
export type RemoveProjectMutationHookResult = ReturnType<typeof useRemoveProjectMutation>;
export type RemoveProjectMutationResult = Apollo.MutationResult<RemoveProjectMutation>;
export type RemoveProjectMutationOptions = Apollo.BaseMutationOptions<RemoveProjectMutation, RemoveProjectMutationVariables>;
export const RemoveProjectMemberDocument = gql`
    mutation removeProjectMember($id: uuid!) {
  delete_ProjectMember_by_pk(id: $id) {
    id
  }
}
    `;
export type RemoveProjectMemberMutationFn = Apollo.MutationFunction<RemoveProjectMemberMutation, RemoveProjectMemberMutationVariables>;

/**
 * __useRemoveProjectMemberMutation__
 *
 * To run a mutation, you first call `useRemoveProjectMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveProjectMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeProjectMemberMutation, { data, loading, error }] = useRemoveProjectMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveProjectMemberMutation(baseOptions?: Apollo.MutationHookOptions<RemoveProjectMemberMutation, RemoveProjectMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveProjectMemberMutation, RemoveProjectMemberMutationVariables>(RemoveProjectMemberDocument, options);
      }
export type RemoveProjectMemberMutationHookResult = ReturnType<typeof useRemoveProjectMemberMutation>;
export type RemoveProjectMemberMutationResult = Apollo.MutationResult<RemoveProjectMemberMutation>;
export type RemoveProjectMemberMutationOptions = Apollo.BaseMutationOptions<RemoveProjectMemberMutation, RemoveProjectMemberMutationVariables>;
export const UpdateBudgetListDocument = gql`
    mutation updateBudgetList($updates: [Budget_updates!]!) {
  update_Budget_many(updates: $updates) {
    affected_rows
    returning {
      name
    }
  }
}
    `;
export type UpdateBudgetListMutationFn = Apollo.MutationFunction<UpdateBudgetListMutation, UpdateBudgetListMutationVariables>;

/**
 * __useUpdateBudgetListMutation__
 *
 * To run a mutation, you first call `useUpdateBudgetListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBudgetListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBudgetListMutation, { data, loading, error }] = useUpdateBudgetListMutation({
 *   variables: {
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateBudgetListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBudgetListMutation, UpdateBudgetListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBudgetListMutation, UpdateBudgetListMutationVariables>(UpdateBudgetListDocument, options);
      }
export type UpdateBudgetListMutationHookResult = ReturnType<typeof useUpdateBudgetListMutation>;
export type UpdateBudgetListMutationResult = Apollo.MutationResult<UpdateBudgetListMutation>;
export type UpdateBudgetListMutationOptions = Apollo.BaseMutationOptions<UpdateBudgetListMutation, UpdateBudgetListMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($id: uuid!, $input: Member_set_input!) {
  update_Member_by_pk(_set: $input, pk_columns: {id: $id}) {
    ...Member
  }
}
    ${MemberFragmentDoc}`;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const UpdateProjectDocument = gql`
    mutation UpdateProject($id: uuid!, $_set: Project_set_input!) {
  update_Project_by_pk(pk_columns: {id: $id}, _set: $_set) {
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<UpdateProjectMutation, UpdateProjectMutationVariables>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      id: // value for 'id'
 *      _set: // value for '_set'
 *   },
 * });
 */
export function useUpdateProjectMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMutation, UpdateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMutation, UpdateProjectMutationVariables>(UpdateProjectDocument, options);
      }
export type UpdateProjectMutationHookResult = ReturnType<typeof useUpdateProjectMutation>;
export type UpdateProjectMutationResult = Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const UpdateProjectMemberListDocument = gql`
    mutation updateProjectMemberList($updates: [ProjectMember_updates!]!) {
  update_ProjectMember_many(updates: $updates) {
    affected_rows
    returning {
      project_id
    }
  }
}
    `;
export type UpdateProjectMemberListMutationFn = Apollo.MutationFunction<UpdateProjectMemberListMutation, UpdateProjectMemberListMutationVariables>;

/**
 * __useUpdateProjectMemberListMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMemberListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMemberListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMemberListMutation, { data, loading, error }] = useUpdateProjectMemberListMutation({
 *   variables: {
 *      updates: // value for 'updates'
 *   },
 * });
 */
export function useUpdateProjectMemberListMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectMemberListMutation, UpdateProjectMemberListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectMemberListMutation, UpdateProjectMemberListMutationVariables>(UpdateProjectMemberListDocument, options);
      }
export type UpdateProjectMemberListMutationHookResult = ReturnType<typeof useUpdateProjectMemberListMutation>;
export type UpdateProjectMemberListMutationResult = Apollo.MutationResult<UpdateProjectMemberListMutation>;
export type UpdateProjectMemberListMutationOptions = Apollo.BaseMutationOptions<UpdateProjectMemberListMutation, UpdateProjectMemberListMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($full_name: String, $avatar_url: String, $description: String, $amount_premium: numeric, $id: uuid!) {
  update_User_by_pk(
    _set: {full_name: $full_name, avatar_url: $avatar_url, description: $description, amount_premium: $amount_premium}
    pk_columns: {id: $id}
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      full_name: // value for 'full_name'
 *      avatar_url: // value for 'avatar_url'
 *      description: // value for 'description'
 *      amount_premium: // value for 'amount_premium'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UpdateCostByIdDocument = gql`
    mutation updateCostById($id: uuid!, $amount: numeric!, $user_id: uuid = "") {
  update_Cost_by_pk(
    pk_columns: {id: $id}
    _set: {amount: $amount, user_id: $user_id}
  ) {
    name
    amount
  }
}
    `;
export type UpdateCostByIdMutationFn = Apollo.MutationFunction<UpdateCostByIdMutation, UpdateCostByIdMutationVariables>;

/**
 * __useUpdateCostByIdMutation__
 *
 * To run a mutation, you first call `useUpdateCostByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCostByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCostByIdMutation, { data, loading, error }] = useUpdateCostByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      amount: // value for 'amount'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUpdateCostByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCostByIdMutation, UpdateCostByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCostByIdMutation, UpdateCostByIdMutationVariables>(UpdateCostByIdDocument, options);
      }
export type UpdateCostByIdMutationHookResult = ReturnType<typeof useUpdateCostByIdMutation>;
export type UpdateCostByIdMutationResult = Apollo.MutationResult<UpdateCostByIdMutation>;
export type UpdateCostByIdMutationOptions = Apollo.BaseMutationOptions<UpdateCostByIdMutation, UpdateCostByIdMutationVariables>;
export const NamedOperations = {
  Query: {
    getListProjectMember: 'getListProjectMember',
    GetMe: 'GetMe',
    GetProject: 'GetProject',
    GetProjectByUserId: 'GetProjectByUserId',
    GetProjectDetailsById: 'GetProjectDetailsById',
    GetTeamMember: 'GetTeamMember',
    GetUserGeneral: 'GetUserGeneral'
  },
  Mutation: {
    AddBudgetProject: 'AddBudgetProject',
    addCalendarOne: 'addCalendarOne',
    AddCost: 'AddCost',
    AddMember: 'AddMember',
    AddProject: 'AddProject',
    AddProjectMember: 'AddProjectMember',
    DeleteAccount: 'DeleteAccount',
    RemoveBudget: 'RemoveBudget',
    RemoveCost: 'RemoveCost',
    RemoveProject: 'RemoveProject',
    removeProjectMember: 'removeProjectMember',
    updateBudgetList: 'updateBudgetList',
    UpdateMember: 'UpdateMember',
    UpdateProject: 'UpdateProject',
    updateProjectMemberList: 'updateProjectMemberList',
    UpdateUser: 'UpdateUser',
    updateCostById: 'updateCostById'
  },
  Fragment: {
    Budget: 'Budget',
    Calendar: 'Calendar',
    Cost: 'Cost',
    Member: 'Member',
    Project: 'Project',
    ProjectMember: 'ProjectMember',
    StatusProject: 'StatusProject',
    User: 'User'
  }
}