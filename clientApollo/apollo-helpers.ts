import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type BudgetKeySpecifier = ('Project' | 'User' | 'amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | BudgetKeySpecifier)[];
export type BudgetFieldPolicy = {
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_aggregateKeySpecifier = ('aggregate' | 'nodes' | Budget_aggregateKeySpecifier)[];
export type Budget_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Budget_aggregate_fieldsKeySpecifier)[];
export type Budget_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_avg_fieldsKeySpecifier = ('amount' | Budget_avg_fieldsKeySpecifier)[];
export type Budget_avg_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_max_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | Budget_max_fieldsKeySpecifier)[];
export type Budget_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_min_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | Budget_min_fieldsKeySpecifier)[];
export type Budget_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Budget_mutation_responseKeySpecifier)[];
export type Budget_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_stddev_fieldsKeySpecifier = ('amount' | Budget_stddev_fieldsKeySpecifier)[];
export type Budget_stddev_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_stddev_pop_fieldsKeySpecifier = ('amount' | Budget_stddev_pop_fieldsKeySpecifier)[];
export type Budget_stddev_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_stddev_samp_fieldsKeySpecifier = ('amount' | Budget_stddev_samp_fieldsKeySpecifier)[];
export type Budget_stddev_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_sum_fieldsKeySpecifier = ('amount' | Budget_sum_fieldsKeySpecifier)[];
export type Budget_sum_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_var_pop_fieldsKeySpecifier = ('amount' | Budget_var_pop_fieldsKeySpecifier)[];
export type Budget_var_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_var_samp_fieldsKeySpecifier = ('amount' | Budget_var_samp_fieldsKeySpecifier)[];
export type Budget_var_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Budget_variance_fieldsKeySpecifier = ('amount' | Budget_variance_fieldsKeySpecifier)[];
export type Budget_variance_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CalendarKeySpecifier = ('Project' | 'User' | 'all_day' | 'created_at' | 'description' | 'end_date' | 'id' | 'project_id' | 'start_date' | 'updated_at' | 'user_id' | CalendarKeySpecifier)[];
export type CalendarFieldPolicy = {
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	all_day?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Calendar_aggregateKeySpecifier = ('aggregate' | 'nodes' | Calendar_aggregateKeySpecifier)[];
export type Calendar_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Calendar_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | Calendar_aggregate_fieldsKeySpecifier)[];
export type Calendar_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Calendar_max_fieldsKeySpecifier = ('created_at' | 'description' | 'end_date' | 'id' | 'project_id' | 'start_date' | 'updated_at' | 'user_id' | Calendar_max_fieldsKeySpecifier)[];
export type Calendar_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Calendar_min_fieldsKeySpecifier = ('created_at' | 'description' | 'end_date' | 'id' | 'project_id' | 'start_date' | 'updated_at' | 'user_id' | Calendar_min_fieldsKeySpecifier)[];
export type Calendar_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Calendar_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Calendar_mutation_responseKeySpecifier)[];
export type Calendar_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CostKeySpecifier = ('Project' | 'User' | 'amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | CostKeySpecifier)[];
export type CostFieldPolicy = {
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_aggregateKeySpecifier = ('aggregate' | 'nodes' | Cost_aggregateKeySpecifier)[];
export type Cost_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Cost_aggregate_fieldsKeySpecifier)[];
export type Cost_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_avg_fieldsKeySpecifier = ('amount' | Cost_avg_fieldsKeySpecifier)[];
export type Cost_avg_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_max_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | Cost_max_fieldsKeySpecifier)[];
export type Cost_max_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_min_fieldsKeySpecifier = ('amount' | 'created_at' | 'id' | 'name' | 'project_id' | 'updated_at' | 'user_id' | Cost_min_fieldsKeySpecifier)[];
export type Cost_min_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Cost_mutation_responseKeySpecifier)[];
export type Cost_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_stddev_fieldsKeySpecifier = ('amount' | Cost_stddev_fieldsKeySpecifier)[];
export type Cost_stddev_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_stddev_pop_fieldsKeySpecifier = ('amount' | Cost_stddev_pop_fieldsKeySpecifier)[];
export type Cost_stddev_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_stddev_samp_fieldsKeySpecifier = ('amount' | Cost_stddev_samp_fieldsKeySpecifier)[];
export type Cost_stddev_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_sum_fieldsKeySpecifier = ('amount' | Cost_sum_fieldsKeySpecifier)[];
export type Cost_sum_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_var_pop_fieldsKeySpecifier = ('amount' | Cost_var_pop_fieldsKeySpecifier)[];
export type Cost_var_pop_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_var_samp_fieldsKeySpecifier = ('amount' | Cost_var_samp_fieldsKeySpecifier)[];
export type Cost_var_samp_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Cost_variance_fieldsKeySpecifier = ('amount' | Cost_variance_fieldsKeySpecifier)[];
export type Cost_variance_fieldsFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberKeySpecifier = ('ProjectMembers' | 'ProjectMembers_aggregate' | 'User' | 'avatar_url' | 'created_at' | 'full_name' | 'hour_rate' | 'id' | 'is_active' | 'role' | 'updated_at' | 'user_id' | MemberKeySpecifier)[];
export type MemberFieldPolicy = {
	ProjectMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMembers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_aggregateKeySpecifier = ('aggregate' | 'nodes' | Member_aggregateKeySpecifier)[];
export type Member_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Member_aggregate_fieldsKeySpecifier)[];
export type Member_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_avg_fieldsKeySpecifier = ('hour_rate' | Member_avg_fieldsKeySpecifier)[];
export type Member_avg_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_max_fieldsKeySpecifier = ('avatar_url' | 'created_at' | 'full_name' | 'hour_rate' | 'id' | 'role' | 'updated_at' | 'user_id' | Member_max_fieldsKeySpecifier)[];
export type Member_max_fieldsFieldPolicy = {
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_min_fieldsKeySpecifier = ('avatar_url' | 'created_at' | 'full_name' | 'hour_rate' | 'id' | 'role' | 'updated_at' | 'user_id' | Member_min_fieldsKeySpecifier)[];
export type Member_min_fieldsFieldPolicy = {
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Member_mutation_responseKeySpecifier)[];
export type Member_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_stddev_fieldsKeySpecifier = ('hour_rate' | Member_stddev_fieldsKeySpecifier)[];
export type Member_stddev_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_stddev_pop_fieldsKeySpecifier = ('hour_rate' | Member_stddev_pop_fieldsKeySpecifier)[];
export type Member_stddev_pop_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_stddev_samp_fieldsKeySpecifier = ('hour_rate' | Member_stddev_samp_fieldsKeySpecifier)[];
export type Member_stddev_samp_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_sum_fieldsKeySpecifier = ('hour_rate' | Member_sum_fieldsKeySpecifier)[];
export type Member_sum_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_var_pop_fieldsKeySpecifier = ('hour_rate' | Member_var_pop_fieldsKeySpecifier)[];
export type Member_var_pop_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_var_samp_fieldsKeySpecifier = ('hour_rate' | Member_var_samp_fieldsKeySpecifier)[];
export type Member_var_samp_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Member_variance_fieldsKeySpecifier = ('hour_rate' | Member_variance_fieldsKeySpecifier)[];
export type Member_variance_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('Budgets' | 'Budgets_aggregate' | 'Calendars' | 'Calendars_aggregate' | 'Costs' | 'Costs_aggregate' | 'ProjectMembers' | 'ProjectMembers_aggregate' | 'StatusProject' | 'User' | 'budget' | 'cost' | 'created_at' | 'end_date' | 'id' | 'image_url' | 'name' | 'start_date' | 'status_id' | 'updated_at' | 'user_id' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	Budgets?: FieldPolicy<any> | FieldReadFunction<any>,
	Budgets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendars?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendars_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Costs?: FieldPolicy<any> | FieldReadFunction<any>,
	Costs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMembers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image_url?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	status_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMemberKeySpecifier = ('Member' | 'Project' | 'User' | 'created_at' | 'hour_rate' | 'hour_working' | 'id' | 'member_id' | 'project_id' | 'updated_at' | 'user_id' | ProjectMemberKeySpecifier)[];
export type ProjectMemberFieldPolicy = {
	Member?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member_id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_aggregateKeySpecifier = ('aggregate' | 'nodes' | ProjectMember_aggregateKeySpecifier)[];
export type ProjectMember_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | ProjectMember_aggregate_fieldsKeySpecifier)[];
export type ProjectMember_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_avg_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_avg_fieldsKeySpecifier)[];
export type ProjectMember_avg_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_max_fieldsKeySpecifier = ('created_at' | 'hour_rate' | 'hour_working' | 'id' | 'member_id' | 'project_id' | 'updated_at' | 'user_id' | ProjectMember_max_fieldsKeySpecifier)[];
export type ProjectMember_max_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member_id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_min_fieldsKeySpecifier = ('created_at' | 'hour_rate' | 'hour_working' | 'id' | 'member_id' | 'project_id' | 'updated_at' | 'user_id' | ProjectMember_min_fieldsKeySpecifier)[];
export type ProjectMember_min_fieldsFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member_id?: FieldPolicy<any> | FieldReadFunction<any>,
	project_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | ProjectMember_mutation_responseKeySpecifier)[];
export type ProjectMember_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_stddev_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_stddev_fieldsKeySpecifier)[];
export type ProjectMember_stddev_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_stddev_pop_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_stddev_pop_fieldsKeySpecifier)[];
export type ProjectMember_stddev_pop_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_stddev_samp_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_stddev_samp_fieldsKeySpecifier)[];
export type ProjectMember_stddev_samp_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_sum_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_sum_fieldsKeySpecifier)[];
export type ProjectMember_sum_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_var_pop_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_var_pop_fieldsKeySpecifier)[];
export type ProjectMember_var_pop_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_var_samp_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_var_samp_fieldsKeySpecifier)[];
export type ProjectMember_var_samp_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectMember_variance_fieldsKeySpecifier = ('hour_rate' | 'hour_working' | ProjectMember_variance_fieldsKeySpecifier)[];
export type ProjectMember_variance_fieldsFieldPolicy = {
	hour_rate?: FieldPolicy<any> | FieldReadFunction<any>,
	hour_working?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_aggregateKeySpecifier = ('aggregate' | 'nodes' | Project_aggregateKeySpecifier)[];
export type Project_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | Project_aggregate_fieldsKeySpecifier)[];
export type Project_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_avg_fieldsKeySpecifier = ('budget' | 'cost' | Project_avg_fieldsKeySpecifier)[];
export type Project_avg_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_max_fieldsKeySpecifier = ('budget' | 'cost' | 'created_at' | 'end_date' | 'id' | 'image_url' | 'name' | 'start_date' | 'updated_at' | 'user_id' | Project_max_fieldsKeySpecifier)[];
export type Project_max_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image_url?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_min_fieldsKeySpecifier = ('budget' | 'cost' | 'created_at' | 'end_date' | 'id' | 'image_url' | 'name' | 'start_date' | 'updated_at' | 'user_id' | Project_min_fieldsKeySpecifier)[];
export type Project_min_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	image_url?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	start_date?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | Project_mutation_responseKeySpecifier)[];
export type Project_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_stddev_fieldsKeySpecifier = ('budget' | 'cost' | Project_stddev_fieldsKeySpecifier)[];
export type Project_stddev_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_stddev_pop_fieldsKeySpecifier = ('budget' | 'cost' | Project_stddev_pop_fieldsKeySpecifier)[];
export type Project_stddev_pop_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_stddev_samp_fieldsKeySpecifier = ('budget' | 'cost' | Project_stddev_samp_fieldsKeySpecifier)[];
export type Project_stddev_samp_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_sum_fieldsKeySpecifier = ('budget' | 'cost' | Project_sum_fieldsKeySpecifier)[];
export type Project_sum_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_var_pop_fieldsKeySpecifier = ('budget' | 'cost' | Project_var_pop_fieldsKeySpecifier)[];
export type Project_var_pop_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_var_samp_fieldsKeySpecifier = ('budget' | 'cost' | Project_var_samp_fieldsKeySpecifier)[];
export type Project_var_samp_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Project_variance_fieldsKeySpecifier = ('budget' | 'cost' | Project_variance_fieldsKeySpecifier)[];
export type Project_variance_fieldsFieldPolicy = {
	budget?: FieldPolicy<any> | FieldReadFunction<any>,
	cost?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusProjectKeySpecifier = ('Projects' | 'Projects_aggregate' | 'id' | StatusProjectKeySpecifier)[];
export type StatusProjectFieldPolicy = {
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusProject_aggregateKeySpecifier = ('aggregate' | 'nodes' | StatusProject_aggregateKeySpecifier)[];
export type StatusProject_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusProject_aggregate_fieldsKeySpecifier = ('count' | 'max' | 'min' | StatusProject_aggregate_fieldsKeySpecifier)[];
export type StatusProject_aggregate_fieldsFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusProject_max_fieldsKeySpecifier = ('id' | StatusProject_max_fieldsKeySpecifier)[];
export type StatusProject_max_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusProject_min_fieldsKeySpecifier = ('id' | StatusProject_min_fieldsKeySpecifier)[];
export type StatusProject_min_fieldsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('Budgets' | 'Budgets_aggregate' | 'Calendars' | 'Calendars_aggregate' | 'Costs' | 'Costs_aggregate' | 'Members' | 'Members_aggregate' | 'ProjectMembers' | 'ProjectMembers_aggregate' | 'Projects' | 'Projects_aggregate' | 'amount_premium' | 'avatar_url' | 'created_at' | 'description' | 'email' | 'full_name' | 'id' | 'is_active' | 'is_admin' | 'is_premium' | 'uid' | 'updated_at' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	Budgets?: FieldPolicy<any> | FieldReadFunction<any>,
	Budgets_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendars?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendars_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Costs?: FieldPolicy<any> | FieldReadFunction<any>,
	Costs_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Members?: FieldPolicy<any> | FieldReadFunction<any>,
	Members_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMembers?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMembers_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects?: FieldPolicy<any> | FieldReadFunction<any>,
	Projects_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	is_admin?: FieldPolicy<any> | FieldReadFunction<any>,
	is_premium?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregateKeySpecifier = ('aggregate' | 'nodes' | User_aggregateKeySpecifier)[];
export type User_aggregateFieldPolicy = {
	aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_aggregate_fieldsKeySpecifier = ('avg' | 'count' | 'max' | 'min' | 'stddev' | 'stddev_pop' | 'stddev_samp' | 'sum' | 'var_pop' | 'var_samp' | 'variance' | User_aggregate_fieldsKeySpecifier)[];
export type User_aggregate_fieldsFieldPolicy = {
	avg?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	max?: FieldPolicy<any> | FieldReadFunction<any>,
	min?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	stddev_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	sum?: FieldPolicy<any> | FieldReadFunction<any>,
	var_pop?: FieldPolicy<any> | FieldReadFunction<any>,
	var_samp?: FieldPolicy<any> | FieldReadFunction<any>,
	variance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_avg_fieldsKeySpecifier = ('amount_premium' | User_avg_fieldsKeySpecifier)[];
export type User_avg_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_max_fieldsKeySpecifier = ('amount_premium' | 'avatar_url' | 'created_at' | 'description' | 'email' | 'full_name' | 'id' | 'uid' | 'updated_at' | User_max_fieldsKeySpecifier)[];
export type User_max_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_min_fieldsKeySpecifier = ('amount_premium' | 'avatar_url' | 'created_at' | 'description' | 'email' | 'full_name' | 'id' | 'uid' | 'updated_at' | User_min_fieldsKeySpecifier)[];
export type User_min_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar_url?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	full_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	uid?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_mutation_responseKeySpecifier = ('affected_rows' | 'returning' | User_mutation_responseKeySpecifier)[];
export type User_mutation_responseFieldPolicy = {
	affected_rows?: FieldPolicy<any> | FieldReadFunction<any>,
	returning?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_fieldsKeySpecifier = ('amount_premium' | User_stddev_fieldsKeySpecifier)[];
export type User_stddev_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_pop_fieldsKeySpecifier = ('amount_premium' | User_stddev_pop_fieldsKeySpecifier)[];
export type User_stddev_pop_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_stddev_samp_fieldsKeySpecifier = ('amount_premium' | User_stddev_samp_fieldsKeySpecifier)[];
export type User_stddev_samp_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_sum_fieldsKeySpecifier = ('amount_premium' | User_sum_fieldsKeySpecifier)[];
export type User_sum_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_var_pop_fieldsKeySpecifier = ('amount_premium' | User_var_pop_fieldsKeySpecifier)[];
export type User_var_pop_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_var_samp_fieldsKeySpecifier = ('amount_premium' | User_var_samp_fieldsKeySpecifier)[];
export type User_var_samp_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type User_variance_fieldsKeySpecifier = ('amount_premium' | User_variance_fieldsKeySpecifier)[];
export type User_variance_fieldsFieldPolicy = {
	amount_premium?: FieldPolicy<any> | FieldReadFunction<any>
};
export type mutation_rootKeySpecifier = ('delete_Budget' | 'delete_Budget_by_pk' | 'delete_Calendar' | 'delete_Calendar_by_pk' | 'delete_Cost' | 'delete_Cost_by_pk' | 'delete_Member' | 'delete_Member_by_pk' | 'delete_Project' | 'delete_ProjectMember' | 'delete_ProjectMember_by_pk' | 'delete_Project_by_pk' | 'delete_User' | 'delete_User_by_pk' | 'insert_Budget' | 'insert_Budget_one' | 'insert_Calendar' | 'insert_Calendar_one' | 'insert_Cost' | 'insert_Cost_one' | 'insert_Member' | 'insert_Member_one' | 'insert_Project' | 'insert_ProjectMember' | 'insert_ProjectMember_one' | 'insert_Project_one' | 'insert_User' | 'insert_User_one' | 'update_Budget' | 'update_Budget_by_pk' | 'update_Budget_many' | 'update_Calendar' | 'update_Calendar_by_pk' | 'update_Calendar_many' | 'update_Cost' | 'update_Cost_by_pk' | 'update_Cost_many' | 'update_Member' | 'update_Member_by_pk' | 'update_Member_many' | 'update_Project' | 'update_ProjectMember' | 'update_ProjectMember_by_pk' | 'update_ProjectMember_many' | 'update_Project_by_pk' | 'update_Project_many' | 'update_User' | 'update_User_by_pk' | 'update_User_many' | mutation_rootKeySpecifier)[];
export type mutation_rootFieldPolicy = {
	delete_Budget?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Budget_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Calendar?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Calendar_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Cost?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Cost_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Member?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Member_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Project?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_ProjectMember_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_Project_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User?: FieldPolicy<any> | FieldReadFunction<any>,
	delete_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Budget?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Budget_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Calendar?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Calendar_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Cost?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Cost_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Member?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Member_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Project?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_ProjectMember_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_Project_one?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User?: FieldPolicy<any> | FieldReadFunction<any>,
	insert_User_one?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Budget?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Budget_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Budget_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Calendar?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Calendar_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Calendar_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Cost?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Cost_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Cost_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Member?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Member_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Member_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Project?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ProjectMember_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_ProjectMember_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Project_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_Project_many?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	update_User_many?: FieldPolicy<any> | FieldReadFunction<any>
};
export type query_rootKeySpecifier = ('Budget' | 'Budget_aggregate' | 'Budget_by_pk' | 'Calendar' | 'Calendar_aggregate' | 'Calendar_by_pk' | 'Cost' | 'Cost_aggregate' | 'Cost_by_pk' | 'Member' | 'Member_aggregate' | 'Member_by_pk' | 'Project' | 'ProjectMember' | 'ProjectMember_aggregate' | 'ProjectMember_by_pk' | 'Project_aggregate' | 'Project_by_pk' | 'StatusProject' | 'StatusProject_aggregate' | 'StatusProject_by_pk' | 'User' | 'User_aggregate' | 'User_by_pk' | query_rootKeySpecifier)[];
export type query_rootFieldPolicy = {
	Budget?: FieldPolicy<any> | FieldReadFunction<any>,
	Budget_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Budget_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Member?: FieldPolicy<any> | FieldReadFunction<any>,
	Member_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Member_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Project_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Project_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	User_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>
};
export type subscription_rootKeySpecifier = ('Budget' | 'Budget_aggregate' | 'Budget_by_pk' | 'Budget_stream' | 'Calendar' | 'Calendar_aggregate' | 'Calendar_by_pk' | 'Calendar_stream' | 'Cost' | 'Cost_aggregate' | 'Cost_by_pk' | 'Cost_stream' | 'Member' | 'Member_aggregate' | 'Member_by_pk' | 'Member_stream' | 'Project' | 'ProjectMember' | 'ProjectMember_aggregate' | 'ProjectMember_by_pk' | 'ProjectMember_stream' | 'Project_aggregate' | 'Project_by_pk' | 'Project_stream' | 'StatusProject' | 'StatusProject_aggregate' | 'StatusProject_by_pk' | 'StatusProject_stream' | 'User' | 'User_aggregate' | 'User_by_pk' | 'User_stream' | subscription_rootKeySpecifier)[];
export type subscription_rootFieldPolicy = {
	Budget?: FieldPolicy<any> | FieldReadFunction<any>,
	Budget_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Budget_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Budget_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Calendar_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Cost_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	Member?: FieldPolicy<any> | FieldReadFunction<any>,
	Member_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Member_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Member_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	Project?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	ProjectMember_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	Project_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	Project_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	Project_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	StatusProject_stream?: FieldPolicy<any> | FieldReadFunction<any>,
	User?: FieldPolicy<any> | FieldReadFunction<any>,
	User_aggregate?: FieldPolicy<any> | FieldReadFunction<any>,
	User_by_pk?: FieldPolicy<any> | FieldReadFunction<any>,
	User_stream?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Budget?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BudgetKeySpecifier | (() => undefined | BudgetKeySpecifier),
		fields?: BudgetFieldPolicy,
	},
	Budget_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_aggregateKeySpecifier | (() => undefined | Budget_aggregateKeySpecifier),
		fields?: Budget_aggregateFieldPolicy,
	},
	Budget_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_aggregate_fieldsKeySpecifier | (() => undefined | Budget_aggregate_fieldsKeySpecifier),
		fields?: Budget_aggregate_fieldsFieldPolicy,
	},
	Budget_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_avg_fieldsKeySpecifier | (() => undefined | Budget_avg_fieldsKeySpecifier),
		fields?: Budget_avg_fieldsFieldPolicy,
	},
	Budget_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_max_fieldsKeySpecifier | (() => undefined | Budget_max_fieldsKeySpecifier),
		fields?: Budget_max_fieldsFieldPolicy,
	},
	Budget_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_min_fieldsKeySpecifier | (() => undefined | Budget_min_fieldsKeySpecifier),
		fields?: Budget_min_fieldsFieldPolicy,
	},
	Budget_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_mutation_responseKeySpecifier | (() => undefined | Budget_mutation_responseKeySpecifier),
		fields?: Budget_mutation_responseFieldPolicy,
	},
	Budget_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_stddev_fieldsKeySpecifier | (() => undefined | Budget_stddev_fieldsKeySpecifier),
		fields?: Budget_stddev_fieldsFieldPolicy,
	},
	Budget_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_stddev_pop_fieldsKeySpecifier | (() => undefined | Budget_stddev_pop_fieldsKeySpecifier),
		fields?: Budget_stddev_pop_fieldsFieldPolicy,
	},
	Budget_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_stddev_samp_fieldsKeySpecifier | (() => undefined | Budget_stddev_samp_fieldsKeySpecifier),
		fields?: Budget_stddev_samp_fieldsFieldPolicy,
	},
	Budget_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_sum_fieldsKeySpecifier | (() => undefined | Budget_sum_fieldsKeySpecifier),
		fields?: Budget_sum_fieldsFieldPolicy,
	},
	Budget_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_var_pop_fieldsKeySpecifier | (() => undefined | Budget_var_pop_fieldsKeySpecifier),
		fields?: Budget_var_pop_fieldsFieldPolicy,
	},
	Budget_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_var_samp_fieldsKeySpecifier | (() => undefined | Budget_var_samp_fieldsKeySpecifier),
		fields?: Budget_var_samp_fieldsFieldPolicy,
	},
	Budget_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Budget_variance_fieldsKeySpecifier | (() => undefined | Budget_variance_fieldsKeySpecifier),
		fields?: Budget_variance_fieldsFieldPolicy,
	},
	Calendar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CalendarKeySpecifier | (() => undefined | CalendarKeySpecifier),
		fields?: CalendarFieldPolicy,
	},
	Calendar_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Calendar_aggregateKeySpecifier | (() => undefined | Calendar_aggregateKeySpecifier),
		fields?: Calendar_aggregateFieldPolicy,
	},
	Calendar_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Calendar_aggregate_fieldsKeySpecifier | (() => undefined | Calendar_aggregate_fieldsKeySpecifier),
		fields?: Calendar_aggregate_fieldsFieldPolicy,
	},
	Calendar_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Calendar_max_fieldsKeySpecifier | (() => undefined | Calendar_max_fieldsKeySpecifier),
		fields?: Calendar_max_fieldsFieldPolicy,
	},
	Calendar_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Calendar_min_fieldsKeySpecifier | (() => undefined | Calendar_min_fieldsKeySpecifier),
		fields?: Calendar_min_fieldsFieldPolicy,
	},
	Calendar_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Calendar_mutation_responseKeySpecifier | (() => undefined | Calendar_mutation_responseKeySpecifier),
		fields?: Calendar_mutation_responseFieldPolicy,
	},
	Cost?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CostKeySpecifier | (() => undefined | CostKeySpecifier),
		fields?: CostFieldPolicy,
	},
	Cost_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_aggregateKeySpecifier | (() => undefined | Cost_aggregateKeySpecifier),
		fields?: Cost_aggregateFieldPolicy,
	},
	Cost_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_aggregate_fieldsKeySpecifier | (() => undefined | Cost_aggregate_fieldsKeySpecifier),
		fields?: Cost_aggregate_fieldsFieldPolicy,
	},
	Cost_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_avg_fieldsKeySpecifier | (() => undefined | Cost_avg_fieldsKeySpecifier),
		fields?: Cost_avg_fieldsFieldPolicy,
	},
	Cost_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_max_fieldsKeySpecifier | (() => undefined | Cost_max_fieldsKeySpecifier),
		fields?: Cost_max_fieldsFieldPolicy,
	},
	Cost_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_min_fieldsKeySpecifier | (() => undefined | Cost_min_fieldsKeySpecifier),
		fields?: Cost_min_fieldsFieldPolicy,
	},
	Cost_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_mutation_responseKeySpecifier | (() => undefined | Cost_mutation_responseKeySpecifier),
		fields?: Cost_mutation_responseFieldPolicy,
	},
	Cost_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_stddev_fieldsKeySpecifier | (() => undefined | Cost_stddev_fieldsKeySpecifier),
		fields?: Cost_stddev_fieldsFieldPolicy,
	},
	Cost_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_stddev_pop_fieldsKeySpecifier | (() => undefined | Cost_stddev_pop_fieldsKeySpecifier),
		fields?: Cost_stddev_pop_fieldsFieldPolicy,
	},
	Cost_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_stddev_samp_fieldsKeySpecifier | (() => undefined | Cost_stddev_samp_fieldsKeySpecifier),
		fields?: Cost_stddev_samp_fieldsFieldPolicy,
	},
	Cost_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_sum_fieldsKeySpecifier | (() => undefined | Cost_sum_fieldsKeySpecifier),
		fields?: Cost_sum_fieldsFieldPolicy,
	},
	Cost_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_var_pop_fieldsKeySpecifier | (() => undefined | Cost_var_pop_fieldsKeySpecifier),
		fields?: Cost_var_pop_fieldsFieldPolicy,
	},
	Cost_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_var_samp_fieldsKeySpecifier | (() => undefined | Cost_var_samp_fieldsKeySpecifier),
		fields?: Cost_var_samp_fieldsFieldPolicy,
	},
	Cost_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Cost_variance_fieldsKeySpecifier | (() => undefined | Cost_variance_fieldsKeySpecifier),
		fields?: Cost_variance_fieldsFieldPolicy,
	},
	Member?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberKeySpecifier | (() => undefined | MemberKeySpecifier),
		fields?: MemberFieldPolicy,
	},
	Member_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_aggregateKeySpecifier | (() => undefined | Member_aggregateKeySpecifier),
		fields?: Member_aggregateFieldPolicy,
	},
	Member_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_aggregate_fieldsKeySpecifier | (() => undefined | Member_aggregate_fieldsKeySpecifier),
		fields?: Member_aggregate_fieldsFieldPolicy,
	},
	Member_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_avg_fieldsKeySpecifier | (() => undefined | Member_avg_fieldsKeySpecifier),
		fields?: Member_avg_fieldsFieldPolicy,
	},
	Member_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_max_fieldsKeySpecifier | (() => undefined | Member_max_fieldsKeySpecifier),
		fields?: Member_max_fieldsFieldPolicy,
	},
	Member_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_min_fieldsKeySpecifier | (() => undefined | Member_min_fieldsKeySpecifier),
		fields?: Member_min_fieldsFieldPolicy,
	},
	Member_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_mutation_responseKeySpecifier | (() => undefined | Member_mutation_responseKeySpecifier),
		fields?: Member_mutation_responseFieldPolicy,
	},
	Member_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_stddev_fieldsKeySpecifier | (() => undefined | Member_stddev_fieldsKeySpecifier),
		fields?: Member_stddev_fieldsFieldPolicy,
	},
	Member_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_stddev_pop_fieldsKeySpecifier | (() => undefined | Member_stddev_pop_fieldsKeySpecifier),
		fields?: Member_stddev_pop_fieldsFieldPolicy,
	},
	Member_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_stddev_samp_fieldsKeySpecifier | (() => undefined | Member_stddev_samp_fieldsKeySpecifier),
		fields?: Member_stddev_samp_fieldsFieldPolicy,
	},
	Member_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_sum_fieldsKeySpecifier | (() => undefined | Member_sum_fieldsKeySpecifier),
		fields?: Member_sum_fieldsFieldPolicy,
	},
	Member_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_var_pop_fieldsKeySpecifier | (() => undefined | Member_var_pop_fieldsKeySpecifier),
		fields?: Member_var_pop_fieldsFieldPolicy,
	},
	Member_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_var_samp_fieldsKeySpecifier | (() => undefined | Member_var_samp_fieldsKeySpecifier),
		fields?: Member_var_samp_fieldsFieldPolicy,
	},
	Member_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Member_variance_fieldsKeySpecifier | (() => undefined | Member_variance_fieldsKeySpecifier),
		fields?: Member_variance_fieldsFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectMember?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMemberKeySpecifier | (() => undefined | ProjectMemberKeySpecifier),
		fields?: ProjectMemberFieldPolicy,
	},
	ProjectMember_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_aggregateKeySpecifier | (() => undefined | ProjectMember_aggregateKeySpecifier),
		fields?: ProjectMember_aggregateFieldPolicy,
	},
	ProjectMember_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_aggregate_fieldsKeySpecifier | (() => undefined | ProjectMember_aggregate_fieldsKeySpecifier),
		fields?: ProjectMember_aggregate_fieldsFieldPolicy,
	},
	ProjectMember_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_avg_fieldsKeySpecifier | (() => undefined | ProjectMember_avg_fieldsKeySpecifier),
		fields?: ProjectMember_avg_fieldsFieldPolicy,
	},
	ProjectMember_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_max_fieldsKeySpecifier | (() => undefined | ProjectMember_max_fieldsKeySpecifier),
		fields?: ProjectMember_max_fieldsFieldPolicy,
	},
	ProjectMember_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_min_fieldsKeySpecifier | (() => undefined | ProjectMember_min_fieldsKeySpecifier),
		fields?: ProjectMember_min_fieldsFieldPolicy,
	},
	ProjectMember_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_mutation_responseKeySpecifier | (() => undefined | ProjectMember_mutation_responseKeySpecifier),
		fields?: ProjectMember_mutation_responseFieldPolicy,
	},
	ProjectMember_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_stddev_fieldsKeySpecifier | (() => undefined | ProjectMember_stddev_fieldsKeySpecifier),
		fields?: ProjectMember_stddev_fieldsFieldPolicy,
	},
	ProjectMember_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_stddev_pop_fieldsKeySpecifier | (() => undefined | ProjectMember_stddev_pop_fieldsKeySpecifier),
		fields?: ProjectMember_stddev_pop_fieldsFieldPolicy,
	},
	ProjectMember_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_stddev_samp_fieldsKeySpecifier | (() => undefined | ProjectMember_stddev_samp_fieldsKeySpecifier),
		fields?: ProjectMember_stddev_samp_fieldsFieldPolicy,
	},
	ProjectMember_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_sum_fieldsKeySpecifier | (() => undefined | ProjectMember_sum_fieldsKeySpecifier),
		fields?: ProjectMember_sum_fieldsFieldPolicy,
	},
	ProjectMember_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_var_pop_fieldsKeySpecifier | (() => undefined | ProjectMember_var_pop_fieldsKeySpecifier),
		fields?: ProjectMember_var_pop_fieldsFieldPolicy,
	},
	ProjectMember_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_var_samp_fieldsKeySpecifier | (() => undefined | ProjectMember_var_samp_fieldsKeySpecifier),
		fields?: ProjectMember_var_samp_fieldsFieldPolicy,
	},
	ProjectMember_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectMember_variance_fieldsKeySpecifier | (() => undefined | ProjectMember_variance_fieldsKeySpecifier),
		fields?: ProjectMember_variance_fieldsFieldPolicy,
	},
	Project_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_aggregateKeySpecifier | (() => undefined | Project_aggregateKeySpecifier),
		fields?: Project_aggregateFieldPolicy,
	},
	Project_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_aggregate_fieldsKeySpecifier | (() => undefined | Project_aggregate_fieldsKeySpecifier),
		fields?: Project_aggregate_fieldsFieldPolicy,
	},
	Project_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_avg_fieldsKeySpecifier | (() => undefined | Project_avg_fieldsKeySpecifier),
		fields?: Project_avg_fieldsFieldPolicy,
	},
	Project_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_max_fieldsKeySpecifier | (() => undefined | Project_max_fieldsKeySpecifier),
		fields?: Project_max_fieldsFieldPolicy,
	},
	Project_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_min_fieldsKeySpecifier | (() => undefined | Project_min_fieldsKeySpecifier),
		fields?: Project_min_fieldsFieldPolicy,
	},
	Project_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_mutation_responseKeySpecifier | (() => undefined | Project_mutation_responseKeySpecifier),
		fields?: Project_mutation_responseFieldPolicy,
	},
	Project_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_stddev_fieldsKeySpecifier | (() => undefined | Project_stddev_fieldsKeySpecifier),
		fields?: Project_stddev_fieldsFieldPolicy,
	},
	Project_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_stddev_pop_fieldsKeySpecifier | (() => undefined | Project_stddev_pop_fieldsKeySpecifier),
		fields?: Project_stddev_pop_fieldsFieldPolicy,
	},
	Project_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_stddev_samp_fieldsKeySpecifier | (() => undefined | Project_stddev_samp_fieldsKeySpecifier),
		fields?: Project_stddev_samp_fieldsFieldPolicy,
	},
	Project_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_sum_fieldsKeySpecifier | (() => undefined | Project_sum_fieldsKeySpecifier),
		fields?: Project_sum_fieldsFieldPolicy,
	},
	Project_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_var_pop_fieldsKeySpecifier | (() => undefined | Project_var_pop_fieldsKeySpecifier),
		fields?: Project_var_pop_fieldsFieldPolicy,
	},
	Project_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_var_samp_fieldsKeySpecifier | (() => undefined | Project_var_samp_fieldsKeySpecifier),
		fields?: Project_var_samp_fieldsFieldPolicy,
	},
	Project_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Project_variance_fieldsKeySpecifier | (() => undefined | Project_variance_fieldsKeySpecifier),
		fields?: Project_variance_fieldsFieldPolicy,
	},
	StatusProject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusProjectKeySpecifier | (() => undefined | StatusProjectKeySpecifier),
		fields?: StatusProjectFieldPolicy,
	},
	StatusProject_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusProject_aggregateKeySpecifier | (() => undefined | StatusProject_aggregateKeySpecifier),
		fields?: StatusProject_aggregateFieldPolicy,
	},
	StatusProject_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusProject_aggregate_fieldsKeySpecifier | (() => undefined | StatusProject_aggregate_fieldsKeySpecifier),
		fields?: StatusProject_aggregate_fieldsFieldPolicy,
	},
	StatusProject_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusProject_max_fieldsKeySpecifier | (() => undefined | StatusProject_max_fieldsKeySpecifier),
		fields?: StatusProject_max_fieldsFieldPolicy,
	},
	StatusProject_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusProject_min_fieldsKeySpecifier | (() => undefined | StatusProject_min_fieldsKeySpecifier),
		fields?: StatusProject_min_fieldsFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	User_aggregate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_aggregateKeySpecifier | (() => undefined | User_aggregateKeySpecifier),
		fields?: User_aggregateFieldPolicy,
	},
	User_aggregate_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_aggregate_fieldsKeySpecifier | (() => undefined | User_aggregate_fieldsKeySpecifier),
		fields?: User_aggregate_fieldsFieldPolicy,
	},
	User_avg_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_avg_fieldsKeySpecifier | (() => undefined | User_avg_fieldsKeySpecifier),
		fields?: User_avg_fieldsFieldPolicy,
	},
	User_max_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_max_fieldsKeySpecifier | (() => undefined | User_max_fieldsKeySpecifier),
		fields?: User_max_fieldsFieldPolicy,
	},
	User_min_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_min_fieldsKeySpecifier | (() => undefined | User_min_fieldsKeySpecifier),
		fields?: User_min_fieldsFieldPolicy,
	},
	User_mutation_response?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_mutation_responseKeySpecifier | (() => undefined | User_mutation_responseKeySpecifier),
		fields?: User_mutation_responseFieldPolicy,
	},
	User_stddev_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_fieldsKeySpecifier | (() => undefined | User_stddev_fieldsKeySpecifier),
		fields?: User_stddev_fieldsFieldPolicy,
	},
	User_stddev_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_pop_fieldsKeySpecifier | (() => undefined | User_stddev_pop_fieldsKeySpecifier),
		fields?: User_stddev_pop_fieldsFieldPolicy,
	},
	User_stddev_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_stddev_samp_fieldsKeySpecifier | (() => undefined | User_stddev_samp_fieldsKeySpecifier),
		fields?: User_stddev_samp_fieldsFieldPolicy,
	},
	User_sum_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_sum_fieldsKeySpecifier | (() => undefined | User_sum_fieldsKeySpecifier),
		fields?: User_sum_fieldsFieldPolicy,
	},
	User_var_pop_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_var_pop_fieldsKeySpecifier | (() => undefined | User_var_pop_fieldsKeySpecifier),
		fields?: User_var_pop_fieldsFieldPolicy,
	},
	User_var_samp_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_var_samp_fieldsKeySpecifier | (() => undefined | User_var_samp_fieldsKeySpecifier),
		fields?: User_var_samp_fieldsFieldPolicy,
	},
	User_variance_fields?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | User_variance_fieldsKeySpecifier | (() => undefined | User_variance_fieldsKeySpecifier),
		fields?: User_variance_fieldsFieldPolicy,
	},
	mutation_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | mutation_rootKeySpecifier | (() => undefined | mutation_rootKeySpecifier),
		fields?: mutation_rootFieldPolicy,
	},
	query_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | query_rootKeySpecifier | (() => undefined | query_rootKeySpecifier),
		fields?: query_rootFieldPolicy,
	},
	subscription_root?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | subscription_rootKeySpecifier | (() => undefined | subscription_rootKeySpecifier),
		fields?: subscription_rootFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;