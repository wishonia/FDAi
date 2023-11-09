CREATE VIEW user_correlations_as_cause AS
    SELECT
        count(`correlations`.`id`) AS `numberOfCorrelations`,
        `correlations`.`cause_variable_id` AS `cause_variable_id`,
        `correlations`.`user_id` AS `user_id`
    FROM
        `correlations`
    GROUP BY
        `correlations`.`cause_variable_id`,
        `correlations`.`user_id`;

CREATE VIEW user_correlations_as_effect AS
    SELECT
        count(`correlations`.`id`) AS `numberOfCorrelations`,
        `correlations`.`effect_variable_id` AS `effect_variable_id`,
        `correlations`.`user_id` AS `user_id`
    FROM
        `correlations`
    GROUP BY
        `correlations`.`effect_variable_id`,
        `correlations`.`user_id`;

CREATE VIEW aggregate_correlations_as_cause AS
    SELECT
        count(
            `aggregate_correlations`.`id`
        ) AS `numberOfCorrelations`,
        `aggregate_correlations`.`cause_variable_id` AS `effect_variable_id`
    FROM
        `aggregate_correlations`
    GROUP BY
        `aggregate_correlations`.`effect_variable_id`;

CREATE VIEW aggregate_correlations_as_effect AS
    SELECT
        count(
            `aggregate_correlations`.`id`
        ) AS `numberOfCorrelations`,
        `aggregate_correlations`.`cause_variable_id` AS `effect_variable_id`
    FROM
        `aggregate_correlations`
    GROUP BY
        `aggregate_correlations`.`effect_variable_id`;

UPDATE user_variables uv
JOIN user_correlations_as_cause ucac ON uv.user_id = ucac.user_id
AND uv.variable_id = ucac.cause_variable_id
SET uv.number_of_user_correlations_as_cause = ucac.numberOfCorrelations;

UPDATE user_variables uv
JOIN user_correlations_as_effect ucae ON uv.user_id = ucae.user_id
AND uv.variable_id = ucae.effect_variable_id
SET uv.number_of_user_correlations_as_effect = ucae.numberOfCorrelations;

UPDATE variables v
JOIN aggregate_correlations_as_cause acac ON v.id = acac.cause_variable_id
SET v.number_of_aggregate_correlations_as_cause = acac.numberOfCorrelations;

UPDATE variables v
JOIN aggregate_correlations_as_effect acae ON v.id = acae.effect_variable_id
SET v.number_of_aggregate_correlations_as_effect = acae.numberOfCorrelations;