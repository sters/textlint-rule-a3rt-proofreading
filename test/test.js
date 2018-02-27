
import rule from '../src/proofreading';

const TextLintTester = require('textlint-tester');

const tester = new TextLintTester();


tester.run('proofreading', rule, {
    valid: [
        'システムの企画から開発・運用まで幅広く関われます。',
    ],
    invalid: [
        {
            text: 'システムの規格から開発・運用まD幅広く関われます。',
            errors: [
                {
                    message: 'Suggest: \'規\' => \'企,価,資\'',
                    line: 1,
                    column: 6,
                },
                {
                    message: 'Suggest: \'格\' => \'画,定,模\'',
                    line: 1,
                    column: 7,
                },
                {
                    message: 'Suggest: \'D\' => \'で,が,と\'',
                    line: 1,
                    column: 16,
                },
            ],
        },
    ],
});
