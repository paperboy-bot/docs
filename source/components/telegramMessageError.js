'use strict'
;(function() {
  class TelegramMessageError extends HTMLElement {
    constructor() {
      super()

      // attaches shadow tree and returns shadow root reference
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
      const shadow = this.attachShadow({ mode: 'open' })

      // creating a container for the editable-list component
      const telegramMessageErrorContainer = document.createElement('div')

      // adding a class to our container for the sake of clarity
      telegramMessageErrorContainer.classList.add('telegram-message')

      // creating the inner HTML of the editable list element
      telegramMessageErrorContainer.innerHTML = `
        <style>
          .telegram-message {
            display: inline-block;
            clear: none !important;
          }
          .telegram-message .content > div {
            clear: none !important;
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
          .telegram-message .red {

            color: red;
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
              <div class="br3 br--right bg-white pa3 flex flex-column justify-center red fa-3x">
                <svg aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="svg-inline--fa fa-times fa-w-11 fa-5x"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg>
              </div>
            </div>
          </div>
        </div>
      `

      // appending the container to the shadow DOM
      shadow.appendChild(telegramMessageErrorContainer)
    }
  }

  // let the browser know about the custom element
  customElements.define('telegram-message-error', TelegramMessageError)
})()
