import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude('bot')

import { version } from '../package.json'
info(`coffea-starter bot v${version} starting`)

import { instances, bridges } from '../config.json'

import { connect, message } from 'coffea'
const networks = connect(instances)

console.log(networks)

// --

networks.on('message', (evt, reply) => {
  log('Received message event: %o', evt)
})

networks.on('command', (evt, reply) => {
  log('Received command event: %o', evt)

  switch (evt.cmd) {
    case 'say':
      reply(message(evt.channel, evt.args.join(' ')))
      break
  }
})
