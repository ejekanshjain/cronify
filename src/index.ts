import { join } from 'path'
import { forEach } from 'async'
import cron from 'node-cron'
import config from './config'
import logify from './logify'

const main = async () => {
    const jobs = Object.entries(config.jobs)
    const invalidJobs: any[] = []
    const validJobs: any[] = []
    await forEach(jobs, async ([jobName, jobSchedule]) => {
        let job
        try {
            job = await import(join(__dirname, 'jobs', jobName))
        } catch (err) {
        }
        if (job && job.default && typeof job.default === 'function' && cron.validate(jobSchedule)) {
            validJobs.push({ name: jobName, schedule: jobSchedule, fn: job.default })
        } else {
            invalidJobs.push({ name: jobName, schedule: jobSchedule })
        }
    })
    if (invalidJobs.length) {
        logify.error('Invalid Jobs', invalidJobs)
        process.exit(1)
    } else {
        validJobs.forEach(job => {
            logify.log('Cron Job Scheduled', job.name, job.schedule)
            cron.schedule(job.schedule, job.fn)
        })
    }
}

main()
