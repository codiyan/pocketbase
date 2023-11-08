FROM alpine:3 as downloader

ARG TARGETOS
ARG TARGETARCH
ARG VERSION=0.18.8

ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}"

# Install the dependencies
RUN apk add --no-cache \
    ca-certificates \
    unzip \
    wget \
    zip \
    zlib-dev

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
    && unzip pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
    && chmod +x /pocketbase


# folder structure will be like
# /pocketbase


#  copy from the current directory to the current stage (downloader) path on current stage /pb_hooks

COPY pb_hooks /pb_hooks
COPY pb_migrations /pb_migrations
COPY pb_public /pb_public


# folder structure will be like
# /pocketbase
# /pb_hooks
# /pb_migrations
# /pb_public



FROM scratch

EXPOSE 8090


#   copy from the previous stage (downloader) to the current stage (scratch) path on previous stage /pocketbase to current stage /usr/local/bin/pocketbase

COPY --from=downloader /pocketbase /usr/local/bin/pocketbase  
COPY --from=downloader /pb_hooks /pb_hooks
COPY --from=downloader /pb_migrations /pb_migrations
COPY --from=downloader /pb_public /pb_public

CMD ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=/pb_data", "--publicDir=/pb_public", "--hooksDir=/pb_hooks", "--migrationsDir=/pb_migrations"]
