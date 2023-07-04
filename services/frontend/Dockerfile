# Stage 1: Build and install dependencies
FROM node:lts as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# Stage 2: Development/Production
FROM node:lts

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/nuxt.config.js ./

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "dev"]
