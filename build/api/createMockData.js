'use strict';
/* eslint-disable no-console */

var chalk = require('chalk');
var fs = require('fs');
var jsf = require('json-schema-faker');

var schema = {
    type: 'object',
    properties: {
        tasks: {
            type: 'array',
            minItems: 3,
            maxItems: 5,
            items: {
                type: 'object',
                required: ['id', 'priority', 'status', 'category', 'title', 'description', 'created', 'lastUpdated'],
                properties: {
                    id: {
                        type: 'integer',
                        unique: true,
                        minimum: 1
                    },
                    priority: {
                        type: 'string',
                        pattern: 'High|Medium|Low'
                    },
                    status: {
                        type: 'string',
                        pattern: 'New|In Progress|Done|Canceled'
                    },
                    category: {
                        type: 'string',
                        pattern: 'Home|Work|Other'
                    },
                    title: {
                        type: 'string',
                        maxLength: 80
                    },
                    description: {
                        type: 'string',
                        minLength: 100,
                        maxLength: 4000
                    },
                    created: {
                        type: 'string',
                        format: 'date-time'
                    },
                    lastUpdated: {
                        type: 'string',
                        format: 'date-time'
                    }
                }
            } 
        }
    }
};

var json = JSON.stringify(jsf(schema));

fs.writeFile('./build/api/db.json', json, function(err) {
    if(err) {
        return console.log(chalk.red(err));
    } else {
        return console.log(chalk.green("Mock data created"));
    }
});