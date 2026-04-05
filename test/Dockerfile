# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.59.1-noble

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
