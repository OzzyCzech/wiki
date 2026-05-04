---
title: How to build a Docker image with sSMTP and Amazon SES
description: How to configure sSMTP in a Docker container to send email via Amazon SES.
created: 2024-04-19
updated: 2026-04-06
sidebar:
  label: Amazon SES and sSMTP
---

## What is sSMTP?

SSMTP is a simple MTA (Mail Transfer Agent) that can be used to send email from a command line.
It is not a full-fledged MTA like Postfix or Sendmail, but it is good enough for sending email
notifications from your Docker containers.

## What is Amazon SES (Simple Email Service)?

Amazon SES is a cloud-based email sending service that allows you to send email
without having to maintain your own email servers.

## Configuring sSMTP with Amazon SES

To use sSMTP with Amazon SES, you need to configure it to use Amazon's SMTP server.

1. Log in to [your AWS account](https://aws.amazon.com/).
2. Sign up for the [Amazon SES service](https://docs.aws.amazon.com/ses/latest/dg/Welcome.html).
3. [Pre-verify any email addresses](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html)
   you intend to use for testing on Amazon SES. You must **verify both your sender and
   recipient email addresses**, or your message will be rejected.
4. Once you've confirmed the basic email service is working, request access to Amazon SES for
   sending emails by [moving out of the sandbox](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html).

Use the Amazon SES console to create new [Amazon SES SMTP credentials](https://docs.aws.amazon.com/ses/latest/dg/smtp-credentials.html#smtp-credentials-console).
Then you have to put credentials into your sSMTP configuration file.

Let's create a `ssmtp.conf` file with the following content:

```text
root=root@example.com
mailhub=email-smtp.eu-central-1.amazonaws.com:465
AuthUser=[ Amazon SES SMTP username ]
AuthPass=[ Amazon SES SMTP password ]
UseTLS=YES
AuthMethod=LOGIN
FromLineOverride=YES

```

The last line in `ssmtp.conf` must be kept empty! Let's test our config in Docker.

## Prepare Dockerfile

To add sSMTP to your Docker container, you can use the following `Dockerfile`:

```dockerfile
FROM alpine:latest

RUN apk --update --no-cache add ssmtp mailx

COPY --chown=root:mail --chmod=0640 ssmtp.conf /etc/ssmtp/ssmtp.conf
```

There are only `sSMTP` and `mailx` packages inside the image. Command `COPY` will copy the `ssmtp.conf` file to the `/etc/ssmtp/ssmtp.conf` path.
Build the image with the following command:

```shell
docker build . -t ssmtp
```

You can test the image and run it with interactive mode:

```shell
docker run -it --rm ssmtp
```

Amazon provides a [mailbox simulator](https://docs.aws.amazon.com/ses/latest/dg/send-an-email-from-console.html):

```shell
ssmtp -v success@simulator.amazonses.com << EMAIL
To: success@simulator.amazonses.com
From: verified@email.com
Subject: Testing email

Hi there this is a test email from sSMTP

EMAIL
```

but you can use any email address, for example, with `sendmail`:

```shell
sendmail -t << EMAIL
To:example@email.com
From:verified@email.com
Subject: Test

This is a test mail.
EMAIL
```

Check your email. Congratulations! You have successfully configured sSMTP with Amazon SES in Docker.
