const EventEmitter = require('events')

// const emitter = new EventEmitter()
//
// emitter.on('anything', (data) => {
//     console.log('ON: anything', data)
// })
//
// emitter.emit('anything', {test: 'first'})
// emitter.emit('anything', {test: 'second'})
//
// setTimeout(() => {
//     emitter.emit('anything', {test: 'third'})
// }, 1000)

class Dispatcher extends EventEmitter{
    subscribe(eventName, callBack){
        console.log('[Subscribe...]')
        this.on(eventName, callBack)
    }

    dispatch(eventName, data){
        console.log('[Dispatching...]')
        this.emit(eventName, data)
        console.log('[End dispatching...]')
    }
}

const dis = new Dispatcher()
dis.subscribe('Event №1', (data) => {
    console.log('ON: Event №1', data)
})
dis.dispatch('Event №1', {testName: 'first'})