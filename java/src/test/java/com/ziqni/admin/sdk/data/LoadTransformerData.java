package com.ziqni.admin.sdk.data;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.api.TransformersApiWs;
import com.ziqni.admin.sdk.model.CreateTransformerRequest;
import com.ziqni.admin.sdk.model.ModelApiResponse;
import com.ziqni.admin.sdk.model.SourceLanguage;
import tests.utils.CompleteableFutureTestWrapper;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

import static org.junit.jupiter.api.Assertions.*;

public class LoadTransformerData implements CompleteableFutureTestWrapper {

    private TransformersApiWs api;
    private final SourceLanguage sourceLanguage = SourceLanguage.SCALA;

    public LoadTransformerData() {
        this.api = ZiqniAdminApiFactory.getTransformersApi();
    }

    public CreateTransformerRequest getCreateRequest() {
        String givenName = "Test_name-" + UUID.randomUUID().toString();

        return new CreateTransformerRequest()
                .name(givenName)
                .source("/***\n" +
                        "  *  Copyright (C) Competition Labs Ltd - All Rights Reserved\n" +
                        "  *  Unauthorized copying of this file, via any medium is strictly prohibited\n" +
                        "  *  Proprietary and confidential\n" +
                        "  *  Written by Competition Labs Ltd, 2021\n" +
                        "  */\n" +
                        "\n" +
                        "//package com.sabai99.staging\n" +
                        "\n" +
                        "import com.ziqni.transformers.domain._\n" +
                        "import com.ziqni.transformers.{ZiqniApi, Json, ZiqniMqTransformer}\n" +
                        "import org.joda.time.format.DateTimeFormatter\n" +
                        "import org.joda.time.{DateTime, DateTimeZone}\n" +
                        "import org.json4s.{DefaultFormats, JArray, JValue, JsonAST}\n" +
                        "\n" +
                        "import java.util.TimeZone\n" +
                        "\n" +
                        "class Sabai99StgMQTrans extends ZiqniMqTransformer {\n" +
                        "\n" +
                        "\tTimeZone.setDefault(DateTimeZone.UTC.toTimeZone)\n" +
                        "\tSystem.setProperty(\"user.timezone\", \"UTC\")\n" +
                        "\tTimeZone.setDefault(null)\n" +
                        "\tTimeZone.setDefault(TimeZone.getTimeZone(\"UTC\"))\n" +
                        "\n" +
                        "\tprivate implicit val formats: DefaultFormats.type = DefaultFormats\n" +
                        "\n" +
                        "\tprivate val VERSION = \"v7.3\"\n" +
                        "\n" +
                        "\tprivate val DEFAULT_CURRENCY = \"thb\"\n" +
                        "\n" +
                        "\t// event model types\n" +
                        "\tprivate val ACCOUNTS = \"ACCOUNTS\"\n" +
                        "\tprivate val ACCOUNTS_MAPPING = \"ACCOUNTS_MAPPING\"\n" +
                        "\tprivate val LOGIN_LOG = \"LOGIN_LOG\"\n" +
                        "\tprivate val WALLET_TRANSFER_APPLY = \"WALLET_TRANSFER_APPLY\"\n" +
                        "\tprivate val BET_LOG = \"BET_LOG\"\n" +
                        "\n" +
                        "\t// JSON field maps\n" +
                        "\tprivate val BET_ACTION = \"bet\"\n" +
                        "\tprivate val PAYOUT = \"payout\"\n" +
                        "\tprivate val SETTLE = \"SETTLE\"\n" +
                        "\tprivate val SETTLE_BET = \"SETTLE_BET\"\n" +
                        "\tprivate val RESULT = \"result\"\n" +
                        "\tprivate val LEVEL = \"LEVEL\"\n" +
                        "\tprivate val NICK_NAME = \"NICK_NAME\"\n" +
                        "\tprivate val MAPPING_UID = \"MAPPING_UID\"\n" +
                        "\tprivate val LOGIN_TIME = \"LOGIN_TIME\"\n" +
                        "\tprivate val TRANSFER_TYPE = \"TRANSFER_TYPE\"\n" +
                        "\tprivate val CANCEL = \"CANCEL\"\n" +
                        "\tprivate val CANCEL_BET = \"CANCEL_BET\"\n" +
                        "\tprivate val ROLLBACK = \"ROLLBACK\"\n" +
                        "\n" +
                        "\tprivate val ROUTING_KEY = \"ROUTING_KEY\"\n" +
                        "\tprivate val BET_LOG_PP = \"BET_LOG_PP\"\n" +
                        "\tprivate val BET_LOG_PG = \"BET_LOG_PG\"\n" +
                        "\tprivate val BET_LOG_RICH88 = \"BET_LOG_RICH88\"\n" +
                        "\tprivate val BET_LOG_PS_REALTIME = \"BET_LOG_PS_REALTIME\"\n" +
                        "\tprivate val BET_LOG_KP = \"BET_LOG_KP\"\n" +
                        "\tprivate val BET_LOG_MG = \"BET_LOG_MG\"\n" +
                        "\tprivate val BET_LOG_MP = \"BET_LOG_MP\"\n" +
                        "\tprivate val BET_LOG_SG = \"BET_LOG_SG\"\n" +
                        "\tprivate val BET_LOG_HABA = \"BET_LOG_HABA\"\n" +
                        "\tprivate val BET_LOG_SEXY_RT = \"BET_LOG_SEXY_RT\"\n" +
                        "\tprivate val BET_LOG_ICG = \"BET_LOG_ICG\"\n" +
                        "\tprivate val BET_LOG_ICG_REALTIME = \"BET_LOG_ICG_REALTIME\"\n" +
                        "\tprivate val BET_LOG_JDB = \"BET_LOG_JDB\"\n" +
                        "\tprivate val BET_LOG_UPG = \"BET_LOG_UPG\"\n" +
                        "\tprivate val BET_LOG_SLOTXO = \"BET_LOG_SLOTXO\"\n" +
                        "\n" +
                        "\tprivate val TURNOVER_BET_LOG = Seq(\"BET_LOG_FC\", \"BET_LOG_RSG\", \"BET_LOG_CQ9\", \"BET_LOG_MG\", \"BET_LOG_JILI\", \"BET_LOG_PS\")\n" +
                        "\n" +
                        "\t// reserved keys\n" +
                        "\tprivate val parentMemberRefKey = \"parentMemberRef\"\n" +
                        "\tprivate val betAction = \"bet\"\n" +
                        "\tprivate val winAction = \"win\"\n" +
                        "\tprivate val winMultiplier = \"win_multiplier\"\n" +
                        "\n" +
                        "\t// level keys\n" +
                        "\tprivate val Level_SuperEasy = \"Super-Easy\"\n" +
                        "\tprivate val Level_Normal = \"Normal\"\n" +
                        "\tprivate val Level_Engaged = \"Engaged\"\n" +
                        "\tprivate val Level_VIP = \"VIP\"\n" +
                        "\tprivate val Level_SuperHard = \"Super-Hard\"\n" +
                        "\n" +
                        "\t// time formats\n" +
                        "\tval pattern1: String = \"yyyy-MM-dd HH:mm:ss\"\n" +
                        "\tval pattern2: String = \"yyyy-MM-dd'T'HH:mm:ss\"\n" +
                        "\n" +
                        "\tval formatShort = new java.text.SimpleDateFormat(\"yyyy-MM-dd HH:mm:ss\")\n" +
                        "\tformatShort.setTimeZone(TimeZone.getTimeZone(\"UTC\"))\n" +
                        "\n" +
                        "\tval formatShortWithT = new java.text.SimpleDateFormat(\"yyyy-MM-dd'T'HH:mm:ss\")\n" +
                        "\tformatShortWithT.setTimeZone(TimeZone.getTimeZone(\"UTC\"))\n" +
                        "\n" +
                        "\tval formatLong = new java.text.SimpleDateFormat(\"yyyy-MM-dd HH:mm:ss.SSS\")\n" +
                        "\tval formatLongWithT = new java.text.SimpleDateFormat(\"yyyy-MM-dd'T'HH:mm:ss.SSS\")\n" +
                        "\n" +
                        "\tval JodaDateTimeFormatShortFormatter: DateTimeFormatter = org.joda.time.format.DateTimeFormat.forPattern(pattern1)\n" +
                        "\tval JodaDateTimeFormatShortWithTFormatter: DateTimeFormatter = org.joda.time.format.DateTimeFormat.forPattern(pattern2)\n" +
                        "\n" +
                        "\tval DATE_FORMAT_REGEXPS = \"^\\\\d{4}-\\\\d{1,2}-\\\\d{1,2}\\\\s\\\\d{1,2}:\\\\d{2}:\\\\d{2}$\"\n" +
                        "\n" +
                        "\tprivate def parseShortDateFormat(date: String, competitionLabsApi: ZiqniApi): DateTime = {\n" +
                        "\t\ttry {\n" +
                        "\t\t\tscala.util.control.Exception.allCatch[DateTime].opt(DateTime.parse(date, JodaDateTimeFormatShortFormatter).withZone(DateTimeZone.UTC)) match {\n" +
                        "\t\t\t\tcase Some(d) => d\n" +
                        "\t\t\t\tcase None => DateTime.parse(date, JodaDateTimeFormatShortWithTFormatter).withZone(DateTimeZone.UTC)\n" +
                        "\t\t\t}\n" +
                        "\t\t} catch {\n" +
                        "\t\t\tcase er: Exception => {\n" +
                        "\t\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] [${date}] [${date.matches(DATE_FORMAT_REGEXPS)}] - $VERSION\")\n" +
                        "\t\t\t\tthrow er\n" +
                        "\t\t\t}\n" +
                        "\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t// Handle incoming messages from RabbitMq\n" +
                        "\toverride def rabbit(message: Array[Byte], routingKey: String, exchangeName: String, competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\thandleMessage( message, competitionLabsApi, Map(\"routingKey\" -> routingKey, \"exchangeName\" -> exchangeName))\n" +
                        "\t}\n" +
                        "\n" +
                        "\toverride def apply(message: Array[Byte], competitionLabsApi: ZiqniApi, args: Map[String, Any]): Unit = {\n" +
                        "\t\thandleMessage(message, competitionLabsApi, args)\n" +
                        "\t}\n" +
                        "\n" +
                        "\t/* handle different message types */\n" +
                        "\tprivate def handleMessage(message: Array[Byte], competitionLabsApi: ZiqniApi, args: Map[String, Any]): Unit = {\n" +
                        "\t\tval messageAsString = competitionLabsApi.convertByteArrayToString(message)\n" +
                        "//\t\tprintln(s\"message received [$messageAsString]\")\n" +
                        "\n" +
                        "\t\tval competitionLabsApiProto = competitionLabsApi.asInstanceOf[ZiqniApi]\n" +
                        "\t\ttry {\n" +
                        "\t\t\tval jsonObj = competitionLabsApiProto.fromJsonString(messageAsString)\n" +
                        "\n" +
                        "\t\t\tjsonObj match {\n" +
                        "\t\t\t\tcase jArr: JArray => {\n" +
                        "\t\t\t\t\tif (jArr.arr.size > 500)\n" +
                        "\t\t\t\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApiProto.spaceName}] Recieved events array of size [${jArr.arr.size}] - $VERSION\")\n" +
                        "\n" +
                        "\t\t\t\t\tjArr.arr.foreach(jsonValue => handleIndividualJObject(jsonValue, messageAsString, competitionLabsApiProto))\n" +
                        "\t\t\t\t}\n" +
                        "\t\t\t\tcase _ => handleIndividualJObject(jsonObj, messageAsString, competitionLabsApiProto)\n" +
                        "\t\t\t}\n" +
                        "\t\t} catch {\n" +
                        "\t\t\tcase e: Exception =>\n" +
                        "\t\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] failed to parse message ${messageAsString} - $VERSION\")\n" +
                        "\t\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] ${e.getMessage} - $VERSION\")\n" +
                        "\t\t\t\te.printStackTrace()\n" +
                        "\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t/** Handle individual JSON object **/\n" +
                        "\tprivate def handleIndividualJObject(jsonObj: JValue, messageAsString: String, competitionLabsApi: ZiqniApi): Unit = try {\n" +
                        "\t\thandleBetLogEvents(\"BET_LOG\", jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t/*\n" +
                        "\t\tval eventType: String = if(Json.keyExists(jsonObj, ROUTING_KEY)){\n" +
                        "\t\t\tBET_LOG\n" +
                        "\t\t}else if(Json.keyExists(jsonObj, LOGIN_TIME)){\n" +
                        "\t\t\tLOGIN_LOG\n" +
                        "\t\t}else if(Json.keyExists(jsonObj, MAPPING_UID)){\n" +
                        "\t\t\tACCOUNTS_MAPPING\n" +
                        "\t\t}else if(Json.keyExists(jsonObj, TRANSFER_TYPE)){\n" +
                        "\t\t\tWALLET_TRANSFER_APPLY\n" +
                        "\t\t}else if(Json.keyExists(jsonObj, NICK_NAME) && Json.keyExists(jsonObj, LEVEL)){\n" +
                        "\t\t\tACCOUNTS\n" +
                        "\t\t}else {\n" +
                        "\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] ${Json.keyExists(jsonObj, NICK_NAME)} ${Json.keyExists(jsonObj, LEVEL)} - $VERSION\")\n" +
                        "\t\t\tthrow new Exception(s\"Unrecognised JSON mapping ${jsonObj} - $VERSION\")\n" +
                        "\t\t}\n" +
                        "\n" +
                        "\t\teventType match {\n" +
                        "\t\t\tcase ACCOUNTS =>\n" +
                        "\t\t\t\thandleAccountRegistrationEvents(eventType, jsonObj, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t\tcase ACCOUNTS_MAPPING =>\n" +
                        "\t\t\t\thandleAccountMappingEvents(eventType, jsonObj, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t\tcase LOGIN_LOG =>\n" +
                        "\t\t\t\thandleLoginEvents(eventType, jsonObj, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t\tcase WALLET_TRANSFER_APPLY =>\n" +
                        "\t\t\t\thandleWalletTransferEvents(eventType, jsonObj, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t\tcase BET_LOG => {\n" +
                        "\t\t\t\tval routingKey = Json.getFromJValueAsOption[String]\t\t(jsonObj,\t\"ROUTING_KEY\").getOrElse(\"_nothing\")\n" +
                        "\t\t\t\tif(routingKey == BET_LOG_PP){\n" +
                        "\t\t\t\t\tppHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_PG){\n" +
                        "\t\t\t\t\tpgHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(TURNOVER_BET_LOG.contains(routingKey)){\n" +
                        "\t\t\t\t\tturnoverHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_RICH88){\n" +
                        "\t\t\t\t\trich88HandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_PS_REALTIME){\n" +
                        "\t\t\t\t\tpsRealtimeHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_KP){\n" +
                        "\t\t\t\t\tkpHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_SG){\n" +
                        "\t\t\t\t\tsgHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_HABA){\n" +
                        "\t\t\t\t\thabaHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_SEXY_RT){\n" +
                        "\t\t\t\t\tsexyRtHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_ICG_REALTIME){\n" +
                        "\t\t\t\t\ticgRealtimeHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_ICG){\n" +
                        "\t\t\t\t\ticgHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_JDB){\n" +
                        "\t\t\t\t\tjdbHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_UPG){\n" +
                        "\t\t\t\t\tupgHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_SLOTXO){\n" +
                        "\t\t\t\t\tslotXoHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_MG){\n" +
                        "\t\t\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] MG transformation is not supported - $VERSION\")\n" +
                        "\t\t\t\t}else if(routingKey == BET_LOG_MP){\n" +
                        "\t\t\t\t\tmpHandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t\t}else\n" +
                        "\t\t\t\t\thandleBetLogEvents(eventType, jsonObj, messageAsString, competitionLabsApi)\n" +
                        "\t\t\t}\n" +
                        "\t\t\tcase _ =>\n" +
                        "\t\t\t\tthrow new Exception(s\"Message with unknown event type received. [${eventType}]\")\n" +
                        "\t\t}\n" +
                        "\t\t*/\n" +
                        "\t} catch {\n" +
                        "\t\tcase e: Exception =>\n" +
                        "\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] [handleIndividualJObject] ${Json.fromJsonToString(jsonObj)} - $VERSION\")\n" +
                        "\t\t\tprintln(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] [handleIndividualJObject] ${e.getMessage} - $VERSION\")\n" +
                        "\t\t\te.printStackTrace()\n" +
                        "\t\t\tthrow e\n" +
                        "\t}\n" +
                        "\n" +
                        "\t/** Handle bet-log/transaction mapping for client KA events */\n" +
                        "\tprivate def handleBetLogEvents(eventType: String, jsonObj: JsonAST.JValue, messageAsString: String, competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\tval routingKey  \t\t    = Json.getFromJValue[String]\t\t(jsonObj,\t\"ROUTING_KEY\")\n" +
                        "\t\tval gameProvider  \t\t    = Json.getFromJValueAsOption[String]\t\t(jsonObj,\t\"GAME_PROVIDER\")\n" +
                        "\t\tval routingProvider  \t\t= if(gameProvider.nonEmpty && gameProvider.get.nonEmpty){gameProvider.get}else{routingKey.split(\"BET_LOG_\").lastOption.getOrElse(routingKey)}\n" +
                        "\t\tval seqNo  \t\t            = Json.getFromJValue[String]\t\t(jsonObj,\t\"SEQ_NO\")\n" +
                        "\t\tval childMemberRefId        = Json.getFromJValue[String]\t\t(jsonObj,\t\"BET_ID\")\n" +
                        "\t\tval betTimestamp\t        = Json.getFromJValue[String]\t\t(jsonObj,\t\"BET_TIMESTAMP\")\n" +
                        "\t\tval gameTpeId\t            = Json.getFromJValue[String]\t\t(jsonObj,\t\"GAMETYPE_ID\")\n" +
                        "\t\tval gameIdKey  \t            = Json.getFromJValue[String]\t\t(jsonObj,\t\"GAME_ID\")\n" +
                        "\t\tval gameId  \t            = routingProvider + \".\" + gameIdKey\n" +
                        "\t\tval turnover  \t            = Json.getFromJValue[Double]\t\t(jsonObj,\t\"TURNOVER\")\n" +
                        "\t\tval netWin        \t        = Json.getFromJValue[Double]\t\t(jsonObj,\t\"NETWIN\")\n" +
                        "\t\tval currency       \t        = Json.getFromJValue[String]\t\t(jsonObj,\t\"CURRENCY\")\n" +
                        "\t\tval playerDevice \t        = Json.getFromJValueAsOption[String]\t\t(jsonObj,\t\"PLAYER_DEVICE\").getOrElse(\"\")\n" +
                        "\t\tval beforeBalance  \t        = Json.getFromJValue[Double]\t\t(jsonObj,\t\"BEFORE_BALANCE\")\n" +
                        "\t\tval afterBalance  \t        = Json.getFromJValue[Double]\t\t(jsonObj,\t\"AFTER_BALANCE\")\n" +
                        "\t\tval win           \t        = Json.getFromJValue[Double]\t\t(jsonObj,\t\"WIN\")\n" +
                        "\t\tval gameMetadata            = new scala.collection.mutable.HashMap[String, String]()\n" +
                        "\t\tvar gameName                = gameId\n" +
                        "\t\tif(Json.keyExists(jsonObj, \"GAME_NAME\")){\n" +
                        "\t\t\tjsonObj.\\(\"GAME_NAME\").mapField{ field =>\n" +
                        "\t\t\t\tval label = field._2.extract[String]\n" +
                        "\t\t\t\tgameMetadata.put(field._1, label)\n" +
                        "\n" +
                        "\t\t\t\tif(field._1 == \"en-US\"){\n" +
                        "\t\t\t\t\tgameName = routingProvider + \".\" + label\n" +
                        "\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\tfield\n" +
                        "\t\t\t}\n" +
                        "\t\t}\n" +
                        "\n" +
                        "\t\tval transactionTime = parseShortDateFormat(betTimestamp, competitionLabsApi)\n" +
                        "\n" +
                        "\t\t// check if member exists as member should have been pre-created using account mapping \"ACCOUNTS_MAPPING\" registration event\n" +
                        "//\t\tval memberId = Option(\"NtASM30B-m1TK8I8_E4D\") //getParentMember(childMemberRefId, competitionLabsApi)\n" +
                        "//\t\tif( memberId.nonEmpty ){\n" +
                        "//\t\t\tval basicMember = competitionLabsApi.getMember(memberId.get).get\n" +
                        "//\t\t\tval parentMemberRef = basicMember.getMetaData.flatMap(meta => meta.get(parentMemberRefKey))\n" +
                        "\n" +
                        "\t\t\t// check if parent member exists as member should have been pre-created using initial account \"ACCOUNTS\" registration event\n" +
                        "//\t\t\tif( parentMemberRef.nonEmpty ){\n" +
                        "\t\t\t\tval convertedWinAmount = convertToBaseCurrency(currency, win, routingKey.toLowerCase().contains(\"rollback\"), competitionLabsApi)\n" +
                        "\t\t\t\tval convertedNetWinAmount = convertToBaseCurrency(currency, netWin, routingKey.toLowerCase().contains(\"rollback\"), competitionLabsApi)\n" +
                        "\t\t\t\tval convertedTurnoverAmount = convertToBaseCurrency(currency, turnover, routingKey.toLowerCase().contains(\"rollback\"), competitionLabsApi)\n" +
                        "\n" +
                        "\t\t\t\t// define available custom fields\n" +
                        "\t\t\t\tval customFields = Map[String, Seq[Any]](\n" +
                        "\t\t\t\t\tbetAction -> Seq(convertedTurnoverAmount),\n" +
                        "\t\t\t\t\twinAction -> Seq(convertedWinAmount),\n" +
                        "\t\t\t\t\t\"netWin\" -> Seq(convertedNetWinAmount),\n" +
                        "\t\t\t\t\t\"currency\" -> Seq(currency),\n" +
                        "\t\t\t\t\t\"playerDevice\" -> Seq(playerDevice),\n" +
                        "\t\t\t\t\t\"gameId\" -> Seq(gameId),\n" +
                        "\t\t\t\t\t\"beforeBalance\" -> Seq(beforeBalance),\n" +
                        "\t\t\t\t\t\"afterBalance\" -> Seq(afterBalance),\n" +
                        "\t\t\t\t\t\"eventType\" -> Seq(eventType),\n" +
                        "\t\t\t\t\t\"recordDate\" -> Seq(DateTime.now().toString)\n" +
                        "\t\t\t\t)\n" +
                        "\n" +
                        "\t\t\t\tgetOrCreateEventAction(betAction, competitionLabsApi)\n" +
                        "\t\t\t\tgetOrCreateEventAction(winAction, competitionLabsApi)\n" +
                        "\t\t\t\tgetOrCreateProduct(gameId, gameName, Seq(\"KA\"), gameTpeId, Option(gameMetadata.toMap), competitionLabsApi) // creation product\n" +
                        "\n" +
                        "\t\t\t\t// bet action event\n" +
                        "\t\t\t\tval basicBetEvent = BasicEventModel(\n" +
                        "\t\t\t\t\taction = betAction,\n" +
                        "\t\t\t\t\ttags = Seq.empty,\n" +
                        "\t\t\t\t\teventRefId = seqNo,\n" +
                        "\t\t\t\t\tmemberRefId = childMemberRefId,\n" +
                        "\t\t\t\t\tentityRefId = gameId,\n" +
                        "\t\t\t\t\tbatchId = None,\n" +
                        "\t\t\t\t\tsourceValue = convertedTurnoverAmount,\n" +
                        "\t\t\t\t\tmetadata = customFields.toMap,\n" +
                        "\t\t\t\t\ttransactionTimestamp = transactionTime\n" +
                        "\t\t\t\t)\n" +
                        "\n" +
                        "\t\t\t\t// win action event\n" +
                        "\t\t\t\tval basicWinEvent = BasicEventModel(\n" +
                        "\t\t\t\t\taction = winAction,\n" +
                        "\t\t\t\t\ttags = Seq.empty,\n" +
                        "\t\t\t\t\teventRefId = seqNo,\n" +
                        "\t\t\t\t\tmemberRefId = childMemberRefId,\n" +
                        "\t\t\t\t\tentityRefId = gameId,\n" +
                        "\t\t\t\t\tbatchId = None,\n" +
                        "\t\t\t\t\tsourceValue = convertedWinAmount,\n" +
                        "\t\t\t\t\tmetadata = customFields.toMap,\n" +
                        "\t\t\t\t\ttransactionTimestamp = transactionTime\n" +
                        "\t\t\t\t)\n" +
                        "\n" +
                        "\t\t\t\t// win_multiplier event if win greater then >0\n" +
                        "\t\t\t\tif(convertedWinAmount != 0 && convertedTurnoverAmount != 0) {\n" +
                        "\t\t\t\t\tval winMultiplierValue = convertedWinAmount / convertedTurnoverAmount\n" +
                        "\t\t\t\t\tval basicWinMultiplierEvent = BasicEventModel(\n" +
                        "\t\t\t\t\t\taction = winMultiplier,\n" +
                        "\t\t\t\t\t\ttags = Seq.empty,\n" +
                        "\t\t\t\t\t\teventRefId = seqNo,\n" +
                        "\t\t\t\t\t\tmemberRefId = childMemberRefId,\n" +
                        "\t\t\t\t\t\tentityRefId = gameId,\n" +
                        "\t\t\t\t\t\tbatchId = None,\n" +
                        "\t\t\t\t\t\tsourceValue = winMultiplierValue,\n" +
                        "\t\t\t\t\t\tmetadata = customFields.toMap,\n" +
                        "\t\t\t\t\t\ttransactionTimestamp = transactionTime\n" +
                        "\t\t\t\t\t)\n" +
                        "\n" +
                        "\t\t\t\t\tcompetitionLabsApi.pushEvent(basicWinMultiplierEvent)\n" +
                        "\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\tcompetitionLabsApi.pushEvent(basicBetEvent)\n" +
                        "\t\t\t\tcompetitionLabsApi.pushEvent(basicWinEvent)\n" +
                        "//\t\t\t}else{\n" +
                        "//\t\t\t\t//println(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] Parent Member cannot be found in metadata for member: [${memberId.get}] - $VERSION\")\n" +
                        "//\t\t\t}\n" +
                        "//\t\t}else{\n" +
                        "//\t\t\t//println(s\"${DateTime.now()}[${competitionLabsApi.spaceName}] Member cannot be found for refId: [$childMemberRefId] - $VERSION\")\n" +
                        "//\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t// handle action creation inside in action helpers\n" +
                        "\tprivate def getOrCreateEventAction(action: String, competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\tif(!competitionLabsApi.eventActionExists(action.toLowerCase))\n" +
                        "\t\t\tcompetitionLabsApi.createEventAction(action.toLowerCase)\n" +
                        "\t}\n" +
                        "\n" +
                        "\t/**\n" +
                        "\t  * handles member creation\n" +
                        "\t  */\n" +
                        "\tprivate def getOrCreateMember(memberRef: String, displayName: Option[String], groups: Seq[String], memberMeta: Option[Map[String, String]], onUpdate: => Unit, onMemberGroupUpdate: Seq[String] => Seq[String], onMemberMetadataUpdate: Option[Map[String, String]] => Option[Map[String, String]], competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\tcompetitionLabsApi.memberIdFromMemberRefId(memberRef) match {\n" +
                        "\t\t\tcase Some(mId) =>\n" +
                        "\t\t\t\tonUpdate\n" +
                        "\n" +
                        "\t\t\t\tval member = competitionLabsApi.getMember(mId).get\n" +
                        "\n" +
                        "\t\t\t\t// group update\n" +
                        "\t\t\t\tval gToSet = member.getGroups match {\n" +
                        "\t\t\t\t\tcase Some(g) =>\n" +
                        "\t\t\t\t\t\tonMemberGroupUpdate(g)\n" +
                        "\t\t\t\t\tcase _ =>\n" +
                        "\t\t\t\t\t\tgroups\n" +
                        "\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t// metadata update\n" +
                        "\t\t\t\tval updateMetadata = member.getMetaData match {\n" +
                        "\t\t\t\t\tcase Some(m) =>\n" +
                        "\t\t\t\t\t\tonMemberMetadataUpdate(Option(m))\n" +
                        "\t\t\t\t\tcase _ =>\n" +
                        "\t\t\t\t\t\tmemberMeta\n" +
                        "\t\t\t\t}\n" +
                        "\n" +
                        "\t\t\t\t// update member object\n" +
                        "\t\t\t\tval displayNameUpdate: String = displayName.getOrElse(member.getDisplayName.getOrElse(\"\"))\n" +
                        "\t\t\t\tcompetitionLabsApi.updateMember(mId, Option(memberRef), Option(displayNameUpdate), Option(gToSet.toArray.distinct), updateMetadata)\n" +
                        "\n" +
                        "\t\t\tcase _ =>\n" +
                        "\t\t\t\tcompetitionLabsApi.createMember(memberRef, displayName.getOrElse(memberRef), groups.distinct, memberMeta)\n" +
                        "\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t// get member CL ID from reference ID\n" +
                        "\tprivate def getParentMember(memberRef: String, competitionLabsApi: ZiqniApi): Option[String] = competitionLabsApi.memberIdFromMemberRefId(memberRef)\n" +
                        "\n" +
                        "\t// handle product creation\n" +
                        "\tprivate def getOrCreateProduct(productReferenceId: String, displayName: String, providers: Seq[String], productType: String, metaData: Option[Map[String, String]], competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\tcompetitionLabsApi.productIdFromProductRefId(productReferenceId) match {\n" +
                        "\t\t\tcase Some(pId) =>\n" +
                        "\t\t\t//else do nothing\n" +
                        "\t\t\tcase _ =>\n" +
                        "\t\t\t\tcompetitionLabsApi.createProduct(productReferenceId, displayName, providers, productType, 1, metaData)\n" +
                        "\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t// handle product creation\n" +
                        "\tprivate def updateOrCreateProduct(productReferenceId: String, displayName: String, providers: Seq[String], productType: String, metaData: Option[Map[String, String]], competitionLabsApi: ZiqniApi): Unit = {\n" +
                        "\t\tcompetitionLabsApi.productIdFromProductRefId(productReferenceId) match {\n" +
                        "\t\t\tcase Some(pId) =>\n" +
                        "\t\t\t\tcompetitionLabsApi.getProduct(pId).map{ product =>\n" +
                        "\t\t\t\t\tif(product.getName != displayName && displayName.trim.nonEmpty){\n" +
                        "\t\t\t\t\t\tcompetitionLabsApi.updateProduct(\n" +
                        "\t\t\t\t\t\t\tclProductId = product.getClProductId,\n" +
                        "\t\t\t\t\t\t\tproductReferenceId = Option(product.getProductReferenceId),\n" +
                        "\t\t\t\t\t\t\tdisplayName = Option(displayName),\n" +
                        "\t\t\t\t\t\t\tproviders = Option(product.getProviders),\n" +
                        "\t\t\t\t\t\t\tproductType = Option(product.getProductType),\n" +
                        "\t\t\t\t\t\t\tdefaultAdjustmentFactor = product.getDefaultAdjustmentFactor,\n" +
                        "\t\t\t\t\t\t\tmetaData = product.getMetaData\n" +
                        "\t\t\t\t\t\t)\n" +
                        "\t\t\t\t\t}\n" +
                        "\t\t\t\t}\n" +
                        "\t\t\tcase _ =>\n" +
                        "\t\t\t\tcompetitionLabsApi.createProduct(productReferenceId, displayName, providers, productType, 1, metaData)\n" +
                        "\t\t}\n" +
                        "\t}\n" +
                        "\n" +
                        "\t// Normalize currency converstions based on account settings\n" +
                        "\tprivate def convertToBaseCurrency(currency: String, sourceValue: Double, rollBack: Boolean, competitionLabsApi: ZiqniApi): Double = {\n" +
                        "\t\tval currencyMultiplier = competitionLabsApi.getUoMMultiplierFromKey(currency).getOrElse(1.0)\n" +
                        "\t\tval convertedValue = sourceValue / currencyMultiplier\n" +
                        "\t\tif(rollBack && convertedValue != 0){\n" +
                        "\t\t\tconvertedValue * (-1)\n" +
                        "\t\t}else\n" +
                        "\t\t\tconvertedValue\n" +
                        "\t}\n" +
                        "}\n" +
                        "\n")
                .sourceLanguage(sourceLanguage);
    }

    public List<CreateTransformerRequest> getCreateRequestAsList(int numberOfItems) {
        return IntStream.range(0, numberOfItems)
                .mapToObj(i -> getCreateRequest())
                .collect(Collectors.toList());
    }

    public List<CreateTransformerRequest> getCreateRequestAsList(CreateTransformerRequest request) {
        return List.of(request);
    }

    public ModelApiResponse createTestData(List<CreateTransformerRequest> request) throws ApiException {
        var response = api.createTransformers(request).join();

        assertNotNull(response);
        assertNotNull(response.getResults());
        assertNotNull(response.getErrors());
        assertEquals(request.size(), response.getResults().size(), "Should contain created entity");
        assertNotNull(response.getResults().get(0).getId(), "Created entity should has id");

        return response;
    }


    public void deleteTestData(List<String> idsToDelete) throws ApiException {
        var response = $(api.deleteTransformers(idsToDelete));

        assertTrue(Objects.nonNull(response));
        assertEquals(idsToDelete.size(), response.getMeta().getResultCount(), "Failed to delete some custom fields");

    }

}

