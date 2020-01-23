#!/bin/bash
USERNAME=${CIRCLE_PROJECT_USERNAME}
REPONAME=${CIRCLE_PROJECT_REPONAME}
PR_NUM=${CIRCLE_PR_NUMBER}
PR_BRANCH=${CIRCLE_BRANCH}

mkdir -p public

if [ -f "./coverage/report.html" ]; then
  cp coverage/report.html public/a11y-report.html
fi

if [ -d "./allure-report" ]; then
  cp -r allure-report public/allure-report
fi

if [ -n "${PR_NUM}" ] # Build is a PR
then
  # Domain names follow the RFC1123 spec [a-Z] [0-9] [-] limited to 253 characters
  # https://en.wikipedia.org/wiki/Domain_Name_System#Domain_name_syntax
  # So, just replace "/" or "." with "-"
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-${PR_NUM}" | tr '[\/|\.]' '-' | cut -c1-200`
else # Build is a branch off master
  DEPLOY_SUBDOMAIN=`echo "${REPONAME}-pr-${PR_BRANCH}" | tr '[\/|\.]' '-' | cut -c1-200`
fi

if [ "${PR_BRANCH}" = "master" ]
then
  # Use CNAME
  npm run surge --project public
else
  ALREADY_DEPLOYED=`npx surge list | grep ${DEPLOY_SUBDOMAIN}`
  DEPLOY_DOMAIN="https://${DEPLOY_SUBDOMAIN}.surge.sh"
  npm run surge --project public --domain $DEPLOY_DOMAIN
fi


if [ -n "${PR_NUM}" ] && [ -z "${ALREADY_DEPLOYED}" ] # Leave a Github comment
then
  # Use Issues api instead of PR api because
  # PR api requires comments be made on specific files of specific commits
  GITHUB_PR_COMMENTS="https://api.github.com/repos/${USERNAME}/${REPONAME}/issues/${PR_NUM}/comments"
  echo "Adding github PR comment ${GITHUB_PR_COMMENTS}"
  PR_COMMENT='{"body":"
    Preview: '${DEPLOY_DOMAIN}'
    Snapshot report: '${DEPLOY_DOMAIN}'/allure-report.html
    A11y report: '${DEPLOY_DOMAIN}'/a11y-report.html
  "}'
  curl -H "Authorization: token ${GH_PR_TOKEN}" --request POST ${GITHUB_PR_COMMENTS} --data ${PR_COMMENT}
else
  echo "Already deployed ${DEPLOY_DOMAIN}"
fi
