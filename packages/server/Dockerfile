FROM oven/bun:1
WORKDIR /app

COPY package.json bun.lock ./
COPY packages/client/package.json packages/client/package.json
COPY packages/server/package.json packages/server/package.json

RUN bun install

COPY . .

WORKDIR /app/packages/server
RUN bunx prisma generate

EXPOSE 3000
CMD ["bun", "run", "start"]