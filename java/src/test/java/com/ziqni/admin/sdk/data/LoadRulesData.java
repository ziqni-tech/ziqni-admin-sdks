package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.model.Rule;
import com.ziqni.admin.sdk.model.RuleExpression;

import java.util.List;

public class LoadRulesData {

    public List<Rule> getRules() {
        String scope = "Contest";
        String operand = "contest.created.year";
        String operator = "==";
        String type = "expression";

        final var ruleExpression = new RuleExpression()
                .lineNumber(2)
                .mustEvaluateTo(true)
                .mustMatchAll(true)
                .operand(operand)
                .operator(operator)
                .scope(scope)
                .value("1")
                .type(type);
        final var rule = new Rule()
                .action("contest.points")
                .context("contest")
                .rules(ruleExpression);

        return List.of(rule);
    }

}
