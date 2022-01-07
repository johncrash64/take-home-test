const { Router } = require('express');
const { GitHubService } = require('./services');

const router = Router();

const { handleErrors, validateParams } = require('../services/_utils');

const { LoggerHelper } = require('../services/logging');
const logger = LoggerHelper.getLoggerFor(LoggerHelper.API_GITHUB_LOG).child({ subm: 'routes' });

router.get('/v1/github', async (req, res) => {
    try {
        (validateParams(req.query, ['api', 'owner', 'repo', 'per_page', 'page'])) ? null : handleErrors('Some required queryParams not found', res);
        
        const gitService = new GitHubService();
        return res.json(await gitService.getGitObject({ ...req.query }));
    } catch (error) {
        logger.error(error);
        handleErrors(error, res);
    }
});

module.exports = router;