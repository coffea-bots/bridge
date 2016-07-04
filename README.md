# bridge

_cross-protocol message relay bot made with [coffea](https://github.com/caffeinery/coffea)_


## Setup

```
git clone https://github.com/coffea-bots/bridge
cd bridge
npm install
```

## Example: Telegram <-> IRC bridge

Create `config.json` with the connection and bridge data:

```
{
  "instances": {
    "telegram": {
      "protocol": "telegram",
      "token": "PUT_TELEGRAM_TOKEN_FROM_BOTFATHER_HERE"
    },
    "irc": {
      "protocol": "irc",
      "network": "irc.6697.eu",
      "nick": "bridge",
      "channels": [ "#lounge" ]
    }
  },
  "bridges": [
    [
      { "instance": "telegram", "chat": "PUT_TELEGRAM_CHAT_ID_HERE" },
      { "instance": "irc", "chat": "#lounge" }
    ]
  ]
}
```

Then install the `coffea-telegram` and `coffea-irc` protocols:

```
npm install coffea-telegram coffea-irc
```


## Running

Use this for production use:

```
npm start
```

During development, you can also use:

```
npm run start:dev
```

To enable debug messages and run the code with on-the-fly compilation
(via `babel-node`).

Or you can use:

```
npm run watch
```

To automatically restart the bot when the code changes.
