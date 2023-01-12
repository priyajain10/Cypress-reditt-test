# cy-docker-latest

## docker set-up:

1. Install docker via `brew install docker` This should look for correct tap and self install cask
2. Open separate terminal app -> Type in `docker --version`
   - If you can see version means you have docker running, or its not
   - If its saying docker command not found, for mac -> Use `CMD+SPACE` = spotlight search opens -> type in `docker` and press enter key
   - If asking for password, permission, agree to terms etc. -> Do it
   - Once its done docker should start and a whale icon on top with app bar on bottom dock should be displayed
3. Go back to terminal and run this command:
   ```ts
   docker run -d -p 80:80 docker/getting-started
   ```
4. Once done type in `docker --version` -> Now you will see docker version for sure (if not repeat all steps above)
5. Next is run what image you need to e.g. cypress image with version 12.2.0 has command:
   ```ts
   docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.2.0
   ```
   - This runs Cypress tests from the current tests folder all together
