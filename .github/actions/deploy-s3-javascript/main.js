// It's important to not ignore the node_modules folder when creating Custom JavaScript Actions.
// Our Custom JavaScript Actions must include all the code and all the dependencies that are required
// to run this action successfully. GitHub Actions will not download and install dependencies when it
// encounters a Custom JavaScript Action. Instead it expects that all the code is available that's
// needed to run this Custom JavaScript Action code and that includes the code for third-party actions.

const core = require("@actions/core");
// const github = require("@actions/github");
const exec = require("@actions/exec");

const run = () => {
  // 1) Get some input values
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", { required: true }); // required is true because we need here and we have a default value
  const distFolder = core.getInput("dist-folder", { required: true });

  // github.getOctokit() // This is a tool that can help sending REST requests to the GitHub API
  // github.context.workflow // We can have access to some values of the GitHub Actions Context

  // 2) Upload files
  // We have AWS CLI pre-installed in the ubuntu-latest:
  const s3Uri = `s3://${bucket}` 
  // The command below will look for the env variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY to authenticate
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`)

  core.notice("Hello from my custom JavaScript Action!");
};

run();
