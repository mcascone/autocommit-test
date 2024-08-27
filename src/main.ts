import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';

async function run(): Promise<void> {
  try {
    const readmePath = './README.md';
    if (fs.existsSync(readmePath)) {
      core.info('README.md is 100');
    } else {
      core.setFailed('README.md does not exist');
    }
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`);
  }
}

run();
