---
title: Clone git repository with Docker
description: How to clone a private Git repository inside Docker using SSH deploy keys.
created: 2024-03-27
updated: 2026-04-06
sidebar:
  label: Clone git with Docker
---

There are many ways to use Git with Docker, but this guide focuses
on using **SSH Deploy keys** to clone a repository from GitLab or GitHub.
as easily as possible.

I know there are many ways to do this, but I want to
show you a simple way to do it.

## Deploy keys

Deploy keys are used to give read-only access to a repository.
Generate an entirely new SSH key pair for the deployment:

```shell
ssh-keygen -t ed25519 -C "deploy@gitlab.com" -P "" -f .ssh/id_ed25519
```

This command will generate a new SSH key pair without passphrase.
Then you have to add the public key to the [GitLab](https://docs.gitlab.com/ee/user/project/deploy_keys/)
or [GitHub](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/managing-deploy-keys)

After adding the public key to the repository, you can test the connection:

```shell
ssh -o "IdentitiesOnly=yes" -i .ssh/id_ed25519 -Tvvv git@gitlab.com
```

## Dockerfile

Create a `Dockerfile` with the following content:

```dockerfile
FROM alpine/git:latest

# Copy generated key pair to the container
COPY --chown=root:root .ssh /root/.ssh

RUN ssh-keyscan gitlab.com >> /root/.ssh/known_hosts \
  && chown -R root:root /root/.ssh \
  && chmod 700 /root/.ssh \
  && chmod 600 /root/.ssh/*

# Copy bin folder
COPY entrypoint /usr/local/bin/entrypoint

# App source code
WORKDIR /app
VOLUME /app

ENTRYPOINT ["entrypoint"]
```

Let's have a repository `git@gitlab.com:your/app.git` them your `entrypoint` file should look like this:

```shell
#!/usr/bin/env sh

# repository does not exist, clone it
if [ ! -d .git ]; then
  git clone git@gitlab.com:your/app.git --branch main --single-branch /app || exit 31
fi

# Update the repository
git fetch origin main || exit 32
git switch main   || exit 33
git reset --hard origin/main || exit 34

# Clean up content except node_modules, vendor and .cache
git clean -dfx --exclude node_modules --exclude vendor --exclude .cache || exit 35

# Update submodules
git submodule sync || exit 36
git submodule update --init --force || exit 37
echo "【ツ】Source code was updated!"
```

We can easily build `git` container using the `compose.yml` file:

```yaml
services:
  git:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./source:/app
```

Run the following command to build the image and start the container:

```shell
docker compose up --build
```

Your repository will be cloned to the `source` folder.
