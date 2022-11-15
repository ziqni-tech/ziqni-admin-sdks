# Properties
If using AdminApiClientConfigBuilder.build() then the SDK will attempt to get properties from the environment variables 
first, followed by AWS SystemManager-ParameterStore, and finally the application.properties if one exists.   

# Environment variables

## Then in the environment file

| Key                                | Tier     | Type         | Value                             |
|------------------------------------| -------- | ------------ |-----------------------------------|
| ZIQNI_ADMIN_CLIENT_AUTH_USERNAME   | Standard | SecureString | <_your-email_>                    |
| ZIQNI_ADMIN_CLIENT_AUTH_PASSWORD   | Standard | SecureString | <_your-password_>                 |
| ZIQNI_ADMIN_CLIENT_AUTH_RESOURCE   | Standard | String       | <_your-space-name_>**.ziqni.app** |
| ZIQNI_ADMIN_CLIENT_AUTH_REALM      | Standard | String       | **ziqni**                         |
| ZIQNI_ADMIN_CLIENT_AUTH_SERVER_URL | Standard | String       | **https://identity.ziqni.com**    |
| ZIQNI_ADMIN_CLIENT_SERVER_HOST     | Standard | String       | **api.ziqni.com**                 |
| ZIQNI_ADMIN_CLIENT_SERVER_PORT     | Standard | String       | **443**                           |
| ZIQNI_ADMIN_CLIENT_SERVER_SCHEME   | Standard | String       | **wss**                           |



# AWS Systems Manager Parameter Store

## Environment variable
**ZIQNI_ENV = /prod/zqclient**

[This value is a prefix for the parameter store, if you change this also update your keys]

## Then in the parameter store

| Key                                            | Tier     | Type         | Value                             |
| ---------------------------------------------- | -------- | ------------ |-----------------------------------|
| /prod/zqclient/admin/client/auth/username      | Standard | SecureString | <_your-email_>                    |
| /prod/zqclient/admin/client/auth/password      | Standard | SecureString | <_your-password_>                 |
| /prod/zqclient/admin/client/auth/resource      | Standard | String       | <_your-space-name_>**.ziqni.app** |
| /prod/zqclient/admin/client/auth/realm         | Standard | String       | **ziqni**                         |
| /prod/zqclient/admin/client/auth/server/url    | Standard | String       | **https://identity.ziqni.com**    |
| /prod/zqclient/admin/client/server/host        | Standard | String       | **api.ziqni.com**                 |
| /prod/zqclient/admin/client/server/port        | Standard | String       | **443**                           |
| /prod/zqclient/admin/client/server/scheme      | Standard | String       | **wss**                           |
