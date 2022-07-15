/*
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ziqni.sdk.admin.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.ziqni.sdk.admin.model.CreateAchievementRequestAllOf;
import com.ziqni.sdk.admin.model.CreateOptParamModels;
import com.ziqni.sdk.admin.model.CreateRewardRequest;
import com.ziqni.sdk.admin.model.DependantOn;
import com.ziqni.sdk.admin.model.Rule;
import com.ziqni.sdk.admin.model.Scheduling;
import com.ziqni.sdk.admin.model.Translation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * CreateAchievementRequest
 */
@JsonPropertyOrder({
  CreateAchievementRequest.JSON_PROPERTY_CUSTOM_FIELDS,
  CreateAchievementRequest.JSON_PROPERTY_TAGS,
  CreateAchievementRequest.JSON_PROPERTY_METADATA,
  CreateAchievementRequest.JSON_PROPERTY_NAME,
  CreateAchievementRequest.JSON_PROPERTY_DESCRIPTION,
  CreateAchievementRequest.JSON_PROPERTY_TERMS_AND_CONDITIONS,
  CreateAchievementRequest.JSON_PROPERTY_ICON,
  CreateAchievementRequest.JSON_PROPERTY_RULES,
  CreateAchievementRequest.JSON_PROPERTY_SCHEDULING,
  CreateAchievementRequest.JSON_PROPERTY_MAX_NUMBER_OF_ISSUES,
  CreateAchievementRequest.JSON_PROPERTY_TRANSLATIONS,
  CreateAchievementRequest.JSON_PROPERTY_REWARDS,
  CreateAchievementRequest.JSON_PROPERTY_CONSTRAINTS,
  CreateAchievementRequest.JSON_PROPERTY_ACHIEVEMENT_DEPENDENCIES,
  CreateAchievementRequest.JSON_PROPERTY_MEMBER_TAGS_FILTER,
  CreateAchievementRequest.JSON_PROPERTY_PRODUCT_TAGS_FILTER,
  CreateAchievementRequest.JSON_PROPERTY_ADD_CONSTRAINTS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CreateAchievementRequest {
  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "customFields";
  private Map<String, Object> customFields = null;

  public static final String JSON_PROPERTY_TAGS = "tags";
  private List<String> tags = null;

  public static final String JSON_PROPERTY_METADATA = "metadata";
  private Map<String, String> metadata = null;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_TERMS_AND_CONDITIONS = "termsAndConditions";
  private String termsAndConditions;

  public static final String JSON_PROPERTY_ICON = "icon";
  private String icon;

  public static final String JSON_PROPERTY_RULES = "rules";
  private List<Rule> rules = null;

  public static final String JSON_PROPERTY_SCHEDULING = "scheduling";
  private Scheduling scheduling;

  public static final String JSON_PROPERTY_MAX_NUMBER_OF_ISSUES = "maxNumberOfIssues";
  private Integer maxNumberOfIssues;

  public static final String JSON_PROPERTY_TRANSLATIONS = "translations";
  private List<Translation> translations = null;

  public static final String JSON_PROPERTY_REWARDS = "rewards";
  private List<CreateRewardRequest> rewards = null;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = new ArrayList<>();

  public static final String JSON_PROPERTY_ACHIEVEMENT_DEPENDENCIES = "achievementDependencies";
  private DependantOn achievementDependencies;

  public static final String JSON_PROPERTY_MEMBER_TAGS_FILTER = "memberTagsFilter";
  private DependantOn memberTagsFilter;

  public static final String JSON_PROPERTY_PRODUCT_TAGS_FILTER = "productTagsFilter";
  private DependantOn productTagsFilter;

  public static final String JSON_PROPERTY_ADD_CONSTRAINTS = "addConstraints";
  private List<String> addConstraints = null;


  public CreateAchievementRequest customFields(Map<String, Object> customFields) {
    this.customFields = customFields;
    return this;
  }

  public CreateAchievementRequest putCustomFieldsItem(String key, Object customFieldsItem) {
    if (this.customFields == null) {
      this.customFields = new HashMap<>();
    }
    this.customFields.put(key, customFieldsItem);
    return this;
  }

   /**
   * A list of custom field entries
   * @return customFields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A list of custom field entries")
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)

  public Map<String, Object> getCustomFields() {
    return customFields;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomFields(Map<String, Object> customFields) {
    this.customFields = customFields;
  }


  public CreateAchievementRequest tags(List<String> tags) {
    this.tags = tags;
    return this;
  }

  public CreateAchievementRequest addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * A list of id&#39;s used to tag models
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"Dc4swmQBVd51K6gPQqFx\",\"Dc4swmQBVd51K6gPQqF2\"]", value = "A list of id's used to tag models")
  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getTags() {
    return tags;
  }


  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public CreateAchievementRequest metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public CreateAchievementRequest putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_METADATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Map<String, String> getMetadata() {
    return metadata;
  }


  @JsonProperty(JSON_PROPERTY_METADATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public CreateAchievementRequest name(String name) {
    this.name = name;
    return this;
  }

   /**
   * A name for the Achievement. Can be translated
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Welcome badge", required = true, value = "A name for the Achievement. Can be translated")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(String name) {
    this.name = name;
  }


  public CreateAchievementRequest description(String description) {
    this.description = description;
    return this;
  }

   /**
   * A name for the Achievement. Can be translated
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "A Badge to welcome you on board", value = "A name for the Achievement. Can be translated")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(String description) {
    this.description = description;
  }


  public CreateAchievementRequest termsAndConditions(String termsAndConditions) {
    this.termsAndConditions = termsAndConditions;
    return this;
  }

   /**
   * Terms and conditions of an achievement. Can be translated
   * @return termsAndConditions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Participate to win", value = "Terms and conditions of an achievement. Can be translated")
  @JsonProperty(JSON_PROPERTY_TERMS_AND_CONDITIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getTermsAndConditions() {
    return termsAndConditions;
  }


  @JsonProperty(JSON_PROPERTY_TERMS_AND_CONDITIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTermsAndConditions(String termsAndConditions) {
    this.termsAndConditions = termsAndConditions;
  }


  public CreateAchievementRequest icon(String icon) {
    this.icon = icon;
    return this;
  }

   /**
   * An Icon id that has been pre uploaded to the system to display for Achievement
   * @return icon
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", value = "An Icon id that has been pre uploaded to the system to display for Achievement")
  @JsonProperty(JSON_PROPERTY_ICON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIcon() {
    return icon;
  }


  @JsonProperty(JSON_PROPERTY_ICON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIcon(String icon) {
    this.icon = icon;
  }


  public CreateAchievementRequest rules(List<Rule> rules) {
    this.rules = rules;
    return this;
  }

  public CreateAchievementRequest addRulesItem(Rule rulesItem) {
    if (this.rules == null) {
      this.rules = new ArrayList<>();
    }
    this.rules.add(rulesItem);
    return this;
  }

   /**
   * Get rules
   * @return rules
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RULES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<Rule> getRules() {
    return rules;
  }


  @JsonProperty(JSON_PROPERTY_RULES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRules(List<Rule> rules) {
    this.rules = rules;
  }


  public CreateAchievementRequest scheduling(Scheduling scheduling) {
    this.scheduling = scheduling;
    return this;
  }

   /**
   * Get scheduling
   * @return scheduling
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_SCHEDULING)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Scheduling getScheduling() {
    return scheduling;
  }


  @JsonProperty(JSON_PROPERTY_SCHEDULING)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setScheduling(Scheduling scheduling) {
    this.scheduling = scheduling;
  }


  public CreateAchievementRequest maxNumberOfIssues(Integer maxNumberOfIssues) {
    this.maxNumberOfIssues = maxNumberOfIssues;
    return this;
  }

   /**
   * Maximum number of issued achievements
   * @return maxNumberOfIssues
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "9999", value = "Maximum number of issued achievements")
  @JsonProperty(JSON_PROPERTY_MAX_NUMBER_OF_ISSUES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getMaxNumberOfIssues() {
    return maxNumberOfIssues;
  }


  @JsonProperty(JSON_PROPERTY_MAX_NUMBER_OF_ISSUES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxNumberOfIssues(Integer maxNumberOfIssues) {
    this.maxNumberOfIssues = maxNumberOfIssues;
  }


  public CreateAchievementRequest translations(List<Translation> translations) {
    this.translations = translations;
    return this;
  }

  public CreateAchievementRequest addTranslationsItem(Translation translationsItem) {
    if (this.translations == null) {
      this.translations = new ArrayList<>();
    }
    this.translations.add(translationsItem);
    return this;
  }

   /**
   * Get translations
   * @return translations
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TRANSLATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<Translation> getTranslations() {
    return translations;
  }


  @JsonProperty(JSON_PROPERTY_TRANSLATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTranslations(List<Translation> translations) {
    this.translations = translations;
  }


  public CreateAchievementRequest rewards(List<CreateRewardRequest> rewards) {
    this.rewards = rewards;
    return this;
  }

  public CreateAchievementRequest addRewardsItem(CreateRewardRequest rewardsItem) {
    if (this.rewards == null) {
      this.rewards = new ArrayList<>();
    }
    this.rewards.add(rewardsItem);
    return this;
  }

   /**
   * Get rewards
   * @return rewards
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REWARDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<CreateRewardRequest> getRewards() {
    return rewards;
  }


  @JsonProperty(JSON_PROPERTY_REWARDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRewards(List<CreateRewardRequest> rewards) {
    this.rewards = rewards;
  }


  public CreateAchievementRequest constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public CreateAchievementRequest addConstraintsItem(String constraintsItem) {
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints
   * @return constraints
   * @deprecated
  **/
  @Deprecated
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "- notifyMember - isHidden - deprecated - optinRequiredForEntrants", required = true, value = "Additional constraints")
  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public List<String> getConstraints() {
    return constraints;
  }


  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setConstraints(List<String> constraints) {
    this.constraints = constraints;
  }


  public CreateAchievementRequest achievementDependencies(DependantOn achievementDependencies) {
    this.achievementDependencies = achievementDependencies;
    return this;
  }

   /**
   * Get achievementDependencies
   * @return achievementDependencies
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ACHIEVEMENT_DEPENDENCIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DependantOn getAchievementDependencies() {
    return achievementDependencies;
  }


  @JsonProperty(JSON_PROPERTY_ACHIEVEMENT_DEPENDENCIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAchievementDependencies(DependantOn achievementDependencies) {
    this.achievementDependencies = achievementDependencies;
  }


  public CreateAchievementRequest memberTagsFilter(DependantOn memberTagsFilter) {
    this.memberTagsFilter = memberTagsFilter;
    return this;
  }

   /**
   * Get memberTagsFilter
   * @return memberTagsFilter
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MEMBER_TAGS_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DependantOn getMemberTagsFilter() {
    return memberTagsFilter;
  }


  @JsonProperty(JSON_PROPERTY_MEMBER_TAGS_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMemberTagsFilter(DependantOn memberTagsFilter) {
    this.memberTagsFilter = memberTagsFilter;
  }


  public CreateAchievementRequest productTagsFilter(DependantOn productTagsFilter) {
    this.productTagsFilter = productTagsFilter;
    return this;
  }

   /**
   * Get productTagsFilter
   * @return productTagsFilter
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRODUCT_TAGS_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DependantOn getProductTagsFilter() {
    return productTagsFilter;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_TAGS_FILTER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setProductTagsFilter(DependantOn productTagsFilter) {
    this.productTagsFilter = productTagsFilter;
  }


  public CreateAchievementRequest addConstraints(List<String> addConstraints) {
    this.addConstraints = addConstraints;
    return this;
  }

  public CreateAchievementRequest addAddConstraintsItem(String addConstraintsItem) {
    if (this.addConstraints == null) {
      this.addConstraints = new ArrayList<>();
    }
    this.addConstraints.add(addConstraintsItem);
    return this;
  }

   /**
   * Get addConstraints
   * @return addConstraints
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ADD_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getAddConstraints() {
    return addConstraints;
  }


  @JsonProperty(JSON_PROPERTY_ADD_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAddConstraints(List<String> addConstraints) {
    this.addConstraints = addConstraints;
  }


  /**
   * Return true if this CreateAchievementRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateAchievementRequest createAchievementRequest = (CreateAchievementRequest) o;
    return Objects.equals(this.customFields, createAchievementRequest.customFields) &&
        Objects.equals(this.tags, createAchievementRequest.tags) &&
        Objects.equals(this.metadata, createAchievementRequest.metadata) &&
        Objects.equals(this.name, createAchievementRequest.name) &&
        Objects.equals(this.description, createAchievementRequest.description) &&
        Objects.equals(this.termsAndConditions, createAchievementRequest.termsAndConditions) &&
        Objects.equals(this.icon, createAchievementRequest.icon) &&
        Objects.equals(this.rules, createAchievementRequest.rules) &&
        Objects.equals(this.scheduling, createAchievementRequest.scheduling) &&
        Objects.equals(this.maxNumberOfIssues, createAchievementRequest.maxNumberOfIssues) &&
        Objects.equals(this.translations, createAchievementRequest.translations) &&
        Objects.equals(this.rewards, createAchievementRequest.rewards) &&
        Objects.equals(this.constraints, createAchievementRequest.constraints) &&
        Objects.equals(this.achievementDependencies, createAchievementRequest.achievementDependencies) &&
        Objects.equals(this.memberTagsFilter, createAchievementRequest.memberTagsFilter) &&
        Objects.equals(this.productTagsFilter, createAchievementRequest.productTagsFilter) &&
        Objects.equals(this.addConstraints, createAchievementRequest.addConstraints);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customFields, tags, metadata, name, description, termsAndConditions, icon, rules, scheduling, maxNumberOfIssues, translations, rewards, constraints, achievementDependencies, memberTagsFilter, productTagsFilter, addConstraints);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateAchievementRequest {\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    termsAndConditions: ").append(toIndentedString(termsAndConditions)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    rules: ").append(toIndentedString(rules)).append("\n");
    sb.append("    scheduling: ").append(toIndentedString(scheduling)).append("\n");
    sb.append("    maxNumberOfIssues: ").append(toIndentedString(maxNumberOfIssues)).append("\n");
    sb.append("    translations: ").append(toIndentedString(translations)).append("\n");
    sb.append("    rewards: ").append(toIndentedString(rewards)).append("\n");
    sb.append("    constraints: ").append(toIndentedString(constraints)).append("\n");
    sb.append("    achievementDependencies: ").append(toIndentedString(achievementDependencies)).append("\n");
    sb.append("    memberTagsFilter: ").append(toIndentedString(memberTagsFilter)).append("\n");
    sb.append("    productTagsFilter: ").append(toIndentedString(productTagsFilter)).append("\n");
    sb.append("    addConstraints: ").append(toIndentedString(addConstraints)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

