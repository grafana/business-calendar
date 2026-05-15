# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.60.0-noble@sha256:9bd26ad900bb5e0f4dee75839e957a89ae89c2b7ab1e76050e559790e946b948

# Set the work directory for the application
WORKDIR app

# Copy package files first for dependency layer caching
COPY package.json package-lock.json ./

# Install the dependencies in Node environment
RUN npm install --only=dev

# Install browsers
RUN npx playwright install --with-deps chromium

# Copy the rest of the project
COPY .. .

# Run tests
CMD ["npm", "run", "test:e2e"]
