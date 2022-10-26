export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "TheLinker": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "CreatedSNSRole": "string"
        }
    },
    "storage": {
        "s3thelinkerstorage3f902eecthelinker": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "TheLinker": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}