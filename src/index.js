import dude from 'debug-dude'
const { /*debug,*/ log, info /*, warn, error*/ } = dude('bot')

import { version } from '../package.json'
info(`coffea-starter bot v${version} starting`)

import { instances, bridges } from '../config.json'

import { connect, message } from 'coffea'
const networks = connect(instances)

const sendToAll = (evt) => (bridge) => bridge.map((node) => {
  if (evt.network !== node.instance) { // don't relay back to original network
    networks[node.instance].send({
      ...evt,
      chat: node.chat
    })
  }
})

networks.on('message', (evt, reply) => {
  log('received message event: %o', evt)
  const activeBridges = bridges.filter(
    (bridge) => bridge.reduce((res, node) => {
      if (res) return true
      else return node.instance == evt.network && node.chat == evt.chat
    }, false)
  )
  log('detected bridges: %o', activeBridges)
  activeBridges.map(sendToAll(evt))
})
