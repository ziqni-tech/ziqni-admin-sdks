package com.ziqni.sdk.admin.data;

import com.ziqni.sdk.admin.model.Rule;
import com.ziqni.sdk.admin.model.RuleExpression;
import com.ziqni.sdk.admin.model.Rule;
import com.ziqni.sdk.admin.model.RuleExpression;

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
