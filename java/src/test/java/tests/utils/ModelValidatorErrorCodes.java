package tests.utils;

/**
 * THIS IS FILE IS COPIED FROM - NX-SERVICES-CORE-API PROJECT
 * IT IS ADDED HERE FOR CONVENIENCE ONLY, MUST BE KEPT UP TO DATE AT ALL TIMES
 */
public enum ModelValidatorErrorCodes {

    AccountIdNotSet(1000, "error.account_id_not_set"),
    AccountDoesNotExist(1001, "error.account_not_exist"),
    CreatedIsEmpty(1002,"error.created_is_empty"),
    CreatedNotValid(1003,"error.created_not_valid"),
    IdLengthNotValid(1004,"error.id_length_not_valid"),
    IdIsEmpty(1005,"error.id_is_empty"),
    OperationTypeIsEmpty(1006,"error.operation_type_is_empty"),
    OperationTypeContainsSpaces(1007,"error.operation_type_contains_spaces"),
    MessageIsEmpty(1008,"error.message_is_empty"),
    UserIdIsEmpty(1009,"error.user_id_is_empty"),
    UserIdLengthNotValid(1010,"error.user_id_length_not_valid"),
    UserIdNotValid(1011,"error.user_id_not_valid"),
    //    NameNotEmpty(1012, "error.name_not_empty"),
    BodyIsEmpty(1013, "error.body_is_empty"),
    SubjectIsEmpty(1014, "error.subject_is_empty"),
    EventRefIdIsEmpty(1015, "error.event_ref_id_is_empty"),
    MessageTypeIsEmpty(1016, "error.message_type_is_empty"),
    StatusIsEmpty(1017, "error.status_is_empty"),
    //    Expired(1018, "error.expired"),
    EventRefTypeIsEmpty(1019, "error.event_ref_type_is_empty"),
    MetadataIsEmpty(1020, "error.metadata_is_empty"),
    WidgetNotMarkedDepreciatedOnCreation(1021, "error.widget_cannot_be_marked_as_deprecated_on_creation"),
    DescriptionIsTooLong(1022, "error.description_is_too_long"),
    WidgetTypeIsNotValid(1023, "error.widget_type_is_not_valid"),
    ThemeNamedNotSet(1024, "error.theme_name_not_set"),
    ThemeNameIsTooLong(1025, "error.theme_name_is_too_long"),
    NameNotSet(1026, "error.name_not_set"),
    NameIsTooLong(1027, "error.name_is_too_long"),
    CategoryIsEmpty(1028, "error.category.is.empty"),
    RerenceIdListNotValid(1029, "error.referenceIdList_not_valid"),
    IncludeDependenciesNotSet(1030, "error.includeDependencies_not_set"),
    OrderNumberIsEmpty(1031, "error.orderNumber.is.empty"),
    ValueIsEmpty(1032, "error.value.is.empty"),
    KeyIsEmpty(1033, "error.key.is.empty"),
    HeadersIsEmpty(1034, "error.headers.is.empty"),
    PostToUrlIsEmpty(1035, "error.postToUrl.is.empty"),
    TransformerIdIsEmpty(1036, "error.transformerId.is.empty"),
    TriggersIsNotValid(1037, "error.triggers.is.not.valid"),
    AccountIdShouldNotContainSpaces(1038, "error.accountId_should_not contain_spaces"),
    UserIdShouldNotContainSpaces(1039,"error.userId_should_not_contain_spaces"),
    EventRefTypeIsNotValid(1040, "error.event_ref_type_is_not_valid"),
    EventRefIdShouldNotContainSpaces(1041, "error.event_ref_id_should_contain_spaces"),
    MessageTypeIsNotValid(1050, "error.message_type_is_not_valid"),
    SubjectLengthIsNotValid(1051, "error.subject_length_is_greater_than_500"),
    BodyLengthIsNotValid(1052, "error.body_length_is_greater_than_5000"),
    StatusInvalid(1053, "error.status_is_invalid"),
    ExpiryIsEmpty(1054, "error.expiry_is_empty"),
    DateIsInvalid(1055, "error.date_is_invalid"),
    MetadataKeyLengthInvalid(1056, "error.metadata_key_length_should_not_exceed_100"),
    MetadataKeyEmpty(1057, "error.metadata_key_is_empty"),
    MetadataKeyContainsInvalidCharacters(1058, "error.metadata_key_contains_characters_not_allowed"),
    MetadataValueCannotBeEmptyWhenKeyIsPresent(1059, "error.metadata_value_cannot_be_empty_when_key_is_present"),
    MetadataValueLengthInvalid(1060, "error.metadata_value_length_should_not_exceed_100"),
    MetadataValueShouldNotContainSpaces(1061, "error.metadata_value_should_not_contain_spaces"),
    IdShouldNotContainSpaces(1062,"error.Id_should_not_contain_spaces"),
    IdShouldNotBePresent(1063,"error.id_should_not_be_present"),
    CreatedShouldNotBePresent(1064,"error.created_should_not_be_present"),
    MultiplierIsNotValid(1065, "error.multiplier.is.not.valid"),
    UnitOfMeasureTypeIsNotValid(1066, "error.unitOfMeasureType.is.not.valid"),
    IsoCodeIsTooLong(1067, "error.isoCode_is_too_long"),
    SymbolIsTooLong(1068, "error.symbol_is_too_long"),
    TranslationsNotSet(1069, "error.translations_not_set"),
    TranslatableFieldsIsNotValid(1070, "error.translatableFields.is.not.valid"),
    InitialStateIdIsNotValid(1071, "error.initial_state_id_is_not_valid"),
    IconIsEmpty(1072, "error.icon_is_empty"),
    RuleSetsNotSet(1073, "error.rule_sets_not_set"),
    DeprecatedShouldNotBeTrueOnCreation(1074, "error.deprecated_should_not_be_set_to_true_on_creation"),
    MinimumShouldMatchCannotBeLowerThanZero(1075, "error.minimum_should_match_cannot_be_lower_than_zero"),
    MinimumShouldMatchCannotBeLowerThanOneWhenDependantSelected(1076, "error.minimum_should_match_cannot_be_lower_than_one_when_dependant_selected"),
    MinimumShouldMatchCannotBeHigherThanDependantOfTypeShould(1077, "error.minimum_should_match_cannot_be_higher_than_dependant_of_type_should"),
    AchievementLiveStatusNotValid(1078, "error.achievement_live_status_is_not_valid"),
    CategoryContainsDuplicates(1079, "error.category_contains_duplicates"),
    CategoryCannotContainEmptyEntries(1080, "error.category_cannot_contain_empty_entries"),
    MemberGroupsContainsDuplicates(1081, "error.member_groups_contains_duplicates"),
    MemberGroupsCannotContainEmptyEntries(1082, "error.member_groups_cannot_contain_empty_entries"),
    CodeBlockIsTooLong(1083, "error.code_block_is_too_long"),
    AccountTypeIsInvalid(1084, "error.account_type_is_invalid"),
    AccountTypeShouldNotBeEmpty(1085, "error.account_type_should_not_be_empty"),
    ZoneNotSet(1086, "error.zone_not_set"),
    ZoneShouldNotContainSpaces(1087, "error.zone_should_not_contain_spaces"),
    CompanyCannotBeASpace(1088, "error.company_cannot_be_a_space"),
    SubAccountCannotHaveEmptyStrings(1089, "error.sub_account_cannot_have_empty_strings"),
    SubAccountCannotHaveStringWithSpaces(1090, "error.sub_account_cannot_have_strings_with_spaces"),
    UnitsOfMeasureCannotHaveEmptyStrings(1091, "error.units_of_measure_cannot_have_empty_strings"),
    UnitsOfMeasureCannotHaveStringWithSpaces(1092, "error.units_of_measure_cannot_have_strings_with_spaces"),
    UnitsOfMeasureShouldBePresent(1093, "error.units_of_measure_should_be_present"),
    WysiwygEditorShouldNotSet(1094,"error.wysiwygEditor_not_set"),
    DescriptionIsEmpty(1095, "error.description_is_empty"),
    WidgetTypeIsEmpty(1096, "error.widgetType_is_empty"),
    IsoCodeIsEmpty(1097, "error.isoCode_is_empty"),
    UnitOfMeasureTypeIsEmpty(1098, "error.unitOfMeasureType_is_empty"),
    SymbolIsEmpty(1099, "error.symbol_is_empty"),
    TranslatableFieldsNotSet(1100, "error.translatableFields_not_set"),
    ImageDoesNotExist(1101, "error.image_not_exist"),
    AchievementDoesNotExist(1102, "error.Achievement_not_exist"),
    TransformerDoesNotExistByTransformerId(1103, "error.transformer_not_exist_by_transformer_id"),
    UnitOfMeasureAlreadyExistsByKey(1104, "error.unitFfMeasure_already_exists_by_key"),
    LastNameIsTooLong(1105, "error.lastname_is_too_long"),
    TfaSecretKeyIsEmpty(1106, "error.tfaSecretKey_is_empty"),
    TfaSecretKeyIsInvalid(1107, "error.tfaSecretKey_is_invalid"),
    EmailVerifiedNotSet(1108, "error.emailVerified_not_set"),
    FirstNameIsTooLong(1109, "error.firstname_is_too_long"),
    PasswordIsEmpty(1110, "error.password_is_empty"),
    PasswordIsInvalid(1111, "error.password_is_invalid"),
    TfaScratchCodesIsEmpty(1112, "error.tfaScratchCodes_is_empty"),
    EmailIsEmpty(1113, "error.email_is_empty"),
    EmailIsInvalid(1114, "error.email_is_invalid"),
    TfaEnabledIsEmpty(1115, "error.tfaEnabled_is_empty"),
    AddressLine1IsEmpty(1116, "error.addressLine1_is_empty"),
    AddressLine1IsTooLong(1107, "error.addressLine1_is_too_long"),
    AddressLine2IsTooLong(1107, "error.addressLine2_is_too_long"),
    ContactCityIsTooLong(1108, "error.contact_city_is_too_long"),
    ContactStateIsTooLong(1108, "error.contact_state_is_too_long"),
    ContactZipPostalCodeIsEmpty(1119, "error.contactZipPostalCode_is_empty"),
    ContactZipPostalCodeIsTooLong(1120, "error.contactZipPostalCode_is_too_long"),
    ContactCountryIsTooLong(1121, "error.contactCountry_is_too_long"),
    ContactMobileNumberIsTooLong(1122, "error.contactMobileNumber_is_too_long"),
    ContactPhoneNumberIsTooLong(1123, "error.contactPhoneNumber_is_too_long"),
    MemberOfNotSet(1124, "error.memberOf_not_set"),
    MemberOfAccountIdNotValid(1125, "error.memberOf_accountId_not_valid"),
    MemberOfRoleNotValid(1126, "error.memberOf_role_not_valid"),
    UserAlreadyExistById(1127, "error.user_already_exists_by_id"),
    WysiwygEditorNotSet(1128,"error.wysiwygEditor_not_set"),
    SpaceNameNotSet(1129,"error.space_name_not_set"),
    SourceLanguageIsNotMatch(1130,"error.sourcelanguage_is_not_valid"),
    ValidSourceLengthIsNotValid(1131, "error.valid_sourcelength_is_not_valid"),
    SourceIsEmpty(11132, "error.source_is_empty"),
    SourceLanguageIsEmpty(1133, "error.source_language_is_empty"),
    VersionIsEmpty(1134, "error.version_is_empty"),
    TranslatableFieldsContainsInValidStrings(1135, "error.translatable_fields_contains_invalid_strings"),
    TranslationsKeyShouldBeSetWhenTranslationsIsSet(1136, "error.translations_key_should_be_set_when_translation_is_set"),
    TranslationsKeyShouldNotHaveDuplicates(1137, "error.translations_key_should_not_have_duplicates"),
    TranslationsKeyNotLanguageKey(1138, "error.translations_key_not_language_key"),
    InvalidRecordId(1139,"invalid_record_id_record_not_found"),
    InvalidRecordIdBadlyFormatted(1140,"invalid_record_id_badly_formatted"),
    ErrorOccurredWhileConnectingToDatabase(1141,"error_occurred_while_connecting_to_database"),
    SchedulingIsEmpty(1142,"error.scheduling_is_empty"),
    ScheduleTypeIsEmpty(1143,"error.schedule_type_is_empty"),
    ScheduleTypeIsNotValidEnum(1144,"error.schedule_type_is_not_valid_enum"),
    ScheduleOccurrencesLimitIsNotSet(1145,"error.schedule_occurrences_limit_is_not_set"),
    ScheduleOccurrencesLimitCannotBeLessThanOne(1146,"error.schedule_occurrences_limit_cannot_be_less_than_one"),
    ScheduleEveryIsNotSet(1047,"error.schedule_every_is_not_set"),
    ScheduleEverySizeShouldBeGreaterThanZero(1048,"error.schedule_every_size_should_be_greater_than_zero"),
    ScheduleEveryForDailyNotInRange(1049,"error.schedule_every_for_daily_not_in_range"),
    ScheduleEveryForWeeklyNotInRange(1050,"error.schedule_every_for_weekly_not_in_range"),
    ScheduleEveryForMonthlyNotInRange(1051,"error.schedule_every_for_monthly_not_in_range"),
    ScheduleStartDateIsNotSet(1052,"error.schedule_start_date_is_not_set"),
    ScheduleEndDateIsNotSet(1053,"error.schedule_start_date_is_not_set"),
    ScheduleEndDateShouldNotBeBeforeStartDate(1054,"error.schedule_end_date_should_not_be_before_start_date"),
    TermsConditionsIsEmpty(1155, "error.termsConditions_is_empty"),
    EntityTypeIsEmpty(1156, "error.entitytype_is_empty"),
    ContainerIsEmpty(1157, "error.container_is_empty"),
    ParentTournamentIdIsEmpty(1158, "error.parentTournamentId_is_empty"),
    NumberOfRoundsIsEmpty(1159, "error.numberofrounds_is_empty"),
    NumberIsEmpty(1160, "error.number_is_empty"),
    RoundIsEmpty(1161, "error.round_is_empty"),
    OptionsIsEmpty(1162, "error.options_is_empty"),
    RoundTypeIsEmpty(1163, "error.roundtype_is_empty"),
    AllowMultipleEntriesPerRoundIsEmpty(1164, "error.allowmultipleentriesperround_is_empty"),
    EntrantsFromContestIsEmpty(1165, "error.entrantsfromcontest_is_empty"),
    StatusCodeIsEmpty(1166, "error.statuscode_is_empty"),
    FilesIsEmpty(1167, "error.files_is_empty"),
    UpdateCountNotSet(1168, "error.updatecount_is_empty"),
    BestScoresNotSet(1169, "error.updatecount_is_empty"),
    GoalReachedIsEmpty(1170, "error.goalReached_is_empty"),
    MarkerTimeStampIsEmpty(1171, "error.markertimestamp_is_empty"),
    MemberIdIsEmpty(1172, "error.memberId_is_empty"),
    ParticipationIdIsEmpty(1173, "error.participationid_is_empty"),
    TimeStampIsEmpty(1174, "error.timestamp_is_empty"),
    MemberNotExistByIdAndAccountId(1175, "error.member_not_exist_by_id_and_accountId"),
    StatusCodeIsNotValid(1176, "error.statusCode_is_not_valid"),
    SystemIsEmpty(1177, "error.system_is_empty"),
    RuleActionHelperNotExistByKeyAndAccountId(1178, "error.ruleActionHelper_not_exist_by_key_and_accountId"),
    PeriodIsEmpty(1178, "error.period_is_empty"),
    RewardTypeIsEmpty(1179, "error.rewardtype_is_empty"),
    EntityIdIsEmpty(1180, "error.entityid_is_empty"),
    MemberAcknowledgmentRequiredIsEmpty(1181, "error.memberacknowledgmentrequired_is_empty"),
    RewardNameNotSet(1182, "error.rewardname_not_set"),
    RewardNameIsTooLong(1183, "error.rewardname_is_too_long"),
    DelayIsEmpty(1184, "error.delay_is_empty"),
    RewardNotExistByRewardTypeAndAccountId(1178, "error.reward_not_exist_by_rewardType_and_accountId"),
    PeriodIsNegative(1185, "error.period_is_negative"),
    PeriodPointIntTimeAndPeriodBothCanNotBeSelected(1186, "error.periodPointIntTime_and_period_can_not_be_both_selected"),
    PeriodPointIntTimeCanNotBeBeforeNow(1187, "error.periodPointIntTime_cannot_be_before_now"),
    DescriptionLengthNotValid(1088,"error.description_length_not_valid"),
    ActiveIsNotSet(1089,"error.active_is_not_set"),
    WhiteListIPsContainsCharactersNotAllowed(1090,"error.white_list_ips_contains_characters_not_allowed"),
    WhiteListIPsContainsDuplicates(1091, "error.white_list_ips_contains_duplicates"),
    WhiteListIPsCannotContainEmptyEntries(1092, "error.white_list_ips_cannot_contain_empty_entries"),
    RoleNotValidEnum(1193, "error.role_not_valid_enum"),
    KeyCannotBeEmptyIfExists(1194, "error.key_cannot_be_empty_if_exists"),
    KeyCannotContainSpaces(1195, "error.key_cannot_contain_spaces"),
    PermissionNotSet(1096, "error.permission_not_set"),
    LocationFolderNotSet(1097, "error.location_folder_not_set"),
    LocationKeyNotSet(1098, "error.location_key_not_set"),
    ExtensionNotSet(1099, "error.extension_not_set"),
    MimeTypeNotSet(2000, "error.mime_type_not_set"),
    FileNameNotSet(2001, "error.file_name_not_set"),
    Md5HashNotSet(2002, "error.md5hash_not_set"),
    BucketNameNotSet(2003, "error.bucket_name_not_set"),
    AttachmentTypeNotSet(2004, "error.attachment_type_not_set"),
    ReferencesIsEmpty(2005, "error.references_not_set"),
    LanguageHelperNotExistByKeyAndAccountId(2006, "error.languageHelper_not_exist_by_key_and_accountId"),
    TimeZoneOffsetNotSet(2007, "error.timezoneoffset_not_set"),
    MemberRefIdIsEmpty(2008, "error.memberrefid_is_empty"),
    MemberRefIdIsTooLong(2009, "error.MemberRefId_is_too_long"),
    MemberTypeIsNotValid(2010, "error.memberType_is_not_valid"),
    TeamMembersIsNotValid(2011, "error.teamMembers_is_not_valid"),
    TeamMembersNotFoundByIdAndAccountId(2012, "error.teamMembers_not_found_by_provided_memberId_and_accountId"),
    GroupsIsNotSet(2013, "error.groups_is_not_set"),
    ProductRefIdNotSet(2014, "error.productRefId_not_set"),
    AdjustmentFactorNotSet(2015, "error.adjustmentFactor_not_set"),
    ProductTypeNotSet(2016, "error.productType_not_set"),
    ProductTypeIsTooLong(2017, "error.productType_is_too_long"),
    ProductRefIdLengthNotValid(2018, "error.productRefId_length_not_valid"),
    ProductRefIdNotContainsEmptySpace(2019, "error.productRefId_not_conatins_empty_space"),
    ProductGroupsCanNotBeEmpty(2020, "error.productGroups_can_not_be_empty"),
    ActionAdjustmentFactorsNotSet(2021, "error.actionAdjustmentFactors_not_set"),
    ActionAdjustmentFactorsNotBeDuplicate(2022, "error.actionAdjustmentFactors_not_be_duplicate"),
    PeriodAndPointInTimeCannotBeBothSelectedForReward(2023, "error.period_and_point_in_time_cannot_be_both_selected_for_reward"),
    PointInTimeCannotBeBeforeNow(2024, "error.point_in_time_cannot_be_before_now"),
    PeriodCannotBeNegative(2025, "error.period_cannot_be_negative"),
    PointInTimeMustBeGreaterThanNow(2026, "error.point_in_time_must_be_greater_than_now"),
    EntityTypeIsNotSet(2027, "error.entity_type_is_not_set"),
    MemberIdIsNotSet(2028, "error.member_id_is_not_set"),
    AwardCannotBeMarkedAsClaimedOnCreation(2029,"error.award_cannot_be_marked_as_claimed_on_creation"),
    MemberDoesNotExistById(2030,"error.member_with_that_member_id_does_not_exist"),
    AwardDoesNotExistById(2031,"error.award_with_that_member_id_does_not_exist"),
    ClaimedAwardCannotBeReset(2032,"error.claimed_award_cannot_be_reset"),
    RewardIsNotSet(2033, "error.reward_is_not_set"),
    TermsConditionsIsTooLong(2034, "error.termsConditions_is_too_long"),
    CompetitionTypeNotValidEnum(2035, "error.competition_type_not_valid_enum"),
    EntrantMemberTypeNotValidEnum(2036, "error.entrant_member_type_not_valid_enum"),
    NumberOfRoundsMustBeGreaterThanZero(2037, "error.number_of_rounds_must_be_greater_than_zero"),
    NumberOfRoundsIsNotSet(2038, "error.number_of_rounds_is_not_set"),
    LabelIsNotSet(2039, "error.label_is_not_set"),
    LabelIsTooLong(2040, "error.label_is_too_long"),
    ProductsCannotBeEmpty(2041, "error.products_cannot_be_empty"),
    OptinRequiredForEntrantsCannotBeEmpty(2042, "error.opt_in_required_for_entrants_cannot_be_empty"),
    IncludeEntrantsWhereCannotBeEmpty(2043, "error.include_entrants_where_cannot_be_empty"),
    ActualDatesShouldNotBeSetOnCreation(2044, "error.actual_dates_should_not_be_set_on_creation"),
    ScheduledDatesCannotBeEmpty(2045, "error.scheduled_dates_cannot_be_empty"),
    ScheduledDatesStartAndEndDatesCannotBeEmpty(2046, "error.scheduled_dates_start_and_end_dates_cannot_be_empty"),
    ScheduledDatesStartCannotBeGreaterThanEnd(2047, "error.scheduled_dates_start_cannot_be_greater_than_end"),
    ValidAutoStopInterval(2048,"error.auto_stop_interval_cannot_be_less_than_1000"),
    ValidAutoStartInterval(2049,"error.auto_start_interval_cannot_be_less_than_1000"),
    VirtualHostIsEmpty(2050, "error.virtualHost_is_empty"),
    LastKnownStateCodeIsEmpty(2051, "error.lastKnownStateCode_is_empty"),
    UriIsEmpty(2052, "error.uri_is_empty"),
    UseSslIsEmpty(2053, "error.useSsl_is_empty"),
    DurableIsEmpty(2054, "error.durable_is_empty"),
    LastKnownStateIsEmpty(2055, "error.lastKnownState_is_empty"),
    QueueNameNotSet(2056, "error.queueName_not_set"),
    QueueNameIsTooLong(2057, "error.queueName_is_too_long"),
    PortIsEmpty(2058, "error.port_is_empty"),
    AutoDeleteNotSet(2059, "error.autoDelete_not_set"),
    ExclusiveIsEmpty(2060, "error.exclusive_is_empty"),
    UserNameNotSet(2061, "error.userName_not_set"),
    UserNameIsTooLong(2062, "error.userName_is_too_long"),
    TransformerIdNotValid(2063, "error.transformerId_not_valid"),
    ExchangeIsTooLong(2064, "error.exchange_is_too_long"),
    RoutingKeyIsTooLong(2065, "error.routingKey_is_too_long"),
    SubjectIsNotValid(2066, "error.subject_is_not_valid"),
    LogLevelIsEmpty(2067, "error.loglevel_is_empty"),
    ServerTypeIsEmpty(2068, "error.servertype_is_empty"),
    HostNameIsEmpty(2069, "error.hostname_is_empty"),
    PrivateIpAddressIsEmpty(2070, "error.privateipaddress_is_empty"),
    HashIsEmpty(2071, "error.hash_is_empty"),
    ScheduledDatesIsEmpty(2072, "error.scheduleddates_is_empty"),
    DeprecatedIsEmpty(2073, "error.deprecated_is_empty"),
    LiveIsEmpty(2074, "error.live_is_empty"),
    CannotIgnoreScoreAndTimeForRanking(2075,"error.you_cannot_ignore_score_and_time_for_ranking"),
    ScoringStrategyValuesCannotBeNegative(2076,"error.scoring_strategy_values_cannot_be_negative"),
    TheSumBestOfCannotBeHigherThanLimitUpdatesTo(2077,"error.the_sum_best_of_cannot_be_higher_than_limit_updates_to"),
    MaximumMemberGroupCountReached(2078,"error.maximum_member_group_count_reached"),
    CompetitionValidationFailedShouldContainsSpaces(2079,"error.competition_validation_failed_should_contains_empty_entries"),
    CompetitionValidationFailedMustContainsSpaces(2080,"error.competition_validation_failed_must_contains_empty_entries"),
    CompetitionValidationFailedMustNotContainsSpaces(2081,"error.competition_validation_failed_must_not_contains_empty_entries"),
    CompetitionValidationFailedShouldContainsWhiteSpaces(2082,"error.competition_validation_failed_should_contains_white_spaces"),
    CompetitionValidationFailedMustContainsWhiteSpaces(2083,"error.competition_validation_failed_must_contains_white_spaces"),
    CompetitionValidationFailedMustNotContainsWhiteSpaces(2084,"error.competition_validation_failed_must_not_contains_white_spaces"),
    CompetitionValidationFailedShouldAtLeastMatchCannotBeEqualToZero(2085,"error.competition_validation_failed_should_at_least_match_cannot_be_equal_to_0_if_there_are_member_group_entries_marked_as_should"),
    CompetitionValidationFailedShouldAtLeastMatchCannotBeNegative(2086,"error.competition_validation_failed_should_at_least_match_cannot_be_negative"),
    CompetitionValidationFailedShouldAtLeastMatchCannotBeGreaterOrEqualToSelectedAmount(2087,"error.competition_validation_failed_should_at_least_match_cannot_be_greater_or_equal_to_the_selected_amount_of_entries"),
    ActualDatesStartCannotBeHigherThanEnd(2088,"error.actual_dates_start_cannot_be_greater_than_the_end"),
    ConsumerTypeNotValidEnum(2089, "error.consumer_type_not_valid_enum"),
    UrIIsEmpty(1090, "error.Uri.is.empty"),
    CompetitionIdIsEmpty(2091, "error.competition_id_is_empty"),
    CompetitionNotFound(2092, "error.competition_not_found"),
    ContestNumberCannotBeEmptyOrNegative(2093, "error.contest_number_cannot_be_empty_or_negative"),
    RoundNumberCannotBeEmptyOrNegative(2094, "error.round_number_cannot_be_empty_or_negative"),
    RoundTypeIsNotValidEnum(2095, "error.round_type_is_not_valid_enum"),
    GroupStageNumberCannotBeNegative(2096, "error.group_stage_cannot_be_negative"),
    NumberOfEntrantsShouldBeGreaterThanZero(2097, "error.number_of_entrants_should_be_greater_than_zero"),
    MinimumNumberOfEntrantsForContestShouldBeLessThanOrEqualToMaximumNumber(2098, "error.minimum_number_of_entrants_for_contests_should_be_less_than_or_equal_to_maximum_number_of_entrants"),
    MinimumNumberOfEntrantsForContestsShouldBeWithinBoundsOfCompetitionsEntrants(2099, "error.minimum_number_of_entrants_for_contests_should_be_within_bounds_of_competitions_entrants"),
    ContestIdCannotBeEmptyForEntrantsFromContestToAllowContestsChaining(3000, "error.contest_id_cannot_be_empty_for_entrants_from_contest_to_allow_contests_chaining"),
    RuleSetsAreEmpty(3001, "error.rule_sets_are_empty"),
    ScoringStrategySumBestOfCannotBeGreaterThan100OrLessThan0(3002, "error.scoring_strategy_sumbestof_cannot_be_greater_than_100_or_less_than_0"),
    ScoringStrategyLimitUpdatesToHasToBeGreaterOrEquals0(3003,"error.scoring_strategy_limit_updates_to_has_to_be_greater_or_equals_0"),
    ScoringStrategySumBestOfMinHasToBeGreaterOrEquals0(3004,"error.scoring_strategy_sumbestof_min_has_to_be_greater_or_equals_0"),
    ScoringStrategySumBestOfMinCannotBeLessThanSumBestOf(3005,"error.scoring_strategy_sumbestofmin_cannot_be_less_than_sumbestof"),
    ScoringStrategyRecordTimeWhenSumReachesHasToBeGreaterOrEquals0(3006,"error.scoring_strategy_record_time_when_sumreaches_has_to_be_greater_or_equals_0"),
    ScoringStrategySumBestOfIsLowerThanLimitUpdatesTo(3007,"error.scoring_strategy_sumbestof_is_lower_than_limitupdatesto"),
    ParentInformationNotFound(3008, "error.parent_information_not_found"),
    TermIsEmpty(3009, "error.term_is_empty"),
    TermIsTooLong(3010, "error.term_is_empty"),
    CustomFieldAlreadyExist(3011, "error.custom_field_already_exist"),
    TermCannotContainEmptyStrings(3012, "error.term_cannot_contain_empty_strings"),
    IsNotValidFieldTypeEnum(3013, "error.is_not_valid_field_type_enum"),
    IsNotValidAppliesToEnum(3014, "error.is_not_valid_applies_to_enum"),
    ActionIsNotSet(3015, "error.action_is_not_set"),
    BatchIdCannotBeEmptyIfDefined(3016, "error.batch_id_cannot_be_empty_if_defined"),
    SourceValueIsNotSet(3017, "error.source_value_is_not_set"),
    PointsIsNotSet(3018, "error.points_is_not_set"),
    RelatesToIsEmpty(3019, "error.relates_to_is_empty"),
    RelatesToExternalIsEmpty(3020, "error.relates_to_external_is_empty"),
    EventReferenceIdNotValid(3021, "error.eventReferenceId_not_valid"),
    ProductReferenceIdNotValid(3022, "error.productReferenceId_not_valid"),
    StatusIsNotValid(3023, "error.status_is_not_valid"),
    DeprecatedNotSet(3024, "error.deprecated_is_not_set"),
    MemberGroupsNotValid(3024, "error.memberGroups_is_not_valid"),
    MemberIsNotSet(3025, "error.members_is_not_set"),
    MemberIsNotValid(3025, "error.members_is_not_set"),
    MembersNotExistByIdsAndAccountId(3026, "error.members_not_exist_by_ids_and_accountId"),
    BodyIsTooLong(3027, "error.body_is_too_long"),
    SchedulingIsNotSet(3028, "error.scheduling_is_not_set"),
    Scheduling_SchedulingTypeIsNotSet(3029, "error.scheduling_schedulingType_is_not_set"),
    Scheduling_ScheduleOccurrencesLimitIsNotSet(3030, "error.scheduling_scheduleOccurrencesLimit_is_not_set"),
    SchedulingEveryIsNotSet(3031, "error.schedulingEvery_is_not_set"),
    MetadatavaluesNotValid(3032, "error.metadata_values_not_valid"),
    UserIdIsNotSet(3033, "error.user_id_is_not_set"),
    RepositoryIdIsEmpty(3034, "repository_id_is_empty"),
    RepositoryNameIsEmpty(3035, "repository_name_is_empty"),
    ParentFolderPathIsEmpty(3036, "parent_folder_path_is_empty"),
    CanonicalPathIsEmpty(3037, "canonical_path_is_empty"),
    CanonicalPathHashIsEmpty(3038, "canonical_path_hash_is_empty"),
    MimeTypeIsEmpty(3039, "mime_type_is_empty"),
    Md5ChecksumIsEmpty(3040, "md5_checksum_is_empty"),
    TagsCannotContainEmptyEntries(3041, "tags_cannot_contain_empty_entries"),
    DeletedIsNotSet(3042, "deleted_is_not_set"),
    LocationIsNotSet(3043, "location_is_not_set"),
    isSystemIsNotSet(3044, "is_system_is_not_set"),
    isPublicIsNotSet(3045, "is_public_is_not_set"),
    ConstraintsCannotContainEmptyEntries(3046, "constraints_cannot_contain_empty_entries"),
    ActionHashKeyIsNotSet(3047, "error.action_hash_key_is_not_set"),
    RefModelIdIsNotSet(3048, "error.ref_model_id_is_not_set"),
    SequenceIsNotSet(3049, "error.sequence_is_not_set"),
    DateFromIsNotSet(3050, "error.date_from_is_not_set"),
    EventRuleSetAggregationsDateFromIsNotSet(3051, "error.event_rule_set__aggregations_date_from_is_not_set"),
    EventRuleSetAggregationsDateToIsNotSet(3052, "error.event_rule_set__aggregations_date_to_is_not_set"),
    EventRuleSetAggregationsRuleSetHashKeyIsNotSet(3053, "error.event_rule_set__aggregations_rule_set_hash_key_is_not_set"),
    ResourceIsNotSet(3054, "error.resource_is_not_set"),
    OperationTypeIsNotSet(3055,"operation_type_is_not_set"),
    AttachmentDoesNotExist(3056, "error.attachment_does_not_exist"),
    ApiKeyAlreadyExistById(3057, "error.api_key_exists_by_id"),
    IdIsNotPresent(3058,"id_is_not_present"),
    OperationTypeIsNotValid(3059,"error.operation_type_is_not_valid_enum_value"),
    RuleActionHelperKeyCannotBeDuplicate(3060, "error.key_for_this_account_Id_already_exists"),
    AccountIdLengthNotValid(3061,"error.account_id_length_not_valid"),
    ItemsIsNotSet(3062,"error.items_is_not_set"),
    KeyIsTooLong(3063, "error.key_is_too_long"),
    MetadataKeyShouldNotBeDuplicate(3064, "error.metadata_key_should_not_be_duplicate"),
    MetadataListShouldNotExceedFifty(3065, "error.metadata_list_should_not_exceed_fifty"),
    KeyShouldBeSameAsOnCreate(3066, "error.key_should_be_the_same_as_on_create"),
    ItemsListHasEmptyId(3067, "error.items_list_has_empty_id"),
    VersionIsIncorrect(3068, "error.version_is_incorrect");

    private int statusCode;
    private String errorMessage;

    private ModelValidatorErrorCodes(int statusCode, String errorMessage) {
        this.statusCode = statusCode;
        this.errorMessage = errorMessage;
    }

    public int value() {
        return this.statusCode;
    }

    public String getErrorMessage() {return this.errorMessage; }

    @Override
    public String toString() {
        return "statusCode=" + statusCode +", errorMessage='" + errorMessage;
    }
}
