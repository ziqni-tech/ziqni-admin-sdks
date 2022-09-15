# AWS Systems Manager Parameter Store

## ENV Variable
ZIQNI_ENV = /prod/zqclient 
[This value is a prefix for the parameter store, if you change this also update your keys]

## Then in the parameter store

| Key                                            | Tier     | Type         | Value                           |
| ---------------------------------------------- | -------- | ------------ | ------------------------------- |
| /prod/zqclient/admin/client/auth/username      | Standard | SecureString | _your-email_                    |
| /prod/zqclient/admin/client/auth/password      | Standard | SecureString | _your-password_                 |
| /prod/zqclient/admin/client/auth/resource      | Standard | SecureString | _your-space-name.ziqni.io_      |
| /prod/zqclient/admin/client/auth/realm         | Standard | SecureString | **ziqni**                       |
| /prod/zqclient/admin/client/auth/server/url    | Standard | SecureString | **https://identity.ziqni.com**  |
| /prod/zqclient/admin/client/server/host        | Standard | SecureString | **api.ziqni.com**               |
| /prod/zqclient/admin/client/server/port        | Standard | SecureString | **443**                         |
| /prod/zqclient/admin/client/server/scheme      | Standard | SecureString | **wss**                         |
