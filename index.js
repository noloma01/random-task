const cron = require('node-cron');
const notifier = require('node-notifier')
const tasks = require('./tasks.json')

async function main() {
    const sec = getRandomInit(1, 59);
    const min = getRandomInit(15, 25);
    console.log(`The notifications will appear every ${min} minutes and ${sec} seconds`)
    // console.log(`${sec} ${min} * * * *`)
    // console.log(`${tasks[taskIndex].title}`)
    // console.log(`${tasks[taskIndex].description}`)
    // cron.schedule(`${sec} ${min} * * * *`, async () => {
    cron.schedule(`20 * * * * *`, async () => {
        const taskIndex = getRandomInit(1,3);
        notifier.notify({
            title: `${tasks[taskIndex].title}`,
            message: `${tasks[taskIndex].description}`,
            sound: 'Glass',
            timeout: 60,
            reply:true,
            wait: true
        },
            function (error, response, metadata) {
                console.log(response, metadata);
            })
        notifier.on('click', function (notifierObject, options, event) {
            console.log('click notification')
        });
        notifier.on('timeout', function (notifierObject, options) {
            console.log('timeout notification')
        });
    })
}

const getRandomInit = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

main();
