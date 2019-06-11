# Azure

<br />

## Azure CLI

### Create service principal 

[documents](https://docs.microsoft.com/en-us/cli/azure/create-an-azure-service-principal-azure-cli?view=azure-cli-latest)


```sh
az ad sp create-for-rbac --name "yourAzureServicePrincipalName" --password yourSecurePassword
```

output 

```js
{
   "appId": "yourAzureServicePrincipal-ID", // A GUID such as AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA
   "displayName": "yourAzureServicePrincipalName", // A user-friendly name for your Azure service principal
   "name": "http://yourAzureServicePrincipalName",
   "password": "yourSecurePassword",
   "tenant": "yourAzureActiveDirectoryTenant-ID" // A GUID such as BBBBBBBB-BBBB-BBBB-BBBB-BBBBBBBBBBBB
}
```

<br />


### CDN purge

[documents](https://docs.microsoft.com/en-us/cli/azure/cdn/endpoint?view=azure-cli-latest#az-cdn-endpoint-purge)

```sh
az cdn endpoint purge -g group -n endpoint --profile-name profile --content-paths '/scripts/app.js' '/styles/*'
```

