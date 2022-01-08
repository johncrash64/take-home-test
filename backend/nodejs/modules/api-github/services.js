const { LoggerHelper } = require('../services/logging');
const { flattenObject, successResponse } = require('../services/_utils');
const { Octokit } = require("@octokit/core");
const logger = LoggerHelper.getLoggerFor(LoggerHelper.API_GITHUB_LOG).child({ subm: 'services' });

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo

class GitHubService {
    /**
     * Creates a new GitHub Octokit instance.
    */
    constructor() {
        this.octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN,
            userAgent: process.env.GITHUB_USER_AGENT,
            previews: ["shadow-cat"],
        });
    }

    async getGitObject({ api, owner, repo, per_page, page }) {
        try {
            const response = await this.octokit.request(`GET /repos/{owner}/{repo}/${api}`, {
                owner, repo, per_page, page,
            });
            if (response && response.status === 200 && response.data) {

                const _result = response.data.map(entity => {
                    return flattenObject(entity);
                });

                return await successResponse(response.data, `These are the ${api}`);
            } else {
                return [];
            }
        } catch (err) {
            logger.error(err);
            throw err;
        }
    }
}


module.exports = {
    GitHubService
};