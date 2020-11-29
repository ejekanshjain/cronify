import dotenv from 'dotenv'

const NODE_ENV = process.env.NODE_ENV ?? 'development'

if (NODE_ENV !== 'development') {
    dotenv.config()
}

export default {
    NODE_ENV,
    jobs: {
        helloWorld: '* * * * *'
    }
}
