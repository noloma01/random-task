const cron = require('node-cron');
const notifier = require('node-notifier')

async function main() {
    cron.schedule('15 * * * * *', async () => {
        notifier.notify({
            title: 'Nueva notificación',
            message: `Esta es una notificación de prueba`
        })
    })
}

main();
