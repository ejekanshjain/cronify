export default {
    log: (msg: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => {
        console.log(JSON.stringify({ level: 'log', date: new Date().toISOString(), msg, arg1, arg2, arg3, arg4, arg5 }))
    },
    error: (msg: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any) => {
        console.error('\x1b[31m%s\x1b[0m', JSON.stringify({ level: 'error', date: new Date().toISOString(), msg, arg1, arg2, arg3, arg4, arg5 }))
    }
}
