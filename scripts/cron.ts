import shell from 'shelljs'
import cron from 'cron'

const job = new cron.CronJob(
	'0 0 * * * *',
	() => {
		try {
			shell.exec(`npm run update`)
			console.log('cron task running')
		} catch (e) {
			console.log(e)
		}
	},
	null,
	true,
	'Asia/Kuala_Lumpur'
)

job.start()
