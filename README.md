# Reproduction

1. Run `yarn install` to install the needed dependencies.
2. Run `yarn build:client` to build the client
3. Run `yarn build:server` to see the broken server build
4. Run `yarn build:server:fixed` to see the fixed build.

The difference is an environment variable set to remove `manualChunks` in `vite.config.js`.
