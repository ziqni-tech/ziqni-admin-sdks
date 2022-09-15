# AWS Systems Manager Parameter Store

## Environment Variable
**ZIQNI_ENV = /prod/zqclient**

[This value is a prefix for the parameter store, if you change this also update your keys]

## Then in the parameter store

| Key                                            | Tier     | Type         | Value                             |
| ---------------------------------------------- | -------- | ------------ |-----------------------------------|
| /prod/zqclient/admin/client/auth/username      | Standard | SecureString | <_your-email_>                    |
| /prod/zqclient/admin/client/auth/password      | Standard | SecureString | <_your-password_>                 |
| /prod/zqclient/admin/client/auth/resource      | Standard | String       | <_your-space-name_>**.ziqni.io**  |
| /prod/zqclient/admin/client/auth/realm         | Standard | String       | **ziqni**                         |
| /prod/zqclient/admin/client/auth/server/url    | Standard | String       | **https://identity.ziqni.com**    |
| /prod/zqclient/admin/client/server/host        | Standard | String       | **api.ziqni.com**                 |
| /prod/zqclient/admin/client/server/port        | Standard | String       | **443**                           |
| /prod/zqclient/admin/client/server/scheme      | Standard | String       | **wss**                           |
