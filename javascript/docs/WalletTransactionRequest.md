# @ZiqniTechAdminApiClient.WalletTransactionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **Number** | The amount to credit,debit or transfer | [optional] 
**transactionType** | [**WalletTransactionType**](WalletTransactionType.md) |  | [optional] 
**sourceWalletId** | **String** | The unique source wallet identifier,required on credit,debit and transfer | [optional] 
**targetWalletId** | **String** | The unique target wallet identifier,not required on debit or credit but required on transfer | [optional] 
**conversionRate** | **Number** | The rate used to convert the transaction amount when transferring funds between wallets of different types.  For example, if 5 units are transferred from Wallet A to Wallet B with a rate of 1.3, then 6.5 units are credited to Wallet B. | [optional] 


