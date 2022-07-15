package tests.utils;//package tests.utils;
//
//import org.junit.jupiter.api.Assertions;
//
//import java.util.Arrays;
//import java.util.Collections;
//import java.util.StringJoiner;
//import java.util.concurrent.atomic.AtomicInteger;
//import java.util.stream.Collectors;
//
//public class AssertNestedErrorContains {
//
//    default void nestedErrorContains(DeserialiseApiException error, ModelValidatorErrorCodes nestedErrorCode) {
//
//        Assertions.assertNotNull(error);
//        Assertions.assertNotNull(nestedErrorCode);
//        Assertions.assertNotNull(error.getErrorResponse());
//        Assertions.assertNotNull(error.getErrorResponse().getDetail());
//        Assertions.assertTrue(error.getErrorResponse().getNestedErrors().size() > 0);
//
//        var sj = new StringJoiner(":", "[", "]");
//
//        var f1 = error.getErrorResponse().getNestedErrors().stream().filter(e -> {
//
//            String errorName = null;
//
//            for(ModelValidatorErrorCodes ee : ModelValidatorErrorCodes.values()) {
//                if (ee.value() == e.getErrorCode()) {
//                    errorName = e.getDetailMessage();
//                    break;
//                }
//            }
//
//            Assertions.assertNotNull(errorName, "Unknown error code " + e.getErrorCode());
//
//            sj.add(errorName).add("(").add(e.getErrorCode().toString()).add(")\n");
//
//            return e.getErrorCode() == nestedErrorCode.value();
//        });
//
//        Assertions.assertTrue(f1.findFirst().isPresent(), getClass().getSimpleName() + " Should contain: \n[" + nestedErrorCode + "(" + nestedErrorCode.value() + ")]\n Found: \n" + sj.toString());
//    }
//
//    default void nestedErrorContainsAll(DeserialiseApiException error, ModelValidatorErrorCodes... nestedErrorCodes) {
//
//        Assertions.assertNotNull(error);
//        Assertions.assertNotNull(nestedErrorCodes);
//        Assertions.assertNotNull(error.getErrorResponse());
//        Assertions.assertNotNull(error.getErrorResponse().getNestedErrors());
//
//        var nestedErrorCodeList = Arrays.stream(nestedErrorCodes).map(x -> {
//            nestedErrorContains(error, x);
//            return x.value();
//        }).collect(Collectors.toList());
//
//        var matchCount = new AtomicInteger();
//        var missingErrors = Collections.synchronizedList(new ArrayList<NestedError>());
//
//        error.getErrorResponse().getNestedErrors().forEach(e -> {
//            if(nestedErrorCodeList.contains(e.getErrorCode()))
//                matchCount.incrementAndGet();
//            else
//                missingErrors.add(e);
//        });
//
//        var expectedErrorsMissing= "Actual error response does not contain the following expected errors: \n" + missingErrors.stream().map(n -> {
//            return "[" + n.getErrorCode() + "]" + "[" + n.getDetailMessage() + "]" + "[" + n.getFieldName() + "]" + "\n";
//        }).toString();
//
//        Assertions.assertEquals(matchCount.get(), nestedErrorCodes.length, expectedErrorsMissing);
//    }
//}
