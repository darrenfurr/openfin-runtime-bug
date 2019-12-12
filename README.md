# react-amplify-openfin

## Description

sample app for runtime 14 bug

---

## Notes to create your application (**Delete after install**)

Before running the yo tws:react-amplify-openfin generator, you'll want to first create an aws amplify project including your GraphQL schema.

## The generator need to use the following from your AppSync project:

- API URL (e.g. https://<app specific id here>.appsync-api.us-east-1.amazonaws.com/graphql)
- API Key
- AWS Region (e.g. us-west-1)

After installation, in the command line run:

- `amplify init` and answer the configurations questions
- `amplify add api` - Amplify will automatically generate baseline Queries, Mutations, and Subscriptions based on the schema created at setup.
- `amplify push` - build local backend and frontend resources
