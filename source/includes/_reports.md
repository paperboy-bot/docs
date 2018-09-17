<script type="text/javascript" src="../components/telegramMessage.js"></script>
<script type="text/javascript" src="../components/telegramMessageError.js"></script>

# Reports

Reports are little bits of code that do some useful work and render a message that I can deliver to my users.

There are two ways that I can send a report:

1. Slash commands are delivered immediately
2. Scheduled reports are delivered at regular intervals
   - Scheduling is a powerful way to receive reports at consistent intervals

## Slash Commands

I recognize the /price slash command so I'll deliver this report right away.

<telegram-message>
  <span slot="message">/price btc</span>
</telegram-message>

You can list all your available report slash commands with /FILL_THIS_IN

## Scheduling

You can schedule reports at regular intervals with the /schedule command.

```shell
# the schedule command has the following stucture
/schedule <report-name> <interval>
```

I use <a href="http://bunkat.github.io/later/parsers.html#text" target="_blank" rel="noopener noreferrer">Later</a> internally, so `<interval>` can be anything that later can interpret.

You can schedule a report for the bitcoin price every fifteen minutes.

<telegram-message>
  <span slot="message">/schedule price btc every 15 minutes</span>
</telegram-message>

If your `<interval>` is shorter than fifteen minutes, I won't deliver the report. Even robots need to rest sometimes!

<telegram-message-error>
  <span slot="message">/schedule price btc every 5 minutes</span>
</telegram-message-error>

Here's a bunch of fancier schedules you can make.

<telegram-message>
  <span slot="message">/schedule price btc on the first day of the week</span>
</telegram-message>

<telegram-message>
  <span slot="message">/schedule price btc on the last day of the month</span>
</telegram-message>

<telegram-message>
  <span slot="message">/schedule price btc on the 15th through 20th day of the month</span>
</telegram-message>

<telegram-message>
  <span slot="message">/schedule price btc every 15 mins every weekend</span>
</telegram-message>

## Create a report

If you know Javascript, you can create your own report that I will deliver to my users.

Reports can be conceptualized as two general stages.

1. Processing
   - comprises all data fetching and processing
2. Rendering
   - templates processed data so humans can understand it

You can see how a simple Coin Volume report works below.

> The processing stage is done in `./index`.

```javascript
// ./index.js

const facebookTemplate = require('./templates/facebook')
const telegramTemplate = require('./templates/telegram')
const coinmarketcapService = require('./services/coinmarketcap')

module.exports = {
  name: 'Coin Volume Report',
  run: async options => {
    const coin = await coinmarketcapService.getCoin(options.args[0])

    const symbol = coin.symbol
    const volume = +coin['24HVolumeUsd']

    const template =
      options.platform === 'telegram' ? telegramTemplate : facebookTemplate

    return template(Object.assign({}, options, { data: { volume, symbol } }))
  },
}
```

> The rendering stage is done in `./templates/*` files.

```javascript
// ./templates/facebook.js

const _ = require('lodash')
const numeral = require('numeral')
const { telegramTemplate } = require('claudia-bot-builder')

module.exports = options => {
  const formattedVolume = numeral(options.data.volume).format('0.0a')

  return [
    new telegramTemplate.Text(
      `${options.data.symbol} Volume: ${formattedVolume}/1day`
    )
      .addInlineKeyboard([
        [
          {
            text: `More ${_.startCase(options.args[0])} Info`,
            callback_data: 'SUMMARY',
          },
        ],
      ])
      .get(),
  ]
}
```

<br />
<br />
<br />
<br />
<br />
<br />
<br />

### Run function

`(options) => template(options)`

The entry point of a report that is called with an options argument and calls a `facebook` or `telegram` template function

#### Options argument

| Parameter | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| platform  | string | The platform of the user ('facebook' or 'telegram') |
| args      | array  | The coin being requested (TODO ADD COIN LIST)       |

<br />
<br />
<br />

I'm built with <a href="https://github.com/claudiajs/claudia-bot-builder" target="_blank" rel="noopener noreferrer">Claudia Bot Builder</a> so my template functions use its <a href="https://github.com/claudiajs/claudia-bot-builder/blob/master/docs/FB_TEMPLATE_MESSAGE_BUILDER.md" target="_blank" rel="noopener noreferrer">Facebook</a> and <a href="https://github.com/claudiajs/claudia-bot-builder/blob/master/docs/TELEGRAM_CUSTOM_MESSAGES.md" target="_blank" rel="noopener noreferrer">Telegram</a> API's.

<br />

Once you have created and tested your report, send a message to TODO EMAIL ADDRESS. My engineers will invite you open a pull request to our Reports repository on Github. After your report passes code review, they'll add it to the list of available reports and I'll be able to deliver it to anyone!
