const { Octokit }  = require('@octokit/rest');

const octokit = new Octokit({ auth: '06f9528bb9427845eb3ee68232b170dc08e5202b' });
const owner = process.env.CIRCLE_PROJECT_USERNAME; // patternfly
const repo = process.env.CIRCLE_PROJECT_REPONAME;
const prnum = process.env.CIRCLE_PR_NUMBER;

octokit.issues
  .listComments({
    owner,
    repo,
    issue_number: prnum
  })
  .then(res => res.data)
  .then(comments => {
    let commentBody = '';
    const existingComment = comments.find(comment => comment.user.login === 'patternfly-build');
    if (existingComment) {
      console.log("Grab existing comment data \n");
      commentBody += existingComment.body;
    }

    console.log("Added report to data \n");
    commentBody += '\n';
    commentBody += 'hello world';

    if (existingComment) {
      octokit.issues
        .updateComment({
          owner,
          repo,
          comment_id: existingComment.id,
          body: commentBody
        })
        .then(() => console.log('Updated comment'));
    } else {
      octokit.issues
        .createComment({
              owner,
              repo,
              issue_number: prnum,
              body: commentBody
            })
            .then(() => console.log('Created comment'));
        }
      });