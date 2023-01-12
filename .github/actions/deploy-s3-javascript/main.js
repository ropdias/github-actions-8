// It's important to not ignore the node_modules folder when creating Custom JavaScript Actions.
// Our Custom JavaScript Actions must include all the code and all the dependencies that are required
// to run this action successfully. GitHub Actions will not download and install dependencies when it 
// encounters a Custom JavaScript Action. Instead it expects that all the code is available that's 
// needed to run this Custom JavaScript Action code and that includes the code for third-party actions.

const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

const run = () => {
  core.notice("Hello from my custom JavaScript Action!");
};

run();
