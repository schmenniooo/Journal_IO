terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.99.1"
    }
    awscc = {
      source  = "hashicorp/awscc"
      version = "1.43.0"
    }
  }
}

provider "aws" {
  // secrets will be set by the github workflow of a specific IAM-user
  // To plan config locally configure aws cli with the appropriate credentials
  region     = "eu-central-1"
  access_key = var.access_key
  secret_key = var.secret_key
}

resource "aws_amplify_app" "Journal_IO_App" {
  name = "journal_io_app"
  repository = "https://github.com/schmenniooo/Journal_IO"
  oauth_token = var.gh_token
}

resource "aws_amplify_branch" "main_branch" {
  app_id = aws_amplify_app.Journal_IO_App.id
  branch_name = "main"
}

resource "aws_amplify_domain_association" "app_domain" {
  app_id      = aws_amplify_app.Journal_IO_App.id
  domain_name = awscc_route53_hosted_zone.domain.name

  sub_domain {
    branch_name = "main"
    prefix      = "prod"
  }
}

resource "awscc_route53_hosted_zone" "domain" {
  name = "journal.io"
}
