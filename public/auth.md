# SwanDigitals Agent Authentication & Registration (Auth.md)

This document provides machine-readable and human-readable instructions for AI Agents to register, authenticate, and interact with the SwanDigitals AI Omnichannel Customer Support Platform.

## 1. Overview & Discovery
- **OAuth 2.0 Issuer**: `https://swandigitals.com`
- **OAuth Metadata**: `https://swandigitals.com/.well-known/oauth-authorization-server`
- **OpenID Configuration**: `https://swandigitals.com/.well-known/openid-configuration`
- **Protected Resource**: `https://swandigitals.com/.well-known/oauth-protected-resource`
- **JWKS Key Set**: `https://swandigitals.com/.well-known/http-message-signatures-directory`

## 2. Agent Registration Protocol
AI agents can register programmatically by issuing a `POST` request to:
`https://desk.swandigitals.com/oauth/register`

```json
{
  "client_name": "MyAIAgent",
  "grant_types": ["client_credentials", "urn:ietf:params:oauth:grant-type:token-exchange"],
  "identity_type": "ai_agent",
  "scopes": ["read:chatbots", "write:conversations"]
}
```

## 3. Bearer Token Authorization
Include the issued token in HTTP Request headers:
```http
Authorization: Bearer <your_access_token>
```
