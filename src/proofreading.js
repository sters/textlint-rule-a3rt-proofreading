/* eslint-disable no-unused-vars */

const axios = require('axios');

const API_URL = 'https://api.a3rt.recruit-tech.co.jp/proofreading/v2/typo';

export default function (context, options) {
    const apikey = options.apikey || process.env.A3RT_APIKEY || '';
    if (!apikey) {
        throw new Error('A3RT apikey is not set.');
    }

    const sensitivity = options.sensitivity || '';
    if (sensitivity !== '' && !sensitivity.match(/^(low|medium|high)$/)) {
        throw new Error('A3RT sensitivity is low|medium|high');
    }

    const scoreThreshold = parseFloat(options.score_threshold || 0);
    const outputScore = options.output_score === 'true' ? true : false;

    return {
        [context.Syntax.Paragraph](node) {
            const sentence = context.getSource(node);

            return new Promise((resolve, reject) => {
                // call a3rt api
                axios.get(API_URL, {
                    params: {
                        apikey,
                        sentence,
                    },
                }).then((response) => {
                    if (response.data.alerts) {
                        response.data.alerts.forEach((alert) => {
                            if (alert.score > scoreThreshold) {
                                let message = `Suggest: '${alert.word}' => '${alert.suggestions}'`;
                                if (outputScore) {
                                    message += `(score:${alert.score})`;
                                }

                                context.report(
                                    node,
                                    new context.RuleError(
                                        message,
                                        {
                                            index: alert.pos,
                                        },
                                    ),
                                );
                            }
                        });
                    }

                    resolve();
                }).catch((error) => {
                    reject(error);
                });
            });
        },
    };
}
