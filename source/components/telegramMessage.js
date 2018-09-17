'use strict'
;(function() {
  class TelegramMessage extends HTMLElement {
    constructor() {
      super()

      // attaches shadow tree and returns shadow root reference
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
      const shadow = this.attachShadow({ mode: 'open' })

      // creating a container for the editable-list component
      const telegramMessageContainer = document.createElement('div')

      // adding a class to our container for the sake of clarity
      telegramMessageContainer.classList.add('telegram-message')

      // creating the inner HTML of the editable list element
      telegramMessageContainer.innerHTML = `
        <style>
          .telegram-message {
            display: inline-block;
            clear: none !important;
          }
          .telegram-message .content > div {
            clear: none !important;
          }
          .telegram-message .indigo5 {
            color: #5c7bfa;
          }
          .telegram-message .svg-inline--fa {
            display: inline-block;
            font-size: inherit;
            height: 1em;
            overflow: visible;
            vertical-align: -0.125em;
          }
          .telegram-message .svg-inline--fa.fa-w-16 {
            width: 1em;
          }
          .telegram-message svg:not(:root).svg-inline--fa {
            overflow: visible;
          }
          .telegram-message .pa3 {
            padding: 1rem;
          }
          .telegram-message .indigo5 {
            color: #5c7bfa;
          }
          .telegram-message .bg-white {
            background-color: #fff;
          }
          .telegram-message .pa3 {
            padding: 1rem;
          }
          .telegram-message .bg-white-90 {
            background-color: rgba(255, 255, 255, 0.9);
          }
          .telegram-message .black-70 {
            color: rgba(0, 0, 0, 0.7);
          }
          .telegram-message .justify-center {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
          .telegram-message .flex-column {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .telegram-message .flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .telegram-message .br--right {
            padding-left: 0px;
            border-top-left-radius: 0 !important;
            border-bottom-left-radius: 0 !important;
          }
          .telegram-message .br3 {
            border-radius: 0.5rem;
          }
          .telegram-message .f4 {
            font-size: 1.25rem;
          }
          .telegram-message .mv0 {
            margin-top: 0;
            margin-bottom: 0;
          }
          .telegram-message .lh-copy {
            line-height: 1.5;
          }
          .telegram-message .fw6 {
            font-weight: 600;
          }
          .telegram-message .underline {
            text-decoration: underline;
          }
          .telegram-message .indigo5 {
            color: #5c7bfa;
          }
          .telegram-message .link {
            text-decoration: none;
            -webkit-transition: all 0.1s ease-in;
            transition: all 0.1s ease-in;
          }
          .telegram-message .justify-center {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
          .telegram-message .items-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .telegram-message .flex-column {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .telegram-message .flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .telegram-message .br--left {
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
          }
          .telegram-message .br3 {
            border-radius: 0.5rem;
          }
          .telegram-message .items-stretch {
            -webkit-box-align: stretch;
            -ms-flex-align: stretch;
            align-items: stretch;
          }
          .telegram-message .flex-nowrap {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
          }
          .telegram-message .flex-row {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
          }
          .telegram-message .flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .telegram-message .w-100 {
            width: 100%;
          }
          .telegram-message .h-100 {
            height: 100%;
          }
          .telegram-message .justify-center {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
          }
          .telegram-message .items-center {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
          .telegram-message .flex-column {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
          .telegram-message .flex {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }
          .telegram-message .pa6 {
            padding: 0.5rem;
          }
          
          .telegram-message .relative {
            position: relative;
          }
          .telegram-message .overflow-hidden {
            overflow: hidden;
          }
          .telegram-message .h-100 {
            height: 100%;
          }
          .telegram-message .br2 {
            border-radius: 0.25rem;
          }
          .telegram-message .shadow-3 {
            -webkit-box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
            box-shadow: 0 0.25rem 0.125rem 0 rgba(0, 0, 0, 0.1);
          }
          .telegram-message .br3 {
            border-radius: 0.5rem;
          }
          .telegram-message .gray7 {
            color: #484f56;
          }
          .telegram-message .fa-3x {
            font-size: 2em;
          }
          @media screen and (min-width: 60em) {
            .telegram-message html {
              font-size: 16px;
            }
          }
          @media screen and (min-width: 30em) {
            .telegram-message html {
              font-size: 16px;
            }
          }
        </style>
        <div class="relative h-100 br2 pa6 overflow-hidden">
          <div class="h-100 flex flex-column">
            <div class="flex flex-row flex-nowrap shadow-3 br3">
              <div class="br3 br--left pa3 flex flex-column justify-center bg-white-90 black-70">
                <p class="mv0 lh-copy fw6 target">
                  <slot name="message">My default text</slot>
                </p>
              </div>
              <div class="br3 br--right bg-white pa3 flex flex-column indigo5">
                <svg aria-hidden="true" data-prefix="fab" data-icon="telegram" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512" class="svg-inline--fa fa-telegram fa-w-16 fa-3x">
                  <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      `

      // appending the container to the shadow DOM
      shadow.appendChild(telegramMessageContainer)
    }
  }

  // let the browser know about the custom element
  customElements.define('telegram-message', TelegramMessage)
})()
